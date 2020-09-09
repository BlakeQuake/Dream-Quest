$('.dropdown').on("click", function(){
    console.log("hello")
    $.ajax({
        url: "api/characters",
        method: "GET"
    }).then(function(res){
        console.log(res)
    })
})