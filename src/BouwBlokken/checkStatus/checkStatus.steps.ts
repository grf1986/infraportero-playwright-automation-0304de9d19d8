import { expect } from "@playwright/test";
import {Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/TASapp/TASapp.index";
import { page } from "../../hooks/hooks";



setDefaultTimeout(60 * 10000 * 2);
const log: Logger<ILogObj> = new Logger();


When('Status geupdate naar: {string} voor index: {string} op tab: {string}', async (value: string,index:number, tab: number) => {
        log.silly('Status is geupdate naar: '+ value)
        const functionApp = new FunctionAppIndex(page)
        expect(await functionApp.checkTextPage.CheckTextFunctionOnPage(index,tab)).toContain(value);
        log.silly("Status geupdate naar: " + value);
});




export { };



