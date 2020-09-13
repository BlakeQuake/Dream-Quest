$(document).on("click", ".deleteBtn", function(event){
   const id = event.target.getAttribute("data-id")
   $(".myModal").modal('hide');
   console.log(event.target.parentElement.getAttribute("id"))
   const deleteEl = event.target.parentElement.getAttribute("id")
   console.log(deleteEl)
   $(`#${deleteEl}`).attr("style", "display: none;")
   $.ajax({
        url: "/api/characters/" + id,
        method: "DELETE"
    }).then(function(res){
        // location.reload();
        console.log(res)
    })

})



