import {Locator, Page} from "@playwright/test";
//import { Locator } from "@playwright/test";
import { ILogObj, Logger } from "tslog";
import { NavigeerTab } from "./navigeerTab";
import { waitTime } from "../statics/Text/testData";
import { page } from "../hooks/hooks";


const log: Logger<ILogObj> = new Logger();


export class DrukOpButton {
  DrukOp: any;
   
    async Button(locator: Locator){
        await locator.waitFor({state: "visible"})
        await locator.click();
      }
    
      async DrukOpOptioneleButton(locator_Button: Locator){
        await page.waitForTimeout(waitTime.time);
        let elementGevonden = await locator_Button.isVisible();
        
          if(!elementGevonden){
             log.silly("button niet beschikbaar");
        } 
          else if(elementGevonden){
             await locator_Button.click()
        }
     }
  
}
      
     

  




  