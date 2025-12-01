import{test,expect} from  '@playwright/test'
import { orangehrm } from '../pages/orangehrm'

test.describe('Login Scenario',()=>{
    test('Login test',async ({page})=>{
        const hrm = new orangehrm(page);
        await hrm.visitpage()
        await hrm.loginuser('Admin' ,'admin123')
    })
} )