class MyInfoPage {

    selectors = {
        firstNameField: "[name='firstName']",
        midNameField: "[name='middleName']",
        lastNameField: "[name='lastName']",
        genericField: ".oxd-input--active",
        calendarFieldButton: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
        dateCloseButton: ".--close",
        nationalitiesBarButton: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
        nationalityButton: ":nth-child(167)",
        maritalStatsButton: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon",
        statsRelationshipSelector: ".oxd-select-dropdown > :nth-child(3)",
        dateBirthField: ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
        genderRadioBoxButton: ":nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input",
        saveButton: ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button",
    }

    
    fillPersonalDetails(firstName, midName, lastName, nick) {
        cy.get(this.selectors.firstNameField).clear().type(firstName)
        cy.get(this.selectors.midNameField).clear().type(midName)
        cy.get(this.selectors.lastNameField).clear().type(lastName)
        cy.get(this.selectors.genericField).eq(3).clear().type(nick)
    }

    
    fillEmployeeDetails(employeeId, otherId, driversLicense, licenseExpiryDate) {
        cy.get(this.selectors.genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectors.genericField).eq(5).clear().type(otherId)
        cy.get(this.selectors.genericField).eq(6).clear().type(driversLicense)
        cy.get(this.selectors.calendarFieldButton).clear().type(licenseExpiryDate)
        cy.get(this.selectors.dateCloseButton).click()
    }

    fillStatus(birthDate) {
        cy.get(this.selectors.nationalitiesBarButton).click()
        cy.get(this.selectors.nationalityButton).click()
        cy.get(this.selectors.maritalStatsButton).click()
        cy.get(this.selectors.statsRelationshipSelector).click()
        cy.get(this.selectors.dateBirthField).clear().type(birthDate)
        cy.get(this.selectors.dateCloseButton).click()
        cy.get(this.selectors.genderRadioBoxButton).click()
        cy.get(this.selectors.saveButton).click()
    }

    visitPage(empNumber = 7) {
        cy.visit(`/pim/viewPersonalDetails/empNumber/${empNumber}`)
    }
     checkInfoSaved(firstName, midName, lastName, nick) {
        cy.get(this.selectors.firstNameField).should('have.value', firstName)
        cy.get(this.selectors.midNameField).should('have.value', midName)
        cy.get(this.selectors.lastNameField).should('have.value', lastName)
        cy.get(this.selectors.genericField).eq(3).should('have.value', nick)
    }
}

export default MyInfoPage