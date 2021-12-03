function clicked(value) {
    var nodes = document.getElementsByClassName("boxcontent");
    for(var i = 0; i < nodes.length; i++){
        nodes[i].style.display = "grid";
    }
    var title = value.textContent
    document.getElementById('content-title').innerHTML = title

    var string = '';
    // Convert the text to raw text
    for (var i = 0; i < title.length; i++){
        if (['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
         'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
          'u', 'v', 'w', 'x', 'y', 'z'].indexOf(title[i].toLowerCase()) >= 0) {
             string += title[i]
         }
    }
    console.log(string)
    switch (string) {
        case 'Triangle':
            img = document.getElementById('imgtriangle');
            img.style.display = 'block';
            break;
    
        default:
            break;
    }
};