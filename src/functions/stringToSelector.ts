import {Locator, Page} from "@playwright/test";

export class StringToLocator {
    // Selecteren client pagina
    readonly title: Locator;
    readonly caseStatus: Locator;
    readonly stageProgressList:Locator;
    // readonly selectCliënt: Locator;
    readonly searchcliënt: Locator;
    readonly foundcliënt: Locator;
    readonly emptysearch: Locator;
    readonly cancelButton: Locator;
    readonly searchButton: Locator;
    readonly continueButton: Locator;
    readonly citizenNumber: Locator;
    readonly cliëntNumber: Locator;
    readonly birthDate: Locator;
    readonly birthName: Locator;
    readonly country: Locator;
    readonly zipCode: Locator;
    readonly houseNumber: Locator;
    readonly sex: Locator;
    readonly NameAndInitialResults: Locator;
    readonly birtDateResults: Locator;
    readonly sexResults: Locator;
    readonly citizenNumberResults: Locator;
    readonly cliëntNumberResults: Locator;
    readonly zipCodeAndHouseNumberResults: Locator;
    readonly townResults: Locator;
    readonly noResults: Locator;
    readonly newCliënt: Locator;
    // Registreren pagina
    // readonly registerApplication: Locator;
    readonly ApplyKindHeader: Locator;
    readonly careQuestionHeader: Locator;
    readonly birthDateCliënt: Locator;
    readonly ageCliënt: Locator;
    readonly applyType: Locator;
    readonly applyDate: Locator;
    readonly ApplyKind: Locator;
    readonly svbNumber: Locator;
    readonly parentApproval: Locator;
    readonly appealAgainstCase: Locator;
    readonly parentApprovalAnswerYes: Locator;
    readonly parentApprovalAnswerNo: Locator;
    readonly careQuestion: Locator;
    readonly charCounter: Locator;
    readonly backButton: Locator;
    // Registreren pagina
    // readonly personalTitle: Locator;
    readonly secretCIZ: Locator;
    readonly specialResearch: Locator;
    readonly citizenNumberPersonal: Locator;
    readonly birthNamePersonal: Locator;
    readonly prefixPersonal: Locator;
    readonly researchAnswerYes: Locator;
    readonly researchAnswerNo: Locator;
    readonly birthDatePersonal: Locator;
    readonly sexPersonal: Locator;
    readonly callNamePersonal: Locator;
    readonly deatDatePersonal: Locator;
    readonly surnamePersonal: Locator;
    readonly initialsPersonal: Locator;
    readonly nameUsagePersonal: Locator;
    // Aanvullend persoonlijk
    // readonly additionalPersonalTitle: Locator;
    readonly maritalStatus: Locator;
    readonly livingSituation: Locator;
    readonly legalMeasures: Locator;
    readonly residenceStatus: Locator;
    // Contact persoonlijk
    // readonly contactTitle: Locator;
    readonly primaryPhonenumberQuestion: Locator;
    readonly primaryPhonenumber: Locator;
    readonly primaryCountryNumber: Locator;
    readonly primarySecretNumber: Locator;
    readonly secondaryPhonenumberQuestion: Locator;
    readonly secondaryPhonenumber: Locator;
    readonly secondaryCountrynumber: Locator;
    readonly secondarySecretNumber: Locator;
    readonly emailAddressContact: Locator;
    readonly languageContact: Locator;
    readonly communicationVorm: Locator;
    readonly phoneCommunicationYes: Locator;
    readonly phoneCommunicationNo: Locator;
    readonly phoneCommunication: Locator;
    // Relatie pagina
    // readonly relationTitle: Locator;
    readonly addRelation: Locator;
    readonly editRelation: Locator;
    readonly addRelationTitle: Locator;
    readonly relationType: Locator;
    readonly legalRelationship: Locator;
    readonly curator: Locator;
    readonly mentor: Locator;
    readonly parentAuthority: Locator;
    readonly guardianAuthority: Locator;
    readonly authorizedPerson: Locator;
    readonly primaryPhonenumberQuestionRelation: Locator;
    readonly secondaryPhonenumberQuestionRelation: Locator;
    readonly submitButton: Locator;
    readonly emailAddressRelation: Locator;
    // Adressen pagina
    // readonly addressTitle: Locator;
    readonly actualHomeAddress: Locator;
    readonly differentCorrespondenceAddressCheckbox: Locator;
    readonly differentCorrespondenceAddressHeader: Locator;
    readonly differentTemporaryResidenceAddressCheckbox: Locator;
    readonly actualHomeAddressCountry: Locator;
    readonly actualHomeAddressZipcode: Locator;
    readonly actualHomeAddressHouseNumber: Locator;
    readonly actualHomeAddressHouseLetter: Locator;
    readonly actualHomeAddressAdditionHouseNumber: Locator;
    readonly actualHomeAddressDesignationHouseNumber: Locator;
    readonly actualHomeAddressSearchButton: Locator;
    readonly actualHomeAddressStreet: Locator;
    readonly actualHomeAddresTown: Locator;
    readonly actualHomeAddressRoom: Locator;
    readonly actualHomeAddresRemark: Locator;
    readonly relationCliënt: Locator;
    readonly explanetion: Locator;
    // indienen pagina
    readonly createButton: Locator;
    // uitvoeren triage pagina
    readonly validWLZDecision: Locator;
    readonly validWLZDecisionYes: Locator;
    readonly validWLZDecisionNo: Locator;
    readonly validWLZDecisionNoPermission: Locator;
    readonly validBUKAdvice: Locator;
    readonly validBUKAdviceYes: Locator;
    readonly validBUKAdviceNo: Locator;
    readonly currentBUKCase: Locator;
    readonly currentBUKCaseYes: Locator;
    readonly currentBUKCaseNo: Locator;
    readonly overviewBUKRequest: Locator;
    readonly overviewBUKRequestCase: Locator;
    readonly overviewBUKRequestApplicationDate: Locator;
    readonly overviewBUKRequestStatus: Locator;
    readonly alsoRoomMember: Locator;
    readonly result: Locator;
    readonly deviation: Locator;
    // Samenvatting paneel
    readonly summaryPanelUrgency: Locator;
    readonly summaryPanelStatus: Locator;
    readonly summaryPanelLegalFinalDecisionDate: Locator;
    readonly summaryPanelLegalFinalDecisionDate_Date: Locator;
    readonly summaryPanelLegalFinalDecisionDate_WRD: Locator;
    readonly summaryPanelLegalFinalDecisionDate_CalendarDay: Locator;
    readonly summaryPanelInternalFinalDecisionDate: Locator;
    readonly summaryPanelInternalFinalDecisionDate_Date: Locator;
    readonly summaryPanelInternalFinalDecisionDate_GRD: Locator;
    readonly summaryPanelInternalFinalDecisionDate_CalenderDay: Locator;
    readonly summaryPanelName: Locator;
    readonly summaryPanelBirtDate: Locator;
    readonly summaryPanelCitizenNumber: Locator;
    readonly summaryPanelCliëntNumber: Locator;
    readonly summaryPanelLegalRepresentative: Locator;
    readonly summaryPanelPhoneNumber: Locator;
    readonly summaryPanelEmail: Locator;
    readonly summaryPanelCurrentQuarter: Locator;
    readonly summaryPanelNextQuarter: Locator;
    readonly summaryPanelKnownInWLZ: Locator;
    readonly summaryPanelLanguage: Locator;
    readonly summaryPanelCaseDetails: Locator;
    readonly summaryPanelSubmittedRequest: Locator;
    readonly summaryPanelRelatedCases: Locator;
    readonly summaryPanelNotes: Locator;
    readonly summaryPanelDocuments: Locator;
    readonly summaryPanelMedicalHistory: Locator;
    readonly summaryPanelContactMoments: Locator;
    readonly summaryPanelFinishedMedicalRequests: Locator;
    // Voorbereiding pagina
    readonly adminCompleteQuestions: Locator;
    readonly adminCompleteYes: Locator;
    readonly adminCompleteNo: Locator;
    // Onderzoek pagina
    readonly importResearchDetails: Locator;
    readonly general: Locator;
    readonly permissionForView: Locator;
    readonly sicknessIssues: Locator;
    readonly sicknessIssuesApplicable: Locator;
    readonly careTaking: Locator;
    readonly bodyHygiene: Locator;
    readonly cleanliness: Locator;
    readonly drinkingFood: Locator;
    readonly mobility: Locator;
    readonly medicalCare: Locator;
    readonly babysitting: Locator;
    readonly behaviour: Locator;
    readonly communication: Locator;
    readonly homeAlone: Locator;
    readonly guidanceOutsideHouse: Locator;
    readonly keepBusy: Locator;
    // Vastleggen Advies pagina
    readonly ageDuringPrimaryAdvice: Locator;
    readonly proposedAdvice: Locator;
    readonly score: Locator;
    readonly basisForAdvies: Locator;
    readonly divertFromProposedAdvice: Locator;
    readonly advice: Locator;
    readonly willThereHearing: Locator;
    readonly willThereHearingYes: Locator;
    readonly willThereHearingNo: Locator;
    readonly reasonNoAdvice: Locator;
    readonly previewLetterButton: Locator;
    readonly timespan: Locator;
    readonly endDateAdvice: Locator;
    readonly executedResearch: Locator;
    readonly sendMedicalAdvice: Locator;
    readonly sendMedicalAdviceYes: Locator;
    readonly sendMedicalAdviceNo: Locator;
    readonly availabilityHearing: Locator;
    readonly sendSigned: Locator;
    readonly sendSignedYes: Locator;
    readonly sendSignedNo: Locator;
    readonly receivedCheck: Locator;
    readonly receivedCheckSMS: Locator;
    readonly receivedCheckEntryCode: Locator;
    readonly entryCode: Locator;
    // Klachten registratie pagina
    readonly standardInformation: Locator;
    readonly cliënt: Locator;
    readonly case: Locator;
    readonly dateOfReceiving: Locator;
    readonly methodOfEntry: Locator;
    readonly detailsComplainer: Locator;
    readonly questionCliëntFilesComplaint: Locator;
    readonly answerCliëntFilesComplaintYes: Locator;
    readonly answerCliëntFilesComplaintNo: Locator;
    readonly accessibility: Locator;
    readonly detailsComplaint: Locator;
    readonly complaintDirectedAt: Locator;
    readonly complaintType: Locator;
    readonly complaintDescription: Locator;
    readonly buttonSave: Locator;
    // Klachten In behandeling nemen pagina
    readonly progressComplaintQuestion: Locator;
    readonly progressComplaintAnswerYes: Locator;
    readonly progressComplaintAnswerNo: Locator;
    readonly reasonNotToProcess: Locator;
    readonly addDate: Locator;
    readonly reportWithComplainer: Locator;
    readonly complaintGladlyTakenCareOfQuestions: Locator;
    readonly complaintGladlyTakenCareOfAnswerYes: Locator;
    readonly complaintGladlyTakenCareOfAnswerNo: Locator;
    readonly learningPointCIZ: Locator;
    readonly sendVia: Locator;
    readonly sendViaEmail: Locator;
    readonly sendViaPost: Locator;




