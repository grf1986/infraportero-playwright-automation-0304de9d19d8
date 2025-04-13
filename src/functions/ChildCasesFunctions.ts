// import {Page,Locator} from "@playwright/test";
// import { DrukOpButton } from "./drukOpknop";
// import { waitTime } from "../statics/Text/testData";
// import { Locator2String } from "../helpers/getSelectorAsString";
// import { FillInFunction } from "./fillInFunction";
// import { dropDownGeneric } from "./dropDownGeneric";

// export class ChildCasesFunctions {

//     readonly parentLocator: Locator;
//     readonly consultatiePopUp: Locator;
//     readonly kiesTypeConsultie: Locator;
//     readonly zorgProfielConsultatie: Locator;
//     readonly collega_resultaat: Locator;
//     readonly collegaSelecteerDropDown: Locator;
//     readonly collegaZoeken: Locator;
//     readonly autorisatieJa: Locator;
//     readonly autorisatieNee: Locator;
//     readonly consultatieOnderwerp: Locator;
//     readonly gedragErnstigNadeelJa: Locator;
//     readonly vastgesteldPsychischeStoornisJa: Locator;
//     readonly vastgesteldOpnameNoodzakelijkJa: Locator;
//     readonly vastgesteldOpnameJa: Locator;
//     readonly vastgesteldMinderIngrijpendJa: Locator;
//     readonly vastgesteldVertegenwoordigerJa: Locator;
//     readonly vastgesteldMondelingMedegedeeldJa: Locator;
//     readonly vastgesteldHoudingClientJa: Locator;
//     readonly vastgesteldGeldigheidsDuurJa: Locator;
//     readonly gezamenlijkeConclusieDropdown: Locator;
//     readonly aanpassingClientDossier: Locator;
//     readonly switchNarHoofdCase: Locator;
//     readonly hoofdCase: Locator;
    

//     constructor(private page: Page) {
//      this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]');
//     this.consultatiePopUp = this.page.locator('[class=" flex content layout-content-stacked  content-stacked  case-action-area"]');
//     this.kiesTypeConsultie = this.consultatiePopUp.locator('[data-test-id="202404171253460197172"]');
//     this.zorgProfielConsultatie = this.consultatiePopUp.locator('[data-test-id="202404181457550510740"]');
//     this.collega_resultaat = this.consultatiePopUp.locator('[data-rowid="1"]');
//     this.collegaSelecteerDropDown = this.consultatiePopUp.locator('[class="pi pi-caret-down"]');
//     this.collegaZoeken = this.consultatiePopUp.locator('[id="cd9b4c05"]');
//     this.autorisatieJa = this.consultatiePopUp.locator('[id="9666b1b8Yes"]');
//     this.autorisatieNee = this.consultatiePopUp.locator('[id="9666b1b8No"]');
//     this.gedragErnstigNadeelJa = this.parentLocator.locator('[id="5b72c597Yes"]');
//     this.vastgesteldPsychischeStoornisJa = this.parentLocator.locator('[id="6ee725fbYes"]');
//     this.vastgesteldOpnameNoodzakelijkJa = this.parentLocator.locator('[id="ca5adae2Yes"]');
//     this.vastgesteldOpnameJa = this.parentLocator.locator('[id="1a99c0d7Yes"]');
//     this.vastgesteldMinderIngrijpendJa = this.parentLocator.locator('[id="97e9737bYes"]');
//     this.vastgesteldVertegenwoordigerJa = this.parentLocator.locator('[id="8e151517Yes"]');
//     this.vastgesteldMondelingMedegedeeldJa = this.parentLocator.locator('[id="0f4516a9Yes"]');
//     this.vastgesteldHoudingClientJa = this.parentLocator.locator('[id="9885c44cYes"]');
//     this.vastgesteldGeldigheidsDuurJa = this.parentLocator.locator('[id="8bbd5572Yes"]');
//     this.consultatieOnderwerp = this.consultatiePopUp.locator('[data-test-id="202404171256250791643"]');
//     this.gezamenlijkeConclusieDropdown = this.parentLocator.locator('[data-test-id="202407081557170443932"]');
//     this.aanpassingClientDossier = this.parentLocator.locator('[data-test-id="202407081604160121150"]')
//     this.switchNarHoofdCase = this.parentLocator.locator('[data-test-id="20190807140236093243868"]');
//     this.hoofdCase = this.parentLocator.locator('[data-test-id="201908061631020958997a889e-de1b-4fc6-8449-0d0299356eb8780"]');

//     }

// async KiesTypeConsultatie(typeConsultatie:string,index:number){

//         const visible = await this.consultatiePopUp.nth(0).isVisible();
//         while(visible){
//             const select = new dropDownGeneric(this.page);
//             if(typeConsultatie == 'Intercollegiale consultatie'){
//                 await select.SelectOptionByValue( typeConsultatie,index);
//             }else if (typeConsultatie == 'Consultatie van adviseur'){
//                 await select.SelectOptionByValue(typeConsultatie,index);
//             }else if (typeConsultatie == 'Consultatie van adviseur bijzonder onderzoek'){
//                 await select.SelectOptionByValue(typeConsultatie,index);
//             } break;
//    }

