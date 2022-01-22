
var btn = document.getElementById('btn_generate');

var qr = document.getElementById("qrcode");
btn.addEventListener("click", ()=>{
    clearQRCode();
    var txt = document.getElementById("inp_content").value;
    var fore = document.getElementById("fore_color").value;
    var back = document.getElementById("back_color").value;
    var qrcode = new QRCode(qr,{
        text: txt,
        width: 250,
        height: 250,
        colorDark: fore,
        colorLight: back,
    });
});


function clearQRCode(){
    if(qr.childElementCount > 0){
        qr.removeChild(qr.firstChild);
        qr.removeChild(qr.lastChild);
    }
    else{
        console.log("Child element not found")
    }


}
