import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/DashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  const selectorList = {
  

    
  }

  it.only('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.acessMyInfo()
  
    cy.visit('/pim/viewPersonalDetails/empNumber/7')
    cy.get(selectorList.fistNameField).clear().type('FirstNameTest')
    cy.get(selectorList.midNameField).clear().type('MidNameTest')
    cy.get(selectorList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorList.genericField).eq(3).clear().type('NickTest') 
    cy.get(selectorList.genericField).eq(4).clear().type('test')
    cy.get(selectorList.genericField).eq(5).clear().type('OtherIdTest') 
    cy.get(selectorList.genericField).eq(6).clear().type('Drivers License Number Test')
   
    cy.get(selectorList.calendarFieldButton).clear().type('2012-12-12')
   
    cy.get(selectorList.dateCloseButton).click()
   
    cy.get(selectorList.nationalitiesBarButton).click()
    cy.get(selectorList.nationalityButton).click()
    
    cy.get(selectorList.MaritialStatsButton).click()
    
  
    cy.get(selectorList.savedButton).click()
 
  
  })
  it('Login - fail', () => {
    cy.visit('/auth/login')

    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert).should('be.visible').and('contain', 'Invalid credentials')
  })

})