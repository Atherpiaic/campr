<<<<<<< HEAD
const { app, BrowserWindow } = require('electron');
let win;

app.on('ready', function () {
  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadURL(`file://${__dirname}/index.html`);
});
=======
const { app, BrowserWindow } = require('electron');
let win;

app.on('ready', function () {
  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadURL(`file://${__dirname}/index.html`);
});
>>>>>>> 8bdd2be9d0b853a591fd130afe091a66a90f6183
