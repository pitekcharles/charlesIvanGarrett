/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-plugin-disable angular */

$(document).ready(function() {
  const orderContainer = $("#orderContainer");
  const orderCategorySelected = $("#category");

  // click events
  $(document).on("click", "button.delete", handleOrderDelete); //!
  $(document).on("click", "button.edit", handleOrderEdit); //!
  // Variable to hold our posts
  let orders;

  function deleteOrder(params) {}

  function handleOrderDelete() {
    const currentOrder = $(this)
      .parent()
      .data("order");
    deleteOrder(currentOrder.id); //!
  }

  function handleOrderEdit() {
    const currentOrder = $(this)
      .parent()
      .data("post");
    window.location.href = `/cms?order_id=${currentOrder.id}`;
  }
});
