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

  const constraints = {
    quantity: {
      name: "quantity",
      rules: "numeric",
    },
  };
  $(document).on("submit", "#orderForm", function(e) {
    e.preventDefault();
    handleFormSubmit($(this));
  });

  function handleFormSubmit(form) {
    console.log("wwwof");

    const values = validate.collectFormValues(form);
    const errors = validate(values, constraints);
    // showErrors(form, errors || {});
    if (!errors) {
      console.log("success");
    } else {
      console.log(errors);
    }
  }

  // function showErrors(form, errors) {}

  // const validator = new FormValidator(
  //   "orderForm",
  //   [
  //     {
  //       name: "quantity",
  //       rules: "numeric",
  //     },
  //   ],
  //   function(errors, event) {
  //     if (errors.length > 0) {
  //       // console.log(errors);

  //       let errorString = "";

  //       for (let i = 0, errorLength = errors.length; i < errorLength; i++) {
  //         errorString += `${errors[i].message}<br />`;
  //       }

  //       $("#errorQuantity").text(errorString);
  //     }
  //   }
  // );
});
