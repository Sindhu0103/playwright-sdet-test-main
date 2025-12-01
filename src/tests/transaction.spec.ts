import {test} from '@playwright/test';
import LoginPage from '../pages/LoginPage'
import TxnPage from '../pages/transactionPage';


test.describe('Signup',()=>{
    // test('Signup new',async({page})=>{
    //     const loginPage = new LoginPage(page);
    //     await loginPage.goto()
    //     await page.waitForTimeout(3000)
    //     await loginPage.login('sahilagent','P@ssw0rd')
    // })

    test('Txn1',async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.goto()
        await page.waitForTimeout(3000)
        await loginPage.login('sahilagent','P@ssw0rd')
        const tx1 = new TxnPage(page);
        await tx1.txn1(page)
    })

    // test('Txn2',async({page})=>{
    //     const loginPage = new LoginPage(page);
    //     await loginPage.goto()
    //     await page.waitForTimeout(3000)
    //     await loginPage.login('sahilagent','P@ssw0rd')
    //     const tx2 = new TxnPage(page);
    //     await tx2.txn2(page)
    // })

    // test('Txn3',async({page})=>{
    //     const loginPage = new LoginPage(page);
    //     await loginPage.goto()
    //     await page.waitForTimeout(3000)
    //     const tx3 = new TxnPage(page);
    //     await tx3.txn3(page)
    // })
})
