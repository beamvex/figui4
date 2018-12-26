import { ipcMain } from 'electron';
import nodeFetch from 'node-fetch'
import fetchCached from 'fetch-cached'
import fs from 'fs';
import base62 from 'base62';

const fetch = new fetchCached({
  fetch: nodeFetch,
  cache: {
    get: (k) => Promise.resolve(null),
    set: (k, v) => fs.writeFileSync(base62.encode(k), v),
  }
});

ipcMain.on('getPlayers', (event, data) => {

    fetch('https://api-prod.footballindex.co.uk/football.allTradable?page=1&per_page=20000&sort=asc').then(res => {
            return res.json();
        }).then(body => {
            event.sender.send('resultGP', body);
        });

    console.log('got it');
});