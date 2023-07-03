var tryb = 0;

function start(t){
    if(t==1){
        tryb = 1;

    }else if(t==2){
        tryb = 2;
    }else{
        //cos poszlo nie tak i to dosc mocno
    }
}

function logo(q){
    if(tryb==2){
    if(q==1){
        document.getElementById("Player1").innerHTML = document.getElementById("player1_nick").value;
        document.getElementById("gracz1img").setAttribute('src', document.getElementById("player1_logo").value);
        document.getElementById("gracz1img").style.display = "inline";
        document.getElementById("gracz_1_guzik").disabled = true;
    }else if(q==2){
        document.getElementById("Player2").innerHTML = document.getElementById("player2_nick").value;
        document.getElementById("gracz2img").setAttribute('src',  document.getElementById("player2_logo").value);
        document.getElementById("gracz2img").style.display = "inline";
        document.getElementById("gracz_2_guzik").disabled = true;
    }
}else if(tryb==1){
    var robot = ["Connor", "Markus", "Kara", "North", "Luther", "Alice", "Simeon", "Josh"]
    var i = Math.floor(Math.random() * 8);
    var robot_logo = "";
    document.getElementById("Player1").innerHTML = document.getElementById("player1_nick").value;
    document.getElementById("gracz1img").setAttribute('src', document.getElementById("player1_logo").value);
    document.getElementById("gracz1img").style.display = "inline";

    if(i==0){
        robot_logo = "IMG/0.png";
    }else if(i==1){
        robot_logo = "IMG/1.png";
    }else if(i==2){
        robot_logo = "IMG/2.png";
    }else if(i==3){
        robot_logo = "IMG/3.png";
    }else if(i==4){
        robot_logo = "IMG/4.png";
    }else if(i==5){
        robot_logo = "IMG/5.png";
    }else if(i==6){
        robot_logo = "IMG/6.png";
    }else if(i==7){
        robot_logo = "IMG/7.png";
    }
    document.getElementById("Player2").innerHTML = robot[i];
    document.getElementById("gracz2img").setAttribute('src',  robot_logo);
    document.getElementById("gracz2img").style.display = "inline";
    document.getElementById("gracz_1_guzik").disabled = true;
    document.getElementById("gracz_2_guzik").disabled = true;
}
}

var o = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Blue_circle_for_diabetes.svg/240px-Blue_circle_for_diabetes.svg.png";
var x = "x.png";
var czyMoznaGrac = true;
var timeoutId = null;
var tura = 1;
var ruch_czerwonych = "";
var ruchy = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var k_ruch = 0;
var poprzedni_ruch_dla_co_dalej_5 = "";
let plansza = [];
let plansza_stala = [];


function gra(pole){
    if(tryb==0){
        alert("Wybierz tryb gry!");
    }else if(tryb==1){
        if(czyMoznaGrac){
            if(document.getElementById("td_" + pole).getAttribute('src') === "") {
                document.getElementById("td_" + pole).setAttribute('src', x);
                document.getElementById("td_" + pole).style.display = "inline";
                ruch_czerwonych = pole;
                k_ruch += 1;
        var slowka = document.getElementById("slowka");
        var slowa = ["Nieźle!", "Ciekawie!", "Mocno!", "WOW!", "Tak trzymaj!", "Super!", "Niesamowicie!", "Brawo!"];
        var slowo_liczba = Math.floor(Math.random() * 8);
        slowka.style.color = "white";
        slowka.innerHTML = slowa[slowo_liczba];
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
          }
          timeoutId = setTimeout(kasuj, 2000);
          czyMoznaGrac = false;
        
            }else{
                //nic
            }
        //komputer
        //https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Blue_circle_for_diabetes.svg/240px-Blue_circle_for_diabetes.svg.png
    }
    }else if(tryb==2){
        var z = "";
        if(tura%2 != 0){
            z = x;
        }else if(tura%2 == 0){
            z = o;
        }
        if(czyMoznaGrac){
            if(document.getElementById("td_" + pole).getAttribute('src') === "") {
                document.getElementById("td_" + pole).setAttribute('src', z);
                document.getElementById("td_" + pole).style.display = "inline";
            
        var slowka = document.getElementById("slowka");
        var slowa = ["Nieźle!", "Ciekawie!", "Mocno!", "WOW!", "Tak trzymaj!", "Super!", "Niesamowicie!", "Brawo!"];
        var slowo_liczba = Math.floor(Math.random() * 8);
        slowka.style.color = "white";
        slowka.innerHTML = slowa[slowo_liczba];
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
          }
    
          timeoutId = setTimeout(kasuj_duo, 2000);
          czyMoznaGrac = false;
          tura+=1;
            }else{
                tura += 0;
            }
    }  
    
    setTimeout(test, 10);
}
}
function kasuj_duo(){
    document.getElementById("slowka").innerHTML = "Easter egg";
    document.getElementById("slowka").style.color = "transparent";
    czyMoznaGrac = true;
    timeoutId = null;
}

var co_dalej;
var co_dalej_2;
var co_dalej_3;
var ruch_1_dla_5;
var ruch_2_dla_5;
var ruch_3_dla_5;
var ruch_4_dla_5;
var ruch_1_dla_x;
var ruch_2_dla_x;
var ruch_3_dla_x;
var ruch_4_dla_x;
var ruch_5_dla_x;

var ruch_4_puste_1;
var ruch_4_puste_2;

var ile_x = 0;
var ile_o = 0;
var ile_puste = 0;

