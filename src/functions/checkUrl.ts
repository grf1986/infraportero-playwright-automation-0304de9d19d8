import {Page} from "@playwright/test";

export class CheckURL {
    readonly page: Page;

   
    constructor(page:Page) {
    this.page = page;

    }
    async CheckURL(){
      await this.page.waitForLoadState("load");
      const url = this.page.url();
      return url;
     }

  }