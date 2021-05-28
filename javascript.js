var ID = 0;

ID = setInterval(showTime, 1000);

function showTime()
{
    var date = new Date();
    var h = date.getHours();            // gives value ranges 0 - 23
    var m = date.getMinutes();          //                    0 - 59
    var s = date.getSeconds();          //                    0 - 59
    var d = "AM";

    if(h >= 12)
        d = "PM";
    
    if(h > 12)
        h = h - 12;
    if(h == 0)
        h = 12;
    if(h < 10)
        h = "0" + h;
    if(m < 10)
        m = "0" + m;
    if(s < 10)
        s = "0" + s;
    var time = h + ":" + m + ":" + s + " " + d;
    document.getElementById("clock").innerHTML = time;


}

