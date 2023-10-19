const { app, BrowserWindow } = require('electron');
const { shell } = require('electron');
const createWindow = () => {
    const window = new BrowserWindow({
        width: 400,
        height: 300
    })

    window.loadFile('window.html');
    window.webContents.on('console-message', (event, level, message, line, sourceId) => {
        if(message.startsWith("Execute Search:")) {
            const url = message.split("Execute Search:")[1];
            const newWindow = new BrowserWindow({
                width: 400,
                height: 300
            })

            newWindow.loadURL(`${url}`);
        }
      });
}

app.whenReady().then(()=> {
    createWindow();
});