    constructor(private page: Page) {
        // Selecteren client pagina
        this.title = this.page.locator('[data-test-id="2022071414001008351000_header"] >div >h2');
        this.caseStatus = this.page.locator('[data-test-id="2016083016191602341167946"]');
        // this.selectCliënt = this.page.locator('[data-test-id="2022071414001008351000_header"] >div >h2');
        this.searchcliënt = this.page.locator('[data-test-id="20180812094919087920"] h3:has-text("Zoeken cliënt")');
        this.foundcliënt = this.page.locator('[data-test-id="20180812094919087920"] h3:has-text("Gevonden cliënten")');
        this.emptysearch = this.page.locator('[data-test-id="202303201055260643472"]:has-text("Wissen zoekcriteria")');
        this.cancelButton = this.page.locator('[data-test-id="202004130740410264583"]:has-text("Annuleren")');
        this.searchButton = this.page.locator('[data-test-id="202303201055260643212"]:has-text("Zoek cliënt")');
        this.continueButton = this.page.locator('[data-test-id="20161017110917023176385"]:has-text("Doorgaan")');
        this.citizenNumber = this.page.locator('[data-test-id="201808120953380695400"] [data-test-id="202303171202320977819-Label"]');
        this.cliëntNumber = this.page.locator('[data-test-id="202303171540090284268-Label"]:has-text("Cliëntnummer")');
        this.birthDate = this.page.locator('[data-test-id="202303171531030560785-Label"]:has-text("Geboortedatum")');
        this.birthName = this.page.locator('[data-test-id="202407150739210066437-Label"]:has-text("Geboortenaam")');
        this.country = this.page.locator('[data-test-id="202303211459140535784-Label"]:has-text("Land")');
        this.zipCode = this.page.locator('[data-test-id="202407150740210574867-Label"]:has-text("Postcode")');
        this.houseNumber = this.page.locator('[data-test-id="202407150740580119236-Label"]:has-text("Huisnummer")');
        this.sex = this.page.locator('[data-test-id="202304111257080169153-Label"]:has-text("Geslacht")');
        this.NameAndInitialResults = this.page.locator('[data-test-id="202303171347560100595"]');
        this.birtDateResults = this.page.locator('[data-test-id="20230317144548097840"]');
        this.sexResults = this.page.locator('[data-test-id="202303171445480979928"]');
        this.citizenNumberResults = this.page.locator('[data-test-id="20160721093355058239712"]');
        this.cliëntNumberResults = this.page.locator('[data-test-id="202303171445480979836"]');
        this.zipCodeAndHouseNumberResults = this.page.locator('[data-test-id="20230317144859023438"]');
        this.townResults = this.page.locator('[data-test-id="202303171448590235757"]');
        this.noResults = this.page.locator('[class="dataLabelRead gridCell"]');
        this.newCliënt = this.page.locator('[data-test-id="202303291455190909905-Label"]:has-text("Aanvraag creëren met een nieuwe cliënt")');
        // Stage progress
        this.stageProgressList = this.page.locator('[data-test-id="2015111214404002865460"]');
        // Registreren pagina
        // this.registerApplication = this.page.locator('[data-test-id="2022071414001008351000"] div h2');
        this.ApplyKindHeader = this.page.locator('[data-test-id="201808120943310957798_header"]:has-text("Aanvraagsoort")');
        this.careQuestionHeader = this.page.locator('[data-test-id="202308021344380456636"]:has-text("Zorgvraag")');
        this.birthDateCliënt = this.page.locator('[data-test-id="202304121428480686885-Label"]:has-text("Geboortedatum cliënt")');
        this.ageCliënt = this.page.locator('[data-test-id="202304121425000528646-Label"]:has-text("Leeftijd")');
        this.applyType = this.page.locator('[data-test-id="202304051606120242608-Label"]:has-text("Aanvraagwijze")');
        this.applyDate = this.page.locator('[data-test-id="202304051607470966391-Label"]:has-text("Aanvraagdatum")');
        this.ApplyKind = this.page.locator('[data-test-id="202304051608260064977-Label"]:has-text("Aanvraagsoort")');
        this.svbNumber = this.page.locator('[data-test-id="20230413103759082924-Label"]:has-text("Registratienummer SVB")');
        this.parentApproval = this.page.locator('[data-test-id="20230413104637066579-Label"]:has-text("Geeft de aanvragende ouder toestemming om indien aanwezig het cliëntendossier in te zien?")');
        this.parentApprovalAnswerYes = this.page.locator('[for="291408c6Yes"]:has-text("Ja")')
        this.parentApprovalAnswerNo = this.page.locator('[for="291408c6No"]:has-text("Nee")')
        this.appealAgainstCase = this.page.locator('[data-test-id="202302170926510215245-Label"]')
        this.careQuestion = this.page.locator('[data-test-id="20230726164359054686-Label"]:has-text("Zorgvraag")');
        this.charCounter = this.page.locator('[class="textAreaCharCounter"]:has-text("Resterend: 10000 tekens")');
        this.backButton = this.page.locator('[data-test-id="20161017110917023278926"]:has-text("Terug")');
        // Persoonlijk pagina
        // this.personalTitle = this.page.locator('[data-test-id="2022071414001008351000_header"] div h2');
        this.secretCIZ = this.page.locator('[data-test-id="202303270119190078549-Label"]:has-text("Geheim persoon")');
        this.specialResearch = this.page.locator('[data-test-id="20230327013810050134-Label"]:has-text("Speciaal onderzoek")');
        this.citizenNumberPersonal = this.page.locator('[data-test-id="202301171507120010997-Label"]:has-text("Burgerservicenummer (BSN)")');
        this.birthNamePersonal = this.page.locator('[data-test-id="20230119142831037392-Label"]:has-text("Geboortenaam")');
        this.prefixPersonal = this.page.locator('[data-test-id="202301191428310373632-Label"]:has-text("Voorvoegsel")');
        this.researchAnswerYes = this.page.locator('[for="bfce745fYes"]:has-text("Ja")');
        this.researchAnswerNo = this.page.locator('[for="bfce745fNo"]:has-text("Nee")');
        this.birthDatePersonal = this.page.locator('[data-test-id="202301171507120010774-Label"]:has-text("Geboortedatum")');
        this.sexPersonal = this.page.locator('[data-test-id="202301180818010983745-Label"]:has-text("Geslacht")');
        this.callNamePersonal = this.page.locator('[data-test-id="202303301403440208827-Label"]:has-text("Roepnaam")');
        this.deatDatePersonal = this.page.locator('[data-test-id="202301191428310373347-Label"]:has-text("Overlijdensdatum")');
        this.surnamePersonal = this.page.locator('[data-test-id="202301180818010982521-Label"]:has-text("Voornamen")');
        this.initialsPersonal = this.page.locator('[data-test-id="202301180818010983334-Label"]:has-text("Voorletter(s)")');
        this.nameUsagePersonal = this.page.locator('[data-test-id="202301251108520857529-Label"]:has-text("Naamgebruik")');
        // Aanvullend persoonlijk
        // this.additionalPersonalTitle = this.page.locator('[data-test-id="2022071414001008351000_header"] >div >h2');
        this.maritalStatus = this.page.locator('[data-test-id="202301191412290159453-Label"]:has-text("Burgerlijke staat")');
        this.livingSituation = this.page.locator('[data-test-id="202301191412290159285-Label"]:has-text("Leefsituatie")');
        this.legalMeasures = this.page.locator('[data-test-id="202301191412290159670-Label"]:has-text("Juridische maatregelen")');
        this.residenceStatus = this.page.locator('[data-test-id="202301191412290159811-Label"]');
        // Contact persoonlijk
        // this.contactTitle = this.page.locator('[data-test-id="2022071414001008351000_header"] >div >h2');
        this.primaryPhonenumberQuestion = this.page.locator('[class= "field-caption dataLabelForWrite"]');
        this.primaryPhonenumber = this.page.locator('[data-test-id="202301241705350134173-Label"]');
        this.primaryCountryNumber = this.page.locator('[data-test-id="202301241705350134686-Label"]');
        this.primarySecretNumber = this.page.locator('[data-test-id="202301241742290472653-Label"]');
        this.secondaryPhonenumberQuestion = this.page.locator('[class= "field-caption dataLabelForWrite"]');
        this.secondaryPhonenumber = this.page.locator('[data-test-id="202301241705350134173-Label"]');
        this.secondaryCountrynumber = this.page.locator('[data-test-id="202301241705350134686-Label"]');
        this.secondarySecretNumber = this.page.locator('[data-test-id="202301241742290472653-Label"]');
        this.emailAddressContact = this.page.locator('[data-test-id="202301191521550362664-Label"]');
        this.languageContact = this.page.locator('[data-test-id="202301191428310372328-Label"]');
        this.communicationVorm = this.page.locator('[data-test-id="202301191521550362374-Label"]');
        this.phoneCommunicationYes = this.page.locator('[for="eaa331feYes"]');
        this.phoneCommunicationNo = this.page.locator('[for="eaa331feNo"]');
        this.phoneCommunication = this.page.locator('[data-test-id="202301191521550362739-Label"]');
        // Relatie pagina
        // this.relationTitle = this.page.locator('[data-test-id="2022071414001008351000_header"] >div >h2');
        this.addRelation = this.page.locator('[data-test-id="202304131315220691501"]:has-text("Relatie toevoegen")');
        this.editRelation = this.page.locator('[data-test-id="202406041654100319458"]:has-text("Relatie wijzigen")');
        this.addRelationTitle = this.page.locator('[data-test-id="202406041657580500110_header"] >div >h2');
        this.relationType = this.page.locator('[data-test-id="202301180919500385590-Label"]');
        this.legalRelationship = this.page.locator('[data-test-id="202301180919500385850-Label"]');
        this.curator = this.page.locator('[for="9f6648cbCurator"]');
        this.mentor = this.page.locator('[for="9f6648cbMentor"]');
        this.parentAuthority = this.page.locator('[for="9f6648cbParentWithAuthority"]');
        this.guardianAuthority = this.page.locator('[for="9f6648cbGuardianWithAuthority"]');
        this.authorizedPerson = this.page.locator('[for="9f6648cbNotarialAuthorizedPerson"]');
        this.primaryPhonenumberQuestionRelation = this.page.locator('[data-test-id="2022071414001008351000_header"]');
        this.secondaryPhonenumberQuestionRelation = this.page.locator('[data-test-id="2022071414001008351000_header"]');
        this.emailAddressRelation = this.page.locator('[data-test-id="202301251640540337171-Label"]');
        this.submitButton = this.page.locator('[data-test-id="2014121801251706289770"]');
        // Adressen pagina
        // this.addressTitle = this.page.locator('[data-test-id="2022071414001008351000_header"] >div >h2');
        this.actualHomeAddress = this.page.locator('[data-test-id="202308311532460126919_header"]');
        this.differentCorrespondenceAddressCheckbox = this.page.locator('[data-test-id="20230522083949059942-Label"]');
        this.differentCorrespondenceAddressHeader = this.page.locator('[data-test-id="202308311532460126173_header"]');
        this.differentTemporaryResidenceAddressCheckbox = this.page.locator('[data-test-id="202305220839490599306-Label"]');
        this.actualHomeAddressCountry = this.page.locator('[data-test-id="202303211459140535784-Label"]');
        this.actualHomeAddressZipcode = this.page.locator('[data-test-id="202301181101250617996-Label"]');
        this.actualHomeAddressHouseNumber = this.page.locator('[data-test-id="202301181101250617543-Label"]');
        this.actualHomeAddressHouseLetter = this.page.locator('[data-test-id="20230118110125061713-Label"]');
        this.actualHomeAddressAdditionHouseNumber = this.page.locator('[data-test-id="202301181101250618252-Label"]:has-text("Toevoeging huisnummer")');
        this.actualHomeAddressDesignationHouseNumber = this.page.locator('[data-test-id="202305150855300707370-Label"]');
        this.actualHomeAddressSearchButton = this.page.locator('[data-test-id="202305230838300195175"]:has-text("Zoek")');
        this.actualHomeAddressStreet = this.page.locator('[data-test-id="202301181101250618574-Label"]');
        this.actualHomeAddresTown = this.page.locator('[data-test-id="202301181101250618233-Label"]');
        this.actualHomeAddressRoom = this.page.locator('[data-test-id="202305150857580218737-Label"]');
        this.actualHomeAddresRemark = this.page.locator('[data-test-id="2023051508575802184-Label"]');
        this.relationCliënt = this.page.locator('[data-test-id="202306070954290323843-Label"]');
        this.explanetion = this.page.locator('[data-test-id="202406130854120639601-Label"]');  
        // data-test-id="202309131536470424675" is de id voor existing client op pagina voorbereiding
        // Indienen pagina
        this.createButton = this.page.locator('[data-test-id="20161017110917023277518"]');
        // Uitvoeren triage pagina
        this.validWLZDecision = this.page.locator('[data-test-id="202302141136340145742-Label"]');
        this.validWLZDecisionYes = this.page.locator('[for="f36a5da7Yes"]');
        this.validWLZDecisionNo = this.page.locator('[for="f36a5da7No"]');
        this.validWLZDecisionNoPermission = this.page.locator('[for="f36a5da7NoPermission"]');
        this.validBUKAdvice = this.page.locator('[data-test-id="202301171116500326995-Label"]');
        this.validBUKAdviceYes = this.page.locator('[for="9d98c1c8Yes"]');
        this.validBUKAdviceNo = this.page.locator('[for="9d98c1c8No"]');
        this.currentBUKCase = this.page.locator('[data-test-id="202301171116500326995-Label"]');
        this.currentBUKCaseYes = this.page.locator('[for="3af7bff6Yes"]');
        this.currentBUKCaseNo = this.page.locator('[for="3af7bff6No"]');
        this.overviewBUKRequest = this.page.locator('[data-test-id="---------------------------------------------"]');
        this.overviewBUKRequestCase = this.page.locator('[data-test-id="202302281353170836885-th-0"]');
        this.overviewBUKRequestApplicationDate = this.page.locator('[data-test-id="202302281353170836885-th-1"]');
        this.overviewBUKRequestStatus = this.page.locator('[data-test-id="202302281353170836885-th-2"]');
        this.alsoRoomMember = this.page.locator('[data-test-id="202302221522470972675-Label"]');
        this.result = this.page.locator('[data-test-id="20230117120500025636-Label"]');
        this.deviation = this.page.locator('[data-test-id="202301190847000982459-Label"]');
        // Samenvatting paneel
        this.summaryPanelUrgency = this.page.locator('[data-test-id="2015030901223101681630-Label"]');
        this.summaryPanelStatus = this.page.locator('[data-test-id="---------------------------------------------"]');
        this.summaryPanelLegalFinalDecisionDate = this.page.locator('[data-test-id="20180812094919087920"] [class="header-title"]');
        this.summaryPanelLegalFinalDecisionDate_Date = this.page.locator('[data-test-id="202402031144200579905-Label"]');
        this.summaryPanelLegalFinalDecisionDate_WRD = this.page.locator('[data-test-id="202402031244230820969-Label"]');
        this.summaryPanelLegalFinalDecisionDate_CalendarDay = this.page.locator('[data-test-id="202407151009110388394-Label"]');
        this.summaryPanelInternalFinalDecisionDate = this.page.locator('[data-test-id="20180812094919087920"] [class="header-title"]');
        this.summaryPanelInternalFinalDecisionDate_Date = this.page.locator('[data-test-id="202402031144200579905-Label"]');
        this.summaryPanelInternalFinalDecisionDate_GRD = this.page.locator('[data-test-id="202407151008470752348-Label"]');
        this.summaryPanelInternalFinalDecisionDate_CalenderDay = this.page.locator('[data-test-id="202407151009110388394-Label"]');
        this.summaryPanelName = this.page.locator('[data-test-id="202304031632460560515-Label"]');
        this.summaryPanelBirtDate = this.page.locator('[data-test-id="201806290229250580438"]');
        this.summaryPanelCitizenNumber = this.page.locator('[data-test-id="202306211732100408799-Label"]');
        this.summaryPanelCliëntNumber = this.page.locator('[data-test-id="202306251438300680535-Label"]');
        this.summaryPanelLegalRepresentative = this.page.locator('[data-test-id="202407151139050468991"]');
        this.summaryPanelPhoneNumber = this.page.locator('[data-test-id="202306221213020376684-Label"]');
        this.summaryPanelEmail = this.page.locator('[data-test-id="202407151013500156394-Label"]');
        this.summaryPanelCurrentQuarter = this.page.locator('[data-test-id="202306251421510565991"]');
        this.summaryPanelNextQuarter = this.page.locator('[data-test-id="202306251421510565807"]');
        this.summaryPanelKnownInWLZ = this.page.locator('[data-test-id="201806290229250580438"]');
        this.summaryPanelLanguage = this.page.locator('[data-test-id="202401231347420830533-Label"]');
        this.summaryPanelCaseDetails = this.page.locator('[data-test-id="201812102006260055506_1"]');
        this.summaryPanelSubmittedRequest = this.page.locator('[data-test-id="201812102006260055506_2"]');
        this.summaryPanelRelatedCases = this.page.locator('[data-test-id="201812102006260055506_3"]');
        this.summaryPanelNotes = this.page.locator('[data-test-id="201812102006260055506_4"]');
        this.summaryPanelDocuments = this.page.locator('[data-test-id="201812102006260055506_7"]');
        this.summaryPanelMedicalHistory = this.page.locator('[data-test-id="201812102006260055506_8"]');
        this.summaryPanelContactMoments = this.page.locator('[data-test-id="201812102006260055506_13"]');
        this.summaryPanelFinishedMedicalRequests = this.page.locator('[data-test-id="201812102006260055506_9"]');
        // Voorbereiding pagina
        this.adminCompleteQuestions = this.page.locator('[data-test-id="202405221055290522983-Label"]');
        this.adminCompleteYes = this.page.locator('[for="25242bcbtrue"]');
        this.adminCompleteNo = this.page.locator('[for="25242bcbfalse"]');
        // Onderzoek pagina
        this.importResearchDetails = this.page.locator('[data-test-id="202306261327190410763"]');
        this.general = this.page.locator('[data-test-id="20230205115734062017_header"]');
        this.permissionForView = this.page.locator('[data-test-id="202302071735510458212-Label"]');
        this.sicknessIssues = this.page.locator('[data-test-id="20230202175129027136_header"]');
        this.sicknessIssuesApplicable = this.page.locator('[data-test-id="202302021751290271290-Label"]');
        this.careTaking = this.page.locator('[data-test-id="20230221104623075353_header"]');
        this.bodyHygiene = this.page.locator('[data-test-id="202302201509140903360"]:has-text("Lichaamshygiëne")');
        this.cleanliness = this.page.locator('[data-test-id="202302201509140903360"]:has-text("Zindelijkheid")');
        this.drinkingFood = this.page.locator('[data-test-id="202302201509140903360"]:has-text("Eten en drinken")');
        this.mobility = this.page.locator('[data-test-id="202302201509140903360"]:has-text("Mobiliteit")');
        this.medicalCare = this.page.locator('[data-test-id="202302201509140903360"]:has-text("Medische verzorging")');
        this.babysitting = this.page.locator('[data-test-id="20230221104623075353_header"]');
        this.behaviour = this.page.locator('[data-test-id="202302201509140903360"]:has-text("Gedrag")');
        this.communication = this.page.locator('[data-test-id="202302201509140903360"]:has-text("Communicatie")');
        this.homeAlone = this.page.locator('[data-test-id="202302201509140903360"]:has-text("Alleen thuis zijn")');
        this.guidanceOutsideHouse = this.page.locator('[data-test-id="202302201509140903360"]:has-text("Begeleiding buitenshuis")');
        this.keepBusy = this.page.locator('[data-test-id="202302201509140903360"]:has-text("Bezig houden, handreikingen")');
        // Vastleggen Advies pagina
        this.ageDuringPrimaryAdvice = this.page.locator('[data-test-id="202405301326040966231-Label"]');
        this.proposedAdvice = this.page.locator('[data-test-id="202302151227100067598-Label"]');
        this.score = this.page.locator('[data-test-id="202302151227100067959-Label"]');
        this.basisForAdvies = this.page.locator('[data-test-id="202302151227100067434-Label"]');
        this.divertFromProposedAdvice = this.page.locator('[data-test-id="202302151506440910505-Label"]');
        this.advice = this.page.locator('[data-test-id="202302151506440910697-Label"]');
        this.willThereHearing = this.page.locator('[data-test-id="202305151454390840731-Label"]');
        this.willThereHearingYes = this.page.locator('[for="56ef9f3btrue"]');
        this.willThereHearingNo = this.page.locator('[for="56ef9f3bfalse"]');
        this.reasonNoAdvice = this.page.locator('[data-test-id="202302151506440910163-Label"]');
        this.timespan = this.page.locator('[data-test-id="202302161537410240949-Label"]');
        this.endDateAdvice = this.page.locator('[data-test-id="20230216153741024097-Label"]');
        this.executedResearch = this.page.locator('[data-test-id="202302201616080637741-Label"]');
        this.sendMedicalAdvice = this.page.locator('[data-test-id="202407012031180337365-Label"]');
        this.sendMedicalAdviceYes = this.page.locator('[for="83267468Yes"]');
        this.sendMedicalAdviceNo = this.page.locator('[for="83267468No"]');
        this.previewLetterButton = this.page.locator('[data-test-id="202307201502460075839"]');
        this.availabilityHearing = this.page.locator('[data-test-id="202305151454390841793-Label"]');
        this.sendSigned = this.page.locator('[data-test-id="202408141042580952593-Label"]');
        this.sendSignedYes = this.page.locator('[for="7a4bcffbtrue"]');
        this.sendSignedNo = this.page.locator('[for="7a4bcffbfalse"]');
        this.receivedCheck = this.page.locator('[data-test-id="202408131709270441841-Label"]');
        this.receivedCheckSMS = this.page.locator('[for="579f6febsms"]');
        this.receivedCheckEntryCode = this.page.locator('[for="579f6febaccesscode"]');
        this.entryCode = this.page.locator('[data-test-id="202408131719480696612-Label"]');
        // Klachten registratie pagina
        this.standardInformation = this.page.locator('[id="headerlabel5846"]');
        this.cliënt = this.page.locator('[data-test-id="202307071531220912807-Label"]');
        this.case = this.page.locator('[data-test-id="202307071545190416212-Label"]');
        this.dateOfReceiving = this.page.locator('[data-test-id="202307071705390218281-Label"]');
        this.methodOfEntry = this.page.locator('[data-test-id="2023070717065904615-Label"]');
        this.detailsComplainer = this.page.locator('[id="headerlabel9980"]');
        this.questionCliëntFilesComplaint = this.page.locator('[data-test-id="202307071507380846137-Label"]');
        this.answerCliëntFilesComplaintYes = this.page.locator('[for="57dc7bc8Yes"]');
        this.answerCliëntFilesComplaintNo = this.page.locator('[for="57dc7bc8No"]');
        this.accessibility = this.page.locator('[data-test-id="202307071808410005974-Label"]');
        this.detailsComplaint = this.page.locator('[id="headerlabel2818"]');
        this.complaintDirectedAt = this.page.locator('[data-test-id="202307071513510839751-Label"]');
        this.complaintType = this.page.locator('[data-test-id="202307101050190047470-Label"]');
        this.complaintDescription = this.page.locator('[data-test-id="202307071746410838578-Label"]');
        this.buttonSave = this.page.locator('[data-test-id="202007290826300884295"]');
        // Klachten in behandeling nemen pagina
        this.progressComplaintQuestion = this.page.locator('[data-test-id="202307121859450530770-Label"]');
        this.progressComplaintAnswerYes = this.page.locator('[for="b1335326Yes"]');
        this.progressComplaintAnswerNo = this.page.locator('[for="b1335326No"]');
        this.reasonNotToProcess = this.page.locator('[data-test-id="202307121916220436988-Label"]');
        this.addDate = this.page.locator('[data-test-id="202307131505190503118"]');
        this.reportWithComplainer = this.page.locator('[data-test-id="202307131504180990728-Label"]');
        this.complaintGladlyTakenCareOfQuestions = this.page.locator('[data-test-id="202307131724090154562-Label"]');
        this.complaintGladlyTakenCareOfAnswerYes = this.page.locator('[for="1ed40c04Yes"]');
        this.complaintGladlyTakenCareOfAnswerNo = this.page.locator('[for="1ed40c04No"]');
        this.learningPointCIZ = this.page.locator('[data-test-id="202307131726280115204-Label"]');
        this.sendVia = this.page.locator('[data-test-id="202408131702020220432-Label"]');
        this.sendViaEmail = this.page.locator('[for="52050faeEmail"]');
        this.sendViaPost = this.page.locator('[for="52050faePostal"]');

    }

