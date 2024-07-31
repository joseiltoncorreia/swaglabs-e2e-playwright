const { test } = require('@playwright/test')
const { LoginPage } = require('./pages/LoginPage')
const { ProductsPage } = require('./pages/ProductsPage')

test('Add Product to Cart', async ({ page }) => {
    /*
    Given I am on the Saucedemo products page
    When I click the "Add to cart" button on a product
    Then the number on the cart icon should increase by 1
    And the "Remove" button should appear in place of the "Add to cart" button
    */
    const loginPage = new LoginPage(page)
    const productsPage = new ProductsPage(page)

    await loginPage.gotoSwaglabs()
    await loginPage.login('standard_user', 'secret_sauce')
    await loginPage.validateHomePage()

    await productsPage.AddToCart('Sauce Labs Backpack')
})

test('Remove Product from Cart', async ({ page }) => {
    /*
    Given I have added a product to the cart
    When I click the "Remove" button on the product
    Then the number on the cart icon should decrease by 1
    And the "Add to cart" button should appear in place of the "Remove" button
    */
    const loginPage = new LoginPage(page)
    const productsPage = new ProductsPage(page)

    await loginPage.gotoSwaglabs()
    await loginPage.login('standard_user', 'secret_sauce')
    await loginPage.validateHomePage()

    await productsPage.AddToCart('Sauce Labs Backpack')
    await productsPage.RemoveFromCart('Sauce Labs Backpack')
})

test('View Products Details', async ({ page }) => {
    /*
    Given I am on the Saucedemo products page
    When I click on a product link
    Then I should be redirected to the product details page
    And the product details should be displayed (name, description, price, image)
    And the "Add to Cart" button should be displayed
    And the "Back to products" link should be displayed
    */
    const loginPage = new LoginPage(page)
    const productsPage = new ProductsPage(page)

    await loginPage.gotoSwaglabs()
    await loginPage.login('standard_user', 'secret_sauce')
    await loginPage.validateHomePage()

    await productsPage.ProductDetails('Sauce Labs Backpack')
})