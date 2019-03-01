// import express from 'express';
// import { readdir } from 'fs';

const express = require('express');
const promisify = require('util').promisify;
const readdir = promisify(require('fs').readdir);


const app = express();
const port = 3003;

const folder = '/home/alex/dev/test/storybook-addon-storyshot-view/example/__image_snapshots__';
const folderDiff = `${folder}/__diff_output__`;
const prefixFile = 'storyshots-test-js-image-storyshots-';
const suffixFile = '-1-diff.png';

app.get('/', async (req, res) => {
    const tests = await readdir(folder);
    const diff = await readdir(folderDiff);
    res.json({
        tests,
        diff
    });
});

app.get('/diff/:kind/:story', async (req, res) => {
    const file = `${req.params.kind}-${req.params.story}`.toLowerCase();
    const path = `${folderDiff}/${prefixFile}${file}${suffixFile}`;
    res.sendFile(path);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));