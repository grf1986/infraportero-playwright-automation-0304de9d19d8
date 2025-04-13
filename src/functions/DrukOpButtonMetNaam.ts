import { Locator, Page } from "@playwright/test";

import { DrukOpButton } from "./drukOpknop";
import { waitTime } from "../statics/Text/testData";
import { context, page } from "../hooks/hooks";
import { TIMEOUT } from "dns";
import fs from 'fs';
import path from 'path';
import { NavigeerNaarTab } from "./navigeerNaarTab";



export class DrukOpButtonMetNaam {
  readonly mijnApplicatiesBlok: Locator;
  readonly drukOpApp: Locator;
  readonly parentLocator: Locator;
  readonly doorgaan: Locator;
  readonly stuurnaarPrinter: Locator;
  readonly dossierLink: Locator;
  readonly contactGegevensWzd: Locator;
  readonly ziekteBioGrafieBlock: Locator
  readonly actiesButton: Locator;
  readonly vernieuwenButton: Locator;
  readonly actiesBlok: Locator;
  private readonly newTab = context.pages();
  readonly tab0 = this.newTab[0];
  readonly tab1 = this.newTab[1];
  readonly tab2 = this.newTab[2];
  readonly tab3 = this.newTab[3];
  readonly tab4 = this.newTab[4];
  private  caseList: string[] = [];

