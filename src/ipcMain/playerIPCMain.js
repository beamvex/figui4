import { ipcMain } from 'electron';
import nodeFetch from 'node-fetch'
import fetchCached from 'fetch-cached'
import fs from 'fs';
import md5 from 'md5';

const fetch = new fetchCached({
  fetch: nodeFetch,
  cache: {
    get: (k) => {
        var filename = md5(k) + '.dat';
        if (fs.existsSync(filename)) {
            return Promise.resolve(fs.readFileSync());
        } else {
            return Promise.resolve(null);
        }
    },
    set: (k, v) => fs.writeFileSync(md5(k) + '.dat', v),
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