import { page } from "../../hooks/hooks";
import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/TASapp/TASapp.index";
import TASapp from "../../pageObjects/TASapp/TASapp.index";





setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

Then('Login met gebruikersnaam: {string} en wachtwoord: {string} op tab: {string}', async (gebruikersNaam: string, wachtwoord: string, tab: number) => {
const tasApp = new TASapp(page);
await tasApp.loginPage.LoginToApp(gebruikersNaam,wachtwoord,tab);
log.silly("Login met gebruikersnaam: " + gebruikersNaam + " en wachtwoord: " + wachtwoord + " op tab: " + tab);
});









export { };



