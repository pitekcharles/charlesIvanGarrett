/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-sequences */
$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  const nameInput = $("#nameInput");
  const quantityInput = $("#quantityInput");
  const costInput = $("#costInput");
  const descriptionInput = $("#descriptionInput");
  const categoryInput = $("#categoryInput");
  const productList = $("tbody");
  const productContainer = $("#product-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  $("#product-form").on("click", handleProductSubmit);
  // Getting the initial list
  getProducts();
  // A function to handle what happens when the form is submitted to create a new Product
  function handleProductSubmit(e) {
    e.preventDefault();
    if (!nameInput.val().trim()) {
      return;
    }
    createProduct({
      name: nameInput.val().trim(),
      quantity: quantityInput.val().trim(),
      cost: costInput.val().trim(),
      description: descriptionInput.val().trim(),
      category: categoryInput.val().trim(),
    });
  }
  // Function for creating a new list row for Products
  function createProduct(productData) {
    $.post("/api/products", productData).then(getProducts);
  }

  function createProductRow(productData) {
    const newTr = $("<tr>");
    newTr.data("product", productData);
  }
  // Function for retrieving Products and getting them ready to be rendered to the page
  function getProducts() {
    $.get("/api/products", function(data) {
      const rowsToAdd = [];
      for (const i = 0; i < data.length; i++) {
        rowsToAdd.push(createProductRow(data[i]));
      }
      renderProductList(rowsToAdd);
      // eslint-disable-next-line no-unused-expressions
      nameInput.val(""),
        quantityInput.val(""),
        costInput.val(""),
        descriptionInput.val(""),
        categoryInput.val("");
    });
  }
  // A function for rendering the list of Products to the page
  function renderProductList(rows) {
    productList
      .children()
      .not(":last")
      .remove();
    productContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      productList.prepend(rows);
    } else {
      renderEmpty();
    }
  }
  // Function for handling what to render when there are no Products
  function renderEmpty() {
    const alertDiv = $("<div>");
    alertDiv.addClass("alert"); //! add bulma class for alert alert danger
    alertDiv.text("You must create a product before placing an order");
    productContainer.append(alertDiv);
  }
});
