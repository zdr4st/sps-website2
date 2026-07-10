const fs = require('fs');

const dbPath = 'data/db.json';
let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Clean nulls from creditMatrix
for (const motorId in db.creditMatrix) {
  db.creditMatrix[motorId].forEach(option => {
    for (const tenor in option.tenors) {
      if (option.tenors[tenor] === null || option.tenors[tenor] === 0) {
        delete option.tenors[tenor];
      }
    }
  });
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Cleaned nulls from db.json');
