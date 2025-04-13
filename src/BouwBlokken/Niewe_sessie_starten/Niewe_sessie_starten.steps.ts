import { When, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";

import { page } from "../../hooks/hooks";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";


setDefaultTimeout(60 * 10000 * 2);
const log: Logger<ILogObj> = new Logger();

When('Nieuwe sessie starten op tab: {string}', async (tab: number) => {
    const functionsApp = new FunctionAppIndex(page);
    await functionsApp.beeindigAndereSessiePage.Beëindig_andere_sessie(tab)
});

export { };



