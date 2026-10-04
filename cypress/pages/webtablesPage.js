const webtablesPage = {
	selectors: {
		addButton: "#addNewRecordButton",
		firstNameInput: "#firstName",
		lastNameInput: "#lastName",
		emailInput: "#userEmail",
		ageInput: "#age",
		salaryInput: "#salary",
		departmentInput: "#department",
		submitButton: "#submit",
        closeRegistrationFormButton: "button[aria-label='Close']",
	},

	visit() {
		cy.visit("https://demoqa.com/webtables");
	},

	openAddUserForm() {
		cy.get(this.selectors.addButton).click();
	},

	fillUserForm(user) {
		cy.get(this.selectors.firstNameInput).type(user.firstName);
		cy.get(this.selectors.lastNameInput).type(user.lastName);
		cy.get(this.selectors.emailInput).type(user.email);
		cy.get(this.selectors.ageInput).type(user.age);
		cy.get(this.selectors.salaryInput).type(user.salary);
		cy.get(this.selectors.departmentInput).type(user.department);
	},
    
    fillUserWithEmptyFirstName(user) {
        cy.get(this.selectors.lastNameInput).type(user.lastName);
        cy.get(this.selectors.emailInput).type(user.email);
        cy.get(this.selectors.ageInput).type(user.age);
        cy.get(this.selectors.salaryInput).type(user.salary);
        cy.get(this.selectors.departmentInput).type(user.department);
    },
    
    fillUserWithEmptyLastName(user) {
        cy.get(this.selectors.firstNameInput).type(user.firstName);
        cy.get(this.selectors.emailInput).type(user.email);
        cy.get(this.selectors.ageInput).type(user.age);
        cy.get(this.selectors.salaryInput).type(user.salary);
        cy.get(this.selectors.departmentInput).type(user.department);
    },

    fillUserWithEmptyEmail(user) {
        cy.get(this.selectors.firstNameInput).type(user.firstName);
        cy.get(this.selectors.lastNameInput).type(user.lastName);
        cy.get(this.selectors.ageInput).type(user.age);
        cy.get(this.selectors.salaryInput).type(user.salary);
        cy.get(this.selectors.departmentInput).type(user.department);
    },

    fillUserWithEmptyAge(user) {
        cy.get(this.selectors.firstNameInput).type(user.firstName);
        cy.get(this.selectors.lastNameInput).type(user.lastName);
        cy.get(this.selectors.emailInput).type(user.email);
        cy.get(this.selectors.salaryInput).type(user.salary);
        cy.get(this.selectors.departmentInput).type(user.department);
    },

    fillUserWithEmptySalary(user) {
        cy.get(this.selectors.firstNameInput).type(user.firstName);
        cy.get(this.selectors.lastNameInput).type(user.lastName);
        cy.get(this.selectors.emailInput).type(user.email);
        cy.get(this.selectors.ageInput).type(user.age);
        cy.get(this.selectors.departmentInput).type(user.department);
    },

    fillUserWithEmptyDepartment(user) {
        cy.get(this.selectors.firstNameInput).type(user.firstName);
        cy.get(this.selectors.lastNameInput).type(user.lastName);
        cy.get(this.selectors.emailInput).type(user.email);
        cy.get(this.selectors.ageInput).type(user.age);
        cy.get(this.selectors.salaryInput).type(user.salary);
    },

    closeRegistrationForm() {
        cy.get(this.selectors.closeRegistrationFormButton).click();
    },

	submitUser() {
		cy.get(this.selectors.submitButton).click();
	},

	verifyUser(email) {
		return cy.contains("td", email);
	},

    verifyUserNotExist(email) {
        return cy.get("tbody").should("not.contain", email);
    },

    verifyEmptyFirstNameError() {
        cy.get(this.selectors.firstNameInput)
            .should("have.attr", "required");
    },

    verifyEmptyLastNameError() {
        cy.get(this.selectors.lastNameInput)
            .should("have.attr", "required");
    },

    verifyEmptyEmailError() {
        cy.get(this.selectors.emailInput)
            .should("have.attr", "required");
    },

    verifyEmptyAgeError() {
        cy.get(this.selectors.ageInput)
            .should("have.attr", "required");
    },

    verifyEmptySalaryError() {
        cy.get(this.selectors.salaryInput)
            .should("have.attr", "required");
    },

    verifyEmptyDepartmentError() {
        cy.get(this.selectors.departmentInput)
            .should("have.attr", "required");
    }
};

module.exports = webtablesPage;
