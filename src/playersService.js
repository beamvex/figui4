
import { ipcRenderer } from 'electron'

export default {
    getPlayers () {
        ipcRenderer.send('getPlayers', 100);

        ipcRenderer.on('resultGP', (event, data) => {
            console.log(data);
        });
        /*
    return new Promise(resolve => {
        
        
    });*/
    }
}