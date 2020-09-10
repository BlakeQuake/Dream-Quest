function changeStats(id, win) {

    $.ajax({
        url: "/api/characters/" + id,
        method: "PUT"

    }).then(function (res) {
        if (win === true) {
            
        }
        console.log(res)
    })

}

