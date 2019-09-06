var wins = 0;


var loss = 0;
var e_str = 0;
var p_str = 0;
var nnj = 0;
var pldn = 0;
var smmnr = 0;
var schlr = 0;
$("#wins").text(wins);
$("#loss").text(loss);

$(document).ready(function () {
    function reset() {
        $('#ninja').val(Math.floor(Math.random() * 15))//.val is a function, and needs ()
        $('#paladin').val(Math.floor(Math.random() * 15));
        $('#summoner').val(Math.floor(Math.random() * 15));
        $('#scholar').val(Math.floor(Math.random() * 15));
        e_str = ((Math.floor(Math.random() * 50)) + 50);
        $("#e_str").text(e_str);
        p_str = 0;
        $("#p_str").text(p_str);
        
    }
    
    $(document).on('click', '.btn', function (event) {
        var power = parseInt($(this).val());
        p_str += power
        if (p_str === e_str) {
            wins++
            $("#wins").text(wins);
            reset()
        } else if (p_str > e_str) {
            loss++
            $("#loss").text(loss);
            reset()
        }
        $("#p_str").text(p_str);
        // console.log(e_str)
        // console.log(p_str)
        // console.log(power)
    })

    reset(); 

})