//  }

//  async ConsultatieVanCollega(collega:string, indexPijl: number, index: number){
//     if(collega == 'functioneelBeheer'){
//         const dropDown = new dropDownGeneric(this.page);
//          await dropDown.DropDown_Zoeken_Invullen_Generic(collega, indexPijl, index);
//     }else if(collega == 'TestGebruiker'){
//         const dropDown = new dropDownGeneric(this.page);
//          await dropDown.DropDown_Zoeken_Invullen_Generic(collega, indexPijl, index);
//     }else if(collega == 'n.v.t'){
//         const dropDown = new dropDownGeneric(this.page);
//          await this.collega_resultaat.waitFor({ state: "hidden" })
//     }
     
//  }
//  async KiesZorgProfiel(zorgProfielConsultatie:string,index:number){
//     const select = new dropDownGeneric(this.page);
//     if(zorgProfielConsultatie == 'GGZ'){
//         await select.SelectOptionByValue(zorgProfielConsultatie,index);
//     }else if (zorgProfielConsultatie == 'LG'){
//         await select.SelectOptionByValue(zorgProfielConsultatie,index);
//     }else if (zorgProfielConsultatie == 'LVG'){
//         await select.SelectOptionByValue(zorgProfielConsultatie,index);
//     }else if (zorgProfielConsultatie == 'n.v.t.'){
//         await select.SelectOptionByValue(zorgProfielConsultatie,index);
//     }
//   }

//   async AutorisatieNodigConsultatie(autorisatieNodig:string){
//     if(autorisatieNodig == 'Ja'){
//         const drukOp = new DrukOpButton();
//         await drukOp.Button(this.autorisatieJa);

//     }else if(autorisatieNodig == 'Nee'){
//         const drukOp = new DrukOpButton();
//         await drukOp.Button(this.autorisatieNee);

//     }else if(autorisatieNodig == 'n.v.t.'){
//         await this.autorisatieJa.waitFor({ state: "hidden" })
// }
//   }

//   async VulInConsultatieOnderwerp(consulatieOnderwerp:string){
    
//     if(consulatieOnderwerp == 'ja'){ 
//         const invullen = new FillInFunction(this.page);
//         await invullen.Type_veld(0,"Dit is een onderwerp");
//    }else if(consulatieOnderwerp == 'n.v.t.'){ 
//         await this.consultatieOnderwerp.waitFor({ state: "hidden" })
//    }
//   }
//   async GedragErnstigNadeel(GedragErnstigNadeel:string){
//     if(GedragErnstigNadeel == 'Ja'){
//         const drukOp = new DrukOpButton();
//         await drukOp.Button(this.gedragErnstigNadeelJa);
//         await drukOp.Button(this.vastgesteldPsychischeStoornisJa);
//         await drukOp.Button(this.vastgesteldOpnameNoodzakelijkJa);
//         await drukOp.Button(this.vastgesteldOpnameJa);
//         await drukOp.Button(this.vastgesteldMinderIngrijpendJa);
//         await drukOp.Button(this.vastgesteldVertegenwoordigerJa);
//         await drukOp.Button(this.vastgesteldMondelingMedegedeeldJa);
//         await drukOp.Button(this.vastgesteldHoudingClientJa);
//         await drukOp.Button(this.vastgesteldGeldigheidsDuurJa);

//   }
// }

//  async GezamenlijkeConclusie(gezamenlijkeConclusie:string, index:number){
//     const select = new dropDownGeneric(this.page);
// if (gezamenlijkeConclusie = 'Voorgenomen conclusie blijft staan'){
//     await select.SelectOptionByValue(gezamenlijkeConclusie,index);
//  }else if(gezamenlijkeConclusie = 'Voorgenomen dossier en clientdossier dienen te worden aangepast')
//     await select.SelectOptionByValue(gezamenlijkeConclusie,index);
// }


// async AanpassingClientDossier(aanpassingClientDossier:string,index:number){
//     const select = new dropDownGeneric(this.page);
// if (aanpassingClientDossier = 'Er is geen aanpassing in het cliëntdossier nodig'){
//     await select.SelectOptionByValue(aanpassingClientDossier,index);
//  }else if(aanpassingClientDossier = 'Er is een aanpassing in het cliëntdossier nodig')
//     await select.SelectOptionByValue(aanpassingClientDossier,index);
// }

// async SwitchNaarHoofdCase(){
//     const drukOp = new DrukOpButton();
//     await drukOp.Button(this.switchNarHoofdCase);
//     await this.hoofdCase.waitFor({ state: "visible" })
//     await drukOp.Button(this.hoofdCase)
// }
// }

