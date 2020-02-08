/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
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
  $("#select").change(getProducts);
  // route to show single product
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
      });
    } else {
      location.reload();
    }
  }
  // wiring up constraints for validate.js
  const constraints = {
    name: {
      presence: true,
      length: {
        minimum: 2,
        message: "must be at least 2 characters",
      },
    },
    quantity: {
      presence: true,
      numericality: {
        onlyInteger: true,
      },
    },
    cost: {
      presence: true,
      numericality: {
        onlyInteger: true,
      },
    },
    description: {
      presence: true,
      length: {
        minimum: 3,
        message: "must be at least 3 characters",
      },
    },
    category: {
      presence: true,
      length: {
        minimum: 2,
        message: "must be at least 2 characters",
      },
    },
  };
  // our on click event - note I deleted my post route as it will be taken cared of later in this function
  $("#productSubmit").on("click", function(event) {
    event.preventDefault();
    const data = {
      name: nameInput.val().trim(),
      quantity: quantityInput.val().trim(),
      cost: costInput.val().trim(),
      description: descriptionInput.val().trim(),
      category: categoryInput.val().trim(),
    };
    // as you land on the page no errors need to be showed up so let's create a let and give it value true
    let isValid = true;
    // next two lines are clearing our errors and angry css from fields that were not properly completed
    $(".error").text("");
    $("#orderForm>div>div>input.is-danger").removeClass("is-danger");
    // this is the validate.js magic in one line
    const errors = validate(data, constraints);
    // if we get errors re-assign isValid to be false
    if (errors) isValid = false;
    // if no errors sending post with the object we created earlier
    if (isValid) {
      $.ajax({
        url: "/api/products",
        method: "POST",
        // eslint-disable-next-line object-shorthand
        data: data,
      }).then(() => location.reload());
    } else {
      // if there are errors we are setting .text of error message in <p> and some css on fileds
      // eslint-disable-next-line prefer-const
      for (let field in errors) {
        const fieldName = field;
        $(`#${fieldName}Error`).text(errors[field].join(", "));
        $(`#${fieldName}Input`).addClass("is-danger");
      }
    }
  });
});
