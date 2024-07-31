import { url } from "inspector";
const { expect } = require('@playwright/test')

export class LoginPage {
    constructor(page) {
        this.page = page
    }

    async gotoSwaglabs() {
        await this.page.goto('https://www.saucedemo.com/')
    }

    async validateTitle() {
        await expect(this.page).toHaveTitle('Swag Labs')
    }

    async login(username, password) {
        await this.page.locator('input[id="user-name"]').fill(username)
        await this.page.locator('input[id="password"]').fill(password)
        await this.page.locator('input[id="login-button"]').click()
    }

    async validateHomePage() {
        await expect(this.page.locator('div[class="app_logo"]')).toHaveText('Swag Labs')
    }

    async validateErrorMessage(message) {
        await expect(this.page.locator('h3[data-test="error"]')).toHaveText(message)
    }
}