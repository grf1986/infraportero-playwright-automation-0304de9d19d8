import {Locator, Page } from "@playwright/test";
import { DrukOpButtonMetNaam } from "../../functions/DrukOpButtonMetNaam";
import { context, page } from "../../hooks/hooks";
import { waitTime } from "../../statics/Text/testData";
import FunctionAppIndex from "./FunctionApp.index";
import { ZaakOpzoekenFunctie } from "../../functions/zaakOpzoeken";
import { getCaseValueByKey } from "../../functions/getCaseValueByKey";
import { dropDownGeneric } from "../../functions/dropDownGeneric";
import { NavigeerNaarTab } from "../../functions/navigeerNaarTab";

export class ZaakOpzoekenPage {
  readonly page: Page;
  readonly parentLocator: Locator;
  readonly clickAanvragenApp: Locator;
  private readonly newTab = context.pages();
  standaardInformatieZaakResultaat: Locator
  standaardInformatieSelecteerZaakknop: Locator
  standaardInformatieZaakZoeken: Locator
  readonly tab0  = this.newTab[0];
  readonly tab1  = this.newTab[1];
  readonly tab2  = this.newTab[2];
  readonly tab3  = this.newTab[3];
  readonly tab4  = this.newTab[4];

  constructor(page: Page) {
    this.page = page;
    this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]')
    this.clickAanvragenApp = page.locator('[class="psa psa-pega-express app-fact-logo app-logo-r"]');
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
    this.standaardInformatieZaakResultaat = this.parentLocator.locator('[id="po0"] [id="poc0"]');
    this.standaardInformatieSelecteerZaakknop = this.parentLocator.locator('[class="pi pi-caret-down"]');
    this.standaardInformatieZaakZoeken = this.parentLocator.locator('[data-test-id="202302170926510215245"]');
  }

  async zoeken(value: string, tab:number ){
    const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
      if (targetTab){
         await new ZaakOpzoekenFunctie(targetTab).Zoeken(value)
                                }
          else { return }
  }

  async SelecteerZaak(value: string, indexPijl: number, index: number,tab: number, key: string, fileName: string){ 
    {
    const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
    if (targetTab){
      const casebyKey = await getCaseValueByKey(key,fileName)
       await new dropDownGeneric(targetTab).DropDown_Zoeken_Invullen_Generic(casebyKey, indexPijl, index);
       }
        else { return } 
    }
  }

  async ZaakOpzoekenInwerkBak(werkbak: string, index:number, zaakObject:any ,tab: number, ){ 
    {
    const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
    if (targetTab){
      //  await new ZaakOpzoekenFunctie(this.page)
       await new ZaakOpzoekenFunctie(targetTab).ZaakOpzoekenInwerkBak(werkbak,index, zaakObject, );
       }
        else { return } 
    }
  }

}








