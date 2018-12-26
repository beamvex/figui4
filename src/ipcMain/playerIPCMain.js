import { ipcMain } from 'electron';
import fetch from 'node-fetch';

ipcMain.on('getPlayers', (event, data) => {

    fetch('https://api-prod.footballindex.co.uk/football.allTradable?page=1&per_page=20000&sort=asc').then(res => {
            return res.json();
        }).then(body => {
            event.sender.send('resultGP', body);
        });

    console.log('got it');
});