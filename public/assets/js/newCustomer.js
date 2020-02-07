$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  // const formContent = $('#formContent');
  const customerName = $("#customerName");
  const address = $("#address");
  const payment = $("#payment");
  const phone = $("#phoneNumber");
  const email = $("#email");
  const password = $("#password");

  $(document).on("click", "#addCustomerBtn", (event) => {
    event.preventDefault();
    if (!customerName.val().trim()){
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
    sendtoServer(newCustomer);
    // clearCustomerField();
  });

  $('#customerList').change(GetCustomer)

});

function sendtoServer(data) {
  $.post("/api/customers", data).then( () => {
    // console.log(data);
    location.reload();
  });
}


function GetCustomer() {
  const id = $(this)
  .children(':selected')
  .attr('id');
  if (id){
    $.get(`/customers/${id}`, function(customer){
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



function getServer(){
  $.get('/api/customers', data => {
      console.log('this is the frontend get')
      // for (const { name, address, payment, phone, email, password } of data) {
      //   console.log(name,address,payment,phone,email,password)
    

      //     $('#customerInfoList').append(`<div class="tile is-parent">
      //     <article class="tile is-child notification is-danger">
      //       <p class="title">${name}</p>
      //       <p class="subtitle">${address}</p>
      //       <p class="subtitle">${payment}</p>
      //       <p class="subtitle">${phone}</p>
      //       <p class="subtitle">${email}</p>
      //       <p class="subtitle">${password}</p>

      //     </article>
      //   </div>`)
      // }
  })
}

function clearCustomerField(){
  $('#customerName').val('')
  $('#address').val('')
  $('#payment').val('')
  $('#phoneNumber').val('')
  $('#email').val('')
  $('#password').val('')
}
