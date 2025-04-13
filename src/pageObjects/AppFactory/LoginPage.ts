import { Locator, Page } from "@playwright/test";
import { FillInFunction } from "../../functions/fillInFunction";


export class LoginPageAppFactory {
  readonly page: Page;
  readonly username: Locator
  readonly password: Locator;
  readonly submitbutton: Locator

  constructor(page: Page) {
    this.page = page;
    this.username = this.page.locator('[id="txtUserID"]');
    this.password = this.page.locator('[id="txtPassword"]');
    this.submitbutton = this.page.locator('[id="sub"]');
  }
  
  async LoginToAppFactory(username: string, password: string) {
   
    const invullen  = new  FillInFunction(this.page);
    await invullen.FillIn_Veld(0,username);
    await invullen.FillIn_Veld(0,password);
    
    await this.submitbutton.nth(0).click();
  }
}

