import { page} from "../../hooks/hooks";
import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";

setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();


Then('Select option by value: {string} voor index: {string} op tab: {string}', async (value,index,tab) => {
    log.silly('Selected option: '+value+'');
    const functionsApp = new FunctionAppIndex(page);
    await functionsApp.dropDownPage.Dropdow_SelectOptionByValue(value,index,tab)
});

Then('Zoeken en invullen value: {string} voor index: {string} indexpijl: {string} op tab: {string}', async (value,index,indexpijl,tab) => {
    log.silly('Selected option: '+value+'');
    const functionsApp = new FunctionAppIndex(page);
    await functionsApp.dropDownPage.Dropdown_DropDown_Zoeken_Invullen(value, index, indexpijl, tab);
});


export { };



