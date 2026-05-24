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

  it ('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo()
    myInfoPage.visitPage(7)

    myInfoPage.fillPersonalDetails('FirstNameTest', 'MidNameTest', 'LastNameTest', 'NickTest')
    myInfoPage.fillEmployeeDetails('test', 'OtherIdTest', 'Drivers License Number Test', '2012-12-12')
    myInfoPage.fillStatus('1963-12-12')
     
  })
  
 
})