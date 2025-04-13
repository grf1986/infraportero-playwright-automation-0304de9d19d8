import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { SelectActionPage } from "./SelectActionPage";
import { TakenOverzichtPage } from "./TakenOverzichtPage";
import { CleanupTestPage } from "./cleanUpTest";
import { beeindig_Andere_sessiePage } from "./beeindig_Andere_sessiePage";
import { ZaakOpzoekenPage } from "./zaakOpzoekenPage";
import { DrukOpPage } from "./drukOpPage";
import { DropDownPage } from "./DropDownPage";
import { FillInPage } from "./fillInPage";
import { NavigeerNaarPage } from "./navigeerNaarPage";
import { SideBarPage } from "./SideBarPage";
import { Reload } from "./reloadPage";
import { UploadPage } from "./uploadPage";
import { SelecteerWerkWachtRijPage } from "./SelecteerWerkbak";
import { CheckTextPage } from "./checkTextPage";
import { LocalActien_Return_Items_as_ListPage } from "./localActien_Return_Items_as_ListPage";




export default class FunctionAppIndex{
    readonly takenOverzichtPage: TakenOverzichtPage
    private readonly page:Page;
    readonly loginPage: LoginPage;
    readonly SelectActionPage: SelectActionPage;
    readonly cleanupTestPage: CleanupTestPage;
    readonly beeindigAndereSessiePage:beeindig_Andere_sessiePage;
    readonly drukOpPage: DrukOpPage;
    readonly zaakOpzoekenPage: ZaakOpzoekenPage;
    readonly dropDownPage:DropDownPage;
    readonly fillInPage:FillInPage
    readonly navigeerNaarPage: NavigeerNaarPage;
    readonly sideBarPage: SideBarPage
    readonly reload: Reload
    readonly uploadPage:UploadPage
    readonly selecteerWerkwachtrijen:SelecteerWerkWachtRijPage
    readonly checkTextPage: CheckTextPage
    readonly localActien_Return_Items_as_ListPage: LocalActien_Return_Items_as_ListPage;



  
    constructor(page:Page){
        this.page= page;
        this.loginPage = new LoginPage(this.page);
        this.SelectActionPage = new SelectActionPage(this.page);
        this.takenOverzichtPage = new TakenOverzichtPage(this.page);
        this.cleanupTestPage = new CleanupTestPage(this.page);
        this.beeindigAndereSessiePage = new beeindig_Andere_sessiePage(this.page);
        this.drukOpPage = new DrukOpPage(this.page);
        this.zaakOpzoekenPage = new ZaakOpzoekenPage(this.page);
        this.dropDownPage = new DropDownPage(this.page);
        this.fillInPage = new FillInPage(this.page);
        this.navigeerNaarPage = new NavigeerNaarPage(this.page);
        this.sideBarPage = new SideBarPage(this.page);
        this.reload =  new Reload(this.page);
        this.uploadPage = new UploadPage(this.page);
        this.selecteerWerkwachtrijen = new SelecteerWerkWachtRijPage(this.page);
        this.checkTextPage = new CheckTextPage(this.page)
        this.localActien_Return_Items_as_ListPage = new LocalActien_Return_Items_as_ListPage(this.page)
    }
    
}

