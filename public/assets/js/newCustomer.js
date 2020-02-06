$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  // const formContent = $('#formContent');
  const customerName = $("#customerName");
  const address = $("#address");
  const payment = $("#payment");
  const phone = $("#phoneNumber");
  const email = $("#email");
  const password = $("#password");

  $(document).on("click", "#addCustomerBtn", () => {
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
  });
});

function sendtoServer(data) {
  $.post("/api/customers", data).then(data => {
    console.log(data);
  });
}
