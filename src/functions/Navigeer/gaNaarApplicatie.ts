import { BrowserContext, Fixtures, Logger, Page } from "@playwright/test";



export class GaNaarAPP {

  
  constructor(private page: Page) {
    this.page = page;
    
  }

  async NavigeerNaarAPP(url: string) {
    await this.page.goto(url);
  }

  async AanvragenApp(url: string) {
    await this.page.goto(url);

  }

  async exportPage(page: Page){
    return page;
  }


}




