// import { BrowserContext, expect } from "@playwright/test";
// import { GaNaarAPP } from "../../functions/gaNaarApplicatie";
// import { baseURL } from "../../generic/utils/environment.properties";
// import { genericText } from "../../statics/Text/genericText";
// import { page,browser, context} from "../../hooks/hooks";
// import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
// import { TestData } from "../../statics/Text/testData";
// import { ILogObj, Logger } from "tslog";
// import { CheckText } from "../../functions/checkText";
// import Request_BUKIndex from "../../pageObjects/Request_BUK/request_BUK.index";
// import AanvragenKlachtAppIndex from "../../pageObjects/Request_KlachtApp/request_KlachtApp.index";
// import ClientAppIndex from "../../pageObjects/ClientApp/ClientApp.index";
// import BUKAppIndex from "../../pageObjects/BUKApp/BUKApp.index";



// setDefaultTimeout(60 * 10000 * 2);
// const log: Logger<ILogObj> = new Logger();

// Then('Check Text naam: {string} op tab: {string}', async (text:string,tab: number) => {
//     const requestBuk = new Request_BUKIndex(page);
//     const aanvragenKlachtApp = new AanvragenKlachtAppIndex(page);
//     const clientApp = new ClientAppIndex(page);
//     const bukAPP = new BUKAppIndex(page)
//     if (text === 'Selecteren cliënt titel') {
//         expect(await requestBuk.selectClientPage.CheckTitle_Selecteren_cliënt(text,tab)).toMatch(genericText.selecterenCliëntTitle);
//     } else if (text === 'Zoeken cliënt') {
//         expect(await requestBuk.selectClientPage.CheckText_Zoeken_cliënt(text,tab)).toMatch(genericText.cliëntSearch);
//     } else if(text === 'Gevonden cliënten'){
//         expect(await requestBuk.selectClientPage.CheckText_Gevonden_cliënten(text,tab)).toMatch(genericText.cliëntResults);
//     } else if(text === 'Wissen zoekcriteria knop'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_Button_EmptySearchCriteria(text,tab)).toMatch(genericText.emptySearchCriteria);
//     } else if(text === 'Zoek cliënt knop'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_Button_SearchCliënt(text,tab)).toMatch(genericText.searchCliënt);
//     } else if(text === 'Annuleren knop'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_Button_CancelButton(text,tab)).toMatch(genericText.cancelButton);
//     } else if(text === 'Doorgaan knop'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_Button_ContinueButton(text,tab)).toMatch(genericText.continueButton);
//     } else if(text === 'Burgerservicenummer (BSN)'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_BSN_SelectClient(text,tab)).toMatch(genericText.citizenServiceNumber);
//     } else if(text === 'Cliëntnummer'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_Cliëntnummer(text,tab)).toMatch(genericText.cliëntNumber);
//     } else if(text === 'Geboortedatum'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_Geboortedatum(text,tab)).toMatch(genericText.birthDate);
//     } else if(text === 'Land'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_Land(text,tab)).toMatch(genericText.Country);
//     } else if(text === 'Postcode'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_Postcode(text,tab)).toMatch(genericText.zipCode);
//     } else if(text === 'Huisnummer'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_Huisnummer(text,tab)).toMatch(genericText.houseNumber);
//     } else if(text === 'Geslacht'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_Geslacht_SelectClient(text,tab)).toMatch(genericText.sex);
//     } else if(text === 'Naam en voorletters resultaat'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_GridTable_NameAndInitial(text,tab)).toMatch(genericText.tableNameAndInitial);
//     } else if(text === 'Geboortedatum resultaat'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_GridTable_BirthDate(text,tab)).toMatch(genericText.tableBirthDate);
//     } else if(text === 'Geslacht resultaat'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_GridTable_Sex(text,tab)).toMatch(genericText.tableSex);
//     } else if(text === 'Burgerservicenummer (BSN) resultaat'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_GridTable_BSN(text,tab)).toMatch(genericText.tableCitizenServiceNumber);
//     } else if(text === 'Cliëntnummer resultaat'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_GridTable_CliëntNumber(text,tab)).toMatch(genericText.tableCliëntNumber);
//     } else if(text === 'Postcode en huisnummer resultaat'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_GridTable_ZipcodeAndHouseNumber(text,tab)).toMatch(genericText.tablezipCodeAndHouseNumber);
//     } else if(text === 'Plaats'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_GridTable_Town(text,tab)).toMatch(genericText.tableTown);
//     }else if(text === 'Geen bestaande cliënten gevonden, pas de zoekcriteria aan of start aanvraag voor nieuwe cliënt.'){
//         expect(await requestBuk.selectClientPage.CheckLabelText_GridTable_NoResults(text,tab)).toMatch(genericText.tableNoResult);
//     }else if(text === 'Aanvraag creëren met een nieuwe cliënt'){
//         expect(await requestBuk.selectClientPage.CheckText_RadioButton_New_Cliënt(text,tab)).toMatch(genericText.radioButtonNewCliënt);
//     } // Stage progress text
//     else if(text === 'Stel velden in nadat de case is gemaakt'){
//         expect(await requestBuk.registerApplicationDataPage.CheckText_Stage_Progress_Velden(text,tab)).toMatch(genericText.fieldsCaseCreated);
//     }else if(text === 'Aanmaken log zaak'){
//         expect(await requestBuk.registerApplicationDataPage.CheckText_Stage_Progress_LogZaak(text,tab)).toMatch(genericText.creationLogCase);
//     }else if(text === 'Aanmaken zaakfolder in CMIS'){
//         expect(await requestBuk.registerApplicationDataPage.CheckText_Stage_Progress_Zaakfolder(text,tab)).toMatch(genericText.CMIS);
//     }else if(text === 'Bijwerken SVB berichten'){
//         expect(await requestBuk.registerApplicationDataPage.CheckText_Stage_Progress_BijwerkenSVB(text,tab)).toMatch(genericText.editSVBCase);
//     }else if(text === 'Registratie'){
//         expect(await requestBuk.registerApplicationDataPage.CheckText_Stage_Progress_Registratie(text,tab)).toMatch(genericText.registrationStageProfress);
//     }else if(text === 'Afronden Migratie'){
//         expect(await requestBuk.registerApplicationDataPage.CheckText_Stage_Progress_Migratie(text,tab)).toMatch(genericText.finishingMigration);
//     }else if(text === 'Valideren cliënt'){
//         expect(await requestBuk.registerApplicationDataPage.CheckText_Stage_Progress_ValiderenClient(text,tab)).toMatch(genericText.validateClientStageProgress);
//     }else if(text === 'In behandeling'){
//         expect(await requestBuk.registerApplicationDataPage.CheckText_Stage_Progress_InBehandeling(text,tab)).toMatch(genericText.inProgressStage);
//     } // Registreren pagina
//     else if(text === 'Registreren aanvraaggegevens titel'){
//         expect(await requestBuk.registerApplicationDataPage.CheckText_Registreren_aanvraaggegevens(text,tab)).toMatch(genericText.RegisterClientData);
//     }else if(text === 'Aanvraagsoort sectie'){
//         expect(await requestBuk.registerApplicationDataPage.CheckText_Aanvraagsoort(text,tab)).toMatch(genericText.requestType);
//     }else if(text === 'Zorgvraag sectie'){
//         expect(await requestBuk.registerApplicationDataPage.CheckText_Zorgvraag(text,tab)).toMatch(genericText.careQuestion);
//     }else if(text === 'Geboortedatum cliënt'){
//         expect(await requestBuk.registerApplicationDataPage.CheckText_Geboortedatum_cliënt(text,tab)).toMatch(genericText.birthDateCliënt);
//     }else if(text === 'Leeftijd'){
//         expect(await requestBuk.registerApplicationDataPage.CheckText_Leeftijd(text,tab)).toMatch(genericText.age);
//     }else if(text === 'Aanvraagwijze'){
//         expect(await requestBuk.registerApplicationDataPage.CheckLabelText_Aanvraagwijze(text,tab)).toMatch(genericText.applicationMethod);
//     }else if(text === 'Aanvraagdatum'){
//         expect(await requestBuk.registerApplicationDataPage.CheckLabelText_Aanvraagdatum(text,tab)).toMatch(genericText.applicationDate);
//     }else if(text === 'Aanvraagsoort'){
//         expect(await requestBuk.registerApplicationDataPage.CheckLabelText_Aanvraagsoort(text,tab)).toMatch(genericText.applicationType);
//     }else if(text === 'Registratienummer SVB'){
//         expect(await requestBuk.registerApplicationDataPage.CheckLabelText_Registratienummer_SVB(text,tab)).toMatch(genericText.registrationNumberSVB);
//     }else if(text === 'Geeft de aanvragende ouder toestemming om indien aanwezig het cliëntendossier in te zien?'){
//         expect(await requestBuk.registerApplicationDataPage.CheckLabelText_ouder_toestemming(text,tab)).toMatch(genericText.parentalPermission);
//     }else if(text === 'Advies waartegen bezwaar wordt gemaakt'){
//         expect(await requestBuk.registerApplicationDataPage.CheckLabelText_Bezwaar_tegen_adavies(text,tab)).toMatch(genericText.objectionAppealed);
//     }else if(text === 'Toesteming Antwoord Ja'){
//         expect(await requestBuk.registerApplicationDataPage.CheckLabelText_ouder_toestemming_antwoord_Ja(text,tab)).toMatch(genericText.yes);
//     }else if(text === 'Toesteming Antwoord Nee'){
//         expect(await requestBuk.registerApplicationDataPage.CheckLabelText_ouder_toestemming_antwoord_Nee(text,tab)).toMatch(genericText.no);
//     }else if(text === 'Zorgvraag'){
//         expect(await requestBuk.registerApplicationDataPage.CheckLabelText_Zorgvraag(text,tab)).toMatch(genericText.careQuestion);
//     }else if(text === 'Tekstsbox max. karakter'){
//         expect(await requestBuk.registerApplicationDataPage.CheckLabelText_AreaCharCounter(text,tab)).toMatch(genericText.charCounter);
//     }else if(text === 'Terug knop'){
//         expect(await requestBuk.registerApplicationDataPage.CheckLabelText_Button_Back(text,tab)).toMatch(genericText.backButton);
//     } // Persoonlijk pagina
//     else if(text === 'Persoonlijk titel'){
//         expect(await requestBuk.personalPage.CheckTitle_Persoonlijk(text,tab)).toMatch(genericText.persoonlijkTitle);
//     }else if(text === 'Geheim CIZ'){
//         expect(await requestBuk.personalPage.CheckLabelText_Geheim_CIZ(text,tab)).toMatch(genericText.secretCIZ);
//     }else if(text === 'Speciaal onderzoek'){
//         expect(await requestBuk.personalPage.CheckLabelText_Speciaal_Onderzoek(text,tab)).toMatch(genericText.specialResearch);
//     }else if(text === 'onderzoek antwoord Ja'){
//         expect(await requestBuk.personalPage.CheckLabelText_Special_Onderzoek_Ja(text,tab)).toMatch(genericText.specialResearchYes);
//     }else if(text === 'Onderzoek antwoord Nee'){
//         expect(await requestBuk.personalPage.CheckLabelText_Special_Onderzoek_Nee(text,tab)).toMatch(genericText.specialResearchNo);
//     }else if(text === 'Burgerservicenummer (BSN)'){
//         expect(await requestBuk.personalPage.CheckLabelText_BSN(text,tab)).toMatch(genericText.citizenServiceNumber);
//     }else if(text === 'Geboortedatum'){
//         expect(await requestBuk.personalPage.CheckLabelText_GeboorteDatum(text,tab)).toMatch(genericText.birthDate);
//     }else if(text === 'Roepnaam'){
//         expect(await requestBuk.personalPage.CheckLabelText_Roepnaam(text,tab)).toMatch(genericText.callingName);
//     }else if(text === 'Geboortenaam'){
//         expect(await requestBuk.personalPage.CheckLabelText_Geboortenaam(text,tab)).toMatch(genericText.birthName);
//     }else if(text === 'Voorvoegsel'){
//         expect(await requestBuk.personalPage.CheckLabelText_Voorvoegsel(text,tab)).toMatch(genericText.prefixName);
//     }else if(text === 'Voornamen'){
//         expect(await requestBuk.personalPage.CheckLabelText_Voornamen(text,tab)).toMatch(genericText.surname);
//     }else if(text === 'Voorletter(s)'){
//         expect(await requestBuk.personalPage.CheckLabelText_Voorletters(text,tab)).toMatch(genericText.initialPersonal);
//     }else if(text === 'Geslacht'){
//         expect(await requestBuk.personalPage.CheckLabelText_Geslacht_Persoonlijk(text,tab)).toMatch(genericText.sex);
//     }else if(text === 'Overlijdensdatum'){
//         expect(await requestBuk.personalPage.CheckLabelText_Overlijdensdatum(text,tab)).toMatch(genericText.dateOfDeath);
//     }else if(text === 'Naamgebruik'){
//         expect(await requestBuk.personalPage.CheckLabelText_Naamgebruik(text,tab)).toMatch(genericText.useOfName);
//     } // Aanvullende persoonlijk
//     else if(text === 'Aanvullend Persoonlijk titel'){
//         expect(await requestBuk.additionalPersonal.CheckTitle_AdditionalPersonalPage(text,tab)).toMatch(genericText.additionalPersonal);
//     }else if(text === 'Burgerlijke staat'){
//         expect(await requestBuk.additionalPersonal.CheckLabelText_Burgelijke_Staat(text,tab)).toMatch(genericText.maritalStatus);
//     }else if(text === 'Leefsituatie'){
//         expect(await requestBuk.additionalPersonal.CheckLabelText_Leefsituatie(text,tab)).toMatch(genericText.livingSituation);
//     }else if(text === 'Juridische maatregelen'){
//         expect(await requestBuk.additionalPersonal.CheckLabelText_Juridische_Maatregelen(text,tab)).toMatch(genericText.legalMeasures);
//     }else if(text === 'Verblijfsstatus (alleen invullen als de cliënt niet de Nederlandse nationaliteit heeft)'){
//         expect(await requestBuk.additionalPersonal.CheckLabelText_Verblijfstatus(text,tab)).toContain(genericText.residenceStatusPart1);
//         expect(await requestBuk.additionalPersonal.CheckLabelText_Verblijfstatus(text,tab)).toContain(genericText.residenceStatusPart2);
//         expect(await requestBuk.additionalPersonal.CheckLabelText_Verblijfstatus(text,tab)).toContain(genericText.residenceStatusPart3);
//     } // Contact pagina
//     else if(text === 'Contact titel'){
//         expect(await requestBuk.contact.CheckTitle_ContactPage(text,tab)).toMatch(genericText.contact);
//     }else if(text === '1e Telefoonnummer vraag'){
//         expect(await requestBuk.contact.CheckTextLabel_Primary_Telefoonnummer(text,tab)).toMatch(genericText.primaryPhonePhoneNumber);
//     }else if(text === '1e Landnummer'){
//         expect(await requestBuk.contact.CheckLabelText_1eTelefoonnummer_Landnummer(text,tab)).toMatch(genericText.countryCode);
//     }else if(text === '1e Telefoonnummer'){
//         expect(await requestBuk.contact.CheckLabelText_1eTelefoonnummer_Telefoonnummer(text,tab)).toMatch(genericText.phonePhoneNumber);
//     }else if(text === '1e Geheim nummer'){
//         expect(await requestBuk.contact.CheckLabelText_1eTelefoonnummer_Geheimnummer(text,tab)).toMatch(genericText.secretTelNumber);
//     }else if(text === '2e Telefoonnummervraag '){
//         expect(await requestBuk.contact.CheckTextLabel_Secundary_Telefoonnummer(text,tab)).toMatch(genericText.secundaryPhoneNumber);
//     }else if(text === '2e Landnummer'){
//         expect(await requestBuk.contact.CheckLabelText_2eTelefoonnummer_Landnummer(text,tab)).toMatch(genericText.countryCode);
//     }else if(text === '2e Telefoonnummer'){
//         expect(await requestBuk.contact.CheckLabelText_2eTelefoonnummer_Telefoonnummer(text,tab)).toMatch(genericText.phonePhoneNumber);
//     }else if(text === '2e Geheim nummer'){
//         expect(await requestBuk.contact.CheckLabelText_2eTelefoonnummer_Geheimnummer(text,tab)).toMatch(genericText.secretTelNumber);
//     }else if(text === 'E-mailadres'){
//         expect(await requestBuk.contact.CheckLabelText_Emailadres(text,tab)).toMatch(genericText.emailaddress);
//     }else if(text === 'Taal'){
//         expect(await requestBuk.contact.CheckLabelText_Taal(text,tab)).toMatch(genericText.language);
//     }else if(text === 'Is de cliënt in staat tot telefonische communicatie'){
//         expect(await requestBuk.contact.CheckLabelText_TelefonischCommunicatie(text,tab)).toMatch(genericText.telephoneCommunication);
//     }else if(text === 'communicatie antwoord Ja'){
//         expect(await requestBuk.contact.CheckLabelText_TelefonischCommunicatie_Ja(text,tab)).toMatch(genericText.yes);
//     }else if(text === 'communicatie antwoord Nee'){
//         expect(await requestBuk.contact.CheckLabelText_TelefonischCommunicatie_Nee(text,tab)).toMatch(genericText.no);
//     }else if(text === 'Bijzondere communicatievorm'){
//         expect(await requestBuk.contact.CheckLabelText_Bijzondere_Communicatievorm(text,tab)).toMatch(genericText.specialFormOfCommunication);
//     } // Relatie pagina
//     else if(text === 'Relatie titel'){
//         expect(await requestBuk.relationships.CheckTitle_Relaties(text,tab)).toMatch(genericText.relations);
//     }else if(text === 'Relatie toevoegen knop'){
//         expect(await requestBuk.relationships.CheckTextLabel_Button_RelatiesToevoegen(text,tab)).toMatch(genericText.addRelationship);
//     }else if(text === 'Relatie wijzigen knop'){
//         expect(await requestBuk.relationships.CheckTextLabel_Button_RelatiesWijzigen(text,tab)).toMatch(genericText.editRelation);
//     }else if(text === 'Relatie toevoegen popup titel'){
//         expect(await requestBuk.relationships.CheckTextLabel_Button_RelatiesWijzigen(text,tab)).toMatch(genericText.addRelationship);
//     }else if(text === 'Type relatie'){
//         expect(await requestBuk.relationships.CheckLabelText_RelatiesToevoegen_Type_Relaties(text,tab)).toMatch(genericText.relationshipType);
//     }else if(text === 'Wettelijke relatie'){
//         expect(await requestBuk.relationships.CheckLabelText_RelatiesToevoegen_Wettelijke_Relaties(text,tab)).toMatch(genericText.legalRelationship);
//     }else if(text === 'Curator'){
//         expect(await requestBuk.relationships.CheckLabelText_RelatiesToevoegen_Wettelijke_Relaties_Curator(text,tab)).toMatch(genericText.curator);
//     }else if(text === 'Mentor'){
//         expect(await requestBuk.relationships.CheckLabelText_RelatiesToevoegen_Wettelijke_Relaties_Mentor(text,tab)).toMatch(genericText.mentor);
//     }else if(text === 'Ouder met gezag'){
//         expect(await requestBuk.relationships.CheckLabelText_RelatiesToevoegen_Wettelijke_Relaties_OuderMetGezag(text,tab)).toMatch(genericText.parentAuthority);
//     }else if(text === 'Voogd met gezag'){
//         expect(await requestBuk.relationships.CheckLabelText_RelatiesToevoegen_Wettelijke_Relaties_VoogdMetGezag(text,tab)).toMatch(genericText.guardianAuthority);
//     }else if(text === '(notarieel) Gemachtigde'){
//         expect(await requestBuk.relationships.CheckLabelText_RelatiesToevoegen_Wettelijke_Relaties_Gemachtigde(text,tab)).toMatch(genericText.authorizedPerson);
//     }else if(text === '1e Telefoonnummer relatie'){
//         expect(await requestBuk.relationships.CheckTextLabel_RelatiesToevoegen_Primary_Telefoonnummer(text,tab)).toMatch(genericText.primaryPhonePhoneNumber + ' relatie');
//     }else if(text === '2e Telefoonnummer relatie'){
//         expect(await requestBuk.relationships.CheckTextLabel_RelatiesToevoegen_Secundary_Telefoonnummer(text,tab)).toMatch(genericText.secundaryPhoneNumber + ' relatie');
//     }else if(text === 'E-mailadres relatie'){
//         expect(await requestBuk.relationships.CheckLabelText_RelatiesToevoegen_Emailadres_Relaties(text,tab)).toMatch(genericText.emailaddressRelation);
//     }else if(text === 'Indienen knop'){
//         expect(await requestBuk.relationships.CheckTextLabel_Buttons_RelatieToevoegen_Indienen(text,tab)).toMatch(genericText.Submit);
//     } // Adressen pagina
//     else if(text === 'Adressen titel'){
//         expect(await requestBuk.theAddressPage.CheckTextTitle_Adressen(text,tab)).toMatch(genericText.address);
//     }else if(text === 'Feitelijke woonadres header'){
//         expect(await requestBuk.theAddressPage.CheckTextTitle_FeitelijkeWoonadres_Dropdown(text,tab)).toMatch(genericText.actualHomeAddress);
//     }else if(text === 'Afwijkend correspondentieadres checkbox'){
//         expect(await requestBuk.theAddressPage.CheckTitle_AfwijkendCorrespondentieadres_CheckBox(text,tab)).toMatch(genericText.differentCorrespondenceAddress);
//     }else if(text === 'Afwijkend correspondentieadres header'){
//         expect(await requestBuk.theAddressPage.CheckTitle_AfwijkendCorrespondentieadres_Dropdown(text,tab)).toMatch(genericText.differentCorrespondenceAddress);
//     }else if(text === 'Afwijkend tijdelijke Verblijfadres checkbox'){
//         expect(await requestBuk.theAddressPage.CheckTitle_AfwijkendTijdelijkeVerblijfadres_CheckBox(text,tab)).toMatch(genericText.differentTemporaryResidenceAddress);
//     }else if(text === 'Feitelijke woonadres - land'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_FeitelijkeWoonadres_Land(text,tab)).toMatch(genericText.Country);
//     }else if(text === 'Feitelijke woonadres - Postcode'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_FeitelijkeWoonadres_Postcode(text,tab)).toMatch(genericText.zipCode);
//     }else if(text === 'Feitelijke woonadres - Huisnummer'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_FeitelijkeWoonadres_Huisnummer(text,tab)).toMatch(genericText.houseNumber);
//     }else if(text === 'Feitelijke woonadres - Huisletter'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_FeitelijkeWoonadres_Huisletter(text,tab)).toMatch(genericText.houseLetter);
//     }else if(text === 'Feitelijke woonadres - Toevoeging huisnummer'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_FeitelijkeWoonadres_ToevoegingHuisnummer(text,tab)).toMatch(genericText.additionOfHouseNumber);
//     }else if(text === 'Feitelijke woonadres - Huisnummeraanduiding'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_FeitelijkeWoonadres_HuisnummerAanduiding(text,tab)).toMatch(genericText.designationOfHouseNumber);
//     }else if(text === 'Feitelijke woonadres - Zoek knop'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_Button_FeitelijkeWoonadres_Zoek(text,tab)).toMatch(genericText.searchButton);
//     }else if(text === 'Feitelijke woonadres - Straat'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_FeitelijkeWoonadres_Straat(text,tab)).toMatch(genericText.street);
//     }else if(text === 'Feitelijke woonadres - Plaats'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_FeitelijkeWoonadres_Plaats(text,tab)).toMatch(genericText.tableTown);
//     }else if(text === 'Feitelijke woonadres - Kamer'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_FeitelijkeWoonadres_Kamer(text,tab)).toMatch(genericText.room);
//     }else if(text === 'Feitelijke woonadres - Opmerking'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_FeitelijkeWoonadres_Opmerking(text,tab)).toMatch(genericText.remarkOfHouseNumber);
//     }else if(text === 'Afwijkend correspondentieadres - Relatie tot cliënt'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_AfwijkendCorrespondentieadres_RelatieTotCliënt(text,tab)).toMatch(genericText.relationToCliënt);
//     }else if(text === 'Afwijkend correspondentieadres - Toelichting'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_AfwijkendCorrespondentieadres_Toelichting(text,tab)).toMatch(genericText.explanation);
//     }else if(text === 'Afwijkend correspondentieadres - land'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_AfwijkendCorrespondentieadres_Land(text,tab)).toMatch(genericText.Country);
//     }else if(text === 'Afwijkend correspondentieadres - Postcode'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_AfwijkendCorrespondentieadres_Postcode(text,tab)).toMatch(genericText.zipCode);
//     }else if(text === 'Afwijkend correspondentieadres - Huisnummer'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_AfwijkendCorrespondentieadres_Huisnummer(text,tab)).toMatch(genericText.houseNumber);
//     }else if(text === 'Afwijkend correspondentieadres - Huisletter'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_AfwijkendCorrespondentieadres_Huisletter(text,tab)).toMatch(genericText.houseLetter);
//     }else if(text === 'Afwijkend correspondentieadres - Toevoeging huisnummer'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_AfwijkendCorrespondentieadres_ToevoegingHuisnummer(text,tab)).toMatch(genericText.additionOfHouseNumber);
//     }else if(text === 'Afwijkend correspondentieadres - Huisnummeraanduiding'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_AfwijkendCorrespondentieadres_HuisnummerAanduiding(text,tab)).toMatch(genericText.designationOfHouseNumber);
//     }else if(text === 'Afwijkend correspondentieadres - Zoek knop'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_Button_AfwijkendCorrespondentieadres_Zoek(text,tab)).toMatch(genericText.searchButton);
//     }else if(text === 'Afwijkend correspondentieadres - Straat'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_AfwijkendCorrespondentieadres_Straat(text,tab)).toMatch(genericText.street);
//     }else if(text === 'Afwijkend correspondentieadres - Plaats'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_AfwijkendCorrespondentieadres_Plaats(text,tab)).toMatch(genericText.tableTown);
//     }else if(text === 'Afwijkend correspondentieadres - Kamer'){
//         expect(await requestBuk.theAddressPage.CheckLabelText_AfwijkendCorrespondentieadres_Kamer(text,tab)).toMatch(genericText.room);
//     } // Indienen pagina
//     else if(text === 'Indienen titel'){
//         expect(await requestBuk.submitPage.CheckTextTitle_Indienen(text,tab)).toMatch(genericText.Submit);
//     }else if(text === 'Aanmaken knop'){
//         expect(await requestBuk.submitPage.CheckText_Aanmaken_knop(text,tab)).toMatch(genericText.create);
//     }// Triage uitvoeren pagina
//     else if(text === 'Triage uitvoeren titel'){
//         expect(await clientApp.clientAppTriagePage.CheckTextTitle_TriageUitvoeren(text,tab)).toMatch(genericText.executeTriage);
//     }else if(text === 'Geldig WLZ besluit'){
//         expect(await clientApp.clientAppTriagePage.CheckText_Geldig_WLZ_Besluit(text,tab)).toMatch(genericText.validWLZ);
//     }else if(text === 'Geldig WLZ besluit - Ja'){
//         expect(await clientApp.clientAppTriagePage.CheckText_Geldig_WLZ_Besluit_Ja(text,tab)).toMatch(genericText.yes);
//     }else if(text === 'Geldig WLZ besluit - Nee'){
//         expect(await clientApp.clientAppTriagePage.CheckText_Geldig_WLZ_Besluit_Nee(text,tab)).toMatch(genericText.no);
//     }else if(text === 'Geldig WLZ besluit - Geen toestemming'){
//         expect(await clientApp.clientAppTriagePage.CheckText_Geldig_WLZ_Besluit_GeenToestemming(text,tab)).toMatch(genericText.noPermission);
//     }else if(text === 'Geldig BUK advies'){
//         expect(await clientApp.clientAppTriagePage.CheckText_GeldigBUK_Advies(text,tab)).toMatch(genericText.validBUKAdvice);
//     }else if(text === 'Geldig BUK advies - Ja'){
//         expect(await clientApp.clientAppTriagePage.CheckText_GeldigBUK_Advies_Ja(text,tab)).toMatch(genericText.yes);
//     }else if(text === 'Geldig BUK advies - Nee'){
//         expect(await clientApp.clientAppTriagePage.CheckText_GeldigBUK_Advies_Nee(text,tab)).toMatch(genericText.no);
//     }else if(text === 'Lopende BUK aanvraag'){
//         expect(await clientApp.clientAppTriagePage.CheckText_Lopende_BUK_Aanvraag(text,tab)).toMatch(genericText.currentBUKCase);
//     }else if(text === 'Lopende BUK aanvraag - Ja'){
//         expect(await clientApp.clientAppTriagePage.CheckText_Lopende_BUK_Aanvraag_Ja(text,tab)).toMatch(genericText.yes);
//     }else if(text === 'Lopende BUK aanvraag - Nee'){
//         expect(await clientApp.clientAppTriagePage.CheckText_Lopende_BUK_Aanvraag_Nee(text,tab)).toMatch(genericText.no);
//     }else if(text === 'Overzicht BUK aanvragen'){
//         expect(await clientApp.clientAppTriagePage.CheckText_Overzicht_BUK_Aanvragen(text,tab)).toMatch(genericText.overviewBUKCase);
//     }else if(text === 'Overzicht BUK aanvragen - Zaak'){
//         expect(await clientApp.clientAppTriagePage.CheckText_Overzicht_BUK_Aanvragen_Zaak(text,tab)).toMatch(genericText.case);
//     }else if(text === 'Overzicht BUK aanvragen - Aanvraagdatum'){
//         expect(await clientApp.clientAppTriagePage.CheckText_Overzicht_BUK_Aanvragen_Aanvraagdatum(text,tab)).toMatch(genericText.applicationDate);
//     }else if(text === 'Overzicht BUK aanvragen - Status'){
//         expect(await clientApp.clientAppTriagePage.CheckText_Overzicht_BUK_Aanvragen_Status(text,tab)).toMatch(genericText.summaryPanelStatus);
//     }else if(text === 'Ook huisgenoten'){
//         expect(await clientApp.clientAppTriagePage.CheckText_Ook_Huisgenoten(text,tab)).toMatch(genericText.roomMember);
//     }else if(text === 'Uitkomst'){
//         expect(await clientApp.clientAppTriagePage.CheckText_Uitkomst(text,tab)).toMatch(genericText.result);
//     }else if(text === 'Afwijken'){
//         expect(await clientApp.clientAppTriagePage.CheckText_Afwijken(text,tab)).toMatch(genericText.deviation);
//     } // Voorbereiding pagina 
//     else if(text === 'Controleren administratieve volledigheid titel'){
//         expect(await clientApp.clientAppVoorbereiding.CheckTitle_AdminCompleet(text,tab)).toMatch(genericText.adminCompleteTitle);
//     }else if(text === 'Is de aanvraag administratief volledig?'){
//         expect(await clientApp.clientAppVoorbereiding.CheckText_AdminKompleetVraag(text,tab)).toMatch(genericText.adminComplete);
//     }else if(text === 'Is de aanvraag administratief volledig? - Ja'){
//         expect(await clientApp.clientAppVoorbereiding.CheckText_AdminKompleet_Ja(text,tab)).toMatch(genericText.yes);
//     }else if(text === 'Is de aanvraag administratief volledig? - Nee'){
//         expect(await clientApp.clientAppVoorbereiding.CheckText_AdminKompleet_Nee(text,tab)).toMatch(genericText.no);
//     } // Onderzoek pagina 
//     else if(text === 'Vastleggen onderzoek titel'){
//         expect(await clientApp.clientAppOnderzoek.CheckTitle_Vastleggen_Onderzoek(text,tab)).toMatch(genericText.concludeResearchTitle);
//     }else if(text === 'Onderzoeksgegevens overnemen'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Onderzoeksgegevens_Overnemen(text,tab)).toMatch(genericText.importResearchDetails);
//     }else if(text === 'Algemeen'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Algemeen(text,tab)).toMatch(genericText.general);
//     } else if(text === 'Toestemming voor inzage'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Toestemming_Voor_Inzage(text,tab)).toMatch(genericText.permissionForView);
//     } else if(text === 'Ziekte/Stoornis'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Ziekte_Stoornis(text,tab)).toMatch(genericText.sicknessIssues);
//     } else if(text === 'Is er sprake van een ziekte of stoornis?'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_SprakeVanZiekteStoornis(text,tab)).toMatch(genericText.sicknessIssuesApplicable);
//     } else if(text === 'Verzorging'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Verzorging(text,tab)).toMatch(genericText.careTaking);
//     } else if(text === 'Lichaamshygiëne'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Lichaamshygiëne(text,tab)).toMatch(genericText.bodyHygiene);
//     } else if(text === 'Zindelijkheid'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Zindelijkheid(text,tab)).toMatch(genericText.cleanliness);
//     } else if(text === 'Eten en drinken'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Eten_Drinken(text,tab)).toMatch(genericText.drinkingFood);
//     } else if(text === 'Mobiliteit'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Mobiliteit(text,tab)).toMatch(genericText.mobility);
//     } else if(text === 'Medische verzorging'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Medische_Verzorging(text,tab)).toMatch(genericText.medicalCare);
//     } else if(text === 'Oppassing'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Oppassing(text,tab)).toMatch(genericText.babysitting);
//     } else if(text === 'Gedrag'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Gedrag(text,tab)).toMatch(genericText.behaviour);
//     } else if(text === 'Communicatie'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Communicatie(text,tab)).toMatch(genericText.communication);
//     } else if(text === 'Alleen thuis zijn'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Alleen_Thuis(text,tab)).toMatch(genericText.homeAlone);
//     } else if(text === 'Begeleiding buitenshuis'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Begeleiding_Buitenshuis(text,tab)).toMatch(genericText.guidanceOutsideHouse);
//     } else if(text === 'Bezig houden, handreikingen'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Bezighouden_Handreikingen(text,tab)).toMatch(genericText.keepBusy);
//     }  // Vastleggen advies pagina
//     else if(text === 'Vastleggen advies titel'){
//         expect(await clientApp.clientAppOnderzoek.CheckTitle_Vastleggen_Advies(text,tab)).toMatch(genericText.concludeAdviceTitle);
//     }else if(text === 'Leeftijd tijdens primair advies'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Leeftijd_Tijdens_Primair_Advies(text,tab)).toMatch(genericText.ageDuringPrimaryAdvice);
//     }else if(text === 'Voorgesteld advies'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Voorgesteld_Advies(text,tab)).toMatch(genericText.proposedAdvice);
//     }else if(text === 'Score'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Score(text,tab)).toMatch(genericText.score);
//     }else if(text === 'Basis voor advies'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Basis_Voor_Advies(text,tab)).toMatch(genericText.basisForAdvies);
//     }else if(text === 'Afwijken van voorgesteld advies'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Afwijken_Voorgesteld_Advies(text,tab)).toMatch(genericText.divertFromProposedAdvice);
//     }else if(text === 'Advies'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Advies(text,tab)).toMatch(genericText.advice);
//     }else if(text === 'Komt er een (hoor)zitting?'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Komt_hoorzitting(text,tab)).toMatch(genericText.willThereHearing);
//     }else if(text === 'Komt er een (hoor)zitting? - Ja'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Komt_hoorzitting_Ja(text,tab)).toMatch(genericText.yes);
//     }else if(text === 'Komt er een (hoor)zitting? - Nee'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Komt_hoorzitting_Nee(text,tab)).toMatch(genericText.no);
//     }else if(text === 'Reden geen advies'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Reden_Geen_advies(text,tab)).toMatch(genericText.reasonNoAdvice);
//     }else if(text === 'Duur'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Duur(text,tab)).toMatch(genericText.timespan);
//     }else if(text === 'Einddatum advies'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Einddatum_Advies(text,tab)).toMatch(genericText.endDateAdvice);
//     }else if(text === 'Uitgevoerd onderzoek'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Uitgevoerd_Onderzoek(text,tab)).toMatch(genericText.executedResearch);
//     }else if(text === 'Preview brief knop'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Preview_Brief_knop(text,tab)).toMatch(genericText.previewLetterButton);
//     }
//     // else if(text === 'Versturen via'){
//     //     expect(await clientApp.clientAppOnderzoek.CheckText_Versturen_Via(text,tab)).toMatch(genericText.sendVia);
//     // }else if(text === 'Versturen via - Email'){
//     //     expect(await clientApp.clientAppOnderzoek.CheckText_Versturen_Via_Email(text,tab)).toMatch(genericText.sendViaEmail);
//     // }else if(text === 'Versturen via - Post'){
//     //     expect(await clientApp.clientAppOnderzoek.CheckText_Versturen_Via_Post(text,tab)).toMatch(genericText.sendViaPost);
//     // }
//     else if(text === 'Aangetekend versturen'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Aangetekend_versturen(text,tab)).toMatch(genericText.sentSigned);
//     }else if(text === 'Aangetekend versturen - Ja'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Aangetekend_versturen_Ja(text,tab)).toMatch(genericText.yes);
//     }else if(text === 'Aangetekend versturen - Nee'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Aangetekend_versturen_Nee(text,tab)).toMatch(genericText.no);
//     }else if(text === 'Medisch advies meesturen?'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Medisch_Advies_Meesturen(text,tab)).toMatch(genericText.sendMedicalAdvice);
//     }else if(text === 'Medisch advies meesturen? - Ja'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Medisch_Advies_Meesturen_Ja(text,tab)).toMatch(genericText.yes);
//     }else if(text === 'Medisch advies meesturen? - Nee'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Medisch_Advies_Meesturen_Nee(text,tab)).toMatch(genericText.no);
//     }else if(text === 'Beschikbaarheid voor (hoor)zitting'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Beschikbaarheid_Voor_Hoorzitting(text,tab)).toMatch(genericText.availabilityHearing);
//     }else if(text === 'Ontvangerscontrole'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Ontvangerscontrole(text,tab)).toMatch(genericText.receivedCheck);
//     }else if(text === 'Ontvangerscontrole - Toegangscode'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Ontvangerscontrole_Toegangscode(text,tab)).toMatch(genericText.receivedCheckEntryCode);
//     }else if(text === 'Ontvangerscontrole - SMS'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Ontvangerscontrole_SMS(text,tab)).toMatch(genericText.receivedCheckSMS);
//     }else if(text === 'Toegangscode'){
//         expect(await clientApp.clientAppOnderzoek.CheckText_Toegangscode(text,tab)).toMatch(genericText.receivedCheckEntryCode);
//     } // Samenvatting paneel
//     else if(text === 'Samenvatting Paneel - Urgentie'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_urgency(text,tab)).toMatch(genericText.summaryPanelUrgency);
//     }else if(text === 'Samenvatting Paneel - Status'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_Status(text,tab)).toMatch(genericText.summaryPanelStatus);
//     }else if(text === 'Samenvatting Paneel - Wettelijke uiterste beslisdatum'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_LegalFinalDecisionDate(text,tab)).toMatch(genericText.summaryPanelLegalFinalDecisionDate);
//     }else if(text === 'Samenvatting Paneel - Wettelijke uiterste beslisdatum - Datum'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_LegalFinalDecisionDate_Date(text,tab)).toMatch(genericText.summaryPanelLegalFinalDecisionDate_Date);
//     }else if(text === 'Samenvatting Paneel - Wettelijke uiterste beslisdatum - WRD'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_LegalFinalDecisionDate_WRD(text,tab)).toMatch(genericText.summaryPanelLegalFinalDecisionDate_WRD);
//     }else if(text === 'Samenvatting Paneel - Wettelijke uiterste beslisdatum - Kalenderdagen'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_LegalFinalDecisionDate_CalendarDay(text,tab)).toMatch(genericText.summaryPanelLegalFinalDecisionDate_CalendarDay);
//     }else if(text === 'Samenvatting Paneel - Interne uiterste beslisdatum'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_InternalFinalDecisionDate(text,tab)).toMatch(genericText.summaryPanelInternalFinalDecisionDate);
//     }else if(text === 'Samenvatting Paneel - Interne uiterste beslisdatum - Datum'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_InternalFinalDecisionDate_Date(text,tab)).toMatch(genericText.summaryPanelInternalFinalDecisionDate_Date);
//     }else if(text === 'Samenvatting Paneel - Interne uiterste beslisdatum - GRD'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_InternalFinalDecisionDate_GRD(text,tab)).toMatch(genericText.summaryPanelInternalFinalDecisionDate_GRD);
//     }else if(text === 'Samenvatting Paneel - Interne uiterste beslisdatum - Kalenderdagen'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_InternalFinalDecisionDate_CalenderDay(text,tab)).toMatch(genericText.summaryPanelInternalFinalDecisionDate_CalenderDay);
//     }else if(text === 'Samenvatting Paneel - Naam'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_Name(text,tab)).toMatch(genericText.summaryPanelName);
//     }else if(text === 'Samenvatting Paneel - Geboortedatum'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_BirtDate(text,tab)).toMatch(genericText.summaryPanelBirtDate);
//     }else if(text === 'Samenvatting Paneel - BSN'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_CitizenNumber(text,tab)).toMatch(genericText.summaryPanelCitizenNumber);
//     }else if(text === 'Samenvatting Paneel - Cliëntnummer'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_CliëntNumber(text,tab)).toMatch(genericText.summaryPanelCliëntNumber);
//     }else if(text === 'Samenvatting Paneel - Wettelijk vertegenw.'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_LegalRepresentative(text,tab)).toMatch(genericText.summaryPanelLegalRepresentative);
//     }else if(text === 'Samenvatting Paneel - Tel.'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_PhoneNumber(text,tab)).toMatch(genericText.summaryPanelPhoneNumber);
//     }else if(text === 'Samenvatting Paneel - Email'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_Email(text,tab)).toMatch(genericText.summaryPanelEmail);
//     }else if(text === 'Samenvatting Paneel - Huidig kwartaal'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_CurrentQuarter(text,tab)).toMatch(genericText.summaryPanelCurrentQuarter);
//     }else if(text === 'Samenvatting Paneel - Volgend kwartaal'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_NextQuarter(text,tab)).toMatch(genericText.summaryPanelNextQuarter);
//     }else if(text === 'Samenvatting Paneel - Bekend binnen Wlz'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_KnownInWLZ(text,tab)).toMatch(genericText.summaryPanelKnownInWLZ);
//     }else if(text === 'Samenvatting Paneel - Taal'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_KnownInWLZ(text,tab)).toMatch(genericText.summaryPanelKnownInWLZ);
//     }else if(text === 'Samenvatting Paneel - Zaakgegevens'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_CaseDetails(text,tab)).toMatch(genericText.summaryPanelCaseDetail);
//     }else if(text === 'Samenvatting Paneel - Ingediende aanvraag'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_SubmittedRequest(text,tab)).toMatch(genericText.summaryPanelSubmittedRequest);
//     }else if(text === 'Samenvatting Paneel - Bijbehorende zaken'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_RelatedCases(text,tab)).toMatch(genericText.summaryPanelRelatedCases);
//     }else if(text === 'Samenvatting Paneel - Notities'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_Notes(text,tab)).toMatch(genericText.summaryPanelNotes);
//     }else if(text === 'Samenvatting Paneel - Documenten'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_Documents(text,tab)).toMatch(genericText.summaryPanelDocuments);
//     }else if(text === 'Samenvatting Paneel - Medische historie'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_MedicalHistory(text,tab)).toMatch(genericText.summaryPanelMedicalHistory);
//     }else if(text === 'Samenvatting Paneel - Contactmomenten'){
//         expect(await requestBuk.submitPage.CheckText_SummaryPanel_ContactMoments(text,tab)).toMatch(genericText.summaryPanelContactMoments);
//     } // Klacht registratie pagina
//     else if(text === 'Indienen klacht titel'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckTitle_Klacht_Indienen(text,tab)).toMatch(genericText.requestComplaint);
//     }else if(text === 'Standaard informatie'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckText_Standard_Information(text,tab)).toMatch(genericText.standardInformation);
//     }else if(text === 'Cliënt'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckText_Cliënt(text,tab)).toMatch(genericText.cliënt);
//     }else if(text === 'Zaak'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckText_Case(text,tab)).toMatch(genericText.case);
//     }else if(text === 'Ontvangstdatum'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckText_Date_of_Receiving(text,tab)).toMatch(genericText.receivingDate);
//     }else if(text === 'Wijze van binnenkomst'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckText_Method_of_Entry(text,tab)).toMatch(genericText.arrivingForm);
//     }else if(text === 'Gegevens klager'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckText_Details_Complainer(text,tab)).toMatch(genericText.informationProsecutor);
//     }else if(text === 'Dient de cliënt de klacht in?'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckText_question_client_files_complaint(text,tab)).toMatch(genericText.cliëntRequestsComplaint);
//     }else if(text === 'Dient de cliënt de klacht in? - Ja'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckText_Answer_client_files_complaint_Yes(text,tab)).toMatch(genericText.yes);
//     }else if(text === 'Dient de cliënt de klacht in? - Nee'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckText_Answer_client_files_complaint_No(text,tab)).toMatch(genericText.no);
//     }else if(text === 'Bereikbaarheid'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckText_Accessibility(text,tab)).toMatch(genericText.accessibility);
//     }else if(text === 'Gegevens klacht'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckText_Details_Complaint(text,tab)).toMatch(genericText.informationComplaint);
//     }else if(text === 'Klacht gericht op:'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckText_Complaint_Directed_At(text,tab)).toMatch(genericText.complaintAbout);
//     }else if(text === 'Soort klacht'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckText_Complaint_Type(text,tab)).toMatch(genericText.complaintType);
//     }else if(text === 'Omschrijving van de klacht en gewenste oplossing'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckText_Complaint_Description(text,tab)).toMatch(genericText.descriptionAndSolution);
//     }else if(text === 'Opslaan knop'){
//         expect(await aanvragenKlachtApp.registratie01KlachtPage.CheckText_Button_Save(text,tab)).toMatch(genericText.save);
//     } // Klacht In behandeling pagina
//     else if(text === 'In behandeling nemen titel'){
//         expect(await aanvragenKlachtApp.in_Behandeling02KlachtPage.CheckTitle_InBehandelingNemen(text,tab)).toMatch(genericText.procesComplaintTitle);
//     }else if(text === 'Klacht in behandeling nemen?'){
//         expect(await aanvragenKlachtApp.in_Behandeling02KlachtPage.CheckTitle_Klacht_Question_InBehandelingNemen(text,tab)).toMatch(genericText.procesComplaintQuestion);
//     }else if(text === 'Klacht in behandeling nemen? - Ja'){
//         expect(await aanvragenKlachtApp.in_Behandeling02KlachtPage.CheckTitle_Klacht_Answer_InBehandelingNemen_Yes(text,tab)).toMatch(genericText.yes);
//     }else if(text === 'Klacht in behandeling nemen? - Nee'){
//         expect(await aanvragenKlachtApp.in_Behandeling02KlachtPage.CheckTitle_Klacht_Answer_InBehandelingNemen_No(text,tab)).toMatch(genericText.no);
//     }else if(text === 'Reden niet in behandeling nemen'){
//         expect(await aanvragenKlachtApp.in_Behandeling02KlachtPage.CheckTitle_ReasonNotToProgress(text,tab)).toMatch(genericText.reasonFotProcressing);
//     }else if(text === 'Afhandelen stap 1: het informele gesprek titel'){
//         expect(await aanvragenKlachtApp.in_Behandeling02KlachtPage.CheckTitle_InformalConversation(text,tab)).toMatch(genericText.informalConversation);
//     }else if(text === 'Datum toevoegen'){
//         expect(await aanvragenKlachtApp.in_Behandeling02KlachtPage.CheckText_AddDate(text,tab)).toMatch(genericText.addDate);
//     }else if(text === 'Verslaglegging contact met de klager'){
//         expect(await aanvragenKlachtApp.in_Behandeling02KlachtPage.CheckText_reportComplaint(text,tab)).toMatch(genericText.reportWithComplainer);
//     }else if(text === 'Klacht naar tevredenheid afgehandeld?'){
//         expect(await aanvragenKlachtApp.in_Behandeling02KlachtPage.CheckText_Complaint_Gladly_Taken_Care_Of_Question(text,tab)).toMatch(genericText.gladlyTakenCareOf);
//     }else if(text === 'Klacht naar tevredenheid afgehandeld? - Ja'){
//         expect(await aanvragenKlachtApp.in_Behandeling02KlachtPage.CheckText_Complaint_Gladly_Taken_Care_Of_Answer_Yes(text,tab)).toMatch(genericText.yes);
//     }else if(text === 'Klacht naar tevredenheid afgehandeld? - Nee'){
//         expect(await aanvragenKlachtApp.in_Behandeling02KlachtPage.CheckText_Complaint_Gladly_Taken_Care_Of_Answer_No(text,tab)).toMatch(genericText.no);
//     }else if(text === 'Leerpunt voor CIZ'){
//         expect(await aanvragenKlachtApp.in_Behandeling02KlachtPage.CheckText_LearningPointCIZ(text,tab)).toMatch(genericText.learningPointCiz);
//     }else if(text === 'Versturen via'){
//         expect(await aanvragenKlachtApp.in_Behandeling02KlachtPage.CheckText_Versturen_Via(text,tab)).toMatch(genericText.sendVia);
//     }else if(text === 'Versturen via - Email'){
//         expect(await aanvragenKlachtApp.in_Behandeling02KlachtPage.CheckText_Versturen_Via_Email(text,tab)).toMatch(genericText.sendViaEmail);
//     }else if(text === 'Versturen via - Post'){
//         expect(await aanvragenKlachtApp.in_Behandeling02KlachtPage.CheckText_Versturen_Via_Post(text,tab)).toMatch(genericText.sendViaPost);
//     }
//     else if (text == 'voorrangszaak')   {
//         expect(await bukAPP.buk_02_GebruikersportaalPage.CheckText_voorrangszaak(text,tab)).toMatch(genericText.voorrangszaak);
//     }
//     else if (text == 'Afgehandeld medisch verzoek'){
//         expect (await bukAPP.opstellenVerzoekAanMedischAdviseurPage.CheckText_AfgehandeldMedischVerzoek(tab)).toMatch(genericText.summaryPanelFinalizedMedicalRequest);
//     }
//     else if (text === "Waarde kan niet leeg zijn") {
//         expect (await bukAPP.opstellenVerzoekAanMedischAdviseurPage.CheckText_Validatiemelding(tab)).toMatch(genericText.eigenVraagStelling); 
//     }
// });

// export { };