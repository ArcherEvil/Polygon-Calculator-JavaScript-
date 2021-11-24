function clicked(value) {
    var nodes = document.getElementsByClassName("boxcontent");
    for(var i = 0; i < nodes.length; i++){
        nodes[i].style.display = "block";
    }
    var title = value.innerHTML
    document.getElementById('content-title').innerHTML = title

    switch (title) {
        case 'Triangle':
            break;
    
        default:
            break;
    }
};