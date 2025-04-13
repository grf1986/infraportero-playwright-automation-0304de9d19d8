import {  Page } from "@playwright/test";
import { Context } from "vm";


export class loginPage {
    readonly page: Page;
    browser :Context;

    constructor(page: Page, browser: Context) {
    this.page= page;
    this.browser = browser;

    }

    async Login(){

      const [AanvragenLogin] = await Promise.all([
        await this.browser.waitForEvent('page'),
      ]);
      
      await this.page.waitForLoadState();
      await AanvragenLogin.fill('[id="txtUserID"]','testgebruiker');
      await AanvragenLogin.fill('[id="txtPassword"]','Welkom05!');
      await AanvragenLogin.click('[id="sub"]');
      return AanvragenLogin
    }

  }