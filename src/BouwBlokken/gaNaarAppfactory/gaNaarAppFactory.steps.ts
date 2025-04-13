import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { GaNaarAPP } from "../../functions/gaNaarApplicatie";
import { context, page } from "../../hooks/hooks";
import { envVariables } from "../../helpers/envVariables";
import AppFactoryAppIndex from "../../pageObjects/AppFactory/AppFactoryApp.index";


setDefaultTimeout(60 * 100000 * 2);


Given('Go to AppFactoryApp app page', async function ()  {
    const goto = new GaNaarAPP(page);
    await (await goto.exportPage(page)).goto(envVariables.Appfactory);
    });

When('Login to AppFactoryApp test env met user: {string} and password: {string}', async function (username,password)  {
        const  appFactoryApp =new AppFactoryAppIndex(page)
        await appFactoryApp.loginPageAppFactoryPage.LoginToAppFactory(username, password)
        
    });

When('Click on aanvragen app', async function ()  {
    const  appFactoryApp = new AppFactoryAppIndex(page)
        await appFactoryApp.selectAppPage.ClickOnAanvragenApp();
    });

Then('Check that user is on the right page', async function ()  {
        const pages = context.pages();
            if (pages.length >= 2) {
                const aanvragenapp = pages[1];
                expect(aanvragenapp.url()).toContain(envVariables.AanvragenApp);
              
            }
        });

export{};