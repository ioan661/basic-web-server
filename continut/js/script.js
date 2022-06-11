var myVar = setInterval(func, 1000);

function func() {

    var azi = new Date();

    var string = azi.getDate() + '.' + (azi.getMonth() + 1) + '.' + azi.getFullYear();
    var string1 = azi.getHours() + ":" + azi.getMinutes() + ":" + azi.getSeconds();

    var string2 = string + " " + string1;
    if(document.getElementById("data") != null)
    { 
        document.getElementById("data").innerHTML = "<b>Data si ora curenta: </b>" + string2;
    } 
    

    var loc = window.location;
    var nav = window.navigator;

    if(document.getElementById("detalii"))
    { 
        document.getElementById("detalii").innerHTML = "<b>Location : </b>" + loc.href + "<br><br><b> Browser name: </b>" + nav.appName + "<br><br> <b>App version: </b>" + nav.appVersion + "<br><br> <b>Platforma : </b>" + nav.platform;
    }
    
}

function showPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var positionInfo = "Va aflati la urmatoarele coordonate : <br><br>" + "<b>Latitude: </b>" + position.coords.latitude + "<br>" + "<b>Longitude: </b>" + position.coords.longitude;
            document.getElementById("loc").innerHTML = positionInfo;
        });
    } else {
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}

function Nloto(text) {
    const numere = text.split(' ');
    var counter = 0; 

    for(i = 1; i < 9 ; i++)
    { 
        if(document.querySelector('input[name="primu"]').value == numere[i]){
            counter++; 
        }
        else
        { 
            if(document.querySelector('input[name="doi"]').value == numere[i]){
                counter++;   
            } 
            else{ 
                if(document.querySelector('input[name="3"]').value == numere[i]){
                    counter++;
                }
                else{ 
                    if(document.querySelector('input[name="4"]').value == numere[i]){
                        counter++;
                    } 
                    else{     
                        if(document.querySelector('input[name="5"]').value == numere[i]){
                            counter++; 
                        }
                        else{
                            if(document.querySelector('input[name="6"]').value == numere[i]){
                                counter++; 
                            }   
                            else{
                                if(document.querySelector('input[name="7"]').value == numere[i]){
                                    counter++; 
                                }
                                else{
                                    if(document.querySelector('input[name="8"]').value == numere[i])
                                        counter++; 
                                }
                            }
                        }
                    } 
                }
            } 
        }
    }
    
    alert("Ati nimerit "+counter+" numere!"); 
}

function getRandomHex() {
    return Math.floor((Math.random() * 256)).toString(16);
}

function loto() {

    var text = " ";
    var i;
    var counter = 0; 
    for (i = 0; i < 8; i++) {
        text += getRandomHex() + " ";   
    }
    document.getElementById("loto").innerHTML = text;
    Nloto(text);
}


function schimbaContinut(resursa,jsFisier,jsFunctie) {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("continut").innerHTML =
                this.responseText;
            if (jsFisier) {
                var elementScript = document.createElement('script');
                elementScript.onload = function () {
                    console.log("hello");
                    if (jsFunctie) {
                        window[jsFunctie]();
                    }
                };
                elementScript.src = jsFisier;
                document.head.appendChild(elementScript);
            } else {
                if (jsFunctie) {
                    window[jsFunctie]();
                }
            }
        }
        
    };
    xmlhttp.open("GET", resursa + '.html', true);
    xmlhttp.send(); 
}

var x,y; 
var ok = 0; 

function display(event){ 
    if(ok == 0)
    { 
        x = event.offsetX; 
        y = event.offsetY;
        ok = 1; 
    }
    else 
    { 
        ok = 0; 
        x1 = event.offsetX; 
        y1 = event.offsetY;

        var canv = document.getElementById("canvas"); 
        var cont = canv.getContext("2d");

        cont.lineWidth = "2";
        cont.moveTo(x,y); 
        cont.lineTo(x,y1); 
        cont.lineTo(x1,y1);
        cont.lineTo(x1,y);
        cont.lineTo(x,y);
        cont.strokeStyle =  document.getElementById("CuloareContur").value;
        cont.stroke();
        cont.beginPath(); 

        cont.rect(x,y,x1-x,y1-y); 
        cont.fillStyle = document.getElementById("umplere").value; 
        cont.fill(); 
        
        cont.stroke();

    }
     

     
}



function patru(){ 
    document.getElementById("flex-container-div").className = "flexi-box-1";
}

function unu(){ 
    document.getElementById("flex-container-div").className = "flexi-box-4";
}


function doi(){ 
    document.getElementById("flex-container-div").className = "flexi-box-2";
}


function insLin(){ 
    var tabel = document.getElementById("table");
    var linie = table.insertRow(document.querySelector('input[name="linie"]').value)
    var col1 = linie.insertCell(0); 
    var col2 = linie.insertCell(1);
    var col3 = linie.insertCell(2);
    var col4 = linie.insertCell(3);
    var col5 = linie.insertCell(4);
    col1.style.background = document.querySelector('input[name="culoare"]').value; 
    col2.style.background = document.querySelector('input[name="culoare"]').value; 
    col3.style.background = document.querySelector('input[name="culoare"]').value; 
    col4.style.background = document.querySelector('input[name="culoare"]').value; 
    col5.style.background = document.querySelector('input[name="culoare"]').value; 
    
}

function insCol(){ 
    var tabel = document.getElementById("table");
    var coloana =document.querySelector('input[name="coloana"]').value; 
    
    for(var i = 0 ; i < table.rows ; i++)
    { 
        var cell = table.rows[i].insertCell(coloana); 
        cell.innerHTML = "pls"; 
    }

    
}

function fun(){ 
    var xhttp = new XMLHttpRequest(); 
    
    xhttp.onreadystatechange = function(){ 
        if(this.readyState == 4 && this.status == 200){ 
            var ceva = JSON.parse(this.responseText);
            var ok = false; 
            console.log(ceva);
            for(var index = 0 ; index < ceva.length ; index++)
            { 
                if(ceva[index].utilizator == document.getElementById("utilizator").value && 
                    ceva[index].parola == document.getElementById("parola").value)
                { 
                    ok = true; 
                }
            }

            if(ok == true)
            { 
                document.getElementById("ver").innerHTML = "Exista" ;
            }
            else 
            { 
                document.getElementById("ver").innerHTML = "Nu Exista" ;
            }
              
        }
    }; 
    xhttp.open("GET","/resurse/utilizatori.json",true);
    xhttp.send();          
}




