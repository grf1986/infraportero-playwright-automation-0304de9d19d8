import {  Locator, Page,BrowserContext } from "@playwright/test";


export class LoginOpAanvragenApp {
    readonly page: Page;
    username: Locator;
    password: Locator;
    submitbutton: Locator;

    constructor(page:Page) {
    this.page = page;
    this.username = this.page.locator('[id="txtUserID"]');
    this.password = this.page.locator('[id="txtPassword"]');
    this.submitbutton = this.page.locator('[id="sub"]');

    }
    
    async LoginOPAanvragenApp(username: string,password: string){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submitbutton.click();
    }



  




  }