import { url } from "inspector";
import { expect } from '@playwright/test'

export class ProductsPage {
    constructor(page) {
        this.page = page
    }

    async AddToCart(product) {
        const button = await this.page.locator('//div[text()="' + product + '"]/ancestor::div[@data-test="inventory-item-description"]//button')

        await button.click()
        await expect(button).toHaveText('Remove')
        await expect(this.page.locator('span[data-test="shopping-cart-badge"]')).toHaveText('1')
    }

    async RemoveFromCart(product) {
        const button = await this.page.locator('//div[text()="' + product + '"]/ancestor::div[@data-test="inventory-item-description"]//button')

        await button.click()
        await expect(button).toHaveText('Add to cart')
        await expect(this.page.locator('span[data-test="shopping-cart-badge"]')).toBeHidden()
    }

    async ProductDetails(product) {
        const productLocator = this.page.locator(`//div[text()="${product}"]/ancestor::div[@data-test="inventory-item-description"]`);
        const detailsElement = await productLocator.locator('div[data-test="inventory-item-desc"]');
        const priceElement = await productLocator.locator('div[data-test="inventory-item-price"]');
    
        const details = await detailsElement.innerText();
        const price = await priceElement.innerText();
    
        await productLocator.locator('//div[text()="' + product + '"]').click();
        await expect(this.page.locator('div[data-test="inventory-item-name"]')).toHaveText(product);
        await expect(this.page.locator('div[data-test="inventory-item-desc"]')).toHaveText(details);
        await expect(this.page.locator('div[data-test="inventory-item-price"]')).toHaveText(price);
      }
}