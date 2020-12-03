# Avaamo Assignment

This is the test assignment provided by `Jayanth Babu` for me from [Avaamo](https://avaamo.ai/)


# About this test

we need to get text data from [This url](​http://norvig.com/big.txt).  read the text and get top 10 words with the occurance in desending order. then with [Yandex Api](​https://tech.yandex.com/dictionary/doc/dg/reference/lookup-docpage/) we have get POS and Synonyms and show result in jason

# What i have done

First i have tried to show using just nodejs but as in terminal we cant show proper response so i am using express js server.

# Technology stack userd

- node js
- express js
- axios
- yarn (package manager)
- babel for compiling es6 and beyong code for nodejs


# How to use

make sure nodejs and yarn is installed on your system

```bash
node -v  
npm -v
```

## install yarn

```bash
sudo npm install -g yarn
```

## Install packages


```bash
 yarn
```

## Run dev server


```bash
 yarn dev
```


## Run production server


```bash
 yarn start
```


for more information see [package.json](./package.json)  or see following sripts

```json
  "scripts": {
    "clean": "rimraf dist",
    "build:babel": "NODE_ENV=production babel src --out-dir dist --extensions .js --source-maps inline",
    "build": "yarn run clean && yarn run build:babel",
    "start": "yarn run build && node dist/index.js",
    "dev": " NODE_ENV=development nodemon --watch src -e js --exec babel-node ./src/index.js"
  }

```

  #  PS

  Response time is around 3-8 ms as this is assigment so i havent put all effort. Thanks