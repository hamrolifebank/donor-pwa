describe("HLB ", function () {
  it("landing page", function () {
    cy.visit("http://localhost:3000");
    cy.contains("Create new wallet");
    cy.contains("Seed phrase");
  });

  it("create wallet for registration ", function () {
    cy.visit("http://localhost:3000");
    cy.contains("Create new wallet").click();
  });

  it("register", function () {
    cy.get("#fullname").type("Ram Shyam");
    cy.get("#selectG").click();
    cy.contains("Male").click();
    cy.get("#phnumber").type("123456789");
    cy.get("#dob").click();
    cy.get("#selectBG").click();
    cy.contains("O+").click();
    cy.get("#email").type("abc@abc");
    cy.contains("Submit").click();
  });

  it("save the mnemonics", function () {
    cy.contains("Yes").click();
  });

  it("Home page", function () {
    cy.contains("home page");
  });
});
