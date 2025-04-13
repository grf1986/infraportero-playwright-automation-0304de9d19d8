import { BrowserContext, Fixtures, Logger, Page } from "@playwright/test";
import { baseURL } from "../generic/utils/environment.properties";


export class GaNaarAPP {
  private readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
    
  }

  async AppFactoryAppsUrl(url: string) {
    await this.page.goto(url);
  }

  async AanvragenApp(url: string) {
    await this.page.goto(url);

  }

  async exportPage(page: Page){
    return page;
  }


}




