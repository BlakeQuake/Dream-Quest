const choosenCharacterArray = []
const hitpointsArray = []
const strengthArray = []
const characterAttack = [
    {
        type: "Theif",
        attacks: [{ attack: "backstab" }, { attack: "dagger throw" }],

    },
    {
        type: "warrior",
        attacks: [{ attack: "charge" }, { attack: "slash" }],


    },
    {
        type: "bowman",
        attacks: [{ attack: "barrage" }, { attack: "piercing arrow" }],

    },
    {
        type: "magic",
        attacks: [{ attack: "ice storm" }, { attack: "blaze" }],

    }
]

const nextName = $("#next-charName")
const nextAttack = $("#next-charAttack")

const lastType = $("#last-charType")
const lastName = $("#last-charName")

const chooseType = $(".chooseType")
const chooseName = $(".characterName")
const chooseAttack = $(".chooseAttack")

const createBtn = $("#create-btn")

const errorAlert = $(".errorAlert")

$("#magic").on("click", function (event) {
    event.preventDefault();
    $("#attack").empty()
    nextName.attr("style", "display: block;")

    const threeDmagic = $(`<div class="sketchfab-embed-wrapper">
    <iframe title="A 3D model" width="100%" height="480" src="https://sketchfab.com/models/7c70966c90f74102825f7dba4871f4c9/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
        <a href="https://sketchfab.com/3d-models/grumpy-magic-7c70966c90f74102825f7dba4871f4c9?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Grumpy magic</a>
        by <a href="https://sketchfab.com/SomjadeChunthavorn?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">SomjadeChunthavorn</a>
        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
    </p>
</div>`)

    $(".three-d-model").html(threeDmagic)
    choosenCharacterArray.unshift("magic")
    hitpointsArray.unshift(100)
    strengthArray.unshift(25)
    console.log(characterAttack[3].attacks)

    for (let i = 0; i < characterAttack[3].attacks.length; i++) {
        const option = $("<option>")
        option.text(characterAttack[3].attacks[i].attack)
        $("#attack").append(option)
    }

    const p = $("<p>")
    p.html("Dificulty: Medium <hr/> Hitpoints: 100 <hr/> Strength: 25 <hr/>")
    $("#ranking").html(p)



})

$("#stealer").on("click", function (event) {
    event.preventDefault();
    $("#attack").empty()
    nextName.attr("style", "display: block;")


    const threeDstealer = $(`<div class="sketchfab-embed-wrapper">
    <iframe title="A 3D model" width="100%" height="480" src="https://sketchfab.com/models/664f685ef3c742a784a3cafcc1b75d4d/embed?autospin=0.2&amp;autostart=1&amp;preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
        <a href="https://sketchfab.com/3d-models/card-stealer-664f685ef3c742a784a3cafcc1b75d4d?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Card stealer</a>
        by <a href="https://sketchfab.com/Demmy?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Dan</a>
        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
    </p>
</div>`)

    $(".three-d-model").html(threeDstealer)
    choosenCharacterArray.unshift("stealer")
    hitpointsArray.unshift(50)
    strengthArray.unshift(0)
    console.log(choosenCharacterArray)

    for (let i = 0; i < characterAttack[0].attacks.length; i++) {
        const option = $("<option>")
        option.text(characterAttack[0].attacks[i].attack)
        $("#attack").append(option)
    }

    const p = $("<p>")
    p.html("Dificulty: Hard <hr/> Hitpoints: 50 <hr/> Strength: 0 <hr/>")
    $("#ranking").html(p)



})

$("#bowman").on("click", function (event) {
    event.preventDefault();
    $("#attack").empty()
    nextName.attr("style", "display: block;")


    const threeDbowman = $(`<div class="sketchfab-embed-wrapper">
    <iframe title="A 3D model" width="100%" height="480" src="https://sketchfab.com/models/aa116478ab6349848b22fb3d27a72f89/embed?autostart=1&amp;ui_controls=0&amp;ui_infos=0&amp;ui_inspector=0&amp;ui_stop=0&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
        <a href="https://sketchfab.com/3d-models/mini-skeleton-bowman-tail-aa116478ab6349848b22fb3d27a72f89?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Mini Skeleton bowman Tail</a>
        by <a href="https://sketchfab.com/bitgem?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">BitGem</a>
        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
    </p>
</div>`)

    $(".three-d-model").html(threeDbowman)
    choosenCharacterArray.unshift("bowman")
    hitpointsArray.unshift(150)
    strengthArray.unshift(50)
    console.log(choosenCharacterArray)

    for (let i = 0; i < characterAttack[2].attacks.length; i++) {
        const option = $("<option>")
        option.text(characterAttack[2].attacks[i].attack)
        $("#attack").append(option)
    }

    const p = $("<p>")
    p.html("Dificulty: Easy <hr/> Hitpoints: 150 <hr/> Strength: 50 <hr/>")
    $("#ranking").html(p)

})

