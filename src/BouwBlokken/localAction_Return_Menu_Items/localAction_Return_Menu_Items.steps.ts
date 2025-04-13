import { expect } from "@playwright/test";
import {Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";
import { page } from "../../hooks/hooks";



setDefaultTimeout(60 * 10000 * 2);
const log: Logger<ILogObj> = new Logger();


When('Local action menu item: {string} is: {string} op tab: {string}', async (menuItem: string, beschikbaar: string, tab: number) => {
        const functionsApp = new FunctionAppIndex(page);
        if(beschikbaar == "beschikbaar"){
                expect(await functionsApp.localActien_Return_Items_as_ListPage.ReturnItemsFromLocalActtion(tab)).toContain(menuItem);
                log.silly("Menu item: "+ menuItem  + "is: " + beschikbaar + "op tab: " + tab);
        }
        else if(beschikbaar == "niet_beschikbaar"){
                expect(await functionsApp.localActien_Return_Items_as_ListPage.ReturnItemsFromLocalActtion(tab)).not.toContain(menuItem)
                log.silly("Menu item: "+ menuItem  + "is: " + beschikbaar + "op tab: " + tab);
        }
});




export { };



