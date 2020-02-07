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
  // Adding event listeners to the form to create a new object, and the button to delete
  $("#product-form").on("click", handleProductSubmit);
  $("#select").change(getProducts);
  // Getting the initial list

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
    // console.log(nameInput.val().trim());
    $.post("/api/products", productData).then(() => location.reload());
  }

  function getProducts() {
    const id = $(this)
      .children(":selected")
      .attr("id");
    if (id) {
      $.get(`/product/${id}`, function(product) {
        console.log(product.name);
        $("#productList").addClass("is-hidden");
        const uList = $("<ul>").appendTo("#productDiv");
        $("ul li").remove();
        uList.append(
          `<li><b>${product.name}</b></li><li>Quantity: ${product.quantity}</li><li>Cost ${product.cost}</li><li>Description ${product.description}</li><li>Category ${product.category}</li>`
        );
        // console.log(err);
        // res.render("product", req); //!
      });
    } else {
      location.reload();
    }
  }
});
