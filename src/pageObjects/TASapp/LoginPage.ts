// import { Locator, Page } from "@playwright/test";
// import { FillInFunction } from "../../functions/Invullen/fillInFunction";
// import { LoginInFunction } from "../../functions/login";
// import { context, NewTab } from "../../hooks/hooks";
// import { Locator2String } from "../../helpers/getSelectorAsString";
// import { NavigeerNaarTab } from "../../functions/Navigeer/navigeerNaarTab";


// export class LoginPage {
//   readonly page: Page;
//   readonly username: Locator
//   readonly password: Locator;
//   readonly submitbutton: Locator
//   private readonly newTab = context.pages();
//   readonly tab0  = this.newTab[0];
//   readonly tab1  = this.newTab[1];
//   readonly tab2  = this.newTab[2];
//   readonly tab3  = this.newTab[3];
//   readonly tab4  = this.newTab[4];

//   constructor(page: Page) {
//     this.page = page;
//     this.username = this.page.locator('[id="txtUserID"]');
//     this.password = this.page.locator('[id="txtPassword"]');
//     this.submitbutton = this.page.locator('[id="sub"]');
//     this.tab1 = this.newTab[1];
//     this.tab2 = this.newTab[2];
//     this.tab3 = this.newTab[3];
//     this.tab4 = this.newTab[4];
//   }
  
//   async LoginToApp(username:string,password:string,paginaNummer: number) {

//     if(paginaNummer == 0){
//       const login = new LoginInFunction(this.page);
//       await login.PageSize(paginaNummer);
//       await login.fillinUsername(username);
//       await login.fillinPassword(password);
//       await login.PressSubMitButton();
//     }
//     else if(paginaNummer == 1){
//       const pageInteract = await NewTab();
//        const login =  new LoginInFunction(pageInteract);
//       await login.PageSize(paginaNummer);
//       await login.fillinUsername(username);
//       await login.fillinPassword(password);
//       await login.PressSubMitButton();
//      }
//     else if(paginaNummer == 2){
//     const pageInteract = await NewTab();
//       const login =  new LoginInFunction(pageInteract);
//       await login.PageSize(paginaNummer);
//       await login.fillinUsername(username);
//       await login.fillinPassword(password);
//       await login.PressSubMitButton();
//   }
//     else if(paginaNummer == 3){
//       const pageInteract = await NewTab();
//       const login =  new LoginInFunction(pageInteract);
//       await login.PageSize(paginaNummer);
//       await login.fillinUsername(username);
//       await login.fillinPassword(password);
//       await login.PressSubMitButton();
// }
//     else if(paginaNummer == 4){
//       const pageInteract = await NewTab();
//       const login =  new LoginInFunction(pageInteract);
//       await login.PageSize(paginaNummer);
//       await login.fillinUsername(username);
//       await login.fillinPassword(password);
//       await login.PressSubMitButton();
//     }
// }
// async LoginOnSamePage(username:string,password:string,tab: number) {

//   const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
//   if (targetTab){
//     const login = new LoginInFunction(targetTab);
//     await login.PageSize(tab);
//     await login.fillinUsername(username);
//     await login.fillinPassword(password);
//     await login.PressSubMitButton();  
//                           }
//                           else { return }
//                         }

                        
//    async InitieerNieuwePagina(paginaNummer: number) {
//      if(paginaNummer == 0){
//        const login = new LoginInFunction(this.page);
//        await login.PageSize(paginaNummer);
//        await login.PressSubMitButton();
//      }
//      else if(paginaNummer == 1){
//        const pageInteract = await NewTab();
//         const login =  new LoginInFunction(pageInteract);
//        await login.PageSize(paginaNummer);
//       }
//      else if(paginaNummer == 2){
//      const pageInteract = await NewTab();
//        const login =  new LoginInFunction(pageInteract);
//        await login.PageSize(paginaNummer);
//    }
//      else if(paginaNummer == 3){
//        const pageInteract = await NewTab();
//        const login =  new LoginInFunction(pageInteract);
//        await login.PageSize(paginaNummer);
//  }
//      else if(paginaNummer == 4){
//        const pageInteract = await NewTab();
//        const login =  new LoginInFunction(pageInteract);
//        await login.PageSize(paginaNummer);
//      }
//  }

// }
