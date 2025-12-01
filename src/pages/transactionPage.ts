import { Page, Locator, expect } from '@playwright/test';

export default class TxnPage {
    readonly page: Page;
    readonly detailsbtn: Locator;
    readonly detailstab: Locator;
    readonly paymentlabel: Locator;
    readonly adjbtn: Locator
    readonly toggleon: Locator
    readonly input1: Locator
    readonly input2: Locator
    readonly message1: Locator
    readonly message2: Locator

    constructor(page: Page) {
        this.page = page;
        this.detailsbtn = page.locator('(//button[@data-testid="icon-button"])[1]')
        this.detailstab = page.locator('//p[text()="Details"]')
        this.paymentlabel = page.locator('//div[@data-testid="payment-participants-information"]')
        this.adjbtn = page.locator('//div[@data-testid="adjust-commission-splits"]')
        this.toggleon = page.locator('//button[@data-testid="toggle-switch-button"]')
        this.input1 = page.locator('(//input[@inputmode="decimal"])[1]')
        this.input2 = page.locator('(//input[@inputmode="decimal"])[2]')
        this.message1 = page.locator('//p[text()="The total commission amounts must add up to USD 200,000.00"]')
        this.message2 = page.locator('//p[text()="The total commission percentages must add up to 100%"]')
    }

    async ontoggle(page: Page) {
        const toggles = page.locator('//button[@data-testid="toggle-switch-button"]');
        const count = await toggles.count();

        for (let i = 0; i < count; i++) {
            const t = toggles.nth(i);
             await t.click();
            // ensure it's in view (Locator exposes this)
            await t.scrollIntoViewIfNeeded();

            // small pause to allow any CSS transitions (optional)
            await page.waitForTimeout(80);

        }

    }
   async txn1(page: Page){
            await this.detailsbtn.click()
            await this.detailstab.click()
            await this.paymentlabel.scrollIntoViewIfNeeded()
            await this.page.waitForTimeout(5000)
            await this.adjbtn.click()
            await this.ontoggle(page);
            await this.input1.fill('200000')
            await expect(this.message1).toBeVisible()
        }

   async txn2(page: Page){
            await this.detailsbtn.click()
            await this.detailstab.click()
            await this.paymentlabel.scrollIntoViewIfNeeded()
            await this.page.waitForTimeout(3000)
            await this.adjbtn.click()
            await this.ontoggle(page);
            await this.input1.fill('100')
            await this.input2.fill('10')
            await expect(this.message2).toBeVisible()
        }
   async txn3(page: Page){
            await this.detailsbtn.click()
            await this.detailstab.click()
            await this.paymentlabel.scrollIntoViewIfNeeded()
            await this.page.waitForTimeout(3000)
            await this.adjbtn.click()
            await page.locator('(//button[@data-testid="toggle-switch-button"])[1]').check()
            await this.input1.fill('120')
            await this.input2.fill('80')
            await expect(this.message2).toBeVisible()
        }
    }
