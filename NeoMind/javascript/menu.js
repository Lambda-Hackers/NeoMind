const Menu = require('electron')

var Menus = [
    {
      label:'文件',
      submenu:[
        {
          label: '打开文件',
          role: 'openFile'
        },
        {
            label: '最近打开'
        },
        {
            label: '导出',
            submenu: [
                {
                  label: '导出为png格式'
                },
                {
                  label: '导出为svg格式'
                }
            ]
        },
        {
            label:'资源管理器中打开'
        }
      ]
    },
    {
      label:'帮助',
      submenu: [
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

function defineMenus ()
{
  const mainMenu = Menu.buildFromTemplate(Menus);
  Menu.setApplicationMenu(mainMenu);
};

Menus.exports = {
  defineMenus
}