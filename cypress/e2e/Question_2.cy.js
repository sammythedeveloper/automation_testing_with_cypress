describe("Shopping Cart Tests", () => {
    beforeEach(() => {
      // Step 1: Visit the homepage
      cy.visit("https://practice.expandtesting.com/bookstore");
  
      // Step 2: Click the cart icon (image)
      cy.get(".position-relative > img").click();
  
      // Step 3: Assert the cart is empty
      cy.contains("No items in carts").should("be.visible");
  
      // Step 4: Go back to homepage for the test
      cy.visit("https://practice.expandtesting.com/bookstore");
    });
  
    it("should confirm the cart is empty at the beginning", () => {
      // Open the cart again and assert
      cy.get(".position-relative > img").click();
      cy.contains("No items in carts").should("be.visible");
    });
    it("should add an item and update the cart count", () => {
        // Step 1: Wait for books to load
        cy.get('[data-testid^="cart-"]', { timeout: 10000 }).should('have.length', 3);
      
        // Step 2: Click Add to Cart on the first book
        cy.get('[data-testid^="cart-"]').first().within(() => {
          cy.contains("Add To Cart").click();
        });
      
        // Step 3: Open the cart
        cy.get(".position-relative > img").click();
      
        // Step 4: Assert 1 item is shown
        cy.get(".content_checkout").should("have.length", 1);
      
        // Step 5: Check for quantity display
        cy.get('#cartQty').should("be.visible");
      });      
      
  });
  

// cy.get('[data-testid="cart-674108466cb6226060a20d44"]')
// cy.get('.position-relative > img')
