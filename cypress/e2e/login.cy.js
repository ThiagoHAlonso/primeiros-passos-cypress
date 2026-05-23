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

    myInfoPage.fillPersonalDetails('FirstName', 'LastName', 'nickName')
    myInfoPage.fillEmployeeDetails('EmployId','otherId','2012-12-12')
    myInfoPage.fillStatus()
    cy.get(this.selectorList().savedButton).click()
        
    cy.visit('/pim/viewPersonalDetails/empNumber/7')
     
   
    
  
  })
  it('Login - fail', () => {
    cy.visit('/auth/login')

    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert).should('be.visible').and('contain', 'Invalid credentials')
  })

})