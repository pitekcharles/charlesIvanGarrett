$(document).ready(function() {
<<<<<<< HEAD
  const productPop = $("#productPop");
  const quantity = $("#quantity");
   
  function getProducts() {
    $.get("/api/products", function(data){
      for (var i = 0; i < data.length; i++) {
        popProducts(data[i].name, data[i].id);
      };
=======
  const orderContainer = $("#orderContainer");
  const orderCategorySelected = $("#category");

  // click events

  let orders;

  function getOrders(customer) {
    customerId = customer || "";
    if (customerId) {
      customerId = `/?customer_id=${customerId}`;
    }
    $.get(`/api/posts${customerId}`, function(data) {
      console.log("Orders ", data);
      orders = data;
      if (!orders || !orders.length) {
        displayEmpty(customer);
      } else {
        initializeRows();
      }
>>>>>>> 1ce8b0a59863ddb360e301b9a514b34bb34ffa8a
    });
  };

  function popProducts(name, id) {
    let option = $("<option>").attr({
      id: id,
      text: name,
    });
    $("#productPop").append(option);
  };

  function submitClick() {
    const selectedId = $('option:selected').attr('id');
    $.get(`/api/products/id/${selectedId}`, function(data) {
      const currentQuantity = data.quantity;
      const inventoryChange = $("#quantity").val();
      let newQuantity = currentQuantity - inventoryChange;
      if (newQuantity < 0) {
        let info = $("<li>").text("There is not enough inventory for an order of that size.");
        $("#productList").append(info);
      } else {
        $.ajax({
          method:"PUT",
          url: `/api/products/update/${selectedId}/${newQuantity}`
        }).then(function(){
          let info = $("<li>").text("The inventory has been updated!");
          $("#productList").empty.append
        })
      })
      }
    })
  };

  getProducts();

  $("#submitOrder").on("click", submitClick());
};
