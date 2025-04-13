
import fs from 'fs';
import path from 'path';


export function getCaseValueByKey(key: string, fileName: string) {
    const jsonFilePath = path.resolve('TestData', fileName);
    // Read and parse the JSON file
    if (fs.existsSync(jsonFilePath)) {
      const fileContent = fs.readFileSync(jsonFilePath, 'utf-8');
      const caseData = JSON.parse(fileContent);
  
      // Find the object with the specified key and return the corresponding value
      for (const item of caseData) {
        if (item.hasOwnProperty(key)) {
          return item[key];
        }
      }
    }
  }