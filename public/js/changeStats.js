function changeStats(id, win) {
    if (win) {
        $.ajax({
            url: "/api/characters/" + id,
            method: "PUT"

        }).then(function(res){
            console.log(res)
        })
    }
}

function levelUP(){
    //do some api call here to level up
}