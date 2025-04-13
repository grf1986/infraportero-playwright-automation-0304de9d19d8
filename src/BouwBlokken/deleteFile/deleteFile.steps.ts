import { page } from "../../hooks/hooks";
import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";


setDefaultTimeout(60 * 10000 * 2);
const log: Logger<ILogObj> = new Logger();

Then('Verwijder alle testdata voor file: {string}', async (file) => {
    const deleteFile = new FunctionAppIndex(page);
    await deleteFile.cleanupTestPage.RemoveTestCases(file);
    
});






export { };



