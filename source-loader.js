let sourceLoader = function(filePaths) {
    this.filePaths = filePaths
}
const path =require('path')

sourceLoader.prototype = {
  process: function (src, extra) {
    let { fileInfo } = extra
    let { currentDirectory, filename } = fileInfo

    let root = path.join(__dirname,'../')
    if (filename.indexOf('.vue') > 0) {
      this.filePaths.forEach(it => {
        let filePath = path.join(root, it)
        let relativePath = path.relative(currentDirectory, filePath)
        src = `@import '${relativePath}';` + src
      })
    }
    return src
  }
}

module.exports =  sourceLoader


