import { Given, setDefaultTimeout } from "@cucumber/cucumber";
import { page } from "../../hooks/hooks";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";
import { ILogObj, Logger } from "tslog";


setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();
Given('Upload bestand: {string} op tab: {string}', async function (bestand: string, tab:number) {
    const functionApp = new FunctionAppIndex(page);
    await functionApp.uploadPage.UploadFile(bestand, tab);
    log.silly("Upload bestand: " + bestand);
});

