const { app, BrowserWindow } = require('electron')
const { Pool, Client } = require('pg')

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.maximize();
  win.removeMenu();
  // e carregar o index.html do aplicativo.
  win.loadFile('index.html')
  win.webContents.openDevTools()
  

  /*mainWindow.on('closed', function(){
    mainWindow = null;
  })*/
}
app.on('ready', createWindow)

app.on('window-all-close', function(){
  if(process.platform !== 'darwin'){
    app.quit();
  }
})

app.on('activate', function(){
  if(mainWindow === null){
    createWindow();
  }
})

