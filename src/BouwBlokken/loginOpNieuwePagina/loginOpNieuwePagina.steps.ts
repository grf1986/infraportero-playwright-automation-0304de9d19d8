import { page} from "../../hooks/hooks";
import { When, setDefaultTimeout } from "@cucumber/cucumber";
import { ILogObj, Logger } from "tslog";
import FunctionAppIndex from "../../pageObjects/functionsApp/FunctionApp.index";
import { waitTime } from "../../statics/Text/testData";


setDefaultTimeout(60 * 100000 * 2);
const log: Logger<ILogObj> = new Logger();

When(
    'Log in op pagina, met user: {string} en wachtwoord: {string} op tab: {string}', async (username: string, password: string,tab: number ) => {
        log.silly("Log in op Pagina");
        const  login =new FunctionAppIndex(page);
        await login.loginPage.LoginToApp(username,password,tab);
    });

    When(
        'Log in op dezelfde pagina, met user: {string} en wachtwoord: {string} op tab: {string}', async (username: string, password: string,tab: number ) => {
            log.silly("Log in op Pagina");
            const  login =new FunctionAppIndex(page);
            await login.loginPage.LoginOnSamePage(username,password,tab);
        });
    

        When('Initieer nieuwe pagina op tab: {string}', async (paginaNummer: number ) => {
                log.silly("initieer pagina");
                const  login =new FunctionAppIndex(page);
                await login.loginPage.InitieerNieuwePagina(paginaNummer);
            });
export { };



