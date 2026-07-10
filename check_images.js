const fs = require('fs');
const code = fs.readFileSync('src/lib/mock-data.ts', 'utf8');
const regex = /"name":\s*"([^"]+)"[\s\S]*?"images":\s*\[\s*"([^"]+)"\s*\]/g;
let m;
while (m = regex.exec(code)) {
  console.log(m[1] + ' -> ' + m[2].split('/').pop());
}
