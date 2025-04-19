import {Page } from "@playwright/test";
import { context} from "../../hooks/hooks";
import { NavigeerNaarTab } from "../../functions/Navigeer/navigeerNaarTab";
import { DrukOpTypeButton } from "../../functions/DrukOpButton/drukOpTypeButton";



export class DrukOpPage {
  readonly page: Page;
  private readonly newTab = context.pages();
  readonly tab0  = this.newTab[0];
  readonly tab1  = this.newTab[1];
  readonly tab2  = this.newTab[2];
  readonly tab3  = this.newTab[3];
  readonly tab4  = this.newTab[4];

  constructor(page: Page) {
    this.page = page;
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
  }

   async DrukOpTypeKnop(type: string,text: string,index: number,tab: number){
            const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
                if (targetTab){
                await new DrukOpTypeButton(targetTab).drukOpTypeButton(type,text,index);
                }
                else { return 
                  
                }
   }

   async headernavigatie(button: string, index: number, value: string,tab: number){
    const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
        if (targetTab){
        await new DrukOpTypeButton(targetTab).DrukHeaderButtons(button,index,value);
        }
        else { return 
          
        }
}











}


