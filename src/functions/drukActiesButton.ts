import {Page,Locator} from "@playwright/test";
import { DrukOpButton } from "./drukOpknop";
import { waitTime } from "../statics/Text/testData";
import { ILogObj, Logger } from "tslog";
import { Return } from "./returnNumberOfListItems";

export class DrukActiesButton {

    readonly parentLocator: Locator;
    readonly actiesButton: Locator;
    readonly vernieuwenButton: Locator;
    readonly geschiedenisWeergeven:Locator;
    readonly tagsBeheren: Locator
    readonly meldingenBeheren: Locator
    readonly faseWijzigen: Locator;
    readonly verzoekWMC: Locator
    readonly taakOverdragen: Locator;
    readonly vastmakenAanRecenteItem: Locator;
    readonly actiesBlok: Locator;
    readonly taken: Locator
    readonly opstellen_verzoek_aan_medisch_adviseur: Locator;
    readonly opstellen_verzoek_aan_medisch_adviseur_BRP_Case: Locator
    readonly opstellen_verzoek_aan_medisch_adviseur_WLZ: Locator
    readonly opstellen_wettelijke_medische_consultatie: Locator;
    readonly consultatieAanvragen: Locator;
    readonly verlenenVoorrang: Locator
    readonly subActiesBlok: Locator
    readonly locatorResult: Locator
    readonly verlenenVoorrangBezwaar: Locator
    readonly verlenenVoorrangWLZ: Locator
    private arrayActies: string[] = []
    readonly wijzigProcessInformatie: Locator;
    readonly IndienenOpOutputInfoPopup: Locator;
    readonly verwerkenDefinitieveUitspraakRechtbank: Locator;
    readonly vastleggenUitspraak: Locator;
    readonly vervallen: Locator
    readonly afbreken: Locator
    readonly maakAHZaakaan:Locator;
    readonly wachtOpOm:Locator;
    readonly vastleggenReactieOM:Locator;
    readonly correctieVastleggenUitspraak: Locator;
    readonly registrerenOpname: Locator
    
    

