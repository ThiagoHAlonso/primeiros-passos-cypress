class MyInfoPage{

    selectorList(){
        const selectors = {
            fistNameField: "[name='firstName']",
            midNameField:"[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField:".oxd-input--active",
            dateField:"[placeholder='yyyy-dd-mm']",
            calendarFieldButton:':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
            dateCloseButton:".--close",
            submitButton:"[type='submit']",
            nationalitiesBarButton:':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
            nationalityButton: ":nth-child(167)",
            MaritialStatsButton: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon",
            statsRelationShipSelector:".oxd-select-dropdown > :nth-child(3)",
            dateBirthField: "nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
            genderRadioBoxButton: ":nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input",
            savedButton: ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button",

        }
    
        return selectors 
    }

        fillPersonalDetails(firstName, midName, lastName, nick){
            cy.get(this.selectorList().fistNameField).clear().type(firstName)
            cy.get(this.selectorList().midNameField).clear().type(midName)
            cy.get(this.selectorList().lastNameField).clear().type(lastName)
            cy.get(this.selectorList().genericField).eq(3).clear().type(nick)
    }
        fillEmployeeDetails(test, otherIdTest, driversLicenseDate){
            cy.get(this.selectorList().genericField).eq(4).clear().type(test)
            cy.get(this.selectorList().genericField).eq(5).clear().type(otherIdTest) 
            cy.get(this.selectorList().genericField).eq(6).clear().type()
            cy.get(this.selectorList().genericField).eq(7).clear().type(driversLicenseDate)
            cy.get(this.selectorList().calendarFieldButton).clear().type()     
            
        }

        fillStatus(){
            cy.get(this.selectorList().nationalitiesBarButton).click()
            cy.get(this.selectorList().nationalityButton).click()   
            cy.get(this.selectorList().MaritialStatsButton).click()
           
        }
}
export default MyInfoPage