function kasuj(){

    








    document.getElementById("slowka").innerHTML = "Easter egg";
    document.getElementById("slowka").style.color = "transparent";
    czyMoznaGrac = true;
    timeoutId = null;
    var zagrane = 0;
    
            
            if(k_ruch == 1){
                //ruch 1

                ruch_1_dla_x = ruch_czerwonych;
            
                if(ruch_czerwonych == 5){
                    var rand_1_4 = Math.floor(Math.random()*4);
                    if(rand_1_4==0){
                        document.getElementById("td_1").setAttribute('src', o);
                        document.getElementById("td_1").style.display = "inline";
                        co_dalej = 1;
                        ruch_1_dla_5 = 1;
                    }else if(rand_1_4==1){
                        document.getElementById("td_3").setAttribute('src', o);
                        document.getElementById("td_3").style.display = "inline";
                        co_dalej = 3;
                        ruch_1_dla_5 = 3;
                    }else if(rand_1_4==2){
                        document.getElementById("td_7").setAttribute('src', o);
                        document.getElementById("td_7").style.display = "inline";
                        co_dalej = 7;
                        ruch_1_dla_5 = 7;
                    }else if(rand_1_4==3){
                        document.getElementById("td_9").setAttribute('src', o);
                        document.getElementById("td_9").style.display = "inline";
                        co_dalej = 9;
                        ruch_1_dla_5 = 9;
                    }
                }else if(ruch_czerwonych != 5 && document.getElementById("td_5").getAttribute('src') === ""){
                    document.getElementById("td_5").setAttribute('src', o);
                    document.getElementById("td_5").style.display = "inline";
                    co_dalej = 5;
                    poprzedni_ruch_dla_co_dalej_5 = ruch_czerwonych;
                }
            }else if(k_ruch == 2){
                //ruch 2
                ruch_2_dla_x = ruch_czerwonych;
                if(document.getElementById("td_5").getAttribute('src') === x){
                    //x na srodku
                    var ruch_dwa_o = 10-ruch_czerwonych;
                    ruch_2_dla_5 = 10-ruch_czerwonych;
                    if(co_dalej==1){
                        if(ruch_dwa_o == 1){
                            //9 zajete;
                            var random_dla_2_1 = Math.floor(Math.random()*2)+1;
                            switch(random_dla_2_1){
                                case 1:
                                    document.getElementById("td_3").setAttribute('src', o);
                                    document.getElementById("td_3").style.display = "inline";
                                break;

                                case 2:
                                    document.getElementById("td_7").setAttribute('src', o);
                                    document.getElementById("td_7").style.display = "inline";
                                break;
                            }
                        }else{
                        document.getElementById("td_"+ruch_dwa_o).setAttribute('src', o);
                        document.getElementById("td_"+ruch_dwa_o).style.display = "inline";
                        }
                    }else if(co_dalej==3){
                        if(ruch_dwa_o == 3){
                            //9 zajete;
                            var random_dla_2_1 = Math.floor(Math.random()*2)+1;
                            switch(random_dla_2_1){
                                case 1:
                                    document.getElementById("td_1").setAttribute('src', o);
                                    document.getElementById("td_1").style.display = "inline";
                                break;

                                case 2:
                                    document.getElementById("td_9").setAttribute('src', o);
                                    document.getElementById("td_9").style.display = "inline";
                                break;
                            }
                        }else{
                        document.getElementById("td_"+ruch_dwa_o).setAttribute('src', o);
                        document.getElementById("td_"+ruch_dwa_o).style.display = "inline";
                        }
                    }else if(co_dalej==7){
                        if(ruch_dwa_o == 7){
                            //9 zajete;
                            var random_dla_2_1 = Math.floor(Math.random()*2)+1;
                            switch(random_dla_2_1){
                                case 1:
                                    document.getElementById("td_1").setAttribute('src', o);
                                    document.getElementById("td_1").style.display = "inline";
                                break;

                                case 2:
                                    document.getElementById("td_9").setAttribute('src', o);
                                    document.getElementById("td_9").style.display = "inline";
                                break;
                            }
                        }else{
                        document.getElementById("td_"+ruch_dwa_o).setAttribute('src', o);
                        document.getElementById("td_"+ruch_dwa_o).style.display = "inline";
                        }
                    }else if(co_dalej==9){
                        if(ruch_dwa_o == 9){
                            //9 zajete;
                            var random_dla_2_1 = Math.floor(Math.random()*2)+1;
                            switch(random_dla_2_1){
                                case 1:
                                    document.getElementById("td_3").setAttribute('src', o);
                                    document.getElementById("td_3").style.display = "inline";
                                break;

                                case 2:
                                    document.getElementById("td_7").setAttribute('src', o);
                                    document.getElementById("td_7").style.display = "inline";
                                break;
                            }
                        }else{
                        document.getElementById("td_"+ruch_dwa_o).setAttribute('src', o);
                        document.getElementById("td_"+ruch_dwa_o).style.display = "inline";
                        }
                    }
                }else{
                    //srodek = O
                    if(document.getElementById("td_2").getAttribute("src") === x){

                            if(document.getElementById("td_1").getAttribute("src") === ""){
                                document.getElementById("td_1").setAttribute("src", o);
                                ruch_2_dla_5 = 1;
                                return;
                            }
                        }else if(document.getElementById("td_4").getAttribute("src") === x){
                            if(document.getElementById("td_7").getAttribute("src") === ""){
                                document.getElementById("td_7").setAttribute("src", o);
                                ruch_2_dla_5 = 7;
                                return;
                            }
                        }else if(document.getElementById("td_6").getAttribute("src") === x){
                            if(document.getElementById("td_3").getAttribute("src") === ""){
                                document.getElementById("td_3").setAttribute("src", o);
                                ruch_2_dla_5 = 3;
                                return;
                            }
                        }else if(document.getElementById("td_8").getAttribute("src") === x){
                            if(document.getElementById("td_9").getAttribute("src") === ""){
                                document.getElementById("td_9").setAttribute("src", o);
                                ruch_2_dla_5 = 9;
                                return;
                            }
                        }else{
                    
                    switch(ruch_czerwonych){
                            case 1:
                                if(poprzedni_ruch_dla_co_dalej_5 == 2){
                                    document.getElementById("td_3").setAttribute('src', o);
                                    document.getElementById("td_3").style.display = "inline";
                                    ruch_2_dla_5 = 3;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 3){
                                    document.getElementById("td_2").setAttribute('src', o);
                                    document.getElementById("td_2").style.display = "inline";
                                    ruch_2_dla_5 = 2;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 4){
                                    document.getElementById("td_7").setAttribute('src', o);
                                    document.getElementById("td_7").style.display = "inline";
                                    ruch_2_dla_5 = 7;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 7){
                                    document.getElementById("td_4").setAttribute('src', o);
                                    document.getElementById("td_4").style.display = "inline";
                                    ruch_2_dla_5 = 4;
                                }else{
                                    var nie_5_ruch_2_1 = Math.floor(Math.random()*2)+1;
                                    if(document.getElementById("td_9").getAttribute('src') === x){
                                        var nie_5_ruch_2_1_jest_9 = Math.floor(Math.random()*4)+1;
                                        switch(nie_5_ruch_2_1_jest_9){
                                                case 1:
                                                    document.getElementById("td_2").setAttribute('src', o);
                                                    document.getElementById("td_2").style.display = "inline";
                                                    ruch_2_dla_5 = 2;
                                            break;
                                                case 2:
                                                    document.getElementById("td_4").setAttribute('src', o);
                                                    document.getElementById("td_4").style.display = "inline";
                                                    ruch_2_dla_5 = 4;
                                            break;
                                                case 3:
                                                    document.getElementById("td_6").setAttribute('src', o);
                                                    document.getElementById("td_6").style.display = "inline";
                                                    ruch_2_dla_5 = 6;
                                            break;
                                                case 4:
                                                    document.getElementById("td_8").setAttribute('src', o);
                                                    document.getElementById("td_8").style.display = "inline";
                                                    ruch_2_dla_5 = 8;
                                            break;
                                        }
                                    }else{
                                    switch(nie_5_ruch_2_1){
                                            case 1:
                                                if(document.getElementById("td_7").getAttribute('src') === ""){
                                                    document.getElementById("td_7").setAttribute('src', o);
                                                    document.getElementById("td_7").style.display = "inline";
                                                    ruch_2_dla_5 = 7;
                                                }else{
                                                    document.getElementById("td_3").setAttribute('src', o);
                                                    document.getElementById("td_3").style.display = "inline";
                                                    ruch_2_dla_5 = 3;
                                                }
                                        break;

                                            case 2:
                                                if(document.getElementById("td_3").getAttribute('src') === ""){
                                                    document.getElementById("td_3").setAttribute('src', o);
                                                    document.getElementById("td_3").style.display = "inline";
                                                    ruch_2_dla_5 = 3;
                                                }else{
                                                    document.getElementById("td_7").setAttribute('src', o);
                                                    document.getElementById("td_7").style.display = "inline";
                                                    ruch_2_dla_5 = 7;
                                                }
                                        break;
                                    }
                                }
                                    
                                }
                        break;

                            case 2:
                                if(poprzedni_ruch_dla_co_dalej_5 == 1){
                                    document.getElementById("td_3").setAttribute('src', o);
                                    document.getElementById("td_3").style.display = "inline";
                                    ruch_2_dla_5 = 3;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 3){
                                    document.getElementById("td_1").setAttribute('src', o);
                                    document.getElementById("td_1").style.display = "inline";
                                    ruch_2_dla_5 = 1;
                                }else{
                                    if(poprzedni_ruch_dla_co_dalej_5 !== 1 && poprzedni_ruch_dla_co_dalej_5 !== 3 && poprzedni_ruch_dla_co_dalej_5 !== 7 && poprzedni_ruch_dla_co_dalej_5 !== 9){
                                        var nie_5_ruch_2_2_safe = Math.floor(Math.random()*4)+1;
                                        switch(nie_5_ruch_2_2_safe){
                                                case 1:
                                                    document.getElementById("td_1").setAttribute('src', o);
                                                    document.getElementById("td_1").style.display = "inline";
                                                    ruch_2_dla_5 = 1;
                                            break;
                                                case 2:
                                                    document.getElementById("td_3").setAttribute('src', o);
                                                    document.getElementById("td_3").style.display = "inline";
                                                    ruch_2_dla_5 = 3;
                                            break;
                                                case 3:
                                                    document.getElementById("td_7").setAttribute('src', o);
                                                    document.getElementById("td_7").style.display = "inline";
                                                    ruch_2_dla_5 = 7;
                                            break;
                                                case 4:
                                                    document.getElementById("td_9").setAttribute('src', o);
                                                    document.getElementById("td_9").style.display = "inline";
                                                    ruch_2_dla_5 = 9;
                                            break;
                                        }
                                    }else{
                                        var nie_5_ruch_2_2_safe_rogi = Math.floor(Math.random()*2)+1;
                                            switch(nie_5_ruch_2_2_safe_rogi){
                                                    case 1:
                                                        document.getElementById("td_4").setAttribute('src', o);
                                                        document.getElementById("td_4").style.display = "inline";
                                                        ruch_2_dla_5 = 4;
                                                break;
                                                    case 2:
                                                        document.getElementById("td_6").setAttribute('src', o);
                                                        document.getElementById("td_6").style.display = "inline";
                                                        ruch_2_dla_5 = 6;
                                                break;
                                            }
                                        
                                    }
                                }
                        break;

                            case 3:
                                if(poprzedni_ruch_dla_co_dalej_5 == 2){
                                    document.getElementById("td_1").setAttribute('src', o);
                                    document.getElementById("td_1").style.display = "inline";
                                    ruch_2_dla_5 = 1;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 1){
                                    document.getElementById("td_2").setAttribute('src', o);
                                    document.getElementById("td_2").style.display = "inline";
                                    ruch_2_dla_5 = 2;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 6){
                                    document.getElementById("td_9").setAttribute('src', o);
                                    document.getElementById("td_9").style.display = "inline";
                                    ruch_2_dla_5 = 9;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 9){
                                    document.getElementById("td_6").setAttribute('src', o);
                                    document.getElementById("td_6").style.display = "inline";
                                    ruch_2_dla_5 = 6;
                                }else{
                                    var nie_5_ruch_2_1 = Math.floor(Math.random()*2)+1;
                                    if(document.getElementById("td_7").getAttribute('src') === x){
                                        var nie_5_ruch_2_1_jest_9 = Math.floor(Math.random()*4)+1;
                                        switch(nie_5_ruch_2_1_jest_9){
                                                case 1:
                                                    document.getElementById("td_2").setAttribute('src', o);
                                                    document.getElementById("td_2").style.display = "inline";
                                                    ruch_2_dla_5 = 2;
                                            break;
                                                case 2:
                                                    document.getElementById("td_4").setAttribute('src', o);
                                                    document.getElementById("td_4").style.display = "inline";
                                                    ruch_2_dla_5 = 4;
                                            break;
                                                case 3:
                                                    document.getElementById("td_6").setAttribute('src', o);
                                                    document.getElementById("td_6").style.display = "inline";
                                                    ruch_2_dla_5 = 6;
                                            break;
                                                case 4:
                                                    document.getElementById("td_8").setAttribute('src', o);
                                                    document.getElementById("td_8").style.display = "inline";
                                                    ruch_2_dla_5 = 8;
                                            break;
                                        }
                                    }else{
                                    switch(nie_5_ruch_2_1){
                                            case 1:
                                                if(document.getElementById("td_9").getAttribute('src') === ""){
                                                    document.getElementById("td_9").setAttribute('src', o);
                                                    document.getElementById("td_9").style.display = "inline";
                                                    ruch_2_dla_5 = 9;
                                                }else{
                                                    document.getElementById("td_1").setAttribute('src', o);
                                                    document.getElementById("td_1").style.display = "inline";
                                                    ruch_2_dla_5 = 1;
                                                }
                                        break;

                                            case 2:
                                                if(document.getElementById("td_1").getAttribute('src') === ""){
                                                    document.getElementById("td_1").setAttribute('src', o);
                                                    document.getElementById("td_1").style.display = "inline";
                                                    ruch_2_dla_5 = 1;
                                                }else{
                                                    document.getElementById("td_9").setAttribute('src', o);
                                                    document.getElementById("td_9").style.display = "inline";
                                                    ruch_2_dla_5 = 9;
                                                }
                                        break;
                                    }
                                }
                                    
                                }
                        break;

                            case 4:
                                if(poprzedni_ruch_dla_co_dalej_5 == 1){
                                    document.getElementById("td_7").setAttribute('src', o);
                                    document.getElementById("td_7").style.display = "inline";
                                    ruch_2_dla_5 = 7;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 7){
                                    document.getElementById("td_1").setAttribute('src', o);
                                    document.getElementById("td_1").style.display = "inline";
                                    ruch_2_dla_5 = 1;
                                }else{
                                    if(poprzedni_ruch_dla_co_dalej_5 !== 1 && poprzedni_ruch_dla_co_dalej_5 !== 3 && poprzedni_ruch_dla_co_dalej_5 !== 7 && poprzedni_ruch_dla_co_dalej_5 !== 9){
                                        var nie_5_ruch_2_2_safe = Math.floor(Math.random()*4)+1;
                                        switch(nie_5_ruch_2_2_safe){
                                                case 1:
                                                    document.getElementById("td_1").setAttribute('src', o);
                                                    document.getElementById("td_1").style.display = "inline";
                                                    ruch_2_dla_5 = 1;
                                            break;
                                                case 2:
                                                    document.getElementById("td_3").setAttribute('src', o);
                                                    document.getElementById("td_3").style.display = "inline";
                                                    ruch_2_dla_5 = 3;
                                            break;
                                                case 3:
                                                    document.getElementById("td_7").setAttribute('src', o);
                                                    document.getElementById("td_7").style.display = "inline";
                                                    ruch_2_dla_5 = 7;
                                            break;
                                                case 4:
                                                    document.getElementById("td_9").setAttribute('src', o);
                                                    document.getElementById("td_9").style.display = "inline";
                                                    ruch_2_dla_5 = 9;
                                            break;
                                        }
                                    }else{
                                        var nie_5_ruch_2_2_safe_rogi = Math.floor(Math.random()*2)+1;
                                            switch(nie_5_ruch_2_2_safe_rogi){
                                                    case 1:
                                                        document.getElementById("td_2").setAttribute('src', o);
                                                        document.getElementById("td_2").style.display = "inline";
                                                        ruch_2_dla_5 = 2;
                                                break;
                                                    case 2:
                                                        document.getElementById("td_8").setAttribute('src', o);
                                                        document.getElementById("td_8").style.display = "inline";
                                                        ruch_2_dla_5 = 8;
                                                break;
                                            }
                                        
                                    }
                                }
                        break;

                            case 6:
                                if(poprzedni_ruch_dla_co_dalej_5 == 3){
                                    document.getElementById("td_9").setAttribute('src', o);
                                    document.getElementById("td_9").style.display = "inline";
                                    ruch_2_dla_5 = 9;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 9){
                                    document.getElementById("td_3").setAttribute('src', o);
                                    document.getElementById("td_3").style.display = "inline";
                                    ruch_2_dla_5 = 3;
                                }else{
                                    if(poprzedni_ruch_dla_co_dalej_5 !== 1 && poprzedni_ruch_dla_co_dalej_5 !== 3 && poprzedni_ruch_dla_co_dalej_5 !== 7 && poprzedni_ruch_dla_co_dalej_5 !== 9){
                                        var nie_5_ruch_2_2_safe = Math.floor(Math.random()*4)+1;
                                        switch(nie_5_ruch_2_2_safe){
                                                case 1:
                                                    document.getElementById("td_1").setAttribute('src', o);
                                                    document.getElementById("td_1").style.display = "inline";
                                                    ruch_2_dla_5 = 1;
                                            break;
                                                case 2:
                                                    document.getElementById("td_3").setAttribute('src', o);
                                                    document.getElementById("td_3").style.display = "inline";
                                                    ruch_2_dla_5 = 3;
                                            break;
                                                case 3:
                                                    document.getElementById("td_7").setAttribute('src', o);
                                                    document.getElementById("td_7").style.display = "inline";
                                                    ruch_2_dla_5 = 7;
                                            break;
                                                case 4:
                                                    document.getElementById("td_9").setAttribute('src', o);
                                                    document.getElementById("td_9").style.display = "inline";
                                                    ruch_2_dla_5 = 9;
                                            break;
                                        }
                                    }else{
                                        var nie_5_ruch_2_2_safe_rogi = Math.floor(Math.random()*2)+1;
                                            switch(nie_5_ruch_2_2_safe_rogi){
                                                    case 1:
                                                        document.getElementById("td_2").setAttribute('src', o);
                                                        document.getElementById("td_2").style.display = "inline";
                                                        ruch_2_dla_5 = 2;
                                                break;
                                                    case 2:
                                                        document.getElementById("td_8").setAttribute('src', o);
                                                        document.getElementById("td_8").style.display = "inline";
                                                        ruch_2_dla_5 = 8;
                                                break;
                                            }
                                        
                                    }
                                }
                        break;

                            case 7:
                                if(poprzedni_ruch_dla_co_dalej_5 == 1){
                                    document.getElementById("td_4").setAttribute('src', o);
                                    document.getElementById("td_4").style.display = "inline";
                                    ruch_2_dla_5 = 4;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 4){
                                    document.getElementById("td_1").setAttribute('src', o);
                                    document.getElementById("td_1").style.display = "inline";
                                    ruch_2_dla_5 = 1;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 8){
                                    document.getElementById("td_9").setAttribute('src', o);
                                    document.getElementById("td_9").style.display = "inline";
                                    ruch_2_dla_5 = 9;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 9){
                                    document.getElementById("td_8").setAttribute('src', o);
                                    document.getElementById("td_8").style.display = "inline";
                                    ruch_2_dla_5 = 8;
                                }else{
                                    var nie_5_ruch_2_1 = Math.floor(Math.random()*2)+1;
                                    if(document.getElementById("td_3").getAttribute('src') === x){
                                        var nie_5_ruch_2_1_jest_9 = Math.floor(Math.random()*4)+1;
                                        switch(nie_5_ruch_2_1_jest_9){
                                                case 1:
                                                    document.getElementById("td_2").setAttribute('src', o);
                                                    document.getElementById("td_2").style.display = "inline";
                                                    ruch_2_dla_5 = 2;
                                            break;
                                                case 2:
                                                    document.getElementById("td_4").setAttribute('src', o);
                                                    document.getElementById("td_4").style.display = "inline";
                                                    ruch_2_dla_5 = 4;
                                            break;
                                                case 3:
                                                    document.getElementById("td_6").setAttribute('src', o);
                                                    document.getElementById("td_6").style.display = "inline";
                                                    ruch_2_dla_5 = 6;
                                            break;
                                                case 4:
                                                    document.getElementById("td_8").setAttribute('src', o);
                                                    document.getElementById("td_8").style.display = "inline";
                                                    ruch_2_dla_5 = 8;
                                            break;
                                        }
                                    }else{
                                    switch(nie_5_ruch_2_1){
                                            case 1:
                                                if(document.getElementById("td_1").getAttribute('src') === ""){
                                                    document.getElementById("td_1").setAttribute('src', o);
                                                    document.getElementById("td_1").style.display = "inline";
                                                    ruch_2_dla_5 = 1;
                                                }else{
                                                    document.getElementById("td_9").setAttribute('src', o);
                                                    document.getElementById("td_9").style.display = "inline";
                                                    ruch_2_dla_5 = 9;
                                                }
                                        break;

                                            case 2:
                                                if(document.getElementById("td_9").getAttribute('src') === ""){
                                                    document.getElementById("td_9").setAttribute('src', o);
                                                    document.getElementById("td_9").style.display = "inline";
                                                    ruch_2_dla_5 = 9;
                                                }else{
                                                    document.getElementById("td_1").setAttribute('src', o);
                                                    document.getElementById("td_1").style.display = "inline";
                                                    ruch_2_dla_5 = 1;
                                                }
                                        break;
                                    }
                                }
                                    
                                }
                        break;

                            case 8:
                                if(poprzedni_ruch_dla_co_dalej_5 == 7){
                                    document.getElementById("td_9").setAttribute('src', o);
                                    document.getElementById("td_9").style.display = "inline";
                                    ruch_2_dla_5 = 9;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 9){
                                    document.getElementById("td_7").setAttribute('src', o);
                                    document.getElementById("td_7").style.display = "inline";
                                    ruch_2_dla_5 = 7;
                                }else{
                                    if(poprzedni_ruch_dla_co_dalej_5 !== 1 && poprzedni_ruch_dla_co_dalej_5 !== 3 && poprzedni_ruch_dla_co_dalej_5 !== 7 && poprzedni_ruch_dla_co_dalej_5 !== 9){
                                        var nie_5_ruch_2_2_safe = Math.floor(Math.random()*4)+1;
                                        switch(nie_5_ruch_2_2_safe){
                                                case 1:
                                                    document.getElementById("td_1").setAttribute('src', o);
                                                    document.getElementById("td_1").style.display = "inline";
                                                    ruch_2_dla_5 = 1;
                                            break;
                                                case 2:
                                                    document.getElementById("td_3").setAttribute('src', o);
                                                    document.getElementById("td_3").style.display = "inline";
                                                    ruch_2_dla_5 = 3;
                                            break;
                                                case 3:
                                                    document.getElementById("td_7").setAttribute('src', o);
                                                    document.getElementById("td_7").style.display = "inline";
                                                    ruch_2_dla_5 = 7;
                                            break;
                                                case 4:
                                                    document.getElementById("td_9").setAttribute('src', o);
                                                    document.getElementById("td_9").style.display = "inline";
                                                    ruch_2_dla_5 = 9;
                                            break;
                                        }
                                    }else{
                                        var nie_5_ruch_2_2_safe_rogi = Math.floor(Math.random()*2)+1;
                                            switch(nie_5_ruch_2_2_safe_rogi){
                                                    case 1:
                                                        document.getElementById("td_4").setAttribute('src', o);
                                                        document.getElementById("td_4").style.display = "inline";
                                                        ruch_2_dla_5 = 4;
                                                break;
                                                    case 2:
                                                        document.getElementById("td_6").setAttribute('src', o);
                                                        document.getElementById("td_6").style.display = "inline";
                                                        ruch_2_dla_5 = 6;
                                                break;
                                            }
                                        
                                    }
                                }
                        break;

                            case 9:
                                if(poprzedni_ruch_dla_co_dalej_5 == 3){
                                    document.getElementById("td_6").setAttribute('src', o);
                                    document.getElementById("td_6").style.display = "inline";
                                    ruch_2_dla_5 = 6;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 6){
                                    document.getElementById("td_3").setAttribute('src', o);
                                    document.getElementById("td_3").style.display = "inline";
                                    ruch_2_dla_5 = 3;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 7){
                                    document.getElementById("td_8").setAttribute('src', o);
                                    document.getElementById("td_8").style.display = "inline";
                                    ruch_2_dla_5 = 8;
                                }else if(poprzedni_ruch_dla_co_dalej_5 == 8){
                                    document.getElementById("td_7").setAttribute('src', o);
                                    document.getElementById("td_7").style.display = "inline";
                                    ruch_2_dla_5 = 7;
                                }else{
                                    var nie_5_ruch_2_1 = Math.floor(Math.random()*2)+1;
                                    if(document.getElementById("td_1").getAttribute('src') === x){
                                        var nie_5_ruch_2_1_jest_9 = Math.floor(Math.random()*4)+1;
                                        switch(nie_5_ruch_2_1_jest_9){
                                                case 1:
                                                    document.getElementById("td_2").setAttribute('src', o);
                                                    document.getElementById("td_2").style.display = "inline";
                                                    ruch_2_dla_5 = 2;
                                            break;
                                                case 2:
                                                    document.getElementById("td_4").setAttribute('src', o);
                                                    document.getElementById("td_4").style.display = "inline";
                                                    ruch_2_dla_5 = 4;
                                            break;
                                                case 3:
                                                    document.getElementById("td_6").setAttribute('src', o);
                                                    document.getElementById("td_6").style.display = "inline";
                                                    ruch_2_dla_5 = 6;
                                            break;
                                                case 4:
                                                    document.getElementById("td_8").setAttribute('src', o);
                                                    document.getElementById("td_8").style.display = "inline";
                                                    ruch_2_dla_5 = 8;
                                            break;
                                        }
                                    }else{
                                    switch(nie_5_ruch_2_1){
                                            case 1:
                                                if(document.getElementById("td_3").getAttribute('src') === ""){
                                                    document.getElementById("td_3").setAttribute('src', o);
                                                    document.getElementById("td_3").style.display = "inline";
                                                    ruch_2_dla_5 = 3;
                                                }else{
                                                    document.getElementById("td_7").setAttribute('src', o);
                                                    document.getElementById("td_7").style.display = "inline";
                                                    ruch_2_dla_5 = 7;
                                                }
                                        break;

                                            case 2:
                                                if(document.getElementById("td_7").getAttribute('src') === ""){
                                                    document.getElementById("td_7").setAttribute('src', o);
                                                    document.getElementById("td_7").style.display = "inline";
                                                    ruch_2_dla_5 = 7;
                                                }else{
                                                    document.getElementById("td_3").setAttribute('src', o);
                                                    document.getElementById("td_3").style.display = "inline";
                                                    ruch_2_dla_5 = 3;
                                                }
                                        break;
                                    }
                                }
                                    
                                }
                        break;
                    }
                
            }
            }
            }else if(k_ruch == 3){
                for(let i=0;i<1;i++){

                    if(document.getElementById("td_1").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_2").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
                            document.getElementById("td_3").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_2").getAttribute("src") === ""){
                            document.getElementById("td_2").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_4").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
                            document.getElementById("td_7").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_4").getAttribute("src") === ""){
                            document.getElementById("td_4").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
                            document.getElementById("td_9").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }
                        
                    }
                    
                    if(document.getElementById("td_2").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
                            document.getElementById("td_3").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
                            document.getElementById("td_1").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_8").getAttribute("src") === ""){
                            document.getElementById("td_8").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_8").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    if(document.getElementById("td_3").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_2").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
                            document.getElementById("td_1").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_2").getAttribute("src") === ""){
                            document.getElementById("td_2").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_6").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
                            document.getElementById("td_9").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_6").getAttribute("src") === ""){
                            document.getElementById("td_6").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
                            document.getElementById("td_7").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    if(document.getElementById("td_4").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
                            document.getElementById("td_7").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
                            document.getElementById("td_1").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_6").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_6").getAttribute("src") === ""){
                            document.getElementById("td_6").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    if(document.getElementById("td_5").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
                            document.getElementById("td_9").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_2").getAttribute("src") === o && document.getElementById("td_8").getAttribute("src") === ""){
                            document.getElementById("td_8").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
                            document.getElementById("td_7").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_4").getAttribute("src") === o && document.getElementById("td_6").getAttribute("src") === ""){
                            document.getElementById("td_6").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_6").getAttribute("src") === o && document.getElementById("td_4").getAttribute("src") === ""){
                            document.getElementById("td_4").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
                            document.getElementById("td_3").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_8").getAttribute("src") === o && document.getElementById("td_2").getAttribute("src") === ""){
                            document.getElementById("td_2").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
                            document.getElementById("td_1").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    if(document.getElementById("td_6").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
                            document.getElementById("td_9").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
                            document.getElementById("td_3").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_4").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_4").getAttribute("src") === ""){
                            document.getElementById("td_4").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    if(document.getElementById("td_7").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_4").getAttribute("src") === ""){
                            document.getElementById("td_4").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_4").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
                            document.getElementById("td_1").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_8").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
                            document.getElementById("td_9").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_8").getAttribute("src") === ""){
                            document.getElementById("td_8").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
                            document.getElementById("td_3").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    if(document.getElementById("td_8").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
                            document.getElementById("td_7").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
                            document.getElementById("td_9").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_2").getAttribute("src") === ""){
                            document.getElementById("td_2").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_2").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    if(document.getElementById("td_9").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_6").getAttribute("src") === ""){
                            document.getElementById("td_6").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_6").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
                            document.getElementById("td_3").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_8").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
                            document.getElementById("td_7").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_8").getAttribute("src") === ""){
                            document.getElementById("td_8").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
                            document.getElementById("td_1").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    }
                    if(zagrane==0){
                //ruch 3
                ruch_3_dla_x = ruch_czerwonych;
                if(document.getElementById("td_5").getAttribute("src") === x){
                    if(ruch_1_dla_5 == 1){
                        if(ruch_2_dla_5 == 3){
                            if(document.getElementById("td_2").getAttribute("src") === ""){
                                document.getElementById("td_2").setAttribute('src', o);
                                document.getElementById("td_2").style.display = "inline";
                                ruch_3_dla_5 = 2;
                            }
                        }else if(ruch_2_dla_5 == 7){
                            if(document.getElementById("td_4").getAttribute("src") === ""){
                                document.getElementById("td_4").setAttribute('src', o);
                                document.getElementById("td_4").style.display = "inline";
                                ruch_3_dla_5 = 4;
                            }
                        }
                    }else if(ruch_1_dla_5 == 3){
                        if(ruch_2_dla_5 == 1){
                            if(document.getElementById("td_2").getAttribute("src") === ""){
                                document.getElementById("td_2").setAttribute('src', o);
                                document.getElementById("td_2").style.display = "inline";
                                ruch_3_dla_5 = 2;
                            }
                        }else if(ruch_2_dla_5 == 9){
                            if(document.getElementById("td_6").getAttribute("src") === ""){
                                document.getElementById("td_6").setAttribute('src', o);
                                document.getElementById("td_6").style.display = "inline";
                                ruch_3_dla_5 = 6;
                            }
                        }
                    }else if(ruch_1_dla_5 == 7){
                        if(ruch_2_dla_5 == 1){
                            if(document.getElementById("td_4").getAttribute("src") === ""){
                                document.getElementById("td_4").setAttribute('src', o);
                                document.getElementById("td_4").style.display = "inline";
                                ruch_3_dla_5 = 4;
                            }
                        }else if(ruch_2_dla_5 == 9){
                            if(document.getElementById("td_8").getAttribute("src") === ""){
                                document.getElementById("td_8").setAttribute('src', o);
                                document.getElementById("td_8").style.display = "inline";
                                ruch_3_dla_5 = 8;
                            }
                        }
                    }else if(ruch_1_dla_5 == 9){
                        if(ruch_2_dla_5 == 3){
                            if(document.getElementById("td_6").getAttribute("src") === ""){
                                document.getElementById("td_6").setAttribute('src', o);
                                document.getElementById("td_6").style.display = "inline";
                                ruch_3_dla_5 = 6;
                            }
                        }else if(ruch_2_dla_5 == 7){
                            if(document.getElementById("td_8").getAttribute("src") === ""){
                                document.getElementById("td_8").setAttribute('src', o);
                                document.getElementById("td_8").style.display = "inline";
                                ruch_3_dla_5 = 8;
                            }
                        }
                    }
                    var co_grac_o_ruch_3_gdy_5_x = 10 - ruch_czerwonych;
                    document.getElementById("td_"+co_grac_o_ruch_3_gdy_5_x).setAttribute('src', o);
                    document.getElementById("td_"+co_grac_o_ruch_3_gdy_5_x).style.display = "inline";
                    ruch_3_dla_5 = co_grac_o_ruch_3_gdy_5_x;
                    
                
                }else{
                    //srodek = O
                    var pole_mozliwa_wygrana_ruch_3 = 10 - ruch_2_dla_5;
                    var ile_pol_git = 0;
                    if(document.getElementById("td_"+pole_mozliwa_wygrana_ruch_3).getAttribute("src") === ""){
                        document.getElementById("td_"+pole_mozliwa_wygrana_ruch_3).setAttribute('src', o);
                        document.getElementById("td_"+pole_mozliwa_wygrana_ruch_3).style.display = "inline";
                    }else{
                        if(document.getElementById("td_1").getAttribute("src") === x){
                            setTimeout(test, 10);
                            if(document.getElementById("td_2").getAttribute("src") === x && document.getElementById("td_3").getAttribute("src") === ""){
                                document.getElementById("td_3").setAttribute("src", o); return;
                            }else if(document.getElementById("td_3").getAttribute("src") === x && document.getElementById("td_2").getAttribute("src") === ""){
                                document.getElementById("td_2").setAttribute("src", o); return;
                            }else if(document.getElementById("td_7").getAttribute("src") === x && document.getElementById("td_4").getAttribute("src") === ""){
                                document.getElementById("td_4").setAttribute("src", o); return;
                            }else if(document.getElementById("td_4").getAttribute("src") === x && document.getElementById("td_7").getAttribute("src") === ""){
                                document.getElementById("td_7").setAttribute("src", o); return;
                            }
                        }
                        if(document.getElementById("td_2").getAttribute("src") === x){
                            setTimeout(test, 10);
                            if(document.getElementById("td_1").getAttribute("src") === x && document.getElementById("td_3").getAttribute("src") === ""){
                                document.getElementById("td_3").setAttribute("src", o); return;
                            }else if(document.getElementById("td_3").getAttribute("src") === x && document.getElementById("td_1").getAttribute("src") === ""){
                                document.getElementById("td_1").setAttribute("src", o); return;
                            }
                        } 
                        if(document.getElementById("td_3").getAttribute("src") === x){
                            setTimeout(test, 10);
                            if(document.getElementById("td_2").getAttribute("src") === x && document.getElementById("td_1").getAttribute("src") === ""){
                                document.getElementById("td_1").setAttribute("src", o); return;
                            }else if(document.getElementById("td_1").getAttribute("src") === x && document.getElementById("td_2").getAttribute("src") === ""){
                                document.getElementById("td_2").setAttribute("src", o); return;
                            }else if(document.getElementById("td_9").getAttribute("src") === x && document.getElementById("td_6").getAttribute("src") === ""){
                                document.getElementById("td_6").setAttribute("src", o); return;
                            }else if(document.getElementById("td_6").getAttribute("src") === x && document.getElementById("td_9").getAttribute("src") === ""){
                                document.getElementById("td_9").setAttribute("src", o); return;
                            }
                        }
                        if(document.getElementById("td_4").getAttribute("src") === x){
                            setTimeout(test, 10);
                            if(document.getElementById("td_1").getAttribute("src") === x && document.getElementById("td_7").getAttribute("src") === ""){
                                document.getElementById("td_7").setAttribute("src", o); return;
                            }else if(document.getElementById("td_7").getAttribute("src") === x && document.getElementById("td_1").getAttribute("src") === ""){
                                document.getElementById("td_1").setAttribute("src", o); return;
                            }
                        }
                        if(document.getElementById("td_6").getAttribute("src") === x){
                            setTimeout(test, 10);
                            if(document.getElementById("td_9").getAttribute("src") === x && document.getElementById("td_3").getAttribute("src") === ""){
                                document.getElementById("td_3").setAttribute("src", o); return;
                            }else if(document.getElementById("td_3").getAttribute("src") === x && document.getElementById("td_9").getAttribute("src") === ""){
                                document.getElementById("td_9").setAttribute("src", o); return;
                            }
                        }
                        if(document.getElementById("td_7").getAttribute("src") === x){
                        
                            setTimeout(test, 10);
                            if(document.getElementById("td_8").getAttribute("src") === x && document.getElementById("td_9").getAttribute("src") === ""){
                                document.getElementById("td_9").setAttribute("src", o); return;
                            }else if(document.getElementById("td_9").getAttribute("src") === x && document.getElementById("td_8").getAttribute("src") === ""){
                                document.getElementById("td_8").setAttribute("src", o); return;
                            }else if(document.getElementById("td_1").getAttribute("src") === x && document.getElementById("td_4").getAttribute("src") === ""){
                                document.getElementById("td_4").setAttribute("src", o); return;
                            }else if(document.getElementById("td_4").getAttribute("src") === x && document.getElementById("td_1").getAttribute("src") === ""){
                                document.getElementById("td_1").setAttribute("src", o); return;
                            }
                        }
                        if(document.getElementById("td_8").getAttribute("src") === x){
                            setTimeout(test, 10);
                            if(document.getElementById("td_9").getAttribute("src") === x && document.getElementById("td_7").getAttribute("src") === ""){
                                document.getElementById("td_7").setAttribute("src", o); return;
                            }else if(document.getElementById("td_7").getAttribute("src") === x && document.getElementById("td_9").getAttribute("src") === ""){
                                document.getElementById("td_9").setAttribute("src", o); return;
                            }
                        }
                        if(document.getElementById("td_9").getAttribute("src") === x){
                            setTimeout(test, 10);
                            if(document.getElementById("td_8").getAttribute("src") === x && document.getElementById("td_7").getAttribute("src") === ""){
                                document.getElementById("td_7").setAttribute("src", o); return;
                            }else if(document.getElementById("td_7").getAttribute("src") === x && document.getElementById("td_8").getAttribute("src") === ""){
                                document.getElementById("td_8").setAttribute("src", o); return;
                            }else if(document.getElementById("td_6").getAttribute("src") === x && document.getElementById("td_3").getAttribute("src") === ""){
                                document.getElementById("td_3").setAttribute("src", o); return;
                            }else if(document.getElementById("td_3").getAttribute("src") === x && document.getElementById("td_6").getAttribute("src") === ""){
                                document.getElementById("td_6").setAttribute("src", o); return;
                            }
                        }
                        const pustePola = [];
                        for (let i = 1; i <= 9; i++) {
                            const pole = document.getElementById(`td_${i}`);
                            if (!pole.getAttribute("src")) {
                              pustePola.push(i);
                            }
                          }

                            var random_na_koniec_3 = Math.floor(Math.random() * 4) + 1;
                        if(random_na_koniec_3 == 1){
                            document.getElementById("td_"+pustePola[0]).setAttribute("src", o);
                        }else if(random_na_koniec_3 == 2){
                            document.getElementById("td_"+pustePola[1]).setAttribute("src", o);
                        }else if(random_na_koniec_3 == 3){
                            document.getElementById("td_"+pustePola[2]).setAttribute("src", o);
                        }else if(random_na_koniec_3 == 4){
                            document.getElementById("td_"+pustePola[3]).setAttribute("src", o);
                        }
                            
                        }

                    }
                }
            }else if(k_ruch == 4){

                if(document.getElementById("td_1").getAttribute('src') === document.getElementById("td_2").getAttribute('src') && document.getElementById("td_1").getAttribute('src') === document.getElementById("td_3").getAttribute('src') && document.getElementById("td_1").getAttribute('src') !== "" && document.getElementById("td_2").getAttribute('src') !== "" && document.getElementById("td_3").getAttribute('src') !== ""){
                    if(document.getElementById("td_1").getAttribute('src') === o){
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
                    }else{
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
            }
                }else if(document.getElementById("td_4").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_4").getAttribute('src') === document.getElementById("td_6").getAttribute('src') && document.getElementById("td_4").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_6").getAttribute('src') !== ""){
                    if(document.getElementById("td_4").getAttribute('src') === o){
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
                    }else{
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
            }
                }else if(document.getElementById("td_7").getAttribute('src') === document.getElementById("td_8").getAttribute('src') && document.getElementById("td_7").getAttribute('src') === document.getElementById("td_9").getAttribute('src') && document.getElementById("td_7").getAttribute('src') !== "" && document.getElementById("td_8").getAttribute('src') !== "" && document.getElementById("td_9").getAttribute('src') !== ""){
                    if(document.getElementById("td_7").getAttribute('src') === o){
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
                    }else{
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
            }
                }else if(document.getElementById("td_1").getAttribute('src') === document.getElementById("td_4").getAttribute('src') && document.getElementById("td_1").getAttribute('src') === document.getElementById("td_7").getAttribute('src') && document.getElementById("td_1").getAttribute('src') !== "" && document.getElementById("td_4").getAttribute('src') !== "" && document.getElementById("td_7").getAttribute('src') !== ""){
                    if(document.getElementById("td_1").getAttribute('src') === o){
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
                    }else{
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
            }
                }else if(document.getElementById("td_2").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_2").getAttribute('src') === document.getElementById("td_8").getAttribute('src') && document.getElementById("td_2").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_8").getAttribute('src') !== ""){
                    if(document.getElementById("td_2").getAttribute('src') === o){
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
                    }else{
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
            }
                }else if(document.getElementById("td_3").getAttribute('src') === document.getElementById("td_6").getAttribute('src') && document.getElementById("td_3").getAttribute('src') === document.getElementById("td_9").getAttribute('src') && document.getElementById("td_3").getAttribute('src') !== "" && document.getElementById("td_6").getAttribute('src') !== "" && document.getElementById("td_9").getAttribute('src') !== ""){
                    if(document.getElementById("td_3").getAttribute('src') === o){
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
                    }else{
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
            }
                }else if(document.getElementById("td_1").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_1").getAttribute('src') === document.getElementById("td_9").getAttribute('src') && document.getElementById("td_1").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_9").getAttribute('src') !== ""){
                    if(document.getElementById("td_1").getAttribute('src') === o){
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
                    }else{
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
            }
                }else if(document.getElementById("td_3").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_3").getAttribute('src') === document.getElementById("td_7").getAttribute('src') && document.getElementById("td_3").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_7").getAttribute('src') !== ""){
                    if(document.getElementById("td_3").getAttribute('src') === o){
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
                    }else{
                        document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
                    }
                }else if(document.getElementById("td_2").getAttribute('src') !== "" && document.getElementById("td_3").getAttribute('src') !== "" && document.getElementById("td_4").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_6").getAttribute('src') !== "" && document.getElementById("td_7").getAttribute('src') !== "" && document.getElementById("td_8").getAttribute('src') !== "" && document.getElementById("td_9").getAttribute('src') !== "" && document.getElementById("td_1").getAttribute('src') !== ""){
                        document.getElementById("slowka").innerHTML = "KONIEC! REMIS!";
                        document.getElementById("slowka").style.color = "white";
                        koniec();
                        return;
                }
            

                for(let i=0;i<1;i++){

                    if(document.getElementById("td_1").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_2").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
                            document.getElementById("td_3").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_2").getAttribute("src") === ""){
                            document.getElementById("td_2").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_4").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
                            document.getElementById("td_7").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_4").getAttribute("src") === ""){
                            document.getElementById("td_4").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
                            document.getElementById("td_9").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }
                        
                    }
                    
                    if(document.getElementById("td_2").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
                            document.getElementById("td_3").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
                            document.getElementById("td_1").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_8").getAttribute("src") === ""){
                            document.getElementById("td_8").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_8").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    if(document.getElementById("td_3").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_2").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
                            document.getElementById("td_1").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_2").getAttribute("src") === ""){
                            document.getElementById("td_2").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_6").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
                            document.getElementById("td_9").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_6").getAttribute("src") === ""){
                            document.getElementById("td_6").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
                            document.getElementById("td_7").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    if(document.getElementById("td_4").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
                            document.getElementById("td_7").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
                            document.getElementById("td_1").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_6").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_6").getAttribute("src") === ""){
                            document.getElementById("td_6").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    if(document.getElementById("td_5").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
                            document.getElementById("td_9").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_2").getAttribute("src") === o && document.getElementById("td_8").getAttribute("src") === ""){
                            document.getElementById("td_8").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
                            document.getElementById("td_7").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_4").getAttribute("src") === o && document.getElementById("td_6").getAttribute("src") === ""){
                            document.getElementById("td_6").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_6").getAttribute("src") === o && document.getElementById("td_4").getAttribute("src") === ""){
                            document.getElementById("td_4").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
                            document.getElementById("td_3").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_8").getAttribute("src") === o && document.getElementById("td_2").getAttribute("src") === ""){
                            document.getElementById("td_2").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
                            document.getElementById("td_1").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    if(document.getElementById("td_6").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
                            document.getElementById("td_9").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
                            document.getElementById("td_3").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_4").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_4").getAttribute("src") === ""){
                            document.getElementById("td_4").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    if(document.getElementById("td_7").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_4").getAttribute("src") === ""){
                            document.getElementById("td_4").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_4").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
                            document.getElementById("td_1").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_8").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
                            document.getElementById("td_9").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_8").getAttribute("src") === ""){
                            document.getElementById("td_8").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
                            document.getElementById("td_3").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    if(document.getElementById("td_8").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
                            document.getElementById("td_7").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
                            document.getElementById("td_9").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_2").getAttribute("src") === ""){
                            document.getElementById("td_2").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_2").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    if(document.getElementById("td_9").getAttribute("src") === o){
                        setTimeout(test, 10);
                        if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_6").getAttribute("src") === ""){
                            document.getElementById("td_6").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_6").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
                            document.getElementById("td_3").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_8").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
                            document.getElementById("td_7").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_8").getAttribute("src") === ""){
                            document.getElementById("td_8").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
                            document.getElementById("td_1").setAttribute('src', o);
                            return;
                        }else if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
                            document.getElementById("td_5").setAttribute('src', o);
                            return;
                        }
                        break;
                        zagrane = 1;
                    }
                    
                    }
                //ruch 4
                ruch_4_dla_x = ruch_czerwonych;
                var czy_win_dla_x_in_4 = 10 - ruch_czerwonych;
                if(document.getElementById("td_5").getAttribute("src") === x){
                    //srodek = X
                    for(var i=1;i<=9;i++){
                        if(document.getElementById("td_"+i).getAttribute("src") === ""){
                            ruch_4_puste_1 = i;
                            break;
                        }
                    }
                    for(var i=1;i<=9;i++){
                        if(document.getElementById("td_"+i).getAttribute("src") === ""){
                            if(i!=ruch_4_puste_1){
                                ruch_4_puste_2 = i;
                                break;
                            }else{
                                ruch_4_puste_1 = i;
                            }
                        }
                    }
                   
                    
                        /*
                        switch(graj_co_chcesz){
                                case 1:
                                    document.getElementById("td_"+ruch_4_puste_1).setAttribute('src', o);
                                    document.getElementById("td_"+ruch_4_puste_1).style.display = "inline";
                            break;

                                case 2:
                                    document.getElementById("td_"+ruch_4_puste_2).setAttribute('src', o);
                                    document.getElementById("td_"+ruch_4_puste_2).style.display = "inline";
                            break;
                        }
                        */
                       if(ruch_4_puste_1 %2 != 0){
                        setTimeout(test, 10);
                        var XD = 10-ruch_4_puste_1
                           if(document.getElementById("td_"+XD).getAttribute("src") === x){
                                document.getElementById("td_"+ruch_4_puste_1).setAttribute('src', o);
                                console.log("a");
                                return;
                           }else{
                            if(ruch_4_puste_2 %2 != 0){
                                setTimeout(test, 10);
                                var XD = 10-ruch_4_puste_2
                                if(document.getElementById("td_"+XD).getAttribute("src") === x){
                                     document.getElementById("td_"+ruch_4_puste_2).setAttribute('src', o);
                                     console.log("a");
                                     return;
                                }
                                }else if(ruch_4_puste_2 %2 == 0){
                                    setTimeout(test, 10);
                                    var XD = 10-ruch_4_puste_2
                                    if(document.getElementById("td_"+XD).getAttribute("src") === x){
                                        document.getElementById("td_"+ruch_4_puste_2).setAttribute('src', o);
                                        console.log("b");
                                        return;
                                }else{
                                    var random_na_koniec = Math.floor(Math.random() * 2) + 1;
                        if(random_na_koniec == 1){
                            document.getElementById("td_"+ruch_4_puste_1).setAttribute("src", o);
                        }else{
                            document.getElementById("td_"+ruch_4_puste_2).setAttribute("src", o);
                        }
                                   }
                            }
                           }
                       }else if(ruch_4_puste_1 %2 == 0){
                        setTimeout(test, 10);
                        var XD = 10-ruch_4_puste_1
                            if(document.getElementById("td_"+XD).getAttribute("src") === x){
                                document.getElementById("td_"+ruch_4_puste_1).setAttribute('src', o);
                                console.log("b");
                                return;
                        }else{
                            if(ruch_4_puste_2 %2 != 0){
                                setTimeout(test, 10);
                                var XD = 10-ruch_4_puste_2
                                if(document.getElementById("td_"+XD).getAttribute("src") === x){
                                     document.getElementById("td_"+ruch_4_puste_2).setAttribute('src', o);
                                     console.log("a");
                                     return;
                                }
                                }else if(ruch_4_puste_2 %2 == 0){
                                    setTimeout(test, 10);
                                    var XD = 10-ruch_4_puste_2
                                    if(document.getElementById("td_"+XD).getAttribute("src") === x){
                                        document.getElementById("td_"+ruch_4_puste_2).setAttribute('src', o);
                                        console.log("b");
                                        return;
                                }else{
                                    var random_na_koniec = Math.floor(Math.random() * 2) + 1;
                        if(random_na_koniec == 1){
                            document.getElementById("td_"+ruch_4_puste_1).setAttribute("src", o);
                        }else{
                            document.getElementById("td_"+ruch_4_puste_2).setAttribute("src", o);
                        }
                                   }
                            }
                           }
                       }else if(ruch_4_puste_2 %2 != 0){
                        setTimeout(test, 10);
                        var XD = 10-ruch_4_puste_1
                        if(document.getElementById("td_"+XD).getAttribute("src") === x){
                             document.getElementById("td_"+ruch_4_puste_1).setAttribute('src', o);
                             console.log("a");
                             return;
                        }
                        }else if(ruch_4_puste_2 %2 == 0){
                            setTimeout(test, 10);
                            var XD = 10-ruch_4_puste_1
                            if(document.getElementById("td_"+XD).getAttribute("src") === x){
                                document.getElementById("td_"+ruch_4_puste_1).setAttribute('src', o);
                                console.log("b");
                                return;
                        }
                       }
                    
                    }else{
                    //srodek = O
                        //nie ma mozliwego wina, zagrozen brak, grasz na remis

                        for(var i=1;i<=9;i++){
                            if(document.getElementById("td_"+i).getAttribute("src") === ""){
                                ruch_4_puste_1 = i;
                                break;
                            }
                        }
                        for(var i=1;i<=9;i++){
                            if(document.getElementById("td_"+i).getAttribute("src") === ""){
                                if(i!=ruch_4_puste_1){
                                    ruch_4_puste_2 = i;
                                    break;
                                }else{
                                    ruch_4_puste_1 = i;
                                }
                            }
                        }

                        if(document.getElementById("td_1").getAttribute("src") === x){
                            setTimeout(test, 10);
                            if(document.getElementById("td_2").getAttribute("src") === x && document.getElementById("td_3").getAttribute("src") === ""){
                                document.getElementById("td_3").setAttribute("src", o); return;
                            }else if(document.getElementById("td_3").getAttribute("src") === x && document.getElementById("td_2").getAttribute("src") === ""){
                                document.getElementById("td_2").setAttribute("src", o); return;
                            }else if(document.getElementById("td_7").getAttribute("src") === x && document.getElementById("td_4").getAttribute("src") === ""){
                                document.getElementById("td_4").setAttribute("src", o); return;
                            }else if(document.getElementById("td_4").getAttribute("src") === x && document.getElementById("td_7").getAttribute("src") === ""){
                                document.getElementById("td_7").setAttribute("src", o); return;
                            }
                        }
                        if(document.getElementById("td_2").getAttribute("src") === x){
                            setTimeout(test, 10);
                            if(document.getElementById("td_1").getAttribute("src") === x && document.getElementById("td_3").getAttribute("src") === ""){
                                document.getElementById("td_3").setAttribute("src", o); return;
                            }else if(document.getElementById("td_3").getAttribute("src") === x && document.getElementById("td_1").getAttribute("src") === ""){
                                document.getElementById("td_1").setAttribute("src", o); return;
                            }
                        } 
                        if(document.getElementById("td_3").getAttribute("src") === x){
                            setTimeout(test, 10);
                            if(document.getElementById("td_2").getAttribute("src") === x && document.getElementById("td_1").getAttribute("src") === ""){
                                document.getElementById("td_1").setAttribute("src", o); return;
                            }else if(document.getElementById("td_1").getAttribute("src") === x && document.getElementById("td_2").getAttribute("src") === ""){
                                document.getElementById("td_2").setAttribute("src", o); return;
                            }else if(document.getElementById("td_9").getAttribute("src") === x && document.getElementById("td_6").getAttribute("src") === ""){
                                document.getElementById("td_6").setAttribute("src", o); return;
                            }else if(document.getElementById("td_6").getAttribute("src") === x && document.getElementById("td_9").getAttribute("src") === ""){
                                document.getElementById("td_9").setAttribute("src", o); return;
                            }
                        }
                        if(document.getElementById("td_4").getAttribute("src") === x){
                            setTimeout(test, 10);
                            if(document.getElementById("td_1").getAttribute("src") === x && document.getElementById("td_7").getAttribute("src") === ""){
                                document.getElementById("td_7").setAttribute("src", o); return;
                            }else if(document.getElementById("td_7").getAttribute("src") === x && document.getElementById("td_1").getAttribute("src") === ""){
                                document.getElementById("td_1").setAttribute("src", o); return;
                            }
                        }
                        if(document.getElementById("td_6").getAttribute("src") === x){
                            setTimeout(test, 10);
                            if(document.getElementById("td_9").getAttribute("src") === x && document.getElementById("td_3").getAttribute("src") === ""){
                                document.getElementById("td_3").setAttribute("src", o); return;
                            }else if(document.getElementById("td_3").getAttribute("src") === x && document.getElementById("td_9").getAttribute("src") === ""){
                                document.getElementById("td_9").setAttribute("src", o); return;
                            }
                        }
                        if(document.getElementById("td_7").getAttribute("src") === x){
                            setTimeout(test, 10);
                            if(document.getElementById("td_8").getAttribute("src") === x && document.getElementById("td_9").getAttribute("src") === ""){
                                document.getElementById("td_9").setAttribute("src", o); return;
                            }else if(document.getElementById("td_9").getAttribute("src") === x && document.getElementById("td_8").getAttribute("src") === ""){
                                document.getElementById("td_8").setAttribute("src", o); return;
                            }else if(document.getElementById("td_1").getAttribute("src") === x && document.getElementById("td_4").getAttribute("src") === ""){
                                document.getElementById("td_4").setAttribute("src", o); return;
                            }else if(document.getElementById("td_4").getAttribute("src") === x && document.getElementById("td_1").getAttribute("src") === ""){
                                document.getElementById("td_1").setAttribute("src", o); return;
                            }
                        }
                        if(document.getElementById("td_8").getAttribute("src") === x){
                            setTimeout(test, 10);
                            if(document.getElementById("td_9").getAttribute("src") === x && document.getElementById("td_7").getAttribute("src") === ""){
                                document.getElementById("td_7").setAttribute("src", o); return;
                            }else if(document.getElementById("td_7").getAttribute("src") === x && document.getElementById("td_9").getAttribute("src") === ""){
                                document.getElementById("td_9").setAttribute("src", o); return;
                            }
                        }
                        if(document.getElementById("td_9").getAttribute("src") === x){
                            setTimeout(test, 10);
                            if(document.getElementById("td_8").getAttribute("src") === x && document.getElementById("td_7").getAttribute("src") === ""){
                                document.getElementById("td_7").setAttribute("src", o); return;
                            }else if(document.getElementById("td_7").getAttribute("src") === x && document.getElementById("td_8").getAttribute("src") === ""){
                                document.getElementById("td_8").setAttribute("src", o); return;
                            }else if(document.getElementById("td_6").getAttribute("src") === x && document.getElementById("td_3").getAttribute("src") === ""){
                                document.getElementById("td_3").setAttribute("src", o); return;
                            }else if(document.getElementById("td_3").getAttribute("src") === x && document.getElementById("td_6").getAttribute("src") === ""){
                                document.getElementById("td_6").setAttribute("src", o); return;
                            }
                        }
                        var random_na_koniec = Math.floor(Math.random() * 2) + 1;
                        if(random_na_koniec == 1){
                            document.getElementById("td_"+ruch_4_puste_1).setAttribute("src", o);
                        }else{
                            document.getElementById("td_"+ruch_4_puste_2).setAttribute("src", o);
                        }
                        
                    }

                                
                        
                    
            }else if(k_ruch == 5){
                //To juz koniec
                ruch_5_dla_x = ruch_czerwonych
            }

        /*
    if(document.getElementById("td_5").getAttribute('src') === ""){
        document.getElementById("td_5").setAttribute('src', o);
        document.getElementById("td_5").style.display = "inline";
    }else{
        if(document.getElementById("td_3").getAttribute('src') === ""){
            document.getElementById("td_3").setAttribute('src', o);
            document.getElementById("td_3").style.display = "inline";
        }else if(document.getElementById("td_1").getAttribute('src') === ""){
            document.getElementById("td_1").setAttribute('src', o);
            document.getElementById("td_1").style.display = "inline";
        }else if(document.getElementById("td_7").getAttribute('src') === ""){
            document.getElementById("td_7").setAttribute('src', o);
            document.getElementById("td_7").style.display = "inline";
        }else if(document.getElementById("td_9").getAttribute('src') === ""){
            document.getElementById("td_9").setAttribute('src', o);
            document.getElementById("td_9").style.display = "inline";
        }else{
            if(document.getElementById("td_2").getAttribute('src') === ""){
                document.getElementById("td_2").setAttribute('src', o);
                document.getElementById("td_2").style.display = "inline";
            }else if(document.getElementById("td_4").getAttribute('src') === ""){
                document.getElementById("td_4").setAttribute('src', o);
                document.getElementById("td_4").style.display = "inline";
            }else if(document.getElementById("td_6").getAttribute('src') === ""){
                document.getElementById("td_6").setAttribute('src', o);
                document.getElementById("td_6").style.display = "inline";
            }else if(document.getElementById("td_8").getAttribute('src') === ""){
                document.getElementById("td_8").setAttribute('src', o);
                document.getElementById("td_8").style.display = "inline";
            }else{
                document.getElementById("slowka").innerHTML = "KONIEC! REMIS!";
                document.getElementById("slowka").style.color = "white";
                koniec();
            }
        }*/
    
