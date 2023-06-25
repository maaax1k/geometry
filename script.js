function camber(){
    var result;
    var A = Number(document.getElementById("cam_a").value);
    var B = Number(document.getElementById("cam_b").value);
    var C = Number(document.getElementById("cam_c").value);
    result = Math.asin((B-A)/C);
    document.getElementById("cam_res").innerHTML = result;
}

function caster(){
    var result;
    var C = Number(document.getElementById("cas_c").value);
    var a1 = Number(document.getElementById("cas_a1").value);
    var b1 = Number(document.getElementById("cas_b1").value);
    var x = Number(document.getElementById("cas_x").value);
    var R1 = b1-a1;
    var a2 = Number(document.getElementById("cas_a2").value);
    var b2 = Number(document.getElementById("cas_b2").value);
    var R2 = b2-a2;
    var b = (Math.asin(R1/C)-Math.asin(R2/C))/2;
    result = Math.atan(Math.tan(b)/Math.sin(x));
    document.getElementById("cas_res").innerHTML = result;
}