    async getSelector() {
        const selectors = {titel: this.title, zaakStatus: this.caseStatus, zoekenCliënt: this.searchcliënt, gevondencliënten: this.foundcliënt, wiszoekcriteria: this.emptysearch,
            annulerenKnop: this.cancelButton, zoekKnop: this.searchButton, doorgaanKnop: this.continueButton, burgerservicenummer: this.citizenNumber, cliëntnummer: this.cliëntNumber, 
            geboortedatum: this.birthDate, geboortenaam: this.birthName, land: this.country, postcode: this.zipCode, huisnummer: this.houseNumber, geslacht: this.sex, naamEnvoorlettersResultaat: this.NameAndInitialResults,
            geboortedatumResultaat: this.birtDateResults, geslachtResultaat: this.sexResults, burgerservicenummerResultaat: this.citizenNumberResults, cliëntnummerResultaat: this.cliëntNumberResults,
            postcodeEnHuisnummerResultaat: this.zipCodeAndHouseNumberResults, plaatsResultaat: this.townResults, geenResultaat: this.noResults, newCliënt: this.newCliënt,
            aanvraagsoortHeader: this.ApplyKindHeader, zorgvraagHeader: this.careQuestionHeader, GeboortedatumCliënt: this.birthDateCliënt, leeftijdCliënt: this.ageCliënt, aanvraagwijze: this.applyType, aanvraagDatum: this.applyDate,
            aanvraagsoort: this.ApplyKind, registratieSVB: this.svbNumber, ouderToestemming: this.parentApproval, bezwaarTegenAdvies: this.appealAgainstCase, toestemmingJa: this.parentApprovalAnswerYes, toestemmingNee: this.parentApprovalAnswerNo, zorgvraag: this.careQuestion, 
            tellerBox: this.charCounter, terugKnop: this.backButton, geheimCIZ: this.secretCIZ, speciaalOnderzoek: this.specialResearch, onderzoekAntwoordJa: this.researchAnswerYes, 
            onderzoekAntwoordNee: this.researchAnswerNo, burgerservicenummerPersoonlijk: this.citizenNumberPersonal, geboortedatumPersoonlijk: this.birthDatePersonal, roepNaamPersoonlijk: this.callNamePersonal,
            geboorteNaamPersoonlijk: this.birthNamePersonal, voorvoegselPersoonlijk: this.prefixPersonal, voornamenPersoonlijk: this.surnamePersonal, voorlettersPersoonlijk: this.initialsPersonal, geslachtPersoonlijk: this.sexPersonal,
            overlijdensdatumPersoonlijk: this.deatDatePersonal, naamgebruikPersoonlijk: this.nameUsagePersonal, burgelijkeStaat: this.maritalStatus, leefsituatie: this.livingSituation,
            juridischeMaatregel: this.legalMeasures, verblijfstatus: this.residenceStatus, eersteTelefoonnummerVraag: this.primaryPhonenumberQuestion, eersteLandnummer: this.primaryCountryNumber, eersteTelefoonnummer: 
            this.primaryPhonenumber, eersteGeheimNummer: this.primarySecretNumber, tweedeTelefoonnummerVraag: this.secondaryPhonenumberQuestion, tweedeLandnummer: this.secondaryCountrynumber, tweedeTelefoonnummer: 
            this.secondaryPhonenumber, tweedeGeheimNummer: this.secondarySecretNumber, emailadresContact: this.emailAddressContact, taalContact: this.languageContact, communicatieVorm: this.communicationVorm,
            telefonischCommunicatieJa: this.phoneCommunicationYes, telefonischCommunicatieNee: this.phoneCommunicationNo, telefonischCommunicatie: this.phoneCommunication, relatiesToevoegen: this.addRelation,
            relatiesWijzigen: this.editRelation, relatieToevegenTitel: this.addRelationTitle, relatieType: this.relationType, wettelijkeRelatie: this.legalRelationship, curator: this.curator, mentor: this.mentor, ouderMetGezag: this.parentAuthority,
            voogdMetGezag: this.guardianAuthority, gemachtigde: this.authorizedPerson, eersteTelefoonnummerVraagRelatie: this.primaryPhonenumberQuestionRelation, tweedeTelefoonnummerVraagRelatie: this.secondaryPhonenumberQuestionRelation,
            indienenKnop: this.submitButton, emailAdresRelatie: this.emailAddressRelation, feitelijkeWoonadres: this.actualHomeAddress, afwijkendCorrespondentieadresCheckbox: this.differentCorrespondenceAddressCheckbox, 
            afwijkendCorrespondentieadresHeader: this.differentCorrespondenceAddressHeader, afwijkendTijdelijkeVerblijfadresCheckbox: this.differentTemporaryResidenceAddressCheckbox, feitelijkeWoonadresLand: this.actualHomeAddressCountry, 
            feitelijkeWoonadresPostcode: this.actualHomeAddressZipcode, feitelijkeWoonadresHuisnummer: this.actualHomeAddressHouseNumber, feitelijkeWoonadresHuisLetter: this.actualHomeAddressHouseLetter,
            feitelijkeWoonadresToevoegingHuisnummer: this.actualHomeAddressAdditionHouseNumber, feitelijkeWoonadresHuisnummerAanduiding: this.actualHomeAddressDesignationHouseNumber, feitelijkeWoonadresZoekKnop: this.actualHomeAddressSearchButton,
            feitelijkeWoonadresStraat: this.actualHomeAddressStreet, feitelijkeWoonadresPlaats: this.actualHomeAddresTown, feitelijkeWoonadresKamer: this.actualHomeAddressRoom, feitelijkeWoonadresOpmerking: this.actualHomeAddresRemark,
            relatieTotCliënt: this.relationCliënt, toelichting: this.explanetion, aanmakenKnop: this.createButton, zaakStageProgress: this.stageProgressList, samenvattingPaneelUrgentie: this.summaryPanelUrgency, 
            samenvattingPaneelStatus: this.summaryPanelStatus, samenvattingPaneelWettelijkeUitersteBeslisDatum: this.summaryPanelLegalFinalDecisionDate, samenvattingPaneelWettelijkeUitersteBeslisDatum_Datum: this.summaryPanelLegalFinalDecisionDate_Date, 
            samenvattingPaneelWettelijkeUitersteBeslisDatum_WRD: this.summaryPanelLegalFinalDecisionDate_WRD, samenvattingPaneelWettelijkeUitersteBeslisDatumKalenderdagen: this.summaryPanelLegalFinalDecisionDate_CalendarDay,
            samenvattingPaneelInterneUiterstBeslisdatum: this.summaryPanelInternalFinalDecisionDate, samenvattingPaneelInterneUiterstBeslisdatum_Datum: this.summaryPanelInternalFinalDecisionDate_Date, samenvattingPaneelInterneUiterstBeslisdatum_GRD: this.summaryPanelInternalFinalDecisionDate_GRD,
            samenvattingPaneelInterneUiterstBeslisdatum_Kalendagen: this.summaryPanelInternalFinalDecisionDate_CalenderDay, samenvattingPaneelNaam: this.summaryPanelName, samenvattingPaneelGeboortedatum: this.summaryPanelBirtDate,
            samenvattingPaneelBSN: this.summaryPanelCitizenNumber, samenvattingPaneelCliëntnummer: this.summaryPanelCliëntNumber, samenvattingPaneelWettelijkVertegenwoordiger: this.summaryPanelLegalRepresentative, samenvattingPaneelTelefoonnummer: this.summaryPanelPhoneNumber,
            samenvattingPaneelEmail: this.summaryPanelEmail, samenvattingPaneelHuidigeKwartaal: this.summaryPanelCurrentQuarter, samenvattingPaneelVolgendeKwartaal: this.summaryPanelNextQuarter, samenvattingPaneelBekendBinnenWLZ: this.summaryPanelKnownInWLZ, samenvattingPaneelTaal: this.summaryPanelLanguage,
            samenvattingPaneelZaakgegevens: this.summaryPanelCaseDetails, samenvattingPaneelIngediendAanvraag: this.summaryPanelSubmittedRequest, samenvattingPaneelBijbehorendeZaken: this.summaryPanelRelatedCases, samenvattingPaneelNotities: this.summaryPanelNotes, 
            samenvattingPaneelDocumenten: this.summaryPanelDocuments, samenvattingPaneelMedischeHistorie: this.summaryPanelMedicalHistory, samenvattingPaneelContactmomenten: this.summaryPanelContactMoments, standaardInformatie: this.standardInformation,
            cliënt: this.cliënt, zaak: this.case, ontvangstdatum: this.dateOfReceiving, wijzeVanBinnenKomst: this.methodOfEntry, gegevensKlager: this.detailsComplainer,
            vraagDientCliëntKlacht: this.questionCliëntFilesComplaint, antwoordDientCliëntKlachtJa: this.answerCliëntFilesComplaintYes, antwoordDientCliëntKlachtNee: this.answerCliëntFilesComplaintNo, Bereikbaarheid: this.accessibility, gegevensKlacht: this.detailsComplaint, 
            klachtGerichtOp: this.complaintDirectedAt, soortKlacht: this.complaintType, klachtOmschrijving: this.complaintDescription, opslaanKnop: this.buttonSave, klachtInBehandelingNemenVraag: this.progressComplaintQuestion, klachtInBehandelingAntwoordJa: this.progressComplaintAnswerYes,
            klachtInBehandelingAntwoordNee: this.progressComplaintAnswerNo, readenVoorNietInBehandeling: this.reasonNotToProcess, datumToevoegen: this.addDate, vastLeggenKlachtContact: this.reportWithComplainer, naarTevredenheidAfgehandeldVraag: this.complaintGladlyTakenCareOfQuestions,
            naarTevredenheidAfgehandeldAntwoordJa: this.complaintGladlyTakenCareOfAnswerYes, naarTevredenheidAfgehandeldAntwoordNee: this.complaintGladlyTakenCareOfAnswerNo, leerpuntCIZ: this.learningPointCIZ, versturenVia: this.sendVia, versturenViaEmail: this.sendViaEmail, versturenViaPost: this.sendViaPost,
            GeldigWLZBesluit: this.validWLZDecision, GeldigWLZBesluitJa: this.validWLZDecisionYes, Ontvangerscontrole: this.receivedCheck, OntvangerscontroleSMS: this.receivedCheckSMS, OntvangerscontroleToegangscode: this.receivedCheckEntryCode, toegangscode: this.entryCode,
            GeldigWLZBesluitNee: this.validWLZDecisionNo, GeldigWLZBesluitGeenToestemming: this.validWLZDecisionNoPermission, GeldigBUKAdvies: this.validBUKAdvice, GeldigBUKAdviesJa: this.validBUKAdviceYes, GeldigBUKAdviesNee: this.validBUKAdviceNo, LopendeBUKAanvraag: this.currentBUKCase,
            LopendeBUKAanvraagJa: this.currentBUKCaseYes, LopendeBUKAanvraagNee: this.currentBUKCaseNo, OverzichtBUKAanvragen: this.overviewBUKRequest, OverzichtBUKAanvragenZaak: this.overviewBUKRequestCase, OverzichtBUKAanvragenAanvraagdatum: this.overviewBUKRequestApplicationDate,
            OverzichtBUKAanvragenStatus: this.overviewBUKRequestStatus, OokHuisgenoten: this.alsoRoomMember, Uitkomst: this.result, Afwijken: this.deviation, AdminCompleetVraag: this.adminCompleteQuestions, AdminCompleetJa: this.adminCompleteYes, AdminCompleetNee: this.adminCompleteNo,
            OnderzoeksgegevensOvernemen: this.importResearchDetails, Algemeen: this.general, ToestemmingVoorInzage: this.permissionForView, ZiekteStoornis: this.sicknessIssues, SprakeVanZiekteStoornis: this.sicknessIssuesApplicable, Verzorging: this.careTaking, Lichaamshygiëne: this.bodyHygiene,
            Zindelijkheid: this.cleanliness, EtenDrinken: this.drinkingFood, Mobiliteit: this.mobility, MedischeVerzorging: this.medicalCare, Oppassing: this.babysitting, Gedrag: this.behaviour, Communicatie: this.communication, AlleenThuis: this.homeAlone, BegeleidingBuitenshuis: this.guidanceOutsideHouse,
            BezighoudenHandreikingen: this.keepBusy, LeeftijdYijdensPrimairAdvies: this.ageDuringPrimaryAdvice, Voorgesteld_Advies: this.proposedAdvice, Score: this.score, BasisVoorAdvies: this.basisForAdvies, AfwijkenVoorgestelAdvies: this.divertFromProposedAdvice, advies: this.advice, aangetekendVersturen: this.sendSigned, aangetekendVersturenJa: this.sendSignedYes, 
            Komt_hoorzitting: this.willThereHearing, Komt_hoorzitting_Ja: this.willThereHearingYes, Komt_hoorzitting_Nee: this.willThereHearingNo, redenGeenAdvies: this.reasonNoAdvice, Duur: this.timespan, Einddatum_Advies: this.endDateAdvice, Uitgevoerd_Onderzoek: this.executedResearch, MedischAdviesMeesturen: this.sendMedicalAdvice, aangetekendVersturenNee: this.sendSignedNo, 
            MedischAdviesMeesturenJa: this.sendMedicalAdviceYes, MedischAdviesMeesturen_Nee: this.sendMedicalAdviceNo, BeschikbaarheidVoorHoorzitting: this.availabilityHearing, PreviewBriefKnop: this.previewLetterButton,



        };
        return selectors;
    }

