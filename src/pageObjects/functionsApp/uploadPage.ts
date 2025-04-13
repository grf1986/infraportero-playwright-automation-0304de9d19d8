import {Page,Locator} from "@playwright/test";
import { ILogObj, Logger } from "tslog";
import { NavigeerNaarTab } from "../../functions/navigeerNaarTab";
import { Upload } from "../../functions/uploadFile";

export class UploadPage {

    constructor(private page: Page) {
    

    }

    async UploadFile(path:string, tab:number){
      const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
                 if (targetTab){
      await new Upload(targetTab).File(path)}
      else { return }

    }
    
}
