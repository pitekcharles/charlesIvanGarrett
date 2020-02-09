$(document).ready(function() {
  const submit = $("#submitOrder");

  submit.on("click", submitClick)
  
  getProducts();
  
  
  function popProducts(name, id) {
    let option = $("<option>").attr({
      id: id,
    });
    option.text(name);
    $("#select").append(option);
  };
  
  function getProducts() {
    $.get("/products", function(data){
      for (var i = 0; i < data.length; i++) {
        popProducts(data[i].name, data[i].id);
      };
    });
  };


  function submitClick() {
    const selectedId = $('option:selected').attr('id');
    $.get(`/product/${selectedId}`, function(data) {
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
})
