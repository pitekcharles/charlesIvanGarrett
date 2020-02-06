$(document).ready(function() {
    let customerList;
    
    function customerRend(){
        $.get("/api/customers", function(data){
            customerList = data;
            for (var i = 0; i < customerList.length; i++) {
                
            }
        })
    }




})