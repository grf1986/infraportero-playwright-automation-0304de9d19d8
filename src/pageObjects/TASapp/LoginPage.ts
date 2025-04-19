import { Locator, Page } from "@playwright/test";
import { context, NewTab } from "../../hooks/hooks";
import { NavigeerNaarTab } from "../../functions/Navigeer/navigeerNaarTab";
import { LoginInFunction } from "../../functions/anders/login";


export class LoginPage {
  readonly page: Page;
//   readonly username: Locator
//   readonly password: Locator;
//   readonly submitbutton: Locator
  private readonly newTab = context.pages();
  readonly tab0  = this.newTab[0];
  readonly tab1  = this.newTab[1];
  readonly tab2  = this.newTab[2];
  readonly tab3  = this.newTab[3];
  readonly tab4  = this.newTab[4];

  constructor(page: Page) {
    this.page = page;
    // this.username = this.page.locator('title="E-mail"');
    // this.password = this.page.locator('title="Wachtwoord"');
    // this.submitbutton = this.page.locator('[type="submit"]');
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
  }
  
  async LoginToApp(username:string,password:string,paginaNummer: number) {

    if(paginaNummer == 0){
      await this.page.waitForLoadState("load");
      const login = new LoginInFunction(this.page);
      await login.PageSize(paginaNummer);
      await login.fillinUsername(username);
      await login.fillinPassword(password);
      await login.PressSubMitButton();
    }
    else if(paginaNummer == 1){
      await this.page.waitForLoadState("load");
      const pageInteract = await NewTab();
       const login =  new LoginInFunction(pageInteract);
      await login.PageSize(paginaNummer);
      await login.fillinUsername(username);
      await login.fillinPassword(password);
      await login.PressSubMitButton();
     }
    else if(paginaNummer == 2){
      await this.page.waitForLoadState("load");
    const pageInteract = await NewTab();
      const login =  new LoginInFunction(pageInteract);
      await login.PageSize(paginaNummer);
      await login.fillinUsername(username);
      await login.fillinPassword(password);
      await login.PressSubMitButton();
  }
    else if(paginaNummer == 3){
      await this.page.waitForLoadState("load");
      const pageInteract = await NewTab();
      const login =  new LoginInFunction(pageInteract);
      await login.PageSize(paginaNummer);
      await login.fillinUsername(username);
      await login.fillinPassword(password);
      await login.PressSubMitButton();
}
    else if(paginaNummer == 4){
      await this.page.waitForLoadState("load");
      const pageInteract = await NewTab();
      const login =  new LoginInFunction(pageInteract);
      await login.PageSize(paginaNummer);
      await login.fillinUsername(username);
      await login.fillinPassword(password);
      await login.PressSubMitButton();
    }
}
async LoginOnSamePage(username:string,password:string,tab: number) {
  await this.page.waitForLoadState("load");
  const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
  if (targetTab){
    const login = new LoginInFunction(targetTab);
    await login.PageSize(tab);
    await login.fillinUsername(username);
    await login.fillinPassword(password);
    await login.PressSubMitButton();  
                          }
                          else { return }
                        }

                        
   async InitieerNieuwePagina(paginaNummer: number) {
    await this.page.waitForLoadState("load");
     if(paginaNummer == 0){
       const login = new LoginInFunction(this.page);
       await login.PageSize(paginaNummer);
       await login.PressSubMitButton();
     }
     else if(paginaNummer == 1){
       const pageInteract = await NewTab();
        const login =  new LoginInFunction(pageInteract);
       await login.PageSize(paginaNummer);
      }
     else if(paginaNummer == 2){
     const pageInteract = await NewTab();
       const login =  new LoginInFunction(pageInteract);
       await login.PageSize(paginaNummer);
   }
     else if(paginaNummer == 3){
       const pageInteract = await NewTab();
       const login =  new LoginInFunction(pageInteract);
       await login.PageSize(paginaNummer);
 }
     else if(paginaNummer == 4){
       const pageInteract = await NewTab();
       const login =  new LoginInFunction(pageInteract);
       await login.PageSize(paginaNummer);
     }
 }

}
