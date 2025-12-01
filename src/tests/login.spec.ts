import {test} from '@playwright/test';
import LoginPage from '../pages/LoginPage'


test.describe('Signup',()=>{
    test('Signup new',async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.goto()
        await loginPage.signup('Sindhu1','g1','test1231','test1@gmail.com','test1','test1')
    })
})
