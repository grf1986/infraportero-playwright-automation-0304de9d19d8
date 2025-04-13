// import {Page,expect} from "@playwright/test";
// import BukAppIndex from "../pageObjects/Request_BUK/request_BUK.index";
// import { genericText } from "../statics/Text/genericText";
// import { ILogObj, Logger } from "tslog";
// //import { CheckText } from "../functions/checkText"; 

// const log: Logger<ILogObj> = new Logger();
// export class Check {
//     readonly page: Page;

   
//     constructor(page:Page) {
//     this.page = page;

//     }
 

//     async CheckText(){
//     const BukApp = new BukAppIndex(this.page);
//     log.silly("Check 'Primary Header' tekst: " +genericText.registration+" ");
//     expect(await BukApp.selectClientPage.PrimaryHeaderElementText_Registratie()).toContain(genericText.registration);
//     log.silly("Check 'Secondary Header' tekst");
//     expect(await BukApp.selectClientPage.SecondaryHeaderElementText_Validatie()).toContain(genericText.validate);
//     expect(await BukApp.selectClientPage.SecondaryHeaderElementText_In_behandeling()).toContain(genericText.inProcess);
//     expect(await BukApp.selectClientPage.SecondaryHeaderElementText_Afronding()).toContain(genericText.completed);
//     await BukApp.selectClientPage.pressButton();
//     expect(await BukApp.selectClientPage.CheckOnderSubHeaderTextFunction_Aanmaken_log_zaak()).toContain(genericText.createCaseHeaderText);
//     expect(await BukApp.selectClientPage.CheckOnderSubHeaderTextFunction_Aanmaken_zaakfolder_in_CMIS()).toContain(genericText.updateSVBMessages);
//     expect(await BukApp.selectClientPage.CheckOnderSubHeaderTextFunction_Bijwerken_SVB_berichten()).toContain(genericText.SelectClient);
//     expect(await BukApp.selectClientPage.CheckOnderSubHeaderTextFunction_Selecteren_cliënt()).toContain(genericText.RegisterApplicationData);
//     expect(await BukApp.selectClientPage.CheckOnderSubHeaderTextFunction_Registreren_aanvraaggegevens()).toContain(genericText.RegisterClientData);
//     expect(await BukApp.selectClientPage.CheckOnderSubHeaderTextFunction_Registreren_cliëntgegevens()).toContain(genericText.registrateClient);
//     expect(await BukApp.selectClientPage.CheckOnderSubHeaderTextFunction_Valideren_cliënt()).toContain(genericText.validateClient);
//     expect(await BukApp.selectClientPage.CheckOnderSubHeaderTextFunction_In_behandeling()).toContain(genericText.inProcess);
//     expect(await BukApp.selectClientPage.PrimarySubheaderElementText_Registratie()).toContain(genericText.registration);
//     expect(await BukApp.selectClientPage.SecondarySubheaderElementText_validatie()).toContain(genericText.validate);
//     expect(await BukApp.selectClientPage.SecondarySubheaderElementText_In_behandeling()).toContain(genericText.inProcess);
//     expect(await BukApp.selectClientPage.SecondarySubheaderElementText_Afronding()).toContain(genericText.completed);
//     expect(await BukApp.selectClientPage.CheckTextSelecterenCliënt()).toContain(genericText.RegisterApplicationData);
//     expect(await BukApp.selectClientPage.RegistrerenAanvraaggegevens_text()).toContain(genericText.RegisterClientData);
//     expect(await BukApp.selectClientPage.RegistrerenCliëntgegevens_text()).toContain(genericText.registrateClient);
//     expect(await BukApp.selectClientPage.Indienen_text()).toContain(genericText.Submit);
//     expect(await BukApp.selectClientPage.CheckTextKlantSelecter()).toContain(genericText.cliëntselecterenHeader);
//      }

//   }