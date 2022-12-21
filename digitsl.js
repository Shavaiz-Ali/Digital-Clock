
// let time = true;
function clock(){
        let date = new Date();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        let format = document.getElementById("format");

        if(hour >= 12){
            format.innerHTML = "Pm";
        } else{
            format.innerHTML = "Am";
        }
        if(hour > 12){
            hour = hour - 12;
        }

        document.getElementById("hour").innerHTML = hour;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
}
setInterval("clock()",10);
