import {Locator, Page } from "@playwright/test";
import { DrukOpButtonMetNaam } from "../../functions/DrukOpButtonMetNaam";
import { context, page } from "../../hooks/hooks";
import { waitTime } from "../../statics/Text/testData";
import FunctionAppIndex from "./FunctionApp.index";
import { NavigeerNaarTab } from "../../functions/navigeerNaarTab";
import { DrukDossierFile } from "../../functions/drukDossierFile";
import { GerelateerdeDossiers } from "../../functions/gerelateerdeDossiers";


export class DrukOpPage {
  readonly page: Page;
  readonly clickAanvragenApp: Locator;
  private readonly newTab = context.pages();
  readonly tab0  = this.newTab[0];
  readonly tab1  = this.newTab[1];
  readonly tab2  = this.newTab[2];
  readonly tab3  = this.newTab[3];
  readonly tab4  = this.newTab[4];

  constructor(page: Page) {
    this.page = page;
    this.clickAanvragenApp = page.locator('[class="psa psa-pega-express app-fact-logo app-logo-r"]');
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
  }

  async ClickOnAanvragenApp(){
    await this.page.waitForLoadState();
    await this.page.reload();
    await this.clickAanvragenApp.nth(0).click();
  }


   
       async DrukOpZaakLink(tab: number, dossier: string,scenario: string) {
           const targetPage = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
           if (targetPage){
               await new DrukDossierFile(targetPage).FileLink(tab, dossier, scenario, )
           }
           else {return}
       }

   async DrukOpTypeKnop(type: string,text: string,index: number,tab: number){
            const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
                if (targetTab){
                await new DrukOpButtonMetNaam(targetTab).DrukLabelMetText(type,text,index);
                }
                else { return 
                  
                }
   }

   async DrukOpApplicatie(app: string,index: number,tab: number){
    const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
    if (targetTab){
    await new DrukOpButtonMetNaam(targetTab).DrukOpApplicatie(app, index);
    }
    else { return }
   }


   async AddCaseAanFile(dossier: string,scenario: string, fileName: string, tab: number){
    const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
    if (targetTab){
   return await new DrukOpButtonMetNaam(targetTab).AddCaseAanFile(dossier,scenario, fileName );
    }
    else { return }
   }

   async DrukOPGerelateerdeDossiers(button:string, index: number, tab: number){
    const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
    if (targetTab){
   return await new GerelateerdeDossiers(targetTab).DrukOPGerelateerdeDossiers(button, index)
    }
    else { return }
   }

   async WachtOpPagina( tijd: string,tab: number){ {
    const targetPage = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
    if (targetPage){
        await new DrukOpButtonMetNaam(targetPage).WachtOpPagina(tijd)
    }
    else {return}
}







}

}
