

$(document).ready(function () {
  // Getting references to the name input and author container, as well as the table body
  // const formContent = $('#formContent');
  const nameInput = $("#nameInput");
  const addressInput = $("#addressInput");
  const paymentInput = $("#paymentInput");
  const phoneInput = $("#phoneInput");
  const emailInput = $("#emailInput");
  const passwordInput = $("#passwordInput");

  

  // writing up constraints for validate.js
  const constraints = {
    name: {
      presence: true,
      length: {
        minimum: 2,
        message: "must be at least 2 characters",
      },
    },
    address: {
      presence: true,
      length: {
        minimum: 2,
        message: 'must be a valid address'
      },
    },
    payment: {
      presence: true,
      length: {
        minimum: 2,
        message: "must be a valid payment option (i.e. credit, debit, cash)"
      },
    },
    phone: {
      presence: true,
      length: {
        minimum: 10,
        message: "must be a valid phone number",
      },
    },
    email: {
      presence: true,
      length: {
        minimum: 2,
        message: "must be a valid email address",
      }
    },
    password: {
      presence: true,
      length: {
        minimum: 2,
        message: "must be at least 6 characters",
      },
    },
  };

  $("#addCustomerBtn").on("click", (event) => {
    event.preventDefault();
    // if (!customerName.val().trim()) {
    //   return;
    // }
    
    const newCustomer = {
      name: nameInput.val().trim(),
      address: addressInput.val().trim(),
      payment: paymentInput.val().trim(),
      phone: phoneInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };
    console.log('new customer: ', newCustomer)
    console.log('nameInput', nameInput.val())
    let isValid = true;
    $('.error').text('');
    $("#orderForm>div>div>input.is-danger").removeClass("is-danger");
    const errors = validate(newCustomer, constraints);
    if (errors) {

      isValid = false;
    }
    if (isValid) {
      clearCustomerField();

      $.ajax({
        url: '/api/customers',
        method: 'POST',
        data: newCustomer,
      }).then(() => location.reload());
    } else {

      for (let field in errors) {
        const fieldName = field;
        $(`#${fieldName}Error`).text(errors[field].join(", "));
        $(`#${fieldName}Input`).addClass("is-danger");
      }
    }
  });

  $('#customerList').change(GetCustomer)

});


function GetCustomer() {
  const id = $(this)
    .children(':selected')
    .attr('id');
  if (id) {
    $.get(`/customers/${id}`, function (customer) {
      $('#customerInfo').addClass('is-hidden'); //////////
      const uList = $('<ul>').appendTo('#productDiv');
      $('ul li').remove();
      uList.append(`<div class="tile is-parent">
      <article class="tile is-child notification is-dark">
        <p class="title name">name: ${customer.name}</p>
        <p class="subtitle address">address: ${customer.address}</p>
        <p class="subtitle payment">payment: ${customer.payment}</p>
        <p class="subtitle phone">phone: ${customer.phone}</p>
        <p class="subtitle email">email: ${customer.email}</p>
        <p class="subtitle password">password: ${customer.password}</p>

      </article>
    </div>`);

    });
  } else {
    location.reload();
  }
}

function clearCustomerField() {
  $('#customerName').val('')
  $('#address').val('')
  $('#payment').val('')
  $('#phoneNumber').val('')
  $('#email').val('')
  $('#password').val('')
}






