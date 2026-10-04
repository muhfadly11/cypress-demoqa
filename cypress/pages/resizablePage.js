const resizeablePage = {
    selectors: {
        resizable: "#resizable",
        resizeHandle: "#resizable .react-resizable-handle",
        resizeBox: "#resizableBoxWithRestriction",
        resizeBoxHandle: "#resizableBoxWithRestriction .react-resizable-handle",
        verifyResizableSize: "#resizable",
        verifyResizeBoxSize: "#resizableBoxWithRestriction",
    },

    visit() {
        cy.visit("https://demoqa.com/resizable");
    },

    resizeBoxToMinimumSize() {
        cy.get(this.selectors.resizeBox).then(($box) => {
            const box = $box[0].getBoundingClientRect();

            const targetWidth = 150;
            const targetHeight = 150;

            const targetX = box.right - (box.width - targetWidth);
            const targetY = box.bottom - (box.height - targetHeight);

            cy.get(this.selectors.resizeBoxHandle)
                .trigger("mousedown", {
                    button: 0,
                    which: 1,
                    clientX: box.right,
                    clientY: box.bottom,
                    force: true,
                });

            cy.document()
                .trigger("mousemove", {
                    button: 0,
                    which: 1,
                    clientX: targetX,
                    clientY: targetY,
                    force: true,
                })
                .trigger("mouseup", {
                    button: 0,
                    which: 1,
                    clientX: targetX,
                    clientY: targetY,
                    force: true,
                });
        });
    },

    resizeBoxToMaximumSize() {
        cy.get(this.selectors.resizeBox).then(($box) => {
            const box = $box[0].getBoundingClientRect();

            const startX = box.right;
            const startY = box.bottom;
            const endX = startX + (500 - box.width);
            const endY = startY + (300 - box.height);

            cy.get(this.selectors.resizeBoxHandle)
                .trigger("mousedown", {
                    button: 0,
                    which: 1,
                    clientX: startX,
                    clientY: startY,
                    force: true,
                });

            cy.document()
                .trigger("mousemove", {
                    button: 0,
                    which: 1,
                    clientX: endX,
                    clientY: endY,
                    force: true,
                })
                .trigger("mouseup", {
                    button: 0,
                    which: 1,
                    clientX: endX,
                    clientY: endY,
                    force: true,
                });
        });
    },

    resizableAreaTo400x200() {
        cy.get(this.selectors.resizable).then(($resizable) => {
            const resizable = $resizable[0].getBoundingClientRect();
            const startX = resizable.right;
            const startY = resizable.bottom;
            const endX = startX + (400 - resizable.width);
            const endY = startY + (200 - resizable.height);

            cy.get(this.selectors.resizeHandle)
                .trigger("mousedown", {
                    button: 0,
                    which: 1,
                    clientX: startX,
                    clientY: startY,
                    force: true,
                });

            cy.document()
                .trigger("mousemove", {
                    button: 0,
                    which: 1,
                    clientX: endX,
                    clientY: endY,
                    force: true,
                })
                .trigger("mouseup", {
                    button: 0,
                    which: 1,
                    clientX: endX,
                    clientY: endY,
                    force: true,
                });
        });
    },

    resizeBoxLessThanMinimumSize() {
        cy.get(this.selectors.resizeBox).then(($resizeBox) => {
            const box = $resizeBox[0].getBoundingClientRect();
            const startX = box.left;
            const startY = box.top;
            const endX = startX - 10;
            const endY = startY - 10;

            cy.get(this.selectors.resizeBoxHandle)
                .trigger("mousedown", {
                    button: 0,
                    which: 1,
                    clientX: startX,
                    clientY: startY,
                    force: true,
                });

            cy.document()
                .trigger("mousemove", {
                    button: 0,
                    which: 1,
                    clientX: endX,
                    clientY: endY,
                    force: true,
                })
                .trigger("mouseup", {
                    button: 0,
                    which: 1,
                    clientX: endX,
                    clientY: endY,
                    force: true,
                });
        });
    },

    resizeBoxMoreThanMaximumSize() {
        cy.get(this.selectors.resizeBox).then(($resizeBox) => {
            const box = $resizeBox[0].getBoundingClientRect();
            const startX = box.left;
            const startY = box.top;
            const endX = startX + 600;
            const endY = startY + 600;

            cy.get(this.selectors.resizeBoxHandle)
                .trigger("mousedown", {
                    button: 0,
                    which: 1,
                    clientX: startX,
                    clientY: startY,
                    force: true,
                });

            cy.document()
                .trigger("mousemove", {
                    button: 0,
                    which: 1,
                    clientX: endX,
                    clientY: endY,
                    force: true,
                })
                .trigger("mouseup", {
                    button: 0,
                    which: 1,
                    clientX: endX,
                    clientY: endY,
                    force: true,
                });
        });
    },

    verifyResizableSize(width, height) {
        cy.get(this.selectors.verifyResizableSize).should("have.css", "width", `${width}px`);
        cy.get(this.selectors.verifyResizableSize).should("have.css", "height", `${height}px`);
    },

    verifyResizeBoxSize(width, height) {
        cy.get(this.selectors.verifyResizeBoxSize).should("have.css", "width", `${width}px`);
        cy.get(this.selectors.verifyResizeBoxSize).should("have.css", "height", `${height}px`);
    },

    verifyResizeBoxLessThanMinimumSize(width, height) {
        cy.get(this.selectors.verifyResizeBoxSize).should('not.have.css', "width", `${width}px`);
        cy.get(this.selectors.verifyResizeBoxSize).should("not.have.css", "height", `${height}px`);
    },

    verifyResizeBoxMoreThanMaximuSize(width, height) {
        cy.get(this.selectors.verifyResizeBoxSize).should('not.have.css', "width", `${width}px`);
        cy.get(this.selectors.verifyResizeBoxSize).should("not.have.css", "height", `${height}px`);
    }
}

module.exports = resizeablePage;