import axios from 'axios';

export const getData = async () => {
    const url = 'http://norvig.com/big.txt';
    const response = await axios.get(url);
    const data = response.data;
    return data;
};

export const yandex = async word => {
    const url = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup';
    const response = await axios.get(url, {
        params: {
            key:
                'dict.1.1.20170610T055246Z.0f11bdc42e7b693a.eefbde961e10106a4efa7d852287caa49ecc68cf',
            lang: 'en-ru',
            text: word,
        },
    });
    const def = response.data.def;

    return def;
};
