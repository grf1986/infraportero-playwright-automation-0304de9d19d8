import { page } from "../../hooks/hooks";
import { Then, setDefaultTimeout } from "@cucumber/cucumber";
// import AanvragenAppIndex from "../../../pageObjects/requestApp/requestApp.index";
import { ILogObj, Logger } from "tslog";

// import AppFactoryAppIndex from "../../../pageObjects/AppFactory/AppFactoryApp.index";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";
// import { ControlerenAdministratieveVolledigheidPage } from "../../../pageObjects/WLZ/controlerenAdministratieveVolledigheid";


setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

Then('Iframe fill in value: {string} voor index: {string} op tab: {string}', async (value: string, index: number, tab: number) => {
    const functionsApp = new FunctionAppIndex(page);
    await functionsApp.fillInPage.FillIn_Iframe_Windows(value,index,tab)
    log.silly("Vul in value: "+value+" voor index: "+index+" op tab: "+tab);
});

Then('Fill in veld value: {string} voor index: {string} op tab: {string}', async (value: string, index: number, tab: number) => {
    if(value == "n.v.t."){

    } else {
    const functionsApp = new FunctionAppIndex(page);
    await functionsApp.fillInPage.FillIn_Veld(value,index,tab)
    log.silly("Vul in value: "+value+" voor index: "+index+" op tab: "+tab);}
});
Then('Type in veld value: {string} voor index: {string} op tab: {string}', async (value: string, index: number, tab: number) => {
    const functionsApp = new FunctionAppIndex(page);
    await functionsApp.fillInPage.Type_In_Veld(value,index,tab)
    log.silly("Vul in value: "+value+" voor index: "+index+" op tab: "+tab);
});

Then('Fill in block value: {string} voor index: {string} op tab: {string}', async (value: string, index: number, tab: number) => {
    const functionsApp = new FunctionAppIndex(page);
    await functionsApp.fillInPage.FillIn_Block(value,index,tab)
    log.silly("Vul in value: "+value+" voor index: "+index+" op tab: "+tab);
});

Then('Fill in textvak value: {string} voor index: {string} op tab: {string}', async (value: string, index: number, tab: number) => {
    const functionsApp = new FunctionAppIndex(page);
    await functionsApp.fillInPage.FillIn_Block(value,index,tab)
    log.silly("Vul in value: "+value+" voor index: "+index+" op tab: "+tab);
});


export { };



