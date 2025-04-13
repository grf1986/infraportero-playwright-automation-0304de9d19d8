import { page } from "../../hooks/hooks";
import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";


setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();


Then('Selecteer werkwachtrij: {string} op tab: {string}', async (value: string, tab: number) => {
    await page.waitForTimeout(1000);
    const functions = new FunctionAppIndex(page);
    await functions.selecteerWerkwachtrijen.SelecteerWerkBak(value, tab)
})