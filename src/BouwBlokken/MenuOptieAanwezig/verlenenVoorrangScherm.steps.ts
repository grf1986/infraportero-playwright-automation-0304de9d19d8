import { page} from "../../hooks/hooks";
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import { DrukActiesButton } from "../../functions/drukActiesButton";
import { expect } from "playwright/test";
import { genericText } from "../../statics/Text/genericText";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";



setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

Then('Expected: {string} aanwezig is op tab: {string}', async(menuItem: string,tab: number)=> {
    const functionApp = new FunctionAppIndex(page);
        if (menuItem == "Verlenen voorrang"){
        expect(await functionApp.takenOverzichtPage.CheckMenuItem(menuItem,tab)).toContain(genericText.voorrangVerlenen);
        log.silly("check list op woord " + menuItem);
        }
        if (menuItem == "Opstellen verzoek aan medisch adviseur" || menuItem == "Opstellen verzoek aan medisch adviseur WLZ" || menuItem == "Opstellen verzoek aan medisch adviseur BRP"){
        await functionApp.takenOverzichtPage.CheckMenuItem(menuItem,tab)
        log.silly("check list op woord " + menuItem);
        }
        else{
            log.silly("menuItem " + menuItem + " komt niet voor")
        }
}) 

Then('Expected: {string} niet aanwezig is op tab: {string}', async(menuItem: string,tab: number)=> {
    const functionApp = new FunctionAppIndex(page);
    if (menuItem == "Verlenen voorrang"){
    expect(await functionApp.takenOverzichtPage.CheckMenuItem(menuItem,tab)).not.toContain(genericText.voorrangVerlenen);
    log.silly("check list op woord " + menuItem);
    }
    if (menuItem == "Opstellen verzoek aan medisch adviseur"){
    expect(await functionApp.takenOverzichtPage.CheckMenuItem(menuItem,tab)).not.toContain(genericText.opstellenVerzoek);
    log.silly("check list op woord " + menuItem);
    }
 
})




  
  


