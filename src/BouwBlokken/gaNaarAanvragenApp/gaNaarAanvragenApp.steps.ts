import { GaNaarAPP } from "../../functions/gaNaarApplicatie";
import { baseURL } from "../../generic/utils/environment.properties";
import { page} from "../../hooks/hooks";
import { Given,setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";

setDefaultTimeout(60 * 10000 * 2);
const log: Logger<ILogObj> = new Logger();

Given('Ga naar {string} app', async (App) => {
    if(App == "aanvragen"){
    log.silly("ga naar applicatie");
    const gotoApp = new GaNaarAPP(page);
    log.silly("Druk op aanvragenapp");
    await gotoApp.AanvragenApp(baseURL.AanvragenAppAcc);
}
else if(App == "BUK"){
    log.silly("ga naar applicatie");
    const gotoApp = new GaNaarAPP(page);
    log.silly("Druk op aanvragenapp");
    await gotoApp.AanvragenApp(baseURL.BUKApp);}
});

export { };



