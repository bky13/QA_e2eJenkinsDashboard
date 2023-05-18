const { test, expect, defineConfig } = require('@playwright/test');
import { homepage } from '../Pages/dashboard.page';

test.describe('end to end Rango', () => {
     test.beforeEach(async ({ page }) => {
         await page.goto('/')
     })
    
    test('select component=Rango, module=Profiles, preposition=nbcu, display the jenkins data', async ({ page }) => {
        const obj1=new homepage(page)
        await obj1.click_dropdownComponent()
        await obj1.click_Componentoption5()
        await obj1.explicitwait_forModule()
        await obj1.click_dropdownModule()
        await obj1.click_moduleoption2()
        await obj1.explicitwait_forModule()
        await obj1.click_dropdownPreposition()
        await obj1.click_check_option2()
        await obj1.click_random()
        await obj1.click_buttonSubmit() 
        await obj1.explicitwait_displaydata()
        await obj1.jenkinsdataVisisble()   
    })

    test('hoverover the jenkins environments, view the status', async ({ page }) => {
        const obj1=new homepage(page)
        await obj1.click_dropdownComponent()
        await obj1.click_Componentoption5()
        await obj1.explicitwait_forModule()
        await obj1.click_dropdownModule()
        await obj1.click_moduleoption2()
        await obj1.explicitwait_forModule()
        await obj1.click_dropdownPreposition()
        await obj1.click_check_option2()
        await obj1.click_random()
        await obj1.click_buttonSubmit() 
        await obj1.explicitwait_displaydata()
        await obj1.jenkinsdataVisisble()
        await obj1.hover_integrationEnvironment()
        await obj1.hover_extendedEnvironment()
        await obj1.hover_identityEnvironment()
        await obj1.hover_intEnvironment()
        await obj1.hover_prodEnvironment()
        await obj1.hover_stableEnvironment()
        
    })
})