  constructor(private page: Page) {
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
    this.page = page;
    this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]');
    this.actiesBlok = this.parentLocator.locator('div>[role="menu"]')
    this.mijnApplicatiesBlok = this.parentLocator.locator('[data-methodname="simpleLayout_1"]');
    this.drukOpApp = this.mijnApplicatiesBlok.locator('#RULE_KEY > div.flex.content.layout-content-stacked.content-stacked.margin-b-1x.content-items-maxwidth.centered.cursor-pointer > div.content-item.content-field.item-2.remove-left-spacing.remove-right-spacing.flex.flex-row.width-auto.dataValueRead');
    this.doorgaan = this.parentLocator.locator('[name="pyCaseActionAreaButtons_pyWorkPage_48"]');
    this.stuurnaarPrinter = this.parentLocator.locator("[data-test-id='202402121031360447743'] [type='radio']");
    this.dossierLink = this.parentLocator.locator('[data-test-id="202306081352280548138"]')
    this.contactGegevensWzd = this.parentLocator.locator('[data-test-id="202401171530200256940"]');
    this.ziekteBioGrafieBlock = this.parentLocator.locator('[data-test-id="201902111833400108759"] [data-mdc-id="acprimary"]');
    this.contactGegevensWzd = this.parentLocator.locator('[data-test-id="202401171530200256940"]');
    this.actiesButton = this.page.locator("div >div [class='content-item content-sub_section item-2 remove-all-spacing flex flex-row'] [node_name='CaseActionHeader'] [title='Acties']");
    this.vernieuwenButton = this.actiesBlok.locator('[role="menuitem"]:has-text("Vernieuwen")');
    this.caseList = []
     
  }

  async DrukLabelMetText(type: string,text: string,index: number) {
    await this.page.waitForLoadState("load");
    
    if (type == "label" && text != "Yes" && text  != "No") {
      await this.page.waitForTimeout(200);
      await this.parentLocator.locator("" + `${type}` + ":has-text('" + `${text}` + "')").nth(index).click()  
      await this.page.waitForTimeout(200);

    }

    else if(type == "radio" ){
      await this.page.waitForTimeout(200);
      await this.page.locator("[value='" + `${text}` + "'] ").nth(index).waitFor({state: 'visible'});
      await this.page.locator("[value='" + `${text}` + "'] ").nth(index).click();  
      await this.page.waitForTimeout(200);
      
    }

    else  if (type == "button" && index == 9999){
      await this.page.waitForTimeout(200)
      await this.parentLocator.locator("" + `${type}` + ":has-text('" + `${text}` + "')").click();
      await this.page.waitForLoadState("load");
      await this.page.waitForTimeout(200);
    }
    else  if (type == "button" && index != 9999){
      await this.page.waitForTimeout(200)
      await this.parentLocator.locator("" + `${type}` + ":has-text('" + `${text}` + "')").nth(index).click();
      await this.page.waitForLoadState("load");
      await this.page.waitForTimeout(800);
    }

    else if(type == "checkbox" ){
      await this.page.waitForTimeout(500)
      const button = this.parentLocator.locator("label:has-text('" + `${text}` + "')");
      await button.nth(index).click();
      await this.page.waitForTimeout(200);
    }

    else if(type == "aria label" ){
      const button = this.parentLocator.locator("[aria-label='" + `${text}` + "']");
      await this.page.waitForLoadState("load");
      await this.page.waitForTimeout(10000);
      await button.nth(index).click();
      await this.page.waitForTimeout(200);
    }

    else if(type == "Kebab menu brieven"){
      await this.page.waitForTimeout(200)
      const button = this.parentLocator.locator(`[data-test-id='202401101750130738704']`);
      await button.nth(index).click();
      await this.page.waitForTimeout(200)
    }

    else  if (type == "Menu item"){
      await this.page.waitForTimeout(200)
      const button = this.parentLocator.locator('[class="menu menu-format-standard menu-regular"][style="display: block;"] [class="menu-item-anchor "]')
      await button.locator(":has-text('" + `${text}` + "')").nth(index).click();
      await this.page.waitForTimeout(200);
    
    }else if (type == "n.v.t"){
      
    }
  
  }

  

  async DrukOpApplicatie(app: string,index: number) {
    await this.mijnApplicatiesBlok.locator(":has-text('" + `${app}` + "')").nth(index).click();
  }


  async hasText(text: string, index:number) {
    if (text == 'BUK') {
      const button = this.drukOpApp.locator(":has-text('" + `${text}` + "')");
      await button.nth(index).click()
    }
    else if (text == 'Datum toevoegen') {
      const button = this.ziekteBioGrafieBlock.locator("button:has-text('" + `${text}` + "')");
      await button.nth(index).click()
    }

    else if (text == 'Wlz-Wzd') {
      const button = this.drukOpApp.locator(":has-text('" + `${text}` + "')");
      await button.nth(index).click()
    }
    else if (text == 'Klachten') {
      const button = this.parentLocator.locator("[data-test-id='202007021347150484875']:has-text('" + `${text}` + "')");
      await button.nth(index).click();
    }
    else if (text == 'Ga') {
      const button = this.parentLocator.locator("[data-test-id='20190208081744082718727']:has-text('" + `${text}` + "')");
      await button.nth(index).click();
    }
    else if (text == 'Indienen') {
      const button = this.parentLocator.locator("[data-test-id='2014121801251706289770']:has-text('" + `${text}` + "')").first();
      await button.nth(index).click();
      await this.page.waitForTimeout(200);
    }
      else if (text == 'Bijsluitbrief Indienen') {
        const button = this.parentLocator.locator("[data-test-id='20231220033159041140']").first();
        await button.nth(index).click();
        await this.page.waitForTimeout(200);

      }else if (text == 'Indienen op outputinfo popup') {
        const button = this.parentLocator.locator("[title='Indienen']");
        await button.nth(index).click();
        await this.page.waitForTimeout(200);


    }
    else if (text == 'Aanvraag') {
      const button = this.drukOpApp.locator(":has-text('" + `${text}` + "')");
      await button.nth(index).click();

    }
    else if (text == 'Zoek cliënt') {
      const button = this.parentLocator.locator("[data-test-id='202303201055260643212']:has-text('" + `${text}` + "')");
      await button.nth(index).click()
    }
    else if (text == 'Doorgaan') {
      await this.page.waitForTimeout(200)
      const button = this.parentLocator.locator("button:has-text('" + `${text}` + "')");
      await this.page.waitForTimeout(1000);
      await button.nth(index).click({ delay: 2000 });
      await this.page.waitForTimeout(7000);
    }
    else if (text == 'post') {
      await this.page.waitForTimeout(200)
      const button = this.parentLocator.locator("[data-test-id='202408131702020220432'] [for='52050faePostal']:has-text('" + `${text}` + "')");
      await this.page.waitForSelector("[data-test-id='202408131702020220432']");
      await button.nth(index).click({ delay: 2000 });
    }
    else if (text == 'email') {
      await this.page.waitForTimeout(200)
      const button = this.parentLocator.locator("[data-test-id='202408131702020220432'] [for='52050faeEmail']:has-text('" + `${text}` + "')");
      await this.page.waitForSelector("[data-test-id='202408131702020220432']");
      await button.nth(index).click({ delay: 2000 });
    }
    // else if (text == 'Ja') {
    //   await this.page.waitForTimeout(200)
    //   const button = this.parentLocator.locator("[data-test-id='202408141042580952593'] [id='7a4bcffbtrue']");
    //   await this.page.waitForSelector("[data-test-id='202408141042580952593']");
    //   await button.click();
    // }
    else if (text == 'Ja') {
      await this.page.waitForTimeout(200)
      const button = this.parentLocator.locator("[value='Yes']");
      await button.nth(index).click();
      await this.page.waitForTimeout(2000)
    }
    else if (text == 'Grondslag') {
      await this.page.waitForTimeout(200)
      const button = this.parentLocator.locator("[value='Groundwork']");
      await button.nth(index).click();
      await this.page.waitForTimeout(2000)
    }
    else if (text == 'Geen Grondslag') {
      await this.page.waitForTimeout(200)
      const button = this.parentLocator.locator("[value='NoBasis']");
      await button.nth(index).click();
      await this.page.waitForTimeout(2000)
    }
    else if (text == 'Nee') {
      await this.page.waitForTimeout(200)
      const button = this.parentLocator.locator("[value='No']");
      await button.nth(index).click();
      await this.page.waitForTimeout(2000)
    }
    // else if (text == 'Nee') {
    //   await this.page.waitForTimeout(200)
    //   const button = this.parentLocator.locator("[data-test-id='202408141042580952593'] [for='7a4bcffbfalse']:has-text('" + `${text}` + "')");
    //   await this.page.waitForSelector("[data-test-id='202408141042580952593'] [for='7a4bcffbfalse']");
    //   await button.click({ delay: 2000 });
    // }

    else if (text == 'Aanmaken') {
      await this.page.waitForTimeout(1000)
      const button = this.parentLocator.locator("[name='pyCaseActionAreaButtons_pyWorkPage_53']:has-text('" + `${text}` + "')");
      await button.nth(index).click();
    }
    else if (text == 'Ja (doorgaan)') {
      const button = this.parentLocator.locator("[data-test-id='2014121801251706289770']:has-text('" + `${text}` + "')");
      await button.nth(index).click();
    }
    else if (text == 'Voltooien') {
      const button = this.parentLocator.locator("[data-test-id='20161017110917023277518']:has-text('" + `${text}` + "')");
      await button.nth(index).click();
    }
    else if (text == 'Relatie toevoegen') {
      const button = this.parentLocator.getByRole('button', { name: `${text}` });
      await button.nth(index).click();
    }
    else if (text == 'Relatie wijzigen') {
      const button = this.parentLocator.locator("[data-test-id='202304131315220691501']:has-text('" + `${text}` + "')");
      await button.nth(index).click();
    }
    else if (text == 'CIZPrinter1') {
      const drukop = new DrukOpButton();
      await drukop.Button(this.stuurnaarPrinter.nth(index));
    }
    else if (text == 'Stage progress') {
      const button = this.parentLocator.locator("[data-test-id='201803061337530724961']");
      await button.nth(index).click();
    
      }
    else if (text == 'Toegangscode') {
      const button = this.parentLocator.locator("[id='579f6febaccesscode']");
      await button.nth(index).click();
      }

    else if (text == 'Documenten') {
       const button = this.parentLocator.locator("[data-test-id='201902080349360159366'] [class='menu-item-title-wrap']");
      // const button = this.parentLocator.locator("[data-test-id='201812102006260055506_7']");
      await button.filter({ hasText: 'Documenten' }).click();
    }
    else if (text == 'WzD:RMVraag1'){
      const button = this.parentLocator.locator('[id="e4c7e74aYes"]')
      await button.nth(index).click()
    }
    else if (text == 'WzD:RMVraag2'){
      const button = this.parentLocator.locator('[id="d61dafa6No"]')
      await button.nth(index).click()
    }
    else if(text == 'Aanvrager') {
      await this.contactGegevensWzd.nth(index).click()
    }
    else if(text == 'Zorgaanbieder') {
      await this.contactGegevensWzd.nth(index).click()
    }
    else if(text == 'Zorgverantwoordelijke'){
      await this.contactGegevensWzd.nth(index).click()
    }
    else if(text == 'Functionaris'){
      await this.contactGegevensWzd.nth(index).click()
    }
    else if(text == 'Belanghebbende'){
      await this.contactGegevensWzd.nth(index).click()
    }
    else if(text == 'Belanghebbende 2'){
      await this.contactGegevensWzd.nth(index).click()
    }
//     if(text == 'Aanvraag ondertekend door een bevoegde aanvrager'){
//       const button = new DrukOpButtonMetNaam(this.page);
//       await this.bevoegdeAanvrager.nth(index).click()
//     }
//     else if(text == 'Bewijsstuk wettelijke vertegenwoordiging'){
//       await this.wettelijkeVertegenwoordiging.nth(index).click()
//     }
//     else if(text == 'Medische verklaring aanwezig'){
//       await this.medischeVerklaring.nth(index).click()
//     } 
//     else if(text == 'Zorgplan aanwezig (indien nodig)'){
//       await this.zorgPlan.nth(index).click() 
//    }
//     else if (text == 'Zorgplan is max. 6 maanden oud'){
//       await this.zorgPlan6maanden.nth(index).click()
//     }
//     else if (text == 'Beschikking huidige machtiging(zn)')
//     {
//       await this.huidigeMachtiging.nth(index).click()
//     }
//     else if (text == 'Afhandelingstermijn aanvraag klopt'){
//       await this.afhandelingsTermijnAanvraag.nth(index).click()
//     }
//     else if (text == 'Contactgegevens aanvrager ingevuld'){
//       await this.contactGegevensIngevuld.nth(index).click()
//     }
//     else if (text == 'contactGegevensBelanghebbendeIngevuld'){
//       await this.contactGegevensBelanghebbendeIngevuld.nth(index).click()
//     }
//     else if (text == 'Medische verklaring ontvangen'){
//       await this.medischeVerklaringOntvangen.nth(index).click()
//     }
//     else if (text == 'Is er sprake van verlenging RM'){
//       await this.isErSprakeVanVerlengingRM.nth(index).click()
//     }
//     else if (text == 'Spoed'){
//       await this.spoed.nth(index).click()
//     }
//     else if (text == 'Is er een grondslag aanwezig'){
//       await this.isErEenGrondSlagAanwezig.nth(index).click()
//     }
//     else if (text == 'Bij de zorg betrokken arts/zorgaanbieders geraadpleegd'){
//       await this.bijDeZorgBetrokkenArtsZorgaanbiedersGeraadpleegd.nth(index).click()
//     }
//     else if (text == 'Bron vermeld'){
//       await this.bronVermeld.nth(index).click()
//   }
//   else if (text == 'Is er sprake van bijkomende psychische problematiek'){
//     await this.isErSprakeVanBijkomendePsychischeProblematiek.nth(index).click()
//   }
//   else if (text == 'Zo ja, is inschakelen van een psychiater noodzakelijk'){
// await this.zoJaIsInschakelenVanEenPsychiaterNoodzakelijk.nth(index).click()
// }
// else if (text == 'Is er sprake van ernstig nadeel'){
//   await this.isErSprakeVanErnstigNadeel.nth(index).click()
// }
// else if (text == 'Bron aanwezig'){
// await this.bronAanwezig.nth(index).click()
//   }
// else if (text == 'Causaal verband tussen diagnose en ernstig nadeel aanwezig'){
//   await this.causaalVerbandTussenDiagnoseEnErnstigNadeelAanwezig.nth(index).click()
// }
// else if (text == 'Noodzaak opname beschreven'){
//   await this.noodzaakOpnameBeschreven.nth(index).click()
// }
// else if (text == 'Minder ingrijpende maatregelen mogelijk'){
//   await this.minderIngrijpendeMaatregelenMogelijk.nth(index).click()
// }
// else if (text == 'Ondertekend'){
// await this.onderTekend.nth(index).click()

//   }
//   else if (text == 'Arts heeft betrokkene zelf onderzocht'){
// await this.artsHeeftBetrokkeneZelfOnderzocht.nth(index).click()
// }

//   else if (text == 'Actie vereist'){
//   await this.actieVereist.nth(index).click()
//   }
}
    async  saveCaseToFile(caseId: string, scenario: string, fileName: string): Promise<void> {
      const jsonFilePath = path.resolve('TestData', fileName);
      interface CaseData {
        [key: string]: string;
      }
      let caseData: CaseData[] = [];
    
      // Check if the file exists and read its content if it does
      if (fs.existsSync(jsonFilePath)) {
        const fileContent = fs.readFileSync(jsonFilePath, 'utf-8');
        caseData = JSON.parse(fileContent);
      }
    
      // Create a new key combining caseId and scenario
      const caseKey = `caseID-${scenario}`;
      const newCase = { [caseKey]: caseId };
    
      // Check if the new case already exists in the list
      if (!caseData.some((c) => c[caseKey] === caseId)) {
        caseData.push(newCase);
        fs.writeFileSync(jsonFilePath, JSON.stringify(caseData, null, 2), 'utf-8');
      }
    }
  
    async DrukOpLinkMetNaam(dossier: string, scenario: string,) : Promise<void> {
      await this.page.waitForLoadState("load");
      const dataTestId = "[data-test-id='2016072109335505834280']";
      
      while (true) { // Keep checking until the link is found and clicked
        const links = await this.page.$$(dataTestId);
        let linkFound = false;
    
        for (const link of links) {
          const linkText = await link.textContent();
          if (linkText && linkText.trim().startsWith(dossier)) {
            //await this.saveCaseToFile(linkText.trim(), scenario, fileName); // Save case details
            //this.addToList
            // await this.page.waitForTimeout(60000);
            await this.page.locator(dataTestId + `:has-text("${linkText.trim()}")`).click(); // Click the correct link
            linkFound = true;
            break;
          }
        }
  
    
        if (linkFound) {
          break; // Exit loop after clicking the correct link
        } else {
          // Handle case when the link is not found: refresh or trigger actions
          const druk = new DrukOpButton();
          await druk.Button(this.actiesButton); // Click "acties" button
          await this.page.waitForSelector('[role="menuitem"]:has-text("Vernieuwen")'); // Wait for "Vernieuwen" option
          await druk.Button(this.vernieuwenButton); // Refresh the page
          await this.page.waitForTimeout(2000); // Wait briefly before rechecking
        }
      }
    }

    async AddCaseAanFile(dossier: string, scenario: string, fileName: string): Promise<string[]> {
      const dataTestId = "[data-test-id='20190510022618055338234']";
  
      while (true) { // Keep checking until the matching element is found
          const elements = await this.page.$$(dataTestId);
          let elementFound = false;
  
          for (const element of elements) {
              const elementText = await element.textContent();
  
              if (elementText && elementText.trim().startsWith(dossier)) {
                  await this.saveCaseToFile(elementText.trim(), scenario, fileName); // Save case details
                  
                  this.caseList.push(elementText.trim()); // Update case list
                  elementFound = true;
                  break;
              }
          }
  
          if (elementFound) {
              return this.caseList; 
          } else {
              console.log("CaseID not Found");
              return this.caseList; 
          }
      }
  }
 
  
    



  async DrukOpChildCaseMetNaam(dossier: string) {
    const dataTestId = "[data-test-id='20190208082033073432148']"
    const links = await this.page.$$(`${dataTestId}`);

    for (const link of links) {
      const linkText = await link.textContent();
      if (linkText && linkText.trim().startsWith(dossier)) {
        await link.click();
        break;
      }
    }

  }

  async WachtOpPagina(tijd: string) {
    const tijdNaarInt = Number(tijd)
    await this.page.waitForTimeout(tijdNaarInt);
  }


}