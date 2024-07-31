// @ts-check
const { test } = require('@playwright/test')
const { LoginPage } = require('./pages/LoginPage')

test('Successful Login', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.gotoSwaglabs()
  await loginPage.login('standard_user', 'secret_sauce')
  await loginPage.validateHomePage()
})

test('Login with Invalid Username', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.gotoSwaglabs()
  await loginPage.login('test', 'secret_sauce')
  await loginPage.validateErrorMessage('Epic sadface: Username and password do not match any user in this service')
})

test('Login with Invalid Password', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.gotoSwaglabs()
  await loginPage.login('standard_user', 'test')
  await loginPage.validateErrorMessage('Epic sadface: Username and password do not match any user in this service')
})

test('Login with Empty Username', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.gotoSwaglabs()
  await loginPage.login('', 'test')
  await loginPage.validateErrorMessage('Epic sadface: Username is required')
})

test('Login with Empty Password', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.gotoSwaglabs()
  await loginPage.login('standard_user', '')
  await loginPage.validateErrorMessage('Epic sadface: Password is required')
})