$("#warrior").on("click", function (event) {
    event.preventDefault();
    $("#attack").empty()

    nextName.attr("style", "display: block;")


    const threeDwarrior = $(`<div class="sketchfab-embed-wrapper">
    <iframe title="A 3D model" width="100%" height="480" style="background: transparent;"
        src="https://sketchfab.com/models/e5ab9d2e39f446639cc76d8467ea666f/embed?autostart=1&amp;ui_controls=0&amp;ui_infos=0&amp;ui_inspector=0&amp;ui_stop=0&amp;ui_watermark=0&amp;ui_watermark_link=0"
        frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true"
        webkitallowfullscreen="true"></iframe>
    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
        <a href="https://sketchfab.com/3d-models/shadow-catcher-demo-the-cartoon-warrior-e5ab9d2e39f446639cc76d8467ea666f?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
            target="_blank" style="font-weight: bold; color: #1CAAD9;">Shadow Catcher Demo: The Cartoon
            warrior</a>
        by <a
            href="https://sketchfab.com/Sketchfab?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
            target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
            target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
    </p>
</div>`)

    $(".three-d-model").html(threeDwarrior)
    choosenCharacterArray.unshift("warrior")
    hitpointsArray.unshift(100)
    strengthArray.unshift(25)
    console.log(choosenCharacterArray)

    for (let i = 0; i < characterAttack[1].attacks.length; i++) {
        const option = $("<option>")
        option.text(characterAttack[1].attacks[i].attack)
        $("#attack").append(option)
    }

    const p = $("<p>")
    p.html("Dificulty: Medium <hr/> Hitpoints: 100 <hr/> Strength: 25 <hr/>")
    $("#ranking").html(p)

})

nextName.on("click", function (event) {
    event.preventDefault()
    nextName.attr("style", "display: none;")
    chooseType.attr("style", "display: none;")
    chooseName.attr("style", "display: block;")
    nextAttack.attr("style", "display: block;")
    lastType.attr("style", "display: block;")
})

nextAttack.on("click", function (event) {
    event.preventDefault()
    if ($("#char-name").val() === "") {
        errorAlert.attr("style", "display: block;")
    }
    else {
        errorAlert.attr("style", "display: none;")
        nextAttack.attr("style", "display: none;")
        chooseName.attr("style", "display: none;")
        chooseAttack.attr("style", "display: block;")
        createBtn.attr("style", "display: block;")
        lastName.attr("style", "display: block;")
    }

})

lastType.on("click", function (event) {
    event.preventDefault()
    nextAttack.attr("style", "display: none;")
    chooseName.attr("style", "display: none;")
    chooseType.attr("style", "display: block;")
    nextName.attr("style", "display: block;")
})

lastName.on("click", function (event) {
    event.preventDefault()
    nextName.attr("style", "display: none;")
    chooseAttack.attr("style", "display: none;")
    createBtn.attr("style", "display: none;")
    chooseName.attr("style", "display: block;")
    nextAttack.attr("style", "display: block;")
    lastType.attr("style", "display: block;")
})

createBtn.on("click", function (event) {
    event.preventDefault();
    window.location.replace("/game");
    

    // Make a newChirp object
    var character = {
        type: choosenCharacterArray[0],
        name: $("#char-name").val().trim(),
        attack: $("#attack").val().trim(),
        hitpoints: hitpointsArray[0],
        strength: strengthArray[0],
    };

    console.log(character);


    $.post("/api/characters", character)
        // On success, run the following code
        .then(function () {
            console.log("you did it")


        });
});
