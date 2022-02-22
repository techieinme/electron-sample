const dbmgr  = require('./dbmanger');
const db = dbmgr.db;
const randomWords = require('random-words');
exports.getNames  = ()=>{
    const sql = 'SELECT * from test';
    let  query = db.prepare(sql).all()
    return query;
}

exports.getRandomText= ()=>{
    return randomWords({ exactly: 5, join: ' ' })
}

