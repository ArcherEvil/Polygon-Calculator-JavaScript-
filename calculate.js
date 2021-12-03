
function triangle(things) {
    var parameter = things; 

    console.log('acessado')
    if(parameter[0] == '') {
        var side = Math.sqrt((parameter[2])**2 - (parameter[1])**2)
        parameter[0] = Math.round(side * 100) / 100;}
    else if(parameter[1] == '') {
        var side = Math.sqrt((parameter[2])**2 - (parameter[0])**2)
        parameter[1] = Math.round(side * 100) / 100;}
    else if(parameter[2] == '') {
        var side = Math.sqrt((parameter[0])**2 + (parameter[1])**2)
        parameter[2] = Math.round(side * 100) / 100;}
    
    // calculating area and perimeter
    area = (parameter[0] * parameter[1]) / 2 
    parameter.push(parseFloat(Math.round(area * 100) / 100))

    perimeter = (parameter[0] + parameter[1] + parameter[2])
    parameter.push(parseFloat(Math.round(perimeter * 100) / 100))
    console.log(parameter)
    for (var i = 0; i < entrys.length; i++) {
        entrys[i].value = ''
        entrys[i].value = parameter[i]
        } 
    document.getElementById('area').innerText = parameter[3]
    document.getElementById('perimeter').innerText = parameter[4]
}

function square(things) {
    let parameter = {
        'Side A': things[0],
        'Side B': things[1],
        'Diagonal': things[2],
        'Area': '',
        'Perimeter': ''
        }
        
        console.log('acessado')
        
    if(parameter['Side A'] == '') {
        var side = Math.sqrt((parameter['Diagonal'])**2 - (parameter['Side B'])**2)
        parameter['Side A'] = Math.round(side * 100) / 100;}
    else if(parameter['Side B'] == '') {
        var side = Math.sqrt((parameter['Diagonal'])**2 - (parameter['Side A'])**2)
        parameter['Side B'] = Math.round(side * 100) / 100;}
    else if(parameter['Diagonal'] == '') {
        var side = Math.sqrt((parameter['Side B'])**2 + (parameter['Side A'])**2)
        parameter['Diagonal'] = Math.round(side * 100) / 100;}

    // calculating area and perimeter
    area = (parameter['Side A'] * parameter['Side B']) / 2 
    parameter['Area'] = parseFloat(Math.round(area * 100) / 100)

    perimeter = (parameter['Side A']*2 + parameter['Side B']*2)
    parameter['Perimeter'] = parseFloat(Math.round(perimeter * 100) / 100)
    console.log(parameter)
    
    sides = [parameter['Side A'], parameter['Side B'], parameter['Diagonal']]
    
        
    for (var i = 0; i < entrys.length; i++) {
        entrys[i].value = ''
        entrys[i].value = sides[i]
        } 

    document.getElementById('area').innerText = parameter['Area']
    document.getElementById('perimeter').innerText = parameter['Perimeter']
    }

function hexagon(things) {
    let parameter = {
        'Side A': things[0],
        'Side B': things[1],
        'Diagonal': things[2],
        'Area': '',
        'Perimeter': ''
        }
        
        console.log('acessado')
        
    if(parameter['Side A'] == '') {
        parameter['Side A'] = Math.round(((parameter['Side B'] / Math.sqrt(3)) * 2)*100) / 100}
    
    else if(parameter['Side B'] == '') {
        var side = parameter['Side A'] / (2 * Math.tan(Math.PI/6))
        parameter['Side B'] = Math.round(side * 100) / 100;}
    
    var side = parameter['Side A'] * 2
    parameter['Diagonal'] = Math.round(side * 100) / 100;
    
    // calculating area and perimeter
    area = ((3 * Math.sqrt(3)) * parameter['Side A']) / 2
    parameter['Area'] = parseFloat(Math.round(area * 100) / 100)

    perimeter = parameter['Side A'] * 6
    parameter['Perimeter'] = parseFloat(Math.round(perimeter * 100) / 100)
    console.log(parameter)
    
    sides = [parameter['Side A'], parameter['Side B'], parameter['Diagonal']]
    
        
    for (var i = 0; i < entrys.length; i++) {
        entrys[i].value = ''
        entrys[i].value = sides[i]
        } 

    document.getElementById('area').innerText = parameter['Area']
    document.getElementById('perimeter').innerText = parameter['Perimeter']
    }

