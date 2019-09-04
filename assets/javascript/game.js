var wins = 0;
var loss = 0;
var e_str = 0;
var p_str = 0;
var ninja = 0;
var paladin = 0;
var summoner = 0;
var scholar = 0;



$(document).ready(reset())

function reset() {
    ninja = (Math.floor(Math.random() * 15));
    paladin = (Math.floor(Math.random() * 15));
    summoner = (Math.floor(Math.random() * 15));
    scholar = (Math.floor(Math.random() * 15));
    e_str = ((Math.floor(Math.random() * 50)) + 50);
    p_str = 0;
}



$(document).on('click', '.btn', function () {
    console.log(e_str)
    console.log(p_str)
    var power = $(this).val();
    console.log(power)
    p_str += power
    if (p_str === e_str) {
        wins++
        reset()
    } else if (p_str > e_str) {
        loss++
        reset()
    }
})


