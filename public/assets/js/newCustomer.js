

$(document).ready(function () {
  // Getting references to the name input and author container, as well as the table body
  // const formContent = $('#formContent');
  const customerName = $("#customerName");
  const address = $("#address");
  const payment = $("#payment");
  const phone = $("#phoneNumber");
  const email = $("#email");
  const password = $("#password");
  var constraints = {
    password: {
      presence: true,
      length: {
        minimum: 6,
        message: "must be at least 6 characters"
      }
    }
  };

  $(document).on("click", "#addCustomerBtn", (event) => {
    event.preventDefault();
    if (!customerName.val().trim()) {
      return;
    }
    const newCustomer = {
      name: customerName.val().trim(),
      address: address.val().trim(),
      payment: payment.val().trim(),
      phone: phone.val().trim(),
      email: email.val().trim(),
      password: password.val().trim(),
    };
    console.log(newCustomer);
    // alert(JSON.stringify(validate({password: newCustomer.password}, constraints)));
    var passTestCheck = validate({password: newCustomer.password}, constraints);
    alert(passTestCheck.password)
    // validatePassword(newCustomer);
    sendtoServer(newCustomer);

  });

  $('#customerList').change(GetCustomer)

});

function sendtoServer(data) {
  $.post("/api/customers", data).then(() => {
    // console.log(data);
    location.reload();
  });
}


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

// function validatePassword() {
//   $("#formStart").validate({
//     debug: true,
//     rules: {
//       email: {
//         required: true,
//         email: true
//       },
//       password: {
//         required: true
//       }
//     },
//     messages: {
//       email: {
//         required: "Please enter a email adress",
//         email: "Please enter a valid email address"
//       },
//       password: "Please enter password"
//     }
//   });
// }

function clearCustomerField() {
  $('#customerName').val('')
  $('#address').val('')
  $('#payment').val('')
  $('#phoneNumber').val('')
  $('#email').val('')
  $('#password').val('')
}


