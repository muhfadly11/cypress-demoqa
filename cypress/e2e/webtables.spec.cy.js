const webtablesPage = require("../pages/webTablesPage");

const getAllUsers = () =>
	cy.fixture("users.csv", "utf8").then((csv) => {
		const [header, ...rows] = csv.trim().split(/\r?\n/);
		const columns = header.split(",");	
		const users = rows.map((row) => {
			const values = row.split(",");
			return columns.reduce((user, column, index) => {
				user[column] = values[index];
				return user;
			}, {});
		});
		return users;
	});

const getFirstUser = () =>
	cy.fixture("users.csv", "utf8").then((csv) => {
		const [header, firstRow] = csv.trim().split(/\r?\n/);
		const columns = header.split(",");
		const values = firstRow.split(",");

		return columns.reduce((result, column, index) => {
			result[column] = values[index];
			return result;
		}, {});
	});

describe("Add user from CSV data - Positive Case", () => {
	beforeEach(() => {
		webtablesPage.visit();
	});

	it("TC Add user using every row from users.csv", () => {
		getAllUsers().then((users) => {
			users.forEach((user) => {
				webtablesPage.openAddUserForm();
				webtablesPage.fillUserForm(user);
				webtablesPage.submitUser();
				webtablesPage.verifyUser(user.email).should("exist");
			});
		});
	});
});

describe("Add user from CSV data - Negative Case", () => {
	beforeEach(() => {
		webtablesPage.visit();
	});

	it("TC Add user with empty first name", () => {
		getFirstUser().then((user) => {
			webtablesPage.openAddUserForm();
			webtablesPage.fillUserWithEmptyFirstName(user);
			webtablesPage.submitUser();
			webtablesPage.verifyEmptyFirstNameError();
			webtablesPage.closeRegistrationForm();
			webtablesPage.verifyUserNotExist(user.email);
		});
	});

	it("TC Add user with empty last name", () => {
		getFirstUser().then((user) => {
			webtablesPage.openAddUserForm();
			webtablesPage.fillUserWithEmptyLastName(user);
			webtablesPage.submitUser();
			webtablesPage.verifyEmptyLastNameError();
			webtablesPage.closeRegistrationForm();
			webtablesPage.verifyUserNotExist(user.email);
		});
	});

	it("TC Add user with empty email", () => {
		getFirstUser().then((user) => {
			webtablesPage.openAddUserForm();
			webtablesPage.fillUserWithEmptyEmail(user);
			webtablesPage.submitUser();
			webtablesPage.verifyEmptyEmailError();
			webtablesPage.closeRegistrationForm();
			webtablesPage.verifyUserNotExist(user.email);
		});
	});

	it("TC Add user with empty age", () => {
		getFirstUser().then((user) => {
			webtablesPage.openAddUserForm();
			webtablesPage.fillUserWithEmptyAge(user);
			webtablesPage.submitUser();
			webtablesPage.verifyEmptyAgeError();
			webtablesPage.closeRegistrationForm();
			webtablesPage.verifyUserNotExist(user.email);
		});
	});

	it("TC Add user with empty salary", () => {
		getFirstUser().then((user) => {
			webtablesPage.openAddUserForm();
			webtablesPage.fillUserWithEmptySalary(user);
			webtablesPage.submitUser();
			webtablesPage.verifyEmptySalaryError();
			webtablesPage.closeRegistrationForm();
			webtablesPage.verifyUserNotExist(user.email);
		});
	});

	it("TC Add user with empty department", () => {
		getFirstUser().then((user) => {
			webtablesPage.openAddUserForm();
			webtablesPage.fillUserWithEmptyDepartment(user);
			webtablesPage.submitUser();
			webtablesPage.verifyEmptyDepartmentError();
			webtablesPage.closeRegistrationForm();
			webtablesPage.verifyUserNotExist(user.email);
		});
	});
});
