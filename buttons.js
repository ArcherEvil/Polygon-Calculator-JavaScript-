
// Alphabet List
abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
   'y', 'z']


// Function when click the menubar
function clicked(value) {
    var nodes = document.getElementsByClassName("boxcontent");
    for(var i = 0; i < nodes.length; i++){
        nodes[i].style.display = "grid";
    }
    var title = value.innerHTML
    document.getElementById('content-title').innerHTML = title

    // convert to string

    string = ''
    for(var i = 0; i < title.length; i++){
        if (abc.indexOf(title[i].toLowerCase()) >= 0) {
            string += title[i]
        }
    }

    // Enable Image
    img = document.getElementById('img')
    img.style.display = 'block';
    
    boxelements = (document.getElementById('boxcontent').children);
        
    for(var i = 0; i < boxelements.length; i++){
        boxelements[i].style.display = "grid";

    switch (string) {
        case 'Triangle':
            img.src = 'Images/triangle.png'
            document.getElementById('t0').innerText = 'Side A: '
            document.getElementById('t1').innerText = 'Side B: '
            document.getElementById('t2').innerText = 'hypotenuse: '
            break;
        case 'Square':
            img.src = 'Images/square.png'
            document.getElementById('t0').innerText = 'Side A: '
            document.getElementById('t1').innerText = 'Side B: '
            document.getElementById('t2').innerText = 'Diagonal: '
            break;
        case 'Pentagon':
            img.src = 'Images/pentagono.png'
            document.getElementById('t0').innerText = 'Sides: '
            document.getElementById('t1').innerText = 'Apothem: '
            document.getElementById('t2').innerText = 'Diagonal: '
            break;
        case 'Hexagon':
            img.src = 'Images/hexagon.png'
            document.getElementById('t0').innerText = 'Sides: '
            document.getElementById('t1').innerText = 'Apothem: '
            document.getElementById('t2').innerText = 'Diagonal: '
            break;
        case 'Octagon':
            img.src = 'Images/octagon.png'
            document.getElementById('t0').innerText = 'Sides: '
            document.getElementById('t1').innerText = 'Apothem: '
            document.getElementById('t2').innerText = 'Diagonal: '
            break;
    }

            
    
        
    }
};