describe("page", () => {
  // set "cypress-file-upload": 4 or 5 in package
  it("version >4 - attachFile", () => {
    cy.visit("localhost:4200");
    cy.get("[data-e2e-file-drop]").should("be.visible");
    cy.get("[data-e2e-button]").should("be.disabled");
    cy.fixture("./test.docx").then((fileContent) => {
      cy.get("[data-e2e-file-drop]", { force: true }).attachFile(
        {
          fileContent,
          fileName: "test",
          mimeType: "application/docx",
          encoding: "utf-8",
        },
        { subjectType: "drag-n-drop" }
      );
    });
    cy.get("[data-e2e-button]").should("not.be.disabled");
  });

  // set "cypress-file-upload": "3.5.3" in package
  xit("version 3 - uploadFile", () => {
    cy.visit("localhost:4200");
    cy.get("[data-e2e-file-drop]").should("be.visible");
    cy.get("[data-e2e-button]").should("be.disabled");
    cy.fixture("./test.docx").then((fileContent) => {
      cy.get("[data-e2e-file-drop]", { force: true }).upload(
        {
          fileContent,
          fileName: "test",
          mimeType: "application/docx",
          encoding: "utf-8",
        },
        { subjectType: "drag-n-drop" }
      );
    });
    cy.get("[data-e2e-button]").should("not.be.disabled");
  });
});