ile_x = 0;
ile_o = 0;
ile_puste = 0;

    for(var i=1;i<=9;i++){
        if(document.getElementById("td_"+i).getAttribute("src") === x){
            ile_x += 1;
        }else if(document.getElementById("td_"+i).getAttribute("src") === o){
            ile_o += 1;
        }else{
            ile_puste += 1;
        }
        
    }

    console.log(ile_puste+" "+ile_x);

    if(k_ruch == 1){
        if(ile_puste != 7 || ile_x != 1){
            alert("UWAGA! PROGRAM WYKRYŁ OSZUSTWO!");
            var wszystko = document.querySelectorAll('*');
    for (var i = 0; i < wszystko.length; i++) {
        wszystko[i].onclick = null;
        wszystko[i].onchange = null;
    }
    setTimeout(ruch_1, 1000);
    setTimeout(ruch_2, 2000);
    setTimeout(ruch_3, 3000);
    setTimeout(ruch_1, 1000);
    setTimeout(ruch_2, 2000);
    setTimeout(ruch_3, 3000);
        }else{
            setTimeout(test, 10);
        }
    }else if(k_ruch == 2){
        if(ile_puste != 5 || ile_x != 2){
            alert("UWAGA! PROGRAM WYKRYŁ OSZUSTWO!");
            var wszystko = document.querySelectorAll('*');
    for (var i = 0; i < wszystko.length; i++) {
        wszystko[i].onclick = null;
        wszystko[i].onchange = null;
    }
    setTimeout(ruch_1, 1000);
    setTimeout(ruch_2, 2000);
    setTimeout(ruch_3, 3000);
        }else{
            setTimeout(test, 10);
        }
    }else if(k_ruch == 3){
        if(ile_puste != 3 || ile_x != 3){
            alert("UWAGA! PROGRAM WYKRYŁ OSZUSTWO!");
            var wszystko = document.querySelectorAll('*');
    for (var i = 0; i < wszystko.length; i++) {
        wszystko[i].onclick = null;
        wszystko[i].onchange = null;
    }
    setTimeout(ruch_1, 1000);
    setTimeout(ruch_2, 2000);
    setTimeout(ruch_3, 3000);
        }else{
            setTimeout(test, 10);
        }
    }else if(k_ruch == 4){
        if(ile_puste != 1 || ile_x != 4){
            alert("UWAGA! PROGRAM WYKRYŁ OSZUSTWO!");
            var wszystko = document.querySelectorAll('*');
    for (var i = 0; i < wszystko.length; i++) {
        wszystko[i].onclick = null;
        wszystko[i].onchange = null;
    }
    setTimeout(ruch_1, 1000);
    setTimeout(ruch_2, 2000);
    setTimeout(ruch_3, 3000);
        }else{
            setTimeout(test, 10);
        }
    }else if(k_ruch == 5){
        if(ile_puste != 0 || ile_x != 5){
            alert("UWAGA! PROGRAM WYKRYŁ OSZUSTWO!");
            var wszystko = document.querySelectorAll('*');
    for (var i = 0; i < wszystko.length; i++) {
        wszystko[i].onclick = null;
        wszystko[i].onchange = null;
    }
    setTimeout(ruch_1, 1000);
    setTimeout(ruch_2, 2000);
    setTimeout(ruch_3, 3000);
        }else{
            setTimeout(test, 10);
        }
    }
}


