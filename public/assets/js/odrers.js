/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable func-names */

$(document).ready(function() {
  const orderContainer = $("#orderContainer");
  const orderCategorySelected = $("#category");

  // click events
  $(document).on("click", "button.delete", handleOrderDelete);
  $(document).on("click", "button.edit", handleOrderEdit);
  // Variable to hold our posts
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
    });
  }

  function initializeRows() {
    blogContainer.empty();
    const ordersToAdd = [];
    for (const i = 0; i < orders.length; i++) {
      ordersToAdd.push(createNewRow(posts[i]));
    }
    blogContainer.append(ordersToAdd);
  }

  function deleteOrder(id) {
    $.ajax({
      method: "DELETE",
      url: `/api/posts/${id}`,
    }).then(function() {
      getOrders(orderCategorySelected.val());
    });
  }

  function handleOrderDelete() {
    const currentOrder = $(this)
      .parent()
      .data("order");
    deleteOrder(currentOrder.id);
  }

  function handleOrderEdit() {
    const currentOrder = $(this)
      .parent()
      .data("post");
    window.location.href = `/cms?order_id=${currentOrder.id}`;
  }

  function displayEmpty(id) {
    const query = window.location.search;
    let partial = "";
    if (id) {
      partial = ` for Customer #${id}`;
    }
    blogContainer.empty();
    const messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html(
      `No posts yet${partial}, navigate <a href='/cms${query}'>here</a> in order to get started.`
    );
    blogContainer.append(messageH2);
  }
});
