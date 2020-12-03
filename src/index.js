import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { splitWords, countWords, sortByCount } from './helper/parser';
import { getData, yandex } from './helper/data';

// Create Express server
const app = express();
const port = process.env.PORT || '5000';
const host = process.env.HOST || 'localhost';
app.set('port', port);
app.disable('x-powered-by');

// apply middlewares
app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cors(),
    helmet(),
    morgan('dev')
);

// error handling for non exsistent routes
app.get('/', async (req, res) => {
    try {
        let result = [];
        const data = await getData();
        const wordsArray = splitWords(data);
        const wordsCountArray = countWords(wordsArray);
        const sortedArray = sortByCount(wordsCountArray);
        const top10 = sortedArray.slice(0, 10);
        for (const element of top10) {
            const dictionary = await yandex(element.word);
            result.push({
                word: element.word,
                occurance: element.occurance,
                dictionary,
            });
        }

        res.status(200).json(result);
    } catch (error) {}
});

app.listen(port, () => {
    console.log(`Listening on port:: ${host}:${port}`);
});
