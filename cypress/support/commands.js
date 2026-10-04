// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("dragTo", (source, target) => {
    cy.get(source).then(($source) => {
        const sourceRect = $source[0].getBoundingClientRect();

        cy.get(target).then(($target) => {
            const targetRect = $target[0].getBoundingClientRect();

            cy.wrap($source)
                .trigger("mousedown", {
                    button: 0,
                    which: 1,
                    clientX: sourceRect.left + sourceRect.width / 2,
                    clientY: sourceRect.top + sourceRect.height / 2,
                    force: true,
                })
                .trigger("mousemove", {
                    clientX: targetRect.left + targetRect.width / 2,
                    clientY: targetRect.top + targetRect.height / 2,
                    force: true,
                })
                .trigger("mouseup", {
                    button: 0,
                    which: 1,
                    clientX: targetRect.left + targetRect.width / 2,
                    clientY: targetRect.top + targetRect.height / 2,
                    force: true,
                });
        });
    });
});