const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'lib', 'mock-data.ts');
let content = fs.readFileSync(file, 'utf8');

// Replace images array in mockMotorcycles
content = content.replace(/"images": \[\s*"https:\/\/ik\.imagekit\.io\/zlt25mb52fx[^"]+"\s*\]/g, (match) => {
    // We need to extract the id from the mockMotorcycles object to use getDefaultImageUrl, 
    // but regex replace is tricky here. 
    return match;
});

// Let's do it better by parsing or just finding the blocks
let inMockMotorcycles = false;
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('export const mockMotorcycles: Motorcycle[] = [')) {
        inMockMotorcycles = true;
    }
    
    if (inMockMotorcycles) {
        if (lines[i].includes('"images": [')) {
            // the next line is the image string
            const nextLine = lines[i+1];
            if (nextLine.includes('https://ik.imagekit.io/zlt25mb52fx')) {
                // Find the id of the current motorcycle
                let id = '';
                for (let j = i; j >= 0; j--) {
                    if (lines[j].includes('"id":')) {
                        const m = lines[j].match(/"id":\s*"([^"]+)"/);
                        if (m) id = m[1].replace('m-', ''); // remove 'm-' prefix
                        break;
                    }
                }
                lines[i+1] = `      getDefaultImageUrl("${id}")`;
            }
        }
    }
}

fs.writeFileSync(file, lines.join('\n'));
console.log("Updated mock-data.ts");
