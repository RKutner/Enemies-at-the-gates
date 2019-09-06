var wins = 0;
var loss = 0;
var e_str = 0;
var p_str = 0;
var nnj = 0;
var pldn = 0;
var smmnr = 0;
var schlr = 0;



$(document).ready(function () {
    function reset() {
        $('#ninja').val(Math.floor(Math.random() * 15))//.val is a function, and needs ()
        $('#paladin').val((Math.floor(Math.random() * 15)));
        $('#summoner').val((Math.floor(Math.random() * 15)));
        $('#scholar').val(Math.floor(Math.random() * 15));
        e_str = ((Math.floor(Math.random() * 50)) + 50);
        p_str = 0;
    }

    $(document).on('click', '.btn', function (event) {
        console.log(e_str)
        console.log(p_str)
        var power = parseInt($(this).val());
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

    reset(); 

})