    async returnLocator(text: string): Promise<Locator> {
        const selectors = await this.getSelector();
        // Selecteren client pagina
        if (text === 'Selecteren cliënt titel') {
            await this.page.waitForTimeout(9000);
            return selectors.titel;
        } else if (text === 'Zoeken cliënt') {
            return selectors.zoekenCliënt;
        } else if (text === 'Gevonden cliënten') {
            return selectors.gevondencliënten;
        } else if (text === 'Wissen zoekcriteria knop') {
            return selectors.wiszoekcriteria;
        } else if (text === 'Zoek cliënt knop') {
            return selectors.zoekKnop;
        } else if (text === 'Annuleren knop') {
            return selectors.annulerenKnop;
        } else if (text === 'Doorgaan knop') {
            return selectors.doorgaanKnop;
        } else if (text === 'Burgerservicenummer (BSN)') {
            return selectors.burgerservicenummer;
        } else if (text === 'Cliëntnummer') {
            return selectors.cliëntnummer;
        } else if (text === 'Geboortenaam') {
            return selectors.geboortenaam;
        } else if (text === 'Geboortedatum') {
            return selectors.geboortedatum;
        } else if (text === 'Land') {
            return selectors.land;
        } else if (text === 'Postcode') {
            return selectors.postcode;
        } else if (text === 'Huisnummer') {
            return selectors.huisnummer;
        } else if (text === 'Geslacht Selecteren cliënt') {
            return selectors.geslacht;
        } else if (text === 'Naam en voorletters resultaat') {
            return selectors.naamEnvoorlettersResultaat;
        } else if (text === 'Geboortedatum resultaat') {
            return selectors.geboortedatumResultaat;
        } else if (text === 'Geslacht resultaat') {
            return selectors.geslachtResultaat;
        } else if (text === 'Burgerservicenummer (BSN) resultaat') {
            return selectors.burgerservicenummerResultaat;
        } else if (text === 'Cliëntnummer resultaat') {
            return selectors.cliëntnummerResultaat;
        } else if (text === 'Postcode en huisnummer resultaat') {
            return selectors.postcodeEnHuisnummerResultaat;
        } else if (text === 'Plaats') {
            return selectors.plaatsResultaat;
        } else if (text === 'Geen bestaande cliënten gevonden, pas de zoekcriteria aan of start aanvraag voor nieuwe cliënt.') {
            return selectors.geenResultaat;
        } else if (text === 'Aanvraag creëren met een nieuwe cliënt') {
            return selectors.newCliënt;
        } // stage progress
         else if (text === 'Stel velden in nadat de case is gemaakt') {
            return selectors.zaakStageProgress;
        } else if (text === 'Aanmaken log zaak') {
            return selectors.zaakStageProgress;
        } else if (text === 'Aanmaken zaakfolder in CMIS') {
            return selectors.zaakStageProgress;
        } else if (text === 'Bijwerken SVB berichten') {
            return selectors.zaakStageProgress;
        } else if (text === 'Registratie') {
            return selectors.zaakStageProgress;
        } else if (text === 'Afronden Migratie') {
            return selectors.zaakStageProgress;
        } else if (text === 'Valideren cliënt') {
            return selectors.zaakStageProgress;
        } else if (text === 'In behandeling') {
            return selectors.zaakStageProgress;
        }// Registreren pagina 
        else if (text === 'Registreren aanvraaggegevens titel') {
            await this.page.waitForTimeout(9000);
            return selectors.titel;
        } else if (text === 'Aanvraagsoort sectie') {
            return selectors.aanvraagsoortHeader;
        } else if (text === 'Zorgvraag sectie') {
            return selectors.zorgvraagHeader;
        } else if (text === 'Geboortedatum cliënt') {
            return selectors.GeboortedatumCliënt;
        } else if (text === 'Leeftijd') {
            return selectors.leeftijdCliënt;
        } else if (text === 'Aanvraagwijze') {
            return selectors.aanvraagwijze;
        } else if (text === 'Aanvraagdatum') {
            return selectors.aanvraagDatum;
        } else if (text === 'Aanvraagsoort') {
            return selectors.aanvraagsoort;
        } else if (text === 'Registratienummer SVB') {
            return selectors.registratieSVB;
        }else if (text === 'Geeft de aanvragende ouder toestemming om indien aanwezig het cliëntendossier in te zien?') {
            return selectors.ouderToestemming;
        }else if (text === 'Advies waartegen bezwaar wordt gemaakt') {
            return selectors.bezwaarTegenAdvies;
        }else if (text === 'Toesteming Antwoord Ja') {
            return selectors.toestemmingJa;
        }else if (text === 'Toesteming Antwoord Nee') {
            return selectors.toestemmingNee;
        }else if (text === 'Zorgvraag') {
            return selectors.zorgvraag;
        }else if (text === 'Tekstsbox max. karakter') {
            return selectors.tellerBox;
        }else if (text === 'Terug knop') {
            return selectors.terugKnop;
        }// Persoonlijk pagina 
        else if (text === 'Persoonlijk titel') {
            await this.page.waitForTimeout(9000);
            return selectors.titel;
        }else if (text === 'Geheim CIZ') {
            return selectors.geheimCIZ;
        }else if (text === 'Speciaal onderzoek') {
            return selectors.speciaalOnderzoek;
        }else if (text === 'onderzoek antwoord Ja') {
            return selectors.onderzoekAntwoordJa;
        }else if (text === 'Onderzoek antwoord Nee') {
            return selectors.onderzoekAntwoordNee;
        }else if (text === 'Burgerservicenummer (BSN) persoonlijk') {
            return selectors.burgerservicenummerPersoonlijk;
        }else if (text === 'Geboortedatum persoonlijk') {
            return selectors.geboortedatumPersoonlijk;
        }else if (text === 'Roepnaam') {
            return selectors.roepNaamPersoonlijk;
        }else if (text === 'Geboortenaam persoonlijk') {
            return selectors.geboorteNaamPersoonlijk;
        }else if (text === 'Voorvoegsel') {
            return selectors.voorvoegselPersoonlijk;
        }else if (text === 'Voornamen') {
            return selectors.voornamenPersoonlijk;
        }else if (text === 'Voorletter(s)') {
            return selectors.voorlettersPersoonlijk;
        }else if (text === 'Geslacht Persoonlijk') {
            return selectors.geslachtPersoonlijk;
        }else if (text === 'Overlijdensdatum') {
            return selectors.overlijdensdatumPersoonlijk;
        }else if (text === 'Naamgebruik') {
            return selectors.naamgebruikPersoonlijk;
        }// Aanvullend persoonlijk pagina 
        else if (text === 'Aanvullend Persoonlijk titel') {
            await this.page.waitForTimeout(9000);
            return selectors.titel;
        }else if (text === 'Burgerlijke staat') {
            return selectors.burgelijkeStaat;
        }else if (text === 'Leefsituatie') {
            return selectors.leefsituatie;
        }else if (text === 'Juridische maatregelen') {
            return selectors.juridischeMaatregel;
        }else if (text === 'Verblijfsstatus (alleen invullen als de cliënt niet de Nederlandse nationaliteit heeft)') {
            return selectors.verblijfstatus;
        } // Contact pagina
        else if (text === 'Contact titel') {
            return selectors.titel;
            await this.page.waitForTimeout(9000);
        }else if (text === '1e Telefoonnummer vraag') {
            return selectors.eersteTelefoonnummerVraag;
        }else if (text === '1e Landnummer') {
            return selectors.eersteLandnummer;
        }else if (text === '1e Telefoonnummer') {
            return selectors.eersteTelefoonnummer;
        }else if (text === '1e Geheim nummer') {
            return selectors.eersteGeheimNummer;
        }else if (text === '2e Telefoonnummer vraag') {
            return selectors.tweedeTelefoonnummerVraag;
        }else if (text === '2e Landnummer') {
            return selectors.tweedeLandnummer;
        }else if (text === '2e Telefoonnummer') {
            return selectors.tweedeTelefoonnummer;
        }else if (text === '2e Geheim nummer') {
            return selectors.tweedeGeheimNummer;
        }else if (text === 'E-mailadres') {
            return selectors.emailadresContact;
        }else if (text === 'Taal') {
            return selectors.taalContact;
        }else if (text === 'Is de cliënt in staat tot telefonische communicatie') {
            return selectors.telefonischCommunicatie;
        }else if (text === 'communicatie antwoord Ja') {
            return selectors.telefonischCommunicatieJa;
        }else if (text === 'communicatie antwoord Nee') {
            return selectors.telefonischCommunicatieNee;
        }else if (text === 'Bijzondere communicatievorm') {
            return selectors.communicatieVorm;
        } // Relatie pagina
        else if (text === 'Relatie titel') {
            await this.page.waitForTimeout(9000);
            return selectors.titel;
        }else if (text === 'Relatie toevoegen knop') {
            return selectors.relatiesToevoegen;
        }else if (text === 'Relatie wijzigen knop') {
            return selectors.relatiesWijzigen;
        }else if (text === 'Relatie toevoegen popup titel') {
            return selectors.relatieToevegenTitel;
        }else if (text === 'Type relatie') {
            return selectors.relatieType;
        }else if (text === 'Wettelijke relatie') {
            return selectors.wettelijkeRelatie;
        }else if (text === 'Curator') {
            return selectors.curator;
        }else if (text === 'Mentor') {
            return selectors.mentor;
        }else if (text === 'Ouder met gezag') {
            return selectors.ouderMetGezag;
        }else if (text === 'Voogd met gezag') {
            return selectors.voogdMetGezag;
        }else if (text === '(notarieel) Gemachtigde') {
            return selectors.gemachtigde;
        }else if (text === '1e Telefoonnummer relatie') {
            return selectors.eersteTelefoonnummerVraagRelatie;
        }else if (text === '2e Telefoonnummer relatie') {
            return selectors.tweedeTelefoonnummerVraagRelatie;
        }else if (text === 'E-mailadres relatie') {
            return selectors.emailAdresRelatie;
        }else if (text === 'Indienen knop') {
            return selectors.indienenKnop;
        } // Adressen pagina
        else if (text === 'Adressen titel') {
            await this.page.waitForTimeout(9000);
            return selectors.titel;
        }else if (text === 'Feitelijke woonadres header') {
            return selectors.feitelijkeWoonadres;
        }else if (text === 'Afwijkend correspondentieadres checkbox') {
            return selectors.afwijkendCorrespondentieadresCheckbox;
        }else if (text === 'Afwijkend correspondentieadres header') {
            return selectors.afwijkendCorrespondentieadresHeader;
        }else if (text === 'Afwijkend tijdelijke Verblijfadres checkbox') {
            return selectors.afwijkendTijdelijkeVerblijfadresCheckbox;
        }else if (text === 'Feitelijke woonadres - land') {
            return selectors.feitelijkeWoonadresLand;
        }else if (text === 'Feitelijke woonadres - Postcode') {
            return selectors.feitelijkeWoonadresPostcode;
        }else if (text === 'Feitelijke woonadres - Huisnummer') {
            return selectors.feitelijkeWoonadresHuisnummer;
        }else if (text === 'Feitelijke woonadres - Huisletter') {
            return selectors.feitelijkeWoonadresHuisLetter;
        }else if (text === 'Feitelijke woonadres - Toevoeging huisnummer') {
            return selectors.feitelijkeWoonadresToevoegingHuisnummer;
        }else if (text === 'Feitelijke woonadres - Huisnummeraanduiding') {
            return selectors.feitelijkeWoonadresHuisnummerAanduiding;
        }else if (text === 'Feitelijke woonadres - Zoek knop') {
            return selectors.feitelijkeWoonadresZoekKnop;
        }else if (text === 'Feitelijke woonadres - Straat') {
            return selectors.feitelijkeWoonadresStraat;
        }else if (text === 'Feitelijke woonadres - Plaats') {
            return selectors.feitelijkeWoonadresPlaats;
        }else if (text === 'Feitelijke woonadres - Kamer') {
            return selectors.feitelijkeWoonadresKamer;
        }else if (text === 'Feitelijke woonadres - Opmerking') {
            return selectors.feitelijkeWoonadresOpmerking;
        }else if (text === 'Afwijkend correspondentieadres - Relatie tot cliënt') {
            return selectors.relatieTotCliënt;
        }else if (text === 'Afwijkend correspondentieadres - Toelichting') {
            return selectors.toelichting;
        }else if (text === 'Afwijkend correspondentieadres - land') {
            return selectors.feitelijkeWoonadresLand;
        }else if (text === 'Afwijkend correspondentieadres - Postcode') {
            return selectors.feitelijkeWoonadresPostcode;
        }else if (text === 'Afwijkend correspondentieadres - Huisnummer') {
            return selectors.feitelijkeWoonadresHuisnummer;
        }else if (text === 'Afwijkend correspondentieadres - Huisletter') {
            return selectors.feitelijkeWoonadresHuisLetter;
        }else if (text === 'Afwijkend correspondentieadres - Toevoeging huisnummer') {
            return selectors.feitelijkeWoonadresToevoegingHuisnummer;
        }else if (text === 'Afwijkend correspondentieadres - Huisnummeraanduiding') {
            return selectors.feitelijkeWoonadresHuisnummerAanduiding;
        }else if (text === 'Afwijkend correspondentieadres - Zoek knop') {
            return selectors.feitelijkeWoonadresZoekKnop;
        }else if (text === 'Afwijkend correspondentieadres - Straat') {
            return selectors.feitelijkeWoonadresStraat;
        }else if (text === 'Afwijkend correspondentieadres - Plaats') {
            return selectors.feitelijkeWoonadresPlaats;
        }else if (text === 'Afwijkend correspondentieadres - Kamer') {
            return selectors.feitelijkeWoonadresKamer;
        } // Indienen pagina
        else if (text === 'Indienen titel') {
            await this.page.waitForTimeout(9000);
            return selectors.titel;
        }else if (text === 'Aanmaken knop') {
            return selectors.aanmakenKnop;
        } // Indienen pagina
        else if (text === 'Triage uitvoeren titel') {
            await this.page.waitForTimeout(9000);
            return selectors.titel;
        }else if (text === 'Geldig WLZ besluit') {
            return selectors.GeldigWLZBesluit;
        }else if (text === 'Geldig WLZ besluit - Ja') {
            return selectors.GeldigWLZBesluitJa;
        }else if (text === 'Geldig WLZ besluit - Nee') {
            return selectors.GeldigWLZBesluitNee;
        }else if (text === 'Geldig WLZ besluit - Geen toestemming') {
            return selectors.GeldigWLZBesluitGeenToestemming;
        }else if (text === 'Geldig BUK advies') {
            return selectors.GeldigBUKAdvies;
        }else if (text === 'Geldig BUK advies - Ja') {
            return selectors.GeldigBUKAdviesJa;
        }else if (text === 'Geldig BUK advies - Nee') {
            return selectors.GeldigBUKAdviesNee;
        }else if (text === 'Lopende BUK aanvraag') {
            return selectors.LopendeBUKAanvraag;
        }else if (text === 'Lopende BUK aanvraag - Ja') {
            return selectors.LopendeBUKAanvraagJa;
        }else if (text === 'Lopende BUK aanvraag - Nee') {
            return selectors.LopendeBUKAanvraagNee;
        }else if (text === 'Overzicht BUK aanvragen') {
            return selectors.OverzichtBUKAanvragen;
        }else if (text === 'Overzicht BUK aanvragen - Zaak') {
            return selectors.OverzichtBUKAanvragenZaak;
        }else if (text === 'Overzicht BUK aanvragen - Aanvraagdatum') {
            return selectors.OverzichtBUKAanvragenAanvraagdatum;
        }else if (text === 'Overzicht BUK aanvragen - Status') {
            return selectors.OverzichtBUKAanvragenStatus;
        }else if (text === 'Ook huisgenoten') {
            return selectors.OokHuisgenoten;
        }else if (text === 'Uitkomst') {
            return selectors.Uitkomst;
        }else if (text === 'Afwijken') {
            return selectors.Afwijken;
        } // Voorbereiding pagina
        else if (text === 'Controleren administratieve volledigheid titel') {
            await this.page.waitForTimeout(9000);
            return selectors.titel;
        }else if (text === 'Is de aanvraag administratief volledig?') {
            return selectors.AdminCompleetVraag;
        }else if (text === 'Is de aanvraag administratief volledig? - Ja') {
            return selectors.AdminCompleetJa;
        }else if (text === 'Is de aanvraag administratief volledig? - Nee') {
            return selectors.AdminCompleetNee;
        } // Onderzoek pagina
        else if (text === 'Vastleggen onderzoek titel') {
            await this.page.waitForTimeout(9000);
            return selectors.titel;
        }else if (text === 'Onderzoeksgegevens overnemen') {
            return selectors.OnderzoeksgegevensOvernemen;
        }else if (text === 'Algemeen') {
            return selectors.Algemeen;
        }else if (text === 'Toestemming voor inzage') {
            return selectors.ToestemmingVoorInzage;
        }else if (text === 'Ziekte/Stoornis') {
            return selectors.ZiekteStoornis;
        }else if (text === 'Is er sprake van een ziekte of stoornis?') {
            return selectors.SprakeVanZiekteStoornis;
        }else if (text === 'Verzorging') {
            return selectors.Verzorging;
        }else if (text === 'Lichaamshygiëne') {
            return selectors.Lichaamshygiëne;
        }else if (text === 'Zindelijkheid') {
            return selectors.Zindelijkheid;
        }else if (text === 'Eten en drinken') {
            return selectors.EtenDrinken;
        }else if (text === 'Mobiliteit') {
            return selectors.Mobiliteit;
        }else if (text === 'Medische verzorging') {
            return selectors.MedischeVerzorging;
        }else if (text === 'Oppassing') {
            return selectors.Oppassing;
        }else if (text === 'Gedrag') {
            return selectors.Gedrag;
        }else if (text === 'Communicatie') {
            return selectors.Communicatie;
        }else if (text === 'Alleen thuis zijn') {
            return selectors.AlleenThuis;
        }else if (text === 'Begeleiding buitenshuis') {
            return selectors.BegeleidingBuitenshuis;
        }else if (text === 'Bezig houden, handreikingen') {
            return selectors.BezighoudenHandreikingen;
        } // Vastleggen advies pagina
        else if (text === 'Vastleggen advies titel') {
            await this.page.waitForTimeout(9000);
            return selectors.titel;
        }else if (text === 'Leeftijd tijdens primair advies') {
            return selectors.LeeftijdYijdensPrimairAdvies;
        }else if (text === 'Voorgesteld advies') {
            return selectors.Voorgesteld_Advies;
        }else if (text === 'Score') {
            return selectors.Score;
        }else if (text === 'Basis voor advies') {
            return selectors.BasisVoorAdvies;
        }else if (text === 'Afwijken van voorgesteld advies') {
            return selectors.AfwijkenVoorgestelAdvies;
        }else if (text === 'Advies') {
            return selectors.advies;
        }else if (text === 'Komt er een (hoor)zitting?') {
            return selectors.Komt_hoorzitting;
        }else if (text === 'Komt er een (hoor)zitting? - Ja') {
            return selectors.Komt_hoorzitting_Ja;
        }else if (text === 'Komt er een (hoor)zitting? - Nee') {
            return selectors.Komt_hoorzitting_Nee;
        }else if (text === 'Duur') {
            return selectors.Duur;
        }else if (text === 'Einddatum advies') {
            return selectors.Einddatum_Advies;
        }else if (text === 'Reden geen advies') {
            return selectors.redenGeenAdvies;
        }else if (text === 'Uitgevoerd onderzoek') {
            return selectors.Uitgevoerd_Onderzoek;
        }else if (text === 'Preview brief knop') {
            return selectors.PreviewBriefKnop;
        }else if (text === 'Medisch advies meesturen?') {
            return selectors.MedischAdviesMeesturen;
        }else if (text === 'Medisch advies meesturen? - Ja') {
            return selectors.MedischAdviesMeesturenJa;
        }else if (text === 'Medisch advies meesturen? - Nee') {
            return selectors.MedischAdviesMeesturen_Nee;
        }else if (text === 'Beschikbaarheid voor (hoor)zitting') {
            return selectors.BeschikbaarheidVoorHoorzitting;
        }else if (text === 'Aangetekend versturen') {
            return selectors.aangetekendVersturen;
        }else if (text === 'Aangetekend versturen - Ja') {
            return selectors.aangetekendVersturenJa;
        }else if (text === 'Aangetekend versturen - Nee') {
            return selectors.aangetekendVersturenNee;
        }else if (text === 'Ontvangerscontrole') {
            return selectors.Ontvangerscontrole;
        }else if (text === 'Ontvangerscontrole - Toegangscode') {
            return selectors.OntvangerscontroleToegangscode;
        }else if (text === 'Ontvangerscontrole - SMS') {
            return selectors.OntvangerscontroleSMS;
        }else if (text === 'Toegangscode') {
            return selectors.toegangscode;
        }// Samenvatting paneel
        else if (text === 'Samenvatting Paneel - Urgentie') {
            return selectors.samenvattingPaneelUrgentie;
        }else if (text === 'Samenvatting Paneel - Status') {
            return selectors.samenvattingPaneelStatus;
        }else if (text === 'Samenvatting Paneel - Wettelijke uiterste beslisdatum') {
            return selectors.samenvattingPaneelWettelijkeUitersteBeslisDatum;
        }else if (text === 'Samenvatting Paneel - Wettelijke uiterste beslisdatum - Datum') {
            return selectors.samenvattingPaneelWettelijkeUitersteBeslisDatum_Datum;
        }else if (text === 'Samenvatting Paneel - Wettelijke uiterste beslisdatum - WRD') {
            return selectors.samenvattingPaneelWettelijkeUitersteBeslisDatum_WRD;
        }else if (text === 'Samenvatting Paneel - Wettelijke uiterste beslisdatum - Kalenderdagen') {
            return selectors.samenvattingPaneelWettelijkeUitersteBeslisDatumKalenderdagen;
        }else if (text === 'Samenvatting Paneel - Interne uiterste beslisdatum') {
            return selectors.samenvattingPaneelInterneUiterstBeslisdatum;
        }else if (text === 'Samenvatting Paneel - Interne uiterste beslisdatum - Datum') {
            return selectors.samenvattingPaneelInterneUiterstBeslisdatum_Datum;
        }else if (text === 'Samenvatting Paneel - Interne uiterste beslisdatum - GRD') {
            return selectors.samenvattingPaneelInterneUiterstBeslisdatum_GRD;
        }else if (text === 'Samenvatting Paneel - Interne uiterste beslisdatum - Kalenderdagen') {
            return selectors.samenvattingPaneelInterneUiterstBeslisdatum_Kalendagen;
        }else if (text === 'Samenvatting Paneel - Naam') {
            return selectors.samenvattingPaneelNaam;
        }else if (text === 'Samenvatting Paneel - Geboortedatum') {
            return selectors.samenvattingPaneelGeboortedatum;
        }else if (text === 'Samenvatting Paneel - BSN') {
            return selectors.samenvattingPaneelBSN;
        }else if (text === 'Samenvatting Paneel - Cliëntnummer') {
            return selectors.samenvattingPaneelCliëntnummer;
        }else if (text === 'Samenvatting Paneel - Wettelijk vertegenw.') {
            return selectors.samenvattingPaneelWettelijkVertegenwoordiger;
        }else if (text === 'Samenvatting Paneel - Tel.') {
            return selectors.samenvattingPaneelTelefoonnummer;
        }else if (text === 'Samenvatting Paneel - Email') {
            return selectors.samenvattingPaneelEmail;
        }else if (text === 'Samenvatting Paneel - Huidig kwartaal') {
            return selectors.samenvattingPaneelHuidigeKwartaal;
        }else if (text === 'Samenvatting Paneel - Volgend kwartaal') {
            return selectors.samenvattingPaneelVolgendeKwartaal;
        }else if (text === 'Samenvatting Paneel - Bekend binnen Wlz') {
            return selectors.samenvattingPaneelBekendBinnenWLZ;
        }else if (text === 'Samenvatting Paneel - Taal') {
            return selectors.samenvattingPaneelTaal;
        }else if (text === 'Samenvatting Paneel - Zaakgegevens') {
            return selectors.samenvattingPaneelZaakgegevens;
        }else if (text === 'Samenvatting Paneel - Ingediende aanvraag') {
            return selectors.samenvattingPaneelIngediendAanvraag;
        }else if (text === 'Samenvatting Paneel - Bijbehorende zaken') {
            return selectors.samenvattingPaneelBijbehorendeZaken;
        }else if (text === 'Samenvatting Paneel - Notities') {
            return selectors.samenvattingPaneelNotities;
        }else if (text === 'Samenvatting Paneel - Documenten') {
            return selectors.samenvattingPaneelDocumenten;
        }else if (text === 'Samenvatting Paneel - Medische historie') {
            return selectors.samenvattingPaneelMedischeHistorie;
        }else if (text === 'Samenvatting Paneel - Contactmomenten') {
            return selectors.samenvattingPaneelContactmomenten;
        // }else if (text === 'Samenvatting Paneel - Afgehandeld medisch verzoek'){
        //     return selectors.samenvattingPaneelAfgehandeldMedischVerzoek;
        } 
        
        // Klacht registratie pagina
        else if (text === 'Indienen klacht titel') {
            await this.page.waitForTimeout(9000);
            return selectors.titel;
        }else if (text === 'Standaard informatie') {
            return selectors.standaardInformatie;
        }else if (text === 'Cliënt') {
            return selectors.cliënt;
        }else if (text === 'Zaak') {
            return selectors.zaak;
        }else if (text === 'Ontvangstdatum') {
            return selectors.ontvangstdatum;
        }else if (text === 'Wijze van binnenkomst') {
            return selectors.wijzeVanBinnenKomst;
        }else if (text === 'Gegevens klager') {
            return selectors.gegevensKlager;
        }else if (text === 'Dient de cliënt de klacht in?') {
            return selectors.vraagDientCliëntKlacht;
        }else if (text === 'Dient de cliënt de klacht in? - Ja') {
            return selectors.antwoordDientCliëntKlachtJa;
        }else if (text === 'Dient de cliënt de klacht in? - Nee') {
            return selectors.antwoordDientCliëntKlachtNee;
        }else if (text === 'Bereikbaarheid') {
            return selectors.Bereikbaarheid;
        }else if (text === 'Gegevens klacht') {
            return selectors.gegevensKlacht;
        }else if (text === 'Klacht gericht op:') {
            return selectors.klachtGerichtOp;
        }else if (text === 'Soort klacht') {
            return selectors.soortKlacht;
        }else if (text === 'Omschrijving van de klacht en gewenste oplossing') {
            return selectors.klachtOmschrijving;
        }else if (text === 'Opslaan knop') {
            return selectors.opslaanKnop;
        } // Klacht In behandeling nemen pagina
        else if (text === 'In behandeling nemen titel') {
            await this.page.waitForTimeout(9000);
            return selectors.titel;
        }else if (text === 'Klacht in behandeling nemen?') {
            return selectors.klachtInBehandelingNemenVraag;
        }else if (text === 'Klacht in behandeling nemen? - Ja') {
            return selectors.klachtInBehandelingAntwoordJa;
        }else if (text === 'Klacht in behandeling nemen? - Nee') {
            return selectors.klachtInBehandelingAntwoordNee;
        }else if (text === 'Reden niet in behandeling nemen') {
            return selectors.readenVoorNietInBehandeling;
        }else if (text === 'Afhandelen stap 1: het informele gesprek titel') {
            await this.page.waitForTimeout(9000);
            return selectors.titel;
        }else if (text === 'Datum toevoegen') {
            return selectors.datumToevoegen;
        }else if (text === 'Verslaglegging contact met de klager') {
            return selectors.vastLeggenKlachtContact;
        }else if (text === 'Klacht naar tevredenheid afgehandeld?') {
            return selectors.naarTevredenheidAfgehandeldVraag;
        }else if (text === 'Klacht naar tevredenheid afgehandeld? - Ja') {
            return selectors.naarTevredenheidAfgehandeldAntwoordJa;
        }else if (text === 'Klacht naar tevredenheid afgehandeld? - Nee') {
            return selectors.naarTevredenheidAfgehandeldAntwoordNee;
        }else if (text === 'Leerpunt voor CIZ') {
            return selectors.leerpuntCIZ;
        }else if (text === 'Versturen via') {
            return selectors.versturenVia;
        }else if (text === 'Versturen via - Email') {
            return selectors.versturenViaEmail;
        }else if (text === 'Versturen via - Post') {
            return selectors.versturenViaPost;
        }else if (text === 'Zaak heeft status: NIEUW') {
            return selectors.zaakStatus;
        }
         else {
            throw new Error(`Locator for "${text}" not found`);
        }
    
        }
}
