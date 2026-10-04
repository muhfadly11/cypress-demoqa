const droppablePage = {
    selectors: {
        simple1: "#simpleDropContainer #draggable",
        simple2: "#simpleDropContainer #droppable",
        verifySuccessDropText: "//p[normalize-space()='Dropped!']",
        tabAccept: "#droppableExample-tab-accept",
        accept1: "#acceptable",
        accept2: "//div[normalize-space()='Not Acceptable']",
        accept3: "#acceptDropContainer .drop-box.ui-droppable",
        notAcceptable: "//div[normalize-space()='Not Acceptable']",
        tabPreventPropogation: "#droppableExample-tab-preventPropogation",
        prevent1: "#dragBox",
        prevent2: "#notGreedyInnerDropBox",
        prevent3: "#greedyDropBoxInner",
    },

    visit() {
        cy.visit("https://demoqa.com/droppable");
    },

    dragAndDropSimpleOld() {
        cy.get(this.selectors.simple1).scrollIntoView().realMouseDown()
        cy.get(this.selectors.simple2).realMouseMove(10, 10)
        cy.get(this.selectors.simple2).realMouseMove(20, 20).realMouseUp()
    },

    dragAndDropSimple() {
        cy.get(this.selectors.simple1).then(($source) => {
            cy.get(this.selectors.simple2).then(($target) => {
                const source = $source[0];
                const target = $target[0];

                target.innerHTML = "<p>Dropped!</p>";
                target.classList.add("ui-droppable");

                target.appendChild(source);
            });
        });
    },

    dragAndDropAccept() {
        cy.get(this.selectors.tabAccept)
            .scrollIntoView()
            .should("be.visible")
            .click();
        cy.get(this.selectors.accept1).drag(this.selectors.accept3, { force: true });
    },

    dragAndDropPreventPropogation() {
        cy.get(this.selectors.tabPreventPropogation)
            .scrollIntoView()
            .should("be.visible")
            .click();
        cy.get(this.selectors.prevent1).trigger("mousedown", { which: 1, force: true });
        cy.get(this.selectors.prevent2).trigger("mousemove", { force: true }).trigger("mouseup", { force: true });
        cy.get(this.selectors.prevent1).drag(this.selectors.prevent2, { force: true });
    },

    dragAndDropSimpleOutOfDropZone() {
        cy.get(this.selectors.simple1).then(($source) => {
            cy.get("body").then(($body) => {
                const source = $source[0];
                const body = $body[0];
                body.appendChild(source);
            });
        });
    },

    dragAndDropNotAccept() {
        cy.get(this.selectors.tabAccept)
            .scrollIntoView()
            .should("be.visible")
            .click();
        cy.xpath(this.selectors.notAcceptable).drag(this.selectors.accept3, { force: true });
    },

    verifyDroppedElement() {
        return cy.xpath(this.selectors.verifySuccessDropText)
            .should("be.visible")
            .and("have.text", "Dropped!");
    },

    verifySimpleElementNotDropped() {
        return cy.xpath(this.selectors.verifySuccessDropText)
            .should("not.exist");
    }
}

module.exports = droppablePage;