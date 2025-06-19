describe("Order Management Tests on Katalon Demo", () => {
  beforeEach(() => {
    // Log in before each test
    cy.visit("https://cms.demo.katalon.com/");
  });

  it("should view order details", () => {
    // Interact with the first order (e.g., View button)
    cy.get(".products")
      .first()
      .within(() => {
        cy.get(".post-54 > .ellie-thumb-wrapper > .button").click();
      });
    // Assert order details are visible
    cy.get(".added_to_cart").should("be.visible").click();
  });

  it('adds product .post-27 and clicks View cart', () => {
    cy.get('.post-27 > .ellie-thumb-wrapper > .button').click();

    // wait for "View cart" button to appear
    cy.get('.added_to_cart', { timeout: 10000 })
      .should('be.visible')
      .click();
    cy.get("thead > tr > .product-name").should("be.visible");
    cy.get("thead > tr > .product-subtotal").should("be.visible");

    // Step 4: Update quantity to 2
    cy.get(".qty").clear().type("2");
    // Step 5: Click update cart button
    cy.get('[name="update_cart"]').click();
    // Step 6: Assert quantity updated to 2
      cy.get(".qty").should("have.value", "2");
  });
  

  afterEach(() => {
    // Go to cart page
    cy.visit('https://cms.demo.katalon.com/cart');
  
    // Remove all items from cart (if any)
    cy.get('.remove')  // adjust selector for remove buttons
      .each(($btn) => {
        cy.wrap($btn).click();
      });
  
    // Optionally confirm cart is empty
    cy.contains('Your cart is currently empty').should('be.visible');
  });
  
});
