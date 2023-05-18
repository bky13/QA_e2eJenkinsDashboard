import { expect, Locator, Page } from '@playwright/test';
import { timeout } from '../playwright.config';

export class homepage {
    readonly page: Page;
    readonly dropdown1_Component: Locator;
    readonly optionComponent1: Locator;
    readonly optionComponent2: Locator;
    readonly optionComponent3: Locator;
    readonly optionComponent4: Locator;
    readonly dropdown2_Preposition: Locator;
    readonly button_Submit: Locator;
    readonly checkbox_SelectAll: Locator;
    readonly checkbox_option1: Locator;
    readonly checkbox_option2: Locator;
    readonly dropdown3_module: Locator;
    readonly optionModule1: Locator;
    readonly column_left: Locator;
    readonly column_right: Locator;
    readonly column_right_jenkinsdata: Locator
    readonly random: Locator
    readonly integrationEnvHover: Locator;
    readonly intEnvhover: Locator;
    readonly extEnvhover: Locator
    readonly identityEnvHover: Locator
    readonly prodEnvHover:Locator
    readonly stableEnvHover:Locator
    readonly stableExpand: Locator
    constructor(page: Page) {
        this.page = page;
        this.dropdown1_Component = page.locator('.mat-mdc-form-field-infix.ng-tns-c8-0')
        this.dropdown2_Preposition = page.locator('.mat-mdc-form-field-infix.ng-tns-c8-2')
        this.dropdown3_module=page.locator('.mat-mdc-form-field-infix.ng-tns-c8-4')
        this.optionModule1=page.getByText('Profiles')
        this.button_Submit=page.getByText('Submit')
        this.checkbox_SelectAll = page.locator('#mat-mdc-checkbox-1')
        this.checkbox_option1 = page.getByText('Nbcu',{exact:false})
        this.checkbox_option2=page.locator('#mat-option-5')
        this.column_left=page.locator('div["class=column-left"] app-dropdown')
        this.column_right=page.locator('div[class="column-right ng-star-inserted"] app-oogway-persona-ims')
        this.column_right_jenkinsdata=page.locator('.mat-accordion.mat-table.mat-accordion-multi.ng-star-inserted').first()
        this.random=page.getByText('Identity Pipeline Dashboard')
        this.optionComponent1=page.getByText('oogway')
        this.optionComponent2=page.getByText('persona')
        this.optionComponent3=page.getByText('IMS')
        this.optionComponent4=page.getByText('cybertron')
        this.integrationEnvHover=page.getByRole('button', { name: 'Integration Environment' })
        this.extEnvhover=page.getByRole('button', { name: 'Extended Environment' }).first()
        this.identityEnvHover=page.getByRole('button', { name: 'Identity Environment' })
        this.prodEnvHover=page.getByRole('button', { name: 'Prod Environment' })
        this.intEnvhover=page.getByRole('button', { name: 'Int Environment' })
        this.stableEnvHover = page.getByRole('button', { name: 'Stable Environment' })
        this.stableExpand=page.locator('div.expansion_info').last()
    }
    
    async click_dropdownComponent() {
        await this.dropdown1_Component.click()
    }


    async click_Componentoption() {
        await this.optionComponent1.click()
    }

    async click_Componentoption2() {
        await this.optionComponent2.click()
    }

    async click_Componentoption3() {
        await this.optionComponent3.click()
    }

    async click_Componentoption4() {
        await this.optionComponent4.click()
    }

    async click_dropdownPreposition() {
        await this.dropdown2_Preposition.click()
    }

    async click_check_selectall() {
        await this.checkbox_SelectAll.click()
    }

    async click_check_option1() {
        await this.checkbox_option1.click()
    }

    async click_check_option2() {
        await this.checkbox_option2.click()
    }


    async click_random() {
        await this.random.click({force:true})
    }

    async click_buttonSubmit() {
        await this.button_Submit.click({timeout:5000})
    }

    async explicitwait_displaydata(){
        await this.page.waitForTimeout(25000)
    }

    async explicitwait_forModule(){
        await this.page.waitForTimeout(5000)
    }

    async jenkinsdataVisisble(){
        await this.column_right_jenkinsdata.isVisible()
    }

    async hover_integrationEnvironment() {
        await this.integrationEnvHover.hover();
    }

    async hover_intEnvironment() {
        await this.intEnvhover.hover();
    }

    async hover_extendedEnvironment() {
        await this.extEnvhover.hover();
    }

    async hover_identityEnvironment() {
        await this.identityEnvHover.hover();
    }

    async hover_prodEnvironment() {
        await this.prodEnvHover.hover();
        await this.prodEnvHover.click()
    }

    async hover_stableEnvironment() {
        await this.page.waitForTimeout(3000); 
        await this.stableEnvHover.hover();
        await this.scrollElementIntoView()
    }

    async scrollElementIntoView() {
        const element = this.stableExpand
        await element.scrollIntoViewIfNeeded();
      }
      
    async click_dropdownModule(){
        await this.dropdown3_module.click()
    }

    async click_moduleoption1(){
        await this.optionModule1.click()
    }

}