function pentagon(things) {
        let parameter = {
            'Side A': things[0],
            'Side B': things[1],
            'Diagonal': '',
            'Area': '',
            'Perimeter': ''
            }
            
        console.log('acessado')
        
        
        if(parameter['Side A'] == '') {
            parameter['Side A'] = Math.round(((parameter['Side B'] * Math.tan(Math.PI/5))*100)) / 100}
        
        else if(parameter['Side B'] == '') {
            console.log('Apotemia acessado')
            var side = parameter['Side A'] / (2 * Math.tan(Math.PI/5))
            parameter['Side B'] = Math.round(side * 100) / 100;}
        
        console.log('Diagonal acessado')
        var side = parameter['Side A'] * 2
        parameter['Diagonal'] = Math.round(side * 100) / 100;
    
        // calculating area and perimeter
        area = 0.5 * parameter['Side A'] * parameter['Side B']
        parameter['Area'] = parseFloat(Math.round(area * 100) / 100)
    
        perimeter = parameter['Side A'] * 5
        parameter['Perimeter'] = parseFloat(Math.round(perimeter * 100) / 100)
        
        
        sides = [parameter['Side A'], parameter['Side B'], parameter['Diagonal']]
        
            
        for (var i = 0; i < entrys.length; i++) {
            entrys[i].value = ''
            entrys[i].value = sides[i]
            } 
    
        document.getElementById('area').innerText = parameter['Area']
        document.getElementById('perimeter').innerText = parameter['Perimeter']
        }
    

function octagon(things) {
        let parameter = {
            'Side A': things[0],
            'Side B': things[1],
            'Diagonal': '',
            'Area': '',
            'Perimeter': ''
            }
            
        console.log('acessado')
        
        
        if(parameter['Side A'] == '') {
            parameter['Side A'] = Math.round(((parameter['Side B'] * Math.tan(Math.PI/8))*100)) / 100}
        
        else if(parameter['Side B'] == '') {
            console.log('Apotemia acessado')
            var side = parameter['Side A'] / (2 * Math.tan(Math.PI/8))
            parameter['Side B'] = Math.round(side * 100) / 100;}
        
        console.log('Diagonal acessado')
        var side = parameter['Side A'] * 2
        parameter['Diagonal'] = Math.round(side * 100) / 100;
    
        // calculating area and perimeter
        area = 2 * parameter['Side A']**2 * (1+ Math.sqrt(2))
        parameter['Area'] = parseFloat(Math.round(area * 100) / 100)
    
        perimeter = parameter['Side A'] * 8
        parameter['Perimeter'] = parseFloat(Math.round(perimeter * 100) / 100)
        
        
        sides = [parameter['Side A'], parameter['Side B'], parameter['Diagonal']]
        
            
        for (var i = 0; i < entrys.length; i++) {
            entrys[i].value = ''
            entrys[i].value = sides[i]
            } 
    
        document.getElementById('area').innerText = parameter['Area']
        document.getElementById('perimeter').innerText = parameter['Perimeter']
        }        

function calculate() {
    polygon = document.getElementById('content-title').innerText;
    entrys = document.getElementsByClassName('inputs');
    values = []
    
    for (var i = 0; i < entrys.length; i++) {
        if (entrys[i].value == '') {
            values.push(entrys[i].value)
            continue;}
        if (isNaN(parseFloat(entrys[i].value))) {
            window.alert('Only use numbers!!')
            return false;
        }
        values.push(parseFloat(entrys[i].value))}

    console.log(values)
    
    switch (polygon) {
        case 'Triangle':
            invalidation = 0
            for (var i = 0; i < values.length; i++) {
                if (values[i] == '') {
                    invalidation += 1}
            }
        
            if (invalidation >= 2) {
                window.alert('You must fill 2 places at the very least!!!!')
                return false;}
            
            triangle(values)
            break;
        case 'Square':
            invalidation = 0
            for (var i = 0; i < values.length; i++) {
                if (values[i] == '') {
                    invalidation += 1}
            }
        
            if (invalidation >= 2) {
                window.alert('You must fill 2 places at the very least!!!!')
                return false;}
            
            square(values)
            break;
        case 'Pentagon':
            invalidation = 0
            for (var i = 0; i < values.length; i++) {
                if (values[i] == '') {
                    invalidation += 1}
            }
        
            if (invalidation > 2) {
                window.alert('You must fill 1 place at the very least!!!!')
                return false;}
            
            pentagon(values)
            break;
        case 'Hexagon':
            invalidation = 0
            for (var i = 0; i < values.length; i++) {
                if (values[i] == '') {
                    invalidation += 1}
            }
        
            if (invalidation > 2) {
                window.alert('You must fill 1 place at the very least!!!!')
                return false;}
            
            hexagon(values)        
            break;
        case 'Octagon': 
            invalidation = 0
            for (var i = 0; i < values.length; i++) {
                if (values[i] == '') {
                    invalidation += 1}
            }
        
            if (invalidation > 2) {
                window.alert('You must fill 1 place at the very least!!!!')
                return false;}
            
            octagon(values)    
            break;
        default:
            break;
    }
}
