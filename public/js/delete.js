$(document).on("click", ".deleteBtn", function(event){
   const id = event.target.getAttribute("data-id")
    $.ajax({
        url: "/api/characters/" + id,
        method: "DELETE"
    }).then(function(res){
        location.reload();
        console.log(res)
    })

})


