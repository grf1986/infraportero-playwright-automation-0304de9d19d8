import { When, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";

import { page } from "../../hooks/hooks";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";
import { sideBarNavigatie } from "../../functions/sideBarNavigatie";


setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

When('Druk op sidebar optie {string} op tab {string}', async (optie: string, tab: number) => {
    const functioApp = new FunctionAppIndex(page);
    await functioApp.sideBarPage.DrukOpSideBarOptie(optie, tab);
    log.silly("Druk op sidebar optie " + optie);
});

export { };



