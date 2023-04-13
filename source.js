

function refresh() {

    var data = !document.getElementById("checkbox").checked ? document.getElementsByClassName("inputClass")[0].value : document.getElementsByClassName("inputClass")[0].value.split(" ").join("")
    if (document.getElementById("checkbox2").checked) data = data.split("\n").join("")

    document.getElementsByClassName("counter")[0].innerHTML = "Count: " + data.length 

    setTimeout(refresh, 100);
}



refresh();