/// <reference types="cypress" />



describe("lesson1", () => {
  it(" visit the magento website", () => {
    cy.visit("/");
    cy.visit("/what-is-new.html");
    cy.visit("women/tops-women/hoodies-and-sweatshirts-women.html");
  });

  it("validate login to magento website",() => {
    
    cy.visit("/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");
    cy.get("#email").type("cypressUser@gmail.com");
    cy.get("#pass").type("test@123");
    cy.get("#send2").click();

//assertion
cy.get(".logged-in").should("contain","Welcome, cypress user!");
  })
  it.only("selector",() => {
    cy.visit("/");
    
   cy.get("#search").type("tshirt");
  })


});
