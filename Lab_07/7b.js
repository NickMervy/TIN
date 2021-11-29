const fs = require('fs');

if(process.argv.length !== 3) {
    console.log("Invalid number of args");
    process.exit();
} 

let folderPath = process.argv[2];
if(fs.existsSync(folderPath) === false) {
    console.log("Path does not exist");
    process.exit();
}

let isWatching = false;
fs.watch(folderPath, (eventType, filename) => {
    
    if(isWatching) return;

    console.log(filename + " " + eventType);

    if(eventType === 'change')
    {
        console.log(fs.readFileSync(filename, 'utf8'));
    }

    console.log();
    setTimeout(() => {
        isWatching = false;
    }, 100);
});