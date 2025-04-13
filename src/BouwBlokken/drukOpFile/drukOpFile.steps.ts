import { page} from "../../hooks/hooks";
import { When, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";


setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

    When('Druk op zaak: {string} link voor: {string} op tab: {string}', async (value:string, scenario: string,tab: number) => {
    const requestBuk = new FunctionAppIndex(page);
    await requestBuk.drukOpPage.DrukOpZaakLink(tab,value,scenario);
});

When('Wacht op deze pagina voor {string} miliseconden op tab: {string}', async (tijd: string,tab:number) => {
    const requestBuk = new FunctionAppIndex(page);
    await requestBuk.drukOpPage.WachtOpPagina(tijd,tab);
});







