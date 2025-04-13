import { page} from "../../hooks/hooks";
import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";

setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

Then('Navigeer naar {string} omgeving op tab: {string}', async (env,tab) => {
    const functionApp = new FunctionAppIndex(page);
    await functionApp.navigeerNaarPage.NavigeerNaar(tab,env);
    log.silly("navigeer naar "+ env +"op tab: "+tab+"");

});
export { };



