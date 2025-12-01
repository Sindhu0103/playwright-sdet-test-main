import {Page,Locator} from '@playwright/test';

export class orangehrm{
    readonly page: Page;
    readonly username : Locator
    readonly password : Locator
    readonly login : Locator

    constructor(page:Page){
        this.page =page;
        this.username = page.locator('//input[@placeholder="Username"]')
        this.password =page.locator('//input[@placeholder="Password"]')
        this.login =  page.locator('//button[@type="submit"]')
    }

    async visitpage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await this.page.waitForTimeout(3000)
    }

    async loginuser(uname : string , pwd : string){
        await this.username.fill(uname)
        await this.page.waitForTimeout(500)
        await this.username.fill(pwd)
        await this.page.waitForTimeout(500)
        await this.login.click()
        await this.page.waitForTimeout(500)
    }
}