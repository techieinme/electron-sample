// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, Notification,Menu } = require('electron')
const { mainMenu,contextMenu} = require('./menumaker')
const path = require('path')
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
    // sandbox: true,
    nodeIntegration: false,
    // contextIsolation: false,
    // nodeIntegrationInWorker: true,
    // nodeIntegration: false, // is default value after Electron v5
    // contextIsolation: true, // protect against prototype pollution
    enableRemoteModule: true, // turn off remote
   defaultEncoding: 'UTF-8',
    // nodeIntegration: false,
    // worldSafeExecuteJavaScript: true,
    // contextIsolation: true,
    preload: path.join(__dirname, 'preload.js'),
    },
    // frame: true,
    // titleBarStyle: 'hidden',
    // titleBarOverlay: {
    //   color: '#2f3241',
    //   symbolColor: '#74b1be'
    // }
    // transparent: true

  })

  // menu 
  Menu.setApplicationMenu(mainMenu);

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')


  //context menu 

  mainWindow.webContents.on('context-menu',()=>{
    contextMenu.popup(mainWindow.webContents)
  })
  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
// Notification
 const  notification = new Notification({title:'Sample Notification',body:'Hello sample notification body'});
 notification.show();

//   read node 
//  const file  = path.parse('./main.js');
//  console.log(file.base);
//  console.log(file.ext);

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.