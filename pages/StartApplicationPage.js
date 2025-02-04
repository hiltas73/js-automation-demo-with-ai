import { BasePage } from "./BasePage.js";

export class StartApplicationPage extends BasePage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        super(page);

        this.startApplicationText = page.locator(
            "(//div[@class = 'step-title'])[1]"
        );
        this.paymentPlanText = page.locator("(//div[@class = 'step-title'])[2]");
        this.reviewText = page.locator("(//div[@class = 'step-title'])[3]");
        this.startApplicationStepCircle = page.locator(
            "(//*[@class='step-circle'])[1]"
        );
        this.paymentPlanStepCircle = page.locator("(//*[@class='step-circle'])[2]");
        this.reviewStepCircle = page.locator("(//*[@class='step-circle'])[3]");
        this.firstNameInputBox = page.locator(
            "//input[@formcontrolname='firstName']"
        );
        this.lastNameInputBox = page.locator(
            "//input[@formcontrolname='lastName']"
        );
        this.emailInputBox = page.locator("//input[@formcontrolname='email']");
        this.phoneNumberInputBox = page.locator(
            "//input[@formcontrolname='phoneNumber']"
        );
        this.howDidYouHearAboutUsDropDown = page.locator(
            "//mat-label[text()='How did you hear about us?']"
        );
        this.emailOptionFromDropDown = page.locator(
            "//mat-option/span[contains(text(), 'Email')]"
        );
        this.facebookOptionFromDropDown = page.locator(
            "//mat-option/span[contains(text(), 'Facebook')]"
        );
        this.googleOption = page.locator(
            "//mat-option/span[contains(text(), 'Google')]"
        );
        this.instagramOptionFromDropDown = page.locator(
            "//mat-option/span[contains(text(), 'Instagram')]"
        );
        this.linkedInOptionFromDropDown = page.locator(
            "//mat-option/span[contains(text(), 'LinkedIN')]"
        );
        this.twitterOptionFromDropDown = page.locator(
            "//mat-option/span[contains(text(), 'Twitter')]"
        );
        this.referredByFriedOptionFromDropDown = page.locator(
            "//mat-option/span[contains(text(), 'Referred by a friend')]"
        );
        this.otherOptionFromDropDown = page.locator(
            "//mat-option/span[contains(text(), 'Other')]"
        );
        this.firstNameInputBoxForParents = page.locator(
            "(//input[@formcontrolname='firstName'])[2]"
        );
        this.lastNameInputBoxForParents = page.locator(
            "(//input[@formcontrolname='lastName'])[2]"
        );
        this.emailInputBoxForParents = page.locator(
            "(//input[@formcontrolname='email'])[2]"
        );
        this.phoneNumberInputBoxForParents = page.locator(
            "(//input[@formcontrolname='phoneNumber'])[2]"
        );
        this.flexiblePaymentsPlanAvailableText = page.locator(
            "//p[text() = 'Flexible payments plan available']"
        );
        this.programStartDate = page.locator(
            "//div[contains(text(), 'Program Start Date')]/b[@class='info-value']"
        );
        this.refundEndDate = page.locator("(//b[@class='info-value'])[2]");
        this.programNameOnInfoCard = page.locator(
            "//p[@class='program-title primary-color']"
        );
        this.programPrice = page.locator(
            "//div[@class='col-sm']/b[@class = 'info-primary']"
        );
        this.footer = page.locator(
            "//p[@class = 'footer-text' and contains(text(), 'Need help?')]"
        );
        this.nextButton = page.locator(
            "//button[@class = 'next-button'][contains(text(), 'Next')]"
        );
        this.programBasePrice = page.locator("//span[@class='ng-star-inserted']/s");
        this.enterPersonalDetails = page.locator(
            "//b[contains(.,'Enter personal details')]"
        );
        this.discountedPrice = page.locator("//b[@class='info-primary']");
        this.originalPrice = page.locator("//s[contains(.,'$')]");
    }

    // create a function named "fillInStartApplicationForm()" to fill in the first name, last name, email address, phone number and click on Next button on the StartApplicationPage
    async fillInStartApplicationForm() {
        await this.firstNameInputBox.fill("John");
        await this.lastNameInputBox.fill("Doe");
        await this.emailInputBox.fill("johndoe@example.com");
        await this.phoneNumberInputBox.fill("1234567890");
        // wait 2 seconds for visual confirmation
        await this.page.waitForTimeout(2000);
        // click on Next button
        await this.nextButton.click();
    }

}