import { page } from "../../hooks/hooks";
import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";

const listNiew: any[] = []; // Ensure it's an array of strings
setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

When('Sla zaak met naam {string} voor: {string} in filenaam: {string} op tab: {string}',
  async (dossier: string, scenario: string, fileName: string, tab: number) => {
    const requestBuk = new FunctionAppIndex(page);
    const listItem = await requestBuk.drukOpPage.AddCaseAanFile(dossier,scenario,fileName,tab);
    
    if (listItem) {
      listNiew.push(listItem); // Store the case name or ID
    }
  }
);

Then('In {string} zoek zaak op index: {string} op tab: {string}', async (werkbak:string,index:number,  tab:number ) => {
    const requestBuk = new FunctionAppIndex(page);
  if (listNiew.length === 0) {
    throw new Error("No case found in listNiew to search for.");
  }
  const lastZaak = listNiew[listNiew.length - 1]; // Read the last stored case
  await requestBuk.zaakOpzoekenPage.ZaakOpzoekenInwerkBak(werkbak ,index, lastZaak,tab );
  listNiew.length = 0;
});











