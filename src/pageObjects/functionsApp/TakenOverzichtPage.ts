import { Locator, Page } from "@playwright/test";
import { FillInFunction } from "../../functions/fillInFunction";
import { LoginInFunction } from "../../functions/login";
import { context, NewTab } from "../../hooks/hooks";
import { ILogObj, Logger } from "tslog";
import { waitTime } from "../../statics/Text/testData";
import { DrukActiesButton } from "../../functions/drukActiesButton";
import { NavigeerNaarTab } from "../../functions/navigeerNaarTab";

export class TakenOverzichtPage {
  readonly parentLocator: Locator
  readonly page: Page;
  private readonly newTab = context.pages();
  readonly inactieTakenGaButton: Locator;
  readonly actieveTakenGaButton: Locator;
  readonly gaKnop: Locator;
  readonly tab1  = this.newTab[1];
  readonly tab2  = this.newTab[2];
  readonly tab3  = this.newTab[3];
  readonly tab4  = this.newTab[4];

  constructor(page: Page) {
    this.page = page;
    this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]');
    this.inactieTakenGaButton = this.parentLocator.locator("[class='content-item content-layout item-3 remove-all-spacing flex flex-row'] [data-test-id='202007011657090783567-layout'] [data-test-id='20190208081744082718727']")
    this.actieveTakenGaButton = this.parentLocator.locator("[class='content-item content-layout item-2 remove-all-spacing flex flex-row'] [data-test-id='202007011657090783567-layout'] [data-test-id='20190208081744082718727']")
    this.gaKnop = this.page.locator("[data-test-id='20190208081744082718727']");
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
  }

  async DrukOp(taakSoort: string, button: string, tab: number) {  
    const log: Logger<ILogObj> = new Logger();
    if (taakSoort == "inactieveTaken") {
      if (button == "Ga"){
        const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
          if (targetTab){
          await this.page.waitForTimeout(5000)  
          await new TakenOverzichtPage(targetTab).inactieTakenGaButton.first().click();
          await this.page.waitForTimeout(5000)
                        }
        else { return }
                      }
        else{log.silly("De button " + button + " bestaat niet in de huidige codebasis.")}
}
    
   else if (taakSoort == "actieveTaken") {
      if (button == "Ga"){
        const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
        if (targetTab){
        await this.page.waitForTimeout(5000)  
        await new TakenOverzichtPage(targetTab).inactieTakenGaButton.first().click();
        await this.page.waitForTimeout(5000)
                      }
      else { return }
 }
       else{log.silly("De button " + button + " bestaat niet in de huidige codebasis.")}
     }

     else {log.silly("De taaksoort " + taakSoort + "bestaat niet in de huidige codebasis")}
    }  

    async CheckMenuItem(menuItem: string,tab: number) {
      const log: Logger<ILogObj> = new Logger();
      if(tab == 0){
        const actieButtonCheck = new DrukActiesButton(this.page);
        return await actieButtonCheck.optie(menuItem);
        
      }
      else if(tab == 1){
        const actieButtonCheck = new DrukActiesButton(this.tab1);
        return await actieButtonCheck.optie(menuItem);
      }
      else if(tab == 2){
        const actieButtonCheck = new DrukActiesButton(this.tab2);
        return await actieButtonCheck.optie(menuItem);
      }
      else if(tab == 3){
        const actieButtonCheck = new DrukActiesButton(this.tab3);
        return await actieButtonCheck.optie(menuItem);
      }
      else if(tab == 4){
        const actieButtonCheck = new DrukActiesButton(this.tab4);
        return await actieButtonCheck.optie(menuItem);
      }
      
    }

}

