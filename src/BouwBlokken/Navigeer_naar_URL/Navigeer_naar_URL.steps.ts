import { page } from "../../hooks/hooks";
import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/TASapp/FunctionApp.index";





setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

Then('Navigeer naar URL: {string} op tab: {string}', async (url,tab) => {
    const FunctionApp = new FunctionAppIndex(page);
    await FunctionApp.navigeerNaarPage.NavigeerNaar(url,tab);
    log.silly("Navigeer naar URL: " + url + " op tab: " + tab);
});









export { };



