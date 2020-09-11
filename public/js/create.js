const choosenCharacterArray = []
const hitpointsArray = []
const strengthArray = []
const characterAttack = [
    {
        type: "Theif",
        attacks: [{attack: "backstab"}, {attack: "dagger throw"}],

    },
    {
        type: "knight",
        attacks: [{attack: "charge"}, {attack: "slash"}],


    },
    {
        type: "archer",
        attacks: [{attack: "barrage"}, {attack: "piercing arrow"}],

    },
    {
        type: "wizard",
        attacks: [{attack: "ice storm"}, {attack: "blaze"}],

    }
]
$("#wizard").on("click", function(event) {
    event.preventDefault();
    $("#attack").empty()

    const threeDwizard = $(`<div class="sketchfab-embed-wrapper">
    <iframe title="A 3D model" width="100%" height="480" src="https://sketchfab.com/models/7c70966c90f74102825f7dba4871f4c9/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
        <a href="https://sketchfab.com/3d-models/grumpy-wizard-7c70966c90f74102825f7dba4871f4c9?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Grumpy wizard</a>
        by <a href="https://sketchfab.com/SomjadeChunthavorn?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">SomjadeChunthavorn</a>
        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
    </p>
</div>`)

$(".three-d-model").html(threeDwizard)
choosenCharacterArray.unshift("wizard")
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

$("#thief").on("click", function(event) {
    event.preventDefault();
    $("#attack").empty()

    const threeDthief = $(`<div class="sketchfab-embed-wrapper">
    <iframe title="A 3D model" width="100%" height="480" src="https://sketchfab.com/models/664f685ef3c742a784a3cafcc1b75d4d/embed?autospin=0.2&amp;autostart=1&amp;preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
        <a href="https://sketchfab.com/3d-models/card-thief-664f685ef3c742a784a3cafcc1b75d4d?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Card thief</a>
        by <a href="https://sketchfab.com/Demmy?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Dan</a>
        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
    </p>
</div>`)

$(".three-d-model").html(threeDthief)
choosenCharacterArray.unshift("thief")
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

$("#archer").on("click", function(event) {
    event.preventDefault();
    $("#attack").empty()

    const threeDarcher = $(`<div class="sketchfab-embed-wrapper">
    <iframe title="A 3D model" width="100%" height="480" src="https://sketchfab.com/models/aa116478ab6349848b22fb3d27a72f89/embed?autostart=1&amp;ui_controls=0&amp;ui_infos=0&amp;ui_inspector=0&amp;ui_stop=0&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
        <a href="https://sketchfab.com/3d-models/mini-skeleton-archer-tail-aa116478ab6349848b22fb3d27a72f89?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Mini Skeleton archer Tail</a>
        by <a href="https://sketchfab.com/bitgem?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">BitGem</a>
        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
    </p>
</div>`)

$(".three-d-model").html(threeDarcher)
choosenCharacterArray.unshift("archer")
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

$("#knight").on("click", function(event) {
    event.preventDefault();
    $("#attack").empty()
    const threeDknight = $(`<div class="sketchfab-embed-wrapper">
    <iframe title="A 3D model" width="100%" height="480" style="background: transparent;"
        src="https://sketchfab.com/models/e5ab9d2e39f446639cc76d8467ea666f/embed?autostart=1&amp;ui_controls=0&amp;ui_infos=0&amp;ui_inspector=0&amp;ui_stop=0&amp;ui_watermark=0&amp;ui_watermark_link=0"
        frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true"
        webkitallowfullscreen="true"></iframe>
    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
        <a href="https://sketchfab.com/3d-models/shadow-catcher-demo-the-cartoon-knight-e5ab9d2e39f446639cc76d8467ea666f?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
            target="_blank" style="font-weight: bold; color: #1CAAD9;">Shadow Catcher Demo: The Cartoon
            knight</a>
        by <a
            href="https://sketchfab.com/Sketchfab?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
            target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
            target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
    </p>
</div>`)

$(".three-d-model").html(threeDknight)
choosenCharacterArray.unshift("knight")
hitpointsArray.unshift(100)
strengthArray.unshift(25)
console.log(choosenCharacterArray)

for (let i = 0; i < characterAttack[1].attacks.length; i++) {
    const select = $("<select>")
    const option = $("<option>")
    option.text(characterAttack[1].attacks[i].attack)
    $("#attack").append(option)
}

const p = $("<p>")
p.html("Dificulty: Medium <hr/> Hitpoints: 100 <hr/> Strength: 25 <hr/>")
$("#ranking").html(p)

})

$("#create-btn").on("click", function(event) {
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
      .then(function() {
          console.log("you did it")

  
      });
  });
  