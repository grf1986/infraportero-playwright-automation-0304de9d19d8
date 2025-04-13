import { Given, setDefaultTimeout } from "@cucumber/cucumber";
import { page } from "../../hooks/hooks";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";
import { ILogObj, Logger } from "tslog";

setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

Given('Reload pagina op tab: {string}', async function (tab:number) {
    const functionApp = new FunctionAppIndex(page);
    await functionApp.reload.ReloadPage(tab);
    log.silly("Reload pagina op tab: " + tab);
});

