// const sqlLite = require('better-sqlite3-prebuilt')
const path  = require('path');
const dbPath = path.join(path.join(__dirname, '../electron.db'))
const sqlLite =  require('better-sqlite3');
const  db     = new sqlLite(dbPath,{});
exports.db  = db;

