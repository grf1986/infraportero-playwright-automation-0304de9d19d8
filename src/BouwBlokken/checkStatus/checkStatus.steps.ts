import { expect } from "@playwright/test";
import {Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/TASapp/TASapp.index";
import { page } from "../../hooks/hooks";
import TASapp from "../../pageObjects/TASapp/TASapp.index";



setDefaultTimeout(60 * 10000 * 2);
const log: Logger<ILogObj> = new Logger();


When('Status geupdate naar: {string} voor index: {string} op tab: {string}', async (value: string,index:number, tab: number) => {
        log.silly('Status is geupdate naar: '+ value)
        const tasApp = new TASapp(page)
        expect(await tasApp.checkTextPage.CheckTextFunctionOnPage(index,tab)).toEqual(value);
        log.silly("Status geupdate naar: " + value);
});

When('Gebruiker is ingelogd met naam: {string} voor index: {string} op tab: {string}', async (value: string,index:number, tab: number) => {
        log.silly('Status is geupdate naar: '+ value)
        const tasApp = new TASapp(page)
        expect(await tasApp.checkTextPage.AccountGebruikersNaam(index,tab)).toEqual(value);
        log.silly("Gebruiker is ingelogd met email: " + value);
});



export { };



