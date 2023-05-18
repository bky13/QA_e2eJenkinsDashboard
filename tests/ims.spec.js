const { test, expect, defineConfig } = require('@playwright/test');
import { homepage } from '../Pages/dashboard.page';

test.describe('end to end IMS', () => {
     test.beforeEach(async ({ page }) => {
         await page.goto('/')
     })
    
    test('select component=IMS, preposition=NBCU, display the jenkins data', async ({ page }) => {
        const obj1=new homepage(page)
        await obj1.click_dropdownComponent()
        await obj1.click_Componentoption3()
        await obj1.click_dropdownPreposition()
        await obj1.click_check_option1()
        await obj1.click_random()
        await obj1.click_buttonSubmit() 
        await obj1.explicitwait_displaydata()
        await obj1.jenkinsdataVisisble()   
    })

    test('hoverover the jenkins environments, view the status', async ({ page }) => {
        const obj1=new homepage(page)
        await obj1.click_dropdownComponent()
        await obj1.click_Componentoption()
        await obj1.click_dropdownPreposition()
        await obj1.click_check_option1()
        await obj1.click_random()
        await obj1.click_buttonSubmit() 
        await obj1.explicitwait_displaydata()
        await obj1.jenkinsdataVisisble()
        await obj1.hover_integrationEnvironment()
        await obj1.hover_extendedEnvironment()
        await obj1.hover_identityEnvironment()
        await obj1.hover_prodEnvironment()
        await obj1.hover_stableEnvironment()
        
    })
})