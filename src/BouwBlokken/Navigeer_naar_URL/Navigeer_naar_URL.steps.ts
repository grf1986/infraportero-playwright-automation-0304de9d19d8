import { page } from "../../hooks/hooks";
import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/TASapp/TASapp.index";
import TASapp from "../../pageObjects/TASapp/TASapp.index";
import { GaNaarAPP } from "../../functions/Navigeer/gaNaarApplicatie";





setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

Then('Navigeer naar URL: {string}', async (url) => {
    const goToPage = new GaNaarAPP(page);
    await (await goToPage.exportPage(page)).goto(url);
    log.silly("Navigeer naar URL: " + url);
});

export { };



