import { page } from "../../hooks/hooks";
import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/TASapp/FunctionApp.index";
import { DrukOpTypeKnop } from "../../functions/DrukOpButton/drukOpTypeKnop";




setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

Then('Navigeer naar URL: {string} op tab: {string}', async (type,tab) => {
    const FunctionApp = new FunctionAppIndex(page);
    await FunctionApp.navigeerNaarPage.NavigeerNaar(type,tab);
});









export { };



