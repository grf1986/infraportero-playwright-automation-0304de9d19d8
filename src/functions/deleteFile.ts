import fs from 'fs';
import path from 'path';
import { ILogObj, Logger } from 'tslog';
const log: Logger<ILogObj> = new Logger();
async function deleteJsonFile(fileName: string): Promise<void> {
  
  const jsonFilePath = path.resolve('TestData', fileName);
  

  try {
    if (fs.existsSync(jsonFilePath)) {
      await fs.promises.unlink(jsonFilePath);
      log.silly(`File ${fileName} deleted successfully.`);
    } else {
      log.silly(`File ${fileName} not found.`);
    }
  } catch (error) {
    log.silly(`Error deleting file ${fileName}:`, error);
  }
}

export { deleteJsonFile };

