const resizablePage = require("../pages/resizablePage");

describe("Resizable - Positive Case", () => {
    beforeEach(() => {
        resizablePage.visit();
    });

    it("TC Resize the resizable box to the minimum size", () => {
        resizablePage.resizeBoxToMinimumSize();
        resizablePage.verifyResizeBoxSize(150, 150);
    });

    it("TC Resize the resizable box to the maximum size", () => {
        resizablePage.resizeBoxToMaximumSize();
        resizablePage.verifyResizeBoxSize(500, 300);
    });

    it("TC Resizable area to 400x200", () => {
        resizablePage.resizableAreaTo400x200();
        resizablePage.verifyResizableSize(400, 200);
    });
});

describe("Resizable - Negative Case", () => {
    beforeEach(() => {
        resizablePage.visit();
    });

    it("TC Resize the resizable box to less than the minimum size", () => {
        resizablePage.resizeBoxLessThanMinimumSize();
        resizablePage.verifyResizeBoxLessThanMinimumSize(100, 100);
    });

    it("TC Resize the resizable box to more than the maximum size", () => {
        resizablePage.resizeBoxMoreThanMaximumSize();
        resizablePage.verifyResizeBoxMoreThanMaximuSize(600, 400);
    });
});