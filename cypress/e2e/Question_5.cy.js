describe("Imgbb Image Upload Test", () => {
  it("should upload an image successfully", () => {
    cy.visit("https://imgbb.com/");

    // Attach the file from fixtures
    cy.get('input[type="file"]').attachFile("carr.jpg");

    // Click the Upload button to start uploading
    cy.contains("button", "Upload").click();

    // Wait for upload to finish and check confirmation message
    cy.get('.upload-box-status > [data-result="success"]', { timeout: 20000 }) // increase timeout for upload
      .should("be.visible")
      .and("contain.text", "Upload complete");

    // Check that a generated link appears (adjust selector accordingly)
    cy.get("#uploaded-embed-code-0", { timeout: 10000 }) // give enough timeout for upload
      .invoke("val")
      .should("match", /^https?:\/\//);
  });
});
