const path=require('path')
console.log(path.sep)


const filePath=path.join('/content','subfloder')
console.log(filePath)


//const base=path,basename(filePath)

//console.log(base)

const ab=path.resolve(__dirname,'content','subfloder')
console.log(ab)