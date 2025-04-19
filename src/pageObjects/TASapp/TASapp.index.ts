import { Page } from "@playwright/test";
import { DrukOpPage } from "./drukOpPage";
import { DropDownPage } from "./DropDownPage";
import { FillInPage } from "./fillInPage";
import { CheckTextPage } from "./checkTextPage";
import { WachtenOpPagina } from "./WachtOpPage";
import { DrukOpTypeButton } from "../../functions/DrukOpButton/drukOpTypeButton";





export default class TASapp{

    private readonly page:Page;
    readonly drukOpPage: DrukOpPage;
    readonly dropDownPage:DropDownPage;
    readonly fillInPage:FillInPage
    readonly checkTextPage: CheckTextPage;
    readonly drukopopTypeButton: DrukOpTypeButton;
    readonly wachtOpPagina:WachtenOpPagina;




  
    constructor(page:Page){
        this.page= page;
        this.drukOpPage = new DrukOpPage(this.page);
        this.dropDownPage = new DropDownPage(this.page);
        this.fillInPage = new FillInPage(this.page);
        this.checkTextPage = new CheckTextPage(this.page);
        this.drukopopTypeButton = new DrukOpTypeButton(this.page);
        this.wachtOpPagina = new WachtenOpPagina(this.page);

    }
    
}

