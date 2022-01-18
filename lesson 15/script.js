// $("#button").click( () => {
//     let daycust = $("#input1").val();
//     console.log(daycust == 5, daycust);
//     if (daycust <= 5 && daycust >= 1) {
//         console.log(2)
//         $("#output").css("color", "blue")
//     }else if (daycust <= 7 && daycust >= 6) {
//         console.log(3)
//         $("#output").css("color", "orange")
//     };
//     if(daycust == 1) {
//         console.log(4)
//         $("#output").text("Понедельник")
//     }else if(daycust == 2) {
//         console.log(5)
//         $("#output").text("Вторник")
//     }else if(daycust == 3) {
//         console.log(6)
//         $("#output").text("Среда")
//     }else if(daycust == 4) {
//         console.log(7)
//         $("#output").text("Четверг")
//     }else if(daycust == 5) {
//         console.log(8)
//         $("#output").text("Пятница")
//     }else if(daycust == 6) {
//         console.log(9)
//         $("#output").text("Суббота")
//     } else if(daycust == 7) {
//         console.log(10)
//         $("#output").text("Воскресенье")
//     }else {
//         console.log(1)
//         $("#output").text("НЕПРАВИЛЬНЫЙ ДЕНЬ")
//         $("#output").css("color", "red")
//     };
// });


//------------------------------------------------------------------------------


$("#button").click( () =>{
    let maxint1 = Number($("#input1").val());
    let maxint2 = Number($("#input2").val());
    if(maxint1 == maxint2){
        $("#output1").text("Числа равны")
    }else {
        $("#output1").text("Число " + Math.max(maxint1, maxint2) + " больше")
    }
});


//------------------------------------------------------------------------------


$("#button").click( () => {
    let simnums1 = $("#input1").val();
    let simnums2 = $("#input2").val();
    let simnums3 = $("#input3").val();
    if (simnums1 == simnums2 && simnums2 == simnums3) {
        $("#output2").text("3 одинаковых числа")
        $("#output2").css("color", "black")
    }else if (simnums1 == simnums2 || simnums2 == simnums3 || simnums1 == simnums3) {
        $("#output2").text("2 одинаковых числа")
        $("#output2").css("color", "black")
    }else {
        $("#output2").text(0)
        $("#output2").css("color", "red")
    }
})