    constructor(private page: Page) {
    this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]');
    this.actiesBlok = this.parentLocator.locator('div>[role="menu"]')
    this.actiesButton = this.page.locator("div >div [class='content-item content-sub_section item-2 remove-all-spacing flex flex-row'] [node_name='CaseActionHeader'] [title='Acties']");
    this.vernieuwenButton = this.actiesBlok.locator('[role="menuitem"]:has-text("Vernieuwen")');
    this.geschiedenisWeergeven = this.actiesBlok.locator('[role="menuitem"]:has-text("Geschiedenis weergeven")');
    this.tagsBeheren = this.actiesBlok.locator('[role="menuitem"]:has-text("Tags beheren")');
    this.meldingenBeheren = this.actiesBlok.locator('[role="menuitem"]:has-text("Meldingen beheren")');
    this.faseWijzigen = this.actiesBlok.locator('[role="menuitem"]:has-text("Fase wijzigen")');
    this.verzoekWMC = this.actiesBlok.locator('[role="menuitem"]:has-text("Verzoek WMC")');
    this.vastleggenUitspraak = this.actiesBlok.locator('[role="menuitem"]:has-text("Vastleggen uitspraak")');
    this.taakOverdragen = this.actiesBlok.locator('[role="menuitem"]:has-text("Taak overdragen")');
    this.vastmakenAanRecenteItem = this.actiesBlok.locator('[role="menuitem"]:has-text("Vastmaken aan recente ite...")');
    this.taken = this.actiesBlok.locator('[role="menuitem"]:has-text("Taken")');
    this.opstellen_verzoek_aan_medisch_adviseur = this.page.locator('[data-test-id="201911041002250031407_3"]');
    this.opstellen_verzoek_aan_medisch_adviseur_BRP_Case = this.page.locator('[data-test-id="201911041002250031407_4"]')
    this.opstellen_verzoek_aan_medisch_adviseur_WLZ = this.page.locator('[data-test-id="201911041002250031407_2"]'); 
    this.opstellen_wettelijke_medische_consultatie = this.actiesBlok.locator('[role="menuitem"]:has-text("Opstellen wettelijke medi...")')
    this.consultatieAanvragen = this.actiesBlok.locator('[data-test-id="201911041002250031407_1"]');
    this.verlenenVoorrang = this.actiesBlok.locator('[data-test-id="201907180729020639125_8"]')
    this.subActiesBlok = this.page.locator('[data-test-id="201907180729020639125"]')
    this.locatorResult = this.page.locator('[id="pyNavigation1723100225718"]')
    this.wijzigProcessInformatie = this.actiesBlok.locator('[title="Wijzigen procesinformatie"]');
    this.verlenenVoorrangBezwaar = this.actiesBlok.locator('[data-test-id="201907180729020639125_9"]');
    this.verlenenVoorrangWLZ = this.actiesBlok.locator('[data-test-id="201907180729020639125_7"]');
    this.correctieVastleggenUitspraak = this.actiesBlok.locator('[role="menuitem"]:has-text("Correctie vastleggen uits...")');
    this.vervallen = this.actiesBlok.locator('[role="menuitem"]:has-text("Vervallen")');
    this.afbreken = this.actiesBlok.locator('[role="menuitem"]:has-text("afbreken")');
    this.registrerenOpname = this.actiesBlok.locator('[role="menuitem"]:has-text("Registreren opname")');
    this.arrayActies = []
    this.IndienenOpOutputInfoPopup =this.parentLocator.locator('[id="modalWrapper"] [id="ModalButtonSubmit"]');
    this.verwerkenDefinitieveUitspraakRechtbank = this.actiesBlok.locator('[data-test-id="201911041002250031407_6"]');
    this.maakAHZaakaan = this.actiesBlok.locator('[data-test-id="201907180729020639125_2"]');
    this.afbreken = this.actiesBlok.locator('[role="menuitem"]:has-text("Afbreken")');
    this.wachtOpOm = this.actiesBlok.locator('[role="menuitem"]:has-text("Wachten op OM")');
    this.vastleggenReactieOM = this.actiesBlok.locator('[role="menuitem"]:has-text("Vastleggen reactie OM")')
    
                                                                         
    const log: Logger<ILogObj> = new Logger();
    
    }
    

    async buttonsOnderActions() {
        const visible = await this.actiesButton.nth(1).isVisible();
        while(!visible){
            const druk = new DrukOpButton();
            await druk.Button(this.actiesButton.nth(1));
            const visible = await this.actiesButton.nth(1).isVisible();
            if(visible){
                const numberOfValues = new Return(this.page)
                console.log("Aantal items in list: ",await numberOfValues.NumberOfListItems(this.locatorResult));
                console.log("aantal items");
                break;
            }
    }
}
    async controleerButtonAanwezig(button: string) {
        const log: Logger<ILogObj> = new Logger();
        log.silly(`Check voorrang verlenen ${button} is aanwezig`);
        return this.arrayActies;
        }
        
        async optie(button: string) {
            const log: Logger<ILogObj> = new Logger();
            await this.page.waitForLoadState("load");
            await this.page.waitForTimeout(3000);
            if (!(await this.actiesButton.isVisible())) return;
            const druk = new DrukOpButton();

            
            const ensureActiesButtonOpened = async () => {
                if (!(await this.vernieuwenButton.isVisible())) {
                    await druk.Button(this.actiesButton);
                    await this.page.waitForSelector('[role="menuitem"]:has-text("Vernieuwen")', { state: 'visible' });
                }
            };
        
            await ensureActiesButtonOpened();
        
            const values = new Return(this.page);
            const returnfListItems = await values.ReturnfListItems(this.locatorResult);
        
            const clickButton = async (buttonElement: any) => {
                await ensureActiesButtonOpened();
                if (buttonElement) {
                    //await buttonElement.waitFor({ state: 'visible' });
                    await druk.Button(buttonElement);
                    log.silly(`localaction: ${button} clicked`);
                }
            };
        
            const hoverAndClick = async (buttonElement: any) => {
                await ensureActiesButtonOpened();
                await this.taken.hover({ timeout: waitTime.time });
                await clickButton(buttonElement);
            };
        
            switch (button) {
                case 'Vernieuwen':
                    await clickButton(this.vernieuwenButton);
                    break;
                case 'Geschiedenis weergeven':
                    await clickButton(this.geschiedenisWeergeven);
                    break;
                case 'Tags beheren':
                    await clickButton(this.tagsBeheren);
                    break;
                case 'Meldingen beheren':
                    await clickButton(this.meldingenBeheren);
                    break;
                case 'Taak overdragen':
                    await clickButton(this.taakOverdragen);
                    break;
                case 'Afbreken':
                    await clickButton(this.afbreken);
                    break; 
                case 'Vervallen':
                    await clickButton(this.vervallen);
                    break; 
                case 'Wachten op statuswijziging':
                    const dataTestId = "[data-test-id='2016083016191602341167946']";
                    const statusAfgebroken = "Opgelost - Afgebroken"
                    const statusVervallen = "Opgelost - Vervallen"
                    while (true) { 
                      const links = await this.page.$$(dataTestId);
                      let linkFound = false;
                  
                      for (const link of links) {
                        const linkText = await link.textContent();
                        if (linkText && linkText.trim().startsWith(statusAfgebroken) || linkText && linkText.trim().startsWith(statusVervallen)) {
                          linkFound = true;
                          break;
                        }
                      }
                      if (linkFound) {
                        break; // Exit loop after finding the correct text
                      } else {
                        // Handle case when the text is not yet found
                        const druk = new DrukOpButton();
                        await druk.Button(this.actiesButton); // Click "acties" button
                        await this.page.waitForSelector('[role="menuitem"]:has-text("Vernieuwen")'); // Wait for "Vernieuwen" option
                        await druk.Button(this.vernieuwenButton); // Refresh the page
                        await this.page.waitForTimeout(2000); // Wait briefly before rechecking
                      }
                    }
                    break;
                case 'Verzoek WMC':
                    await clickButton(this.verzoekWMC);
                    break;
                case 'Vastleggen uitspraak':
                    await clickButton(this.vastleggenUitspraak);
                    await this.page.waitForTimeout(800)
                    break;
                case 'Vastmaken aan recente item':
                    await clickButton(this.vastmakenAanRecenteItem);
                    break;
                case 'Correctie vastleggen uits...':
                    await this.page.waitForLoadState("load");
                    await clickButton(this.correctieVastleggenUitspraak);
                    break;

                case 'Registreren opname':
                    await clickButton(this.registrerenOpname);
                    break;
                case 'Maak AH-zaak aan':
                    await clickButton(this.maakAHZaakaan);
                    break;
                case 'Opstellen verzoek aan medisch adviseur':
                    await hoverAndClick(this.opstellen_verzoek_aan_medisch_adviseur);
                    break;
                case 'Opstellen verzoek aan medisch adviseur BRP':
                    await hoverAndClick(this.opstellen_verzoek_aan_medisch_adviseur_BRP_Case);
                    break;
                case 'Opstellen verzoek aan medisch adviseur WLZ':
                    await hoverAndClick(this.opstellen_verzoek_aan_medisch_adviseur_WLZ);
                    break;
                case 'Opstellen wettelijke medische consultatie':
                    await hoverAndClick(this.opstellen_wettelijke_medische_consultatie);
                    break;
                case 'Consultatie aanvragen':
                    await hoverAndClick(this.consultatieAanvragen);
                    break;
                case 'Wijzigen process informatie':
                    await hoverAndClick(this.wijzigProcessInformatie);
                    break;
                case 'Fase wijzigen':
                    await hoverAndClick(this.faseWijzigen);
                    break;
                case 'Vervallen':
                    await hoverAndClick(this.vervallen);
                    break;
                case 'Verwerken definitieve uitspraak rechtbank':
                    await hoverAndClick(this.verwerkenDefinitieveUitspraakRechtbank);
                    break;
                case 'Vastleggen reactie OM':
                    await this.wachtOpOm.hover({ timeout: 5000 });
                    await clickButton(this.vastleggenReactieOM.first());
                    break;
                case 'return menu items':
                    return returnfListItems
                case 'Verlenen voorrang':
                    return returnfListItems
                // case 'Verlenen voorrang':
                //         return returnfListItems.filter(item => item.trim() === button);
                case 'Verlenen voorrang klik':
                    await ensureActiesButtonOpened();
                    await clickButton(this.verlenenVoorrang);
                    return returnfListItems.filter(item => item.trim() === button);
                case 'Verlenen voorrang button':
                    await ensureActiesButtonOpened();
                    await clickButton(this.verlenenVoorrang);
                    await this.page.waitForSelector('[role="menuitem"]:has-text("Verlenen voorrang button")', { state: 'visible' });
                    await clickButton(this.verlenenVoorrang);
                    break;
                case 'Verlenen voorrang Bezwaar':
                    await ensureActiesButtonOpened();
                    await clickButton(this.verlenenVoorrangBezwaar);
                    await this.page.reload();
                    await this.page.waitForLoadState("load");
                    await ensureActiesButtonOpened();
                    await clickButton(this.verlenenVoorrangBezwaar);
                    break;
                case 'Verlenen voorrang WLZ':
                    await ensureActiesButtonOpened();
                    await clickButton(this.verlenenVoorrangWLZ);
                    await this.page.waitForTimeout(6000);
                    break;
                case 'Indienen op outputinfo popup':
                    await clickButton(this.IndienenOpOutputInfoPopup);
                    break;
                
                
                default:
                    log.warn(`Unknown button action: ${button}`);
            }
            
        }
        
    }

