
import { ipcRenderer } from 'electron'

export default {
    getPlayers (store) {
        ipcRenderer.send('getPlayers', 100);

        ipcRenderer.on('resultGP', (event, data) => {
            store.dispatch('itemSet', {items: data.items});
            console.log(data);
        });
        /*
    return new Promise(resolve => {
        
        
    });*/
    }
}