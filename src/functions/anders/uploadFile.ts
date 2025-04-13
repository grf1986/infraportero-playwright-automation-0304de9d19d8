import {Page,Locator} from "@playwright/test";

export class Upload {
   readonly uploadButton: Locator;

   
    constructor(private page:Page) {
    this.page = page;
    this.uploadButton = this.page.locator('');
    }
    async File(path: string) {
      await this.page.waitForLoadState("load");
        const filePath = path; 
        await this.page.setInputFiles('input[type="file"]', filePath);
        

     }

  }