const testMgr  = require('./models/testmgr');

const { contextBridge } = require('electron');

const getNames = ()=>{
  return   testMgr.getNames()
}

const getRandomText =()=>{
  return testMgr.getRandomText()
}


contextBridge.exposeInMainWorld('myAPI',{
    desktop:true,
    getNames : getNames,
    getRandomText : getRandomText
});





window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type])
    }
  });






  