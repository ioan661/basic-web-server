function incarcaPersoane(){ 
    var xmldox; 
    var xmlreq = new XMLHttpRequest(); 
    xmlreq.onreadystatechange = function(){ 
        if(this.readyState == 4 && this.status == 200)
        { 
            afisare(this);
        }
    };
    xmlreq.open("GET","/resurse/persoane.xml",true);
    xmlreq.send(); 
}

function afisare(xml)
{ 
    var xmldox = xml.responseXML; 
    var table="<caption><b>Tabel</b></caption><tr><th>Nume</th><th>Prenume</th></tr>"; 
    var y = xmldox.getElementsByTagName("persoana"); 
    for(var i = 0 ; i < y.length;i++)
    { 
        table += "<tr><td>"+y[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue + 
        "</td><td>" + y[i].getElementsByTagName("prenume")[0].childNodes[0].nodeValue + 
        "</td></tr>"; 
    }
    document.getElementById("table-content").innerHTML = table; 
    document.getElementById("persoane-h3").remove(); 
}


