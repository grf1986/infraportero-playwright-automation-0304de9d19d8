import { page } from "../../hooks/hooks";
import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import TASapp from "../../pageObjects/TASapp/TASapp.index";






setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

Then('Wacht op deze pagina voor: {string} miliseconden op tab: {string}', async (tijd,tab) => {
    const tasApp = new TASapp(page);
    await tasApp.wachtOpPagina.WachtenOpPagina(tijd,tab);
    log.silly("Wacht op deze pagina voor: " + tijd + " miliseconden op tab: " + tab);
   
});









export { };



