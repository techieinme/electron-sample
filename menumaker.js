const {app,Menu} = require('electron');
const isMac = process.platform === 'darwin';

const template = [

    ...(isMac ? [{
        label : app.Menu,
        submenu : [
            {role:'about'},
            {type:'separator'},
            {type:'separator'},
            {role:'quit'},
        ]
    }]: []), 
   {
      label: 'Edit',
      submenu: [
         {
            role: 'undo'
         },
         {
            role: 'redo'
         },
         {
            type: 'separator'
         },
         {
            role: 'cut'
         },
         {
            role: 'copy'
         },
         {
            role: 'paste'
         }
      ]
   },
   
   {
      label: 'View',
      submenu: [
         {
            role: 'reload'
         },
         {
            role: 'toggledevtools'
         },
         {
            type: 'separator'
         },
         {
            role: 'resetzoom'
         },
         {
            role: 'zoomin'
         },
         {
            role: 'zoomout'
         },
         {
            type: 'separator'
         },
         {
            role: 'togglefullscreen'
         }
      ]
   },
   
   {
      role: 'window',
      submenu: [
         {
            role: 'minimize'
         },
         {
            role: 'close'
         }
      ]
   },
   
   {
      role: 'help',
      submenu: [
         {
            label: 'Learn More'
         }
      ]
   }
]


const contextMenu = [
    {
        label : 'Options',
        submenu : [
            {
                label : 'do something',
                click : ()=>{
                    console.log('hey')
                }
            }
        ]
    },
    {
        label: 'do some more action'
    }
]
const mainMenu = Menu.buildFromTemplate(template)
const popupMenu = Menu.buildFromTemplate(contextMenu)

module.exports.mainMenu = mainMenu;
module.exports.contextMenu = popupMenu;