// const fs = require('fs');
// const path = require('path');

// // Directory where the .ts files are located
// const directory = './';

// // Read all files in the directory
// fs.readdir(directory, (err, files) => {
//     if (err) {
//         console.error('Error reading directory:', err);
//         return;
//     }

//     let count = 1;
//     files.forEach(file => {
//         if (path.extname(file) === '.ts') {
//             const newFileName = `${count}.ts`;
//             count++;

//             // Rename the file
//             fs.rename(path.join(directory, file), path.join(directory, newFileName), renameErr => {
//                 if (renameErr) {
//                     console.error('Error renaming file:', renameErr);
//                     return;
//                 }

//                 // Clear the content of the file
//                 fs.writeFile(path.join(directory, newFileName), '', writeErr => {
//                     if (writeErr) {
//                         console.error('Error clearing file content:', writeErr);
//                     }
//                 });
//             });
//         }
//     });
// });



const fs = require('fs');
const path = require('path');

// Directory where the files are to be deleted
const directory = path.join('./', 'dist');

// Read all files in the directory
fs.readdir(directory, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        const filePath = path.join(directory, file);

        // Delete the file
        fs.unlink(filePath, unlinkErr => {
            if (unlinkErr) {
                console.error('Error deleting file:', unlinkErr);
            } else {
                console.log(`Deleted file: ${filePath}`);
            }
        });
    });
});
