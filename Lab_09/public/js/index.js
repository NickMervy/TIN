var opcodes = {
    "add": 1,
    "sub": 2,
    "mul": 3,
    "div": 4
}

function send() {
    var packet = {
        num1: document.getElementById('num1').value,
        num2: document.getElementById('num2').value,
        opcode: opcodes[document.getElementById('opcode').value]
    }
    var xhr = new window.XMLHttpRequest()
    xhr.open('POST', '/ops', true)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')

    let result = document.getElementById('result')    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            result.style.color = "black" 
            console.log(xhr.statusText)
            result.value = xhr.responseText
        } else {
            result.style.color = "red" 
            result.value = `${xhr.status} ${xhr.responseText}`
        }
    }

    xhr.send(JSON.stringify(packet))
}

