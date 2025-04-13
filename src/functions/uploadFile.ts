import {Page,Locator} from "@playwright/test";

export class Upload {
   readonly uploadButton: Locator;

   
    constructor(private page:Page) {
    this.page = page;
    this.uploadButton = this.page.locator('[data-test-id="2019080503431005619"] >div>div>table>tbody>tr>td>[title="Bestand(en) selecteren"]');

    //input[type="file"]
    //filePath= TestData/dummy.pdf
    }
    async File(path: string) {
      await this.page.waitForLoadState("load");
        const filePath = path; 
        await this.page.setInputFiles('input[type="file"]', filePath);
        

     }

  }