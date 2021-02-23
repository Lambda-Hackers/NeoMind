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