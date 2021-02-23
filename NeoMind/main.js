const { app, BrowserWindow, Menu} = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

Menus = [
  {
    label:'文件',
    submenu:[
      {
        label: '打开文件',
        role: 'openFile'
      },
      {
          label: '打开最近',
      }
    ]
  },
  {
    label:'帮助',
    submenu:[
      {
        label: '帮助文档',
        click: function () {
          electron.shell.openExternal('https://github.com/Lambda-Hackers/NeoMind')
        }
      },
      {
        label: '加入我们',
        click: function () {
          electron.shell.openExternal('https://github.com/Lambda-Hackers/NeoMind')
        }
      }
    ]
  }
];
const mainMenu = Menu.buildFromTemplate(Menus);
Menu.setApplicationMenu(mainMenu);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
