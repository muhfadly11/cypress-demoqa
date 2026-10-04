const droppabelPage = require("../pages/droppablePage");

describe("Droppable - Positive Case", () => {
    beforeEach(() => {
        droppabelPage.visit();
    });

    it("TC Drag and drop the element - Simple", () => {
        droppabelPage.dragAndDropSimple();
        droppabelPage.verifyDroppedElement()
    });

    it("TC Drag and drop the element - Accept", () => {
        droppabelPage.dragAndDropAccept();
        droppabelPage.verifyDroppedElement()
    });

    it.skip("TC Drag and drop the element - Prevent Propagation", () => {
        droppabelPage.dragAndDropPreventPropogation();
        droppabelPage.verifyDroppedElement()
    });
});

describe("Droppable - Negative Case", () => {
    beforeEach(() => {
        droppabelPage.visit();
    });

    it("TC Drag and drop the element out of the drop zone - Simple", () => {
        droppabelPage.dragAndDropSimpleOutOfDropZone();
        droppabelPage.verifySimpleElementNotDropped();
    });

    it("TC Drag and drop the element out of the drop zone - Accept", () => {
        droppabelPage.dragAndDropNotAccept();
        droppabelPage.verifySimpleElementNotDropped();
    });
});
