const os = require('os');

const totalMemoryBytes = os.totalmem();
const totalMemoryKB = totalMemoryBytes / 1024;
const totalMemoryMB = totalMemoryKB / 1024;
const totalMemoryGB = totalMemoryMB / 1024;

console.log(`Total Memory: ${totalMemoryBytes} bytes`);
console.log(`Total Memory: ${totalMemoryKB} KB`);
console.log(`Total Memory: ${totalMemoryMB} MB`);
console.log(`Total Memory: ${totalMemoryGB} GB`);
