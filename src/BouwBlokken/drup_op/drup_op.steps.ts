import { page } from "../../hooks/hooks";
import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";
import { DrukOpTypeKnop } from "../../functions/drukOpTypeKnop";




setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

Then('Druk op app: {string} met index: {string} op tab: {string}', async (type,index,tab) => {
    const FunctionApp = new FunctionAppIndex(page);
    await FunctionApp.drukOpPage.DrukOpApplicatie(type,index,tab)

});

Then('Druk op type: {string} met naam: {string} met index: {string} op tab: {string}', async (type,button,index, tab) => {
    if(button == "n.v.t."){

    }else{
    
    const FunctionApp = new FunctionAppIndex(page);
    await FunctionApp.drukOpPage.DrukOpTypeKnop(type,button,index, tab)}
    
});

Then('Op schermgedeelte {string} druk op {string} op tab: {string}', async (taakSoort, button, tab) => {
    const FunctionApp = new FunctionAppIndex(page);
    await FunctionApp.takenOverzichtPage.DrukOp(taakSoort, button, tab);
});

Then('Gerelateerde Dossiers: {string} voor index: {string} op tab: {string}', async (button:string, index: number, tab:number) => {
    const FunctionApp = new FunctionAppIndex(page);
    await FunctionApp.drukOpPage.DrukOPGerelateerdeDossiers(button, index,tab);
});







export { };



