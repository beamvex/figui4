import { ipcMain, dialog } from 'electron';
import fs from 'fs';

var winVar;

export default {
    setWin(win) {
        winVar = win;
    }
}

ipcMain.on('exportXL', (event, data) => {

    var report = 'hahah';

    dialog.showSaveDialog(winVar, {}, (filename, bookmark) => {
        fs.writeFileSync(filename, report);
    })

});