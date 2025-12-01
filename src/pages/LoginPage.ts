import {Page,Locator} from '@playwright/test';

export default class LoginPage{
    readonly page: Page;
    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly username:Locator
    readonly email: Locator;
    readonly password: Locator;
    readonly passwordconfirm: Locator;
    readonly join : Locator;
    readonly consent1 : Locator;
    readonly consent2 : Locator;
    readonly create : Locator;
    readonly vuser : Locator;
    readonly vpwd  : Locator;
     readonly sub  : Locator;

    constructor(page:Page){
        this.page=page;
        this.firstname=page.locator('//input[@data-testid="text-input-First Name"]')
        this.lastname=page.locator('//input[@data-testid="text-input-Last Name"]')
        this.username=page.locator('//input[@data-testid="text-input-Username"]')
        this.email=page.locator('//input[@data-testid="email-input-Email"]')
        this.password=page.locator('//input[@data-testid="password-input-Password"]')
        this.join=page.locator('//p[text()="Join Real"]')
        this.passwordconfirm=page.locator('//input[@data-testid="password-input-Password Confirmation"]')
        this.consent1 = page.locator('//input[@data-testid="consentedToTerms"]')
        this.consent2 = page.locator('//input[@data-testid="consentedToCallMessage"]')
        this.create = page.locator('(//button[@data-testid="button-default"])[1]')
        this.vuser= page.locator('//input[@data-testid="usernameOrEmail"]')
        this.vpwd = page.locator('//input[@data-testid="password"]')
        this.sub =  page.locator('//button[@type="submit"]')
    }
   
   async goto(){
    await this.page.goto("https://bolt.playrealbrokerage.com/login")
   }

   async signup(firstname:string , lastname: string , username: string, email:string ,password: string, passwordconfirm: string){
    await this.join.click()
    await this.firstname.fill(firstname)
    await this.lastname.fill(lastname)
    await this.username.fill(username)
    await this.email.fill(email)
    await this.password.fill(password)
    await this.passwordconfirm.fill(passwordconfirm)
    await this.consent1.click()
    await this.consent2.click()
    await this.create.click()
   }

   async login(username : string , pass: string){
    await this.vuser.fill(username)
    await this.vpwd.fill(pass)
    await this.sub.click()
   }
}