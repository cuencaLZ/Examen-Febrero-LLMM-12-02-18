window.onload=function(){
    var myInf = document.getElementById('Noticias');
    myInf.onclick = function(){
            document.getElementsByClassName(evolucion).style.display = "block";
            document.getElementsByClassName(economia).style.display = "block";
    }
    var myInf1 = document.getElementById('Evolucion');
    myInf1.onclick = function(){
            document.getElementsByClassName(evolucion).style.display = "block";
            document.getElementsByClassName(economia).style.display = "none";
    }
    var myInf2 = document.getElementById('economia');
    myInf2.onclick = function(){
            document.getElementsByClassName(evolucion).style.display = "none";
            document.getElementsByClassName(economia).style.display = "block";
    }
}