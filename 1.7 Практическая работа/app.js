const fs = require('fs');
const path = require('path');

function findLatestModifiedJsFile(targetDirectory) {
  let latestModifiedFile = null;
  let latestModifiedTime = 0;

  const files = fs.readdirSync(targetDirectory);
  for (const file of files) {
    if (path.extname(file) === '.js') {
      const filePath = path.join(targetDirectory, file);
      const stats = fs.statSync(filePath);
      const modifiedTime = stats.mtime;

      if (modifiedTime > latestModifiedTime) {
        latestModifiedFile = filePath;
        latestModifiedTime = modifiedTime;
      }
    }
  }

  return latestModifiedFile;
}

function runLatestModifiedJsFile(filePath) {
  if (filePath) {
    // console.log(`Running latest modified JavaScript file: ${filePath}`);
    require(filePath);
  } else {
    console.log('No latest modified JavaScript file found.');
  }
}

const currentDirectory = process.cwd();
const distDirectory = path.join(currentDirectory, 'dist');
const latestModifiedJsFilePath = findLatestModifiedJsFile(distDirectory);
runLatestModifiedJsFile(latestModifiedJsFilePath);
