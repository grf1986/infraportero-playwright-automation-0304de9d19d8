import {Page,Locator} from "@playwright/test";


import { ILogObj, Logger } from "tslog";





export class voorbeeld {
    readonly parentLocator: Locator;
   
    
    

    constructor(private page: Page) {
    this.parentLocator = this.page.locator('');
    
    
                                                                         
    const log: Logger<ILogObj> = new Logger();
    
    }
    

  
  
        

        
    }

