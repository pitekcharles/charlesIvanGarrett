$(document).ready(function() {
  const productPop = $("#productPop");
  const quantity = $("#quantity");
  const submit = $("#submitOrder");

  submit.on("click", submitClick)
  
  getProducts();
  // $("#submitOrder").on("click", submitClick());
  
  
  function popProducts(name, id) {
    let option = $("<option>").attr({
      id: id,
    });
    option.text(name);
    $("#select").append(option);
  };
  
  function getProducts() {
    console.log("maybe?")
    $.get("/products", function(data){
      console.log(data[0].name)
      for (var i = 0; i < data.length; i++) {
        popProducts(data[i].name, data[i].id);
      };
    });
  };


  function submitClick() {
    console.log("the click event launches first thing still");
    const selectedId = $('option:selected').attr('id');
    $.get(`/product/${selectedId}`, function(data) {
      console.log(selectedId);
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
          $("#productList").empty().append(info)
        })
      }
      })
    }
    
    // $('#submitOrder').delegate('#submitOrder', 'click', submitClick());
})
