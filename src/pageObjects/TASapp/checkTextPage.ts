import { Locator, Page } from "@playwright/test";
import { context } from "../../hooks/hooks";
import { CheckText } from "../../functions/CheckText/checkText";
import { NavigeerNaarTab } from "../../functions/Navigeer/navigeerNaarTab";


export class CheckTextPage{
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

    async CheckTextFunctionOnPage(index:number,tab: number){
            const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
            if (targetTab){
            const checkText =  new CheckText(targetTab)
            return await checkText.Status(index)
            }
            {return}
    }

    async AccountGebruikersNaam(index:number,tab: number){
      const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
      if (targetTab){
      const accountGebruikersNaam =  new CheckText(targetTab)
      return await accountGebruikersNaam.AccountGebruikersNaam(index)
      }
      {return}
}

   
   

}