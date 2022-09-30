
var color = window.setInterval('otroColor()', 1000);

var x = 0;

function otroColor(){

    var r = Math.floor(Math.random() * 255);

    var g = Math.floor(Math.random() * 255);

    var b = Math.floor(Math.random() * 255);

    x++;

        switch(x){

            case 1:
                document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
                break;
            case 2:
                document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
                break;
            case 3:
                document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
                break;
            case 4:
                document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
                break;
            case 5:
                document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
                alert('Fin del proceso, ya no quiero cambiar más.')
                break;

        }
    


}