function test(){
    if(document.getElementById("td_1").getAttribute('src') === document.getElementById("td_2").getAttribute('src') && document.getElementById("td_1").getAttribute('src') === document.getElementById("td_3").getAttribute('src') && document.getElementById("td_1").getAttribute('src') !== "" && document.getElementById("td_2").getAttribute('src') !== "" && document.getElementById("td_3").getAttribute('src') !== ""){
        if(document.getElementById("td_1").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_4").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_4").getAttribute('src') === document.getElementById("td_6").getAttribute('src') && document.getElementById("td_4").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_6").getAttribute('src') !== ""){
        if(document.getElementById("td_4").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_7").getAttribute('src') === document.getElementById("td_8").getAttribute('src') && document.getElementById("td_7").getAttribute('src') === document.getElementById("td_9").getAttribute('src') && document.getElementById("td_7").getAttribute('src') !== "" && document.getElementById("td_8").getAttribute('src') !== "" && document.getElementById("td_9").getAttribute('src') !== ""){
        if(document.getElementById("td_7").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_1").getAttribute('src') === document.getElementById("td_4").getAttribute('src') && document.getElementById("td_1").getAttribute('src') === document.getElementById("td_7").getAttribute('src') && document.getElementById("td_1").getAttribute('src') !== "" && document.getElementById("td_4").getAttribute('src') !== "" && document.getElementById("td_7").getAttribute('src') !== ""){
        if(document.getElementById("td_1").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_2").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_2").getAttribute('src') === document.getElementById("td_8").getAttribute('src') && document.getElementById("td_2").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_8").getAttribute('src') !== ""){
        if(document.getElementById("td_2").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_3").getAttribute('src') === document.getElementById("td_6").getAttribute('src') && document.getElementById("td_3").getAttribute('src') === document.getElementById("td_9").getAttribute('src') && document.getElementById("td_3").getAttribute('src') !== "" && document.getElementById("td_6").getAttribute('src') !== "" && document.getElementById("td_9").getAttribute('src') !== ""){
        if(document.getElementById("td_3").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_1").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_1").getAttribute('src') === document.getElementById("td_9").getAttribute('src') && document.getElementById("td_1").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_9").getAttribute('src') !== ""){
        if(document.getElementById("td_1").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_3").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_3").getAttribute('src') === document.getElementById("td_7").getAttribute('src') && document.getElementById("td_3").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_7").getAttribute('src') !== ""){
        if(document.getElementById("td_3").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }
    }else if(document.getElementById("td_2").getAttribute('src') !== "" && document.getElementById("td_3").getAttribute('src') !== "" && document.getElementById("td_4").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_6").getAttribute('src') !== "" && document.getElementById("td_7").getAttribute('src') !== "" && document.getElementById("td_8").getAttribute('src') !== "" && document.getElementById("td_9").getAttribute('src') !== "" && document.getElementById("td_1").getAttribute('src') !== ""){
            document.getElementById("slowka").innerHTML = "KONIEC! REMIS!";
            document.getElementById("slowka").style.color = "white";
            koniec();
    }
}
function koniec(){

    var wszystko = document.querySelectorAll('*');
        for (var i = 0; i < wszystko.length; i++) {
            wszystko[i].onclick = null;
            wszystko[i].onchange = null;
        }
        
    guzik();
}

function guzik(){
    
    var guzik_check = document.getElementById("guzior_JEST");

    if(guzik_check === null){
        document.body.innerHTML += "<center><button id='guzior_JEST' onclick='location.reload()' style='margin-top: 20px;'>RESET GRY</button>";  
    }
}
/*

for(let i=0;i<1;i++){

if(document.getElementById("td_1").getAttribute("src") === o){
    if(document.getElementById("td_2").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
        document.getElementById("td_3").setAttribute('src', o);
    }else if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_2").getAttribute("src") === ""){
        document.getElementById("td_2").setAttribute('src', o);
    }else if(document.getElementById("td_4").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
        document.getElementById("td_7").setAttribute('src', o);
    }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_4").getAttribute("src") === ""){
        document.getElementById("td_4").setAttribute('src', o);
    }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
        document.getElementById("td_9").setAttribute('src', o);
    }else if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
        document.getElementById("td_5").setAttribute('src', o);
    }
    break;
}

if(document.getElementById("td_2").getAttribute("src") === o){
    if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
        document.getElementById("td_3").setAttribute('src', o);
    }else if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
        document.getElementById("td_1").setAttribute('src', o);
    }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_8").getAttribute("src") === ""){
        document.getElementById("td_8").setAttribute('src', o);
    }else if(document.getElementById("td_8").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
        document.getElementById("td_5").setAttribute('src', o);
    }
    break;
}

if(document.getElementById("td_3").getAttribute("src") === o){
    if(document.getElementById("td_2").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
        document.getElementById("td_1").setAttribute('src', o);
    }else if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_2").getAttribute("src") === ""){
        document.getElementById("td_2").setAttribute('src', o);
    }else if(document.getElementById("td_6").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
        document.getElementById("td_9").setAttribute('src', o);
    }else if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_6").getAttribute("src") === ""){
        document.getElementById("td_6").setAttribute('src', o);
    }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
        document.getElementById("td_7").setAttribute('src', o);
    }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
        document.getElementById("td_5").setAttribute('src', o);
    }
    break;
}

if(document.getElementById("td_4").getAttribute("src") === o){
    if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
        document.getElementById("td_7").setAttribute('src', o);
    }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
        document.getElementById("td_1").setAttribute('src', o);
    }else if(document.getElementById("td_6").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
        document.getElementById("td_5").setAttribute('src', o);
    }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_6").getAttribute("src") === ""){
        document.getElementById("td_6").setAttribute('src', o);
    }
    break;
}

if(document.getElementById("td_5").getAttribute("src") === o){
    if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
        document.getElementById("td_9").setAttribute('src', o);
    }else if(document.getElementById("td_2").getAttribute("src") === o && document.getElementById("td_8").getAttribute("src") === ""){
        document.getElementById("td_8").setAttribute('src', o);
    }else if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
        document.getElementById("td_7").setAttribute('src', o);
    }else if(document.getElementById("td_4").getAttribute("src") === o && document.getElementById("td_6").getAttribute("src") === ""){
        document.getElementById("td_6").setAttribute('src', o);
    }else if(document.getElementById("td_6").getAttribute("src") === o && document.getElementById("td_4").getAttribute("src") === ""){
        document.getElementById("td_4").setAttribute('src', o);
    }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
        document.getElementById("td_3").setAttribute('src', o);
    }else if(document.getElementById("td_8").getAttribute("src") === o && document.getElementById("td_2").getAttribute("src") === ""){
        document.getElementById("td_2").setAttribute('src', o);
    }else if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
        document.getElementById("td_1").setAttribute('src', o);
    }
    break;
}

if(document.getElementById("td_6").getAttribute("src") === o){
    if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
        document.getElementById("td_9").setAttribute('src', o);
    }else if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
        document.getElementById("td_3").setAttribute('src', o);
    }else if(document.getElementById("td_4").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
        document.getElementById("td_5").setAttribute('src', o);
    }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_4").getAttribute("src") === ""){
        document.getElementById("td_4").setAttribute('src', o);
    }
    break;
}

if(document.getElementById("td_7").getAttribute("src") === o){
    if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_4").getAttribute("src") === ""){
        document.getElementById("td_4").setAttribute('src', o);
    }else if(document.getElementById("td_4").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
        document.getElementById("td_1").setAttribute('src', o);
    }else if(document.getElementById("td_8").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
        document.getElementById("td_9").setAttribute('src', o);
    }else if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_8").getAttribute("src") === ""){
        document.getElementById("td_8").setAttribute('src', o);
    }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
        document.getElementById("td_3").setAttribute('src', o);
    }else if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
        document.getElementById("td_5").setAttribute('src', o);
    }
    break;
}

if(document.getElementById("td_8").getAttribute("src") === o){
    if(document.getElementById("td_9").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
        document.getElementById("td_7").setAttribute('src', o);
    }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_9").getAttribute("src") === ""){
        document.getElementById("td_9").setAttribute('src', o);
    }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_2").getAttribute("src") === ""){
        document.getElementById("td_2").setAttribute('src', o);
    }else if(document.getElementById("td_2").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
        document.getElementById("td_5").setAttribute('src', o);
    }
    break;
}

if(document.getElementById("td_9").getAttribute("src") === o){
    if(document.getElementById("td_3").getAttribute("src") === o && document.getElementById("td_6").getAttribute("src") === ""){
        document.getElementById("td_6").setAttribute('src', o);
    }else if(document.getElementById("td_6").getAttribute("src") === o && document.getElementById("td_3").getAttribute("src") === ""){
        document.getElementById("td_3").setAttribute('src', o);
    }else if(document.getElementById("td_8").getAttribute("src") === o && document.getElementById("td_7").getAttribute("src") === ""){
        document.getElementById("td_7").setAttribute('src', o);
    }else if(document.getElementById("td_7").getAttribute("src") === o && document.getElementById("td_8").getAttribute("src") === ""){
        document.getElementById("td_8").setAttribute('src', o);
    }else if(document.getElementById("td_5").getAttribute("src") === o && document.getElementById("td_1").getAttribute("src") === ""){
        document.getElementById("td_1").setAttribute('src', o);
    }else if(document.getElementById("td_1").getAttribute("src") === o && document.getElementById("td_5").getAttribute("src") === ""){
        document.getElementById("td_5").setAttribute('src', o);
    }
    break;
}

}


document.getElementById("td_1").getAttribute("src");
document.getElementById("td_2").getAttribute("src");
document.getElementById("td_3").getAttribute("src");
document.getElementById("td_4").getAttribute("src");
document.getElementById("td_5").getAttribute("src");
document.getElementById("td_6").getAttribute("src");
document.getElementById("td_7").getAttribute("src");
document.getElementById("td_8").getAttribute("src");
document.getElementById("td_9").getAttribute("src");

*/
function online(){
    window.open("online.html");
}
function ruch_1(){
    document.getElementById("td_2").setAttribute("src", o);
}
function ruch_2(){
    document.getElementById("td_5").setAttribute("src", o);
}
function ruch_3(){
    document.getElementById("td_8").setAttribute("src", o);
    setTimeout(test, 10);
}