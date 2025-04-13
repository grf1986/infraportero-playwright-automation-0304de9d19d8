import { Given, setDefaultTimeout } from "@cucumber/cucumber";
import { page } from "../../hooks/hooks";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";
import { ILogObj, Logger } from "tslog";

setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

Given('Druk op local action {string} op tab {string}', async function (localAction: string, tab:number) {
    const functionApp = new FunctionAppIndex(page);
    await functionApp.SelectActionPage.DrukOpLocalAction(localAction, tab);
    log.silly("Druk op local action: " + localAction);
});

