
var live = document.getElementById("live");
live.addEventListener("click", () =>{
    let a = document.getElementById("firsta").value
    let b = document.getElementById("firstb").value
    let c = document.getElementById("firstc").value 
    let d = document.getElementById("seconda").value
    let e = document.getElementById("secondb").value
    let f = document.getElementById("secondc").value
    
    if (a !== "" && b !== "" && c !== "" && d !== "" && e !== "" && f !== ""){
        let u = (a*e)-(b*d) 
        let x = ((c*e)-(b*f))/u
        let y = ((a*f)-(c*d))/u
        let result = document.getElementById("result")
        result.innerText = ( `x = ${x} and y = ${y}`)
    }else{
        alert("Input all field")
    }
       
})

// equation of 3 unknow
live.addEventListener("click", () =>{
    let a = document.getElementById("firstat").value
    let b = document.getElementById("firstbt").value
    let c = document.getElementById("firstct").value 
    let d = document.getElementById("firstdt").value
    let e = document.getElementById("secondat").value
    let f = document.getElementById("secondbt").value
    let g = document.getElementById("secondct").value
    let h = document.getElementById("seconddt").value
    let i = document.getElementById("thirdat").value
    let j = document.getElementById("thirdbt").value
    let k = document.getElementById("thirdct").value
    let l = document.getElementById("thirddt").value
    if (a,b,c,d,e,f,g,h,i,j,k,l !== ""){
        let u = a*((f*k)-(g*j))-b*((e*k)-(g*i))+c*((e*j)-(f*i))
        let x = (d*((f*k)-(g*j))-b*((h*k)-(g*l))+c*((h*j)-(f*l)))/u
        let y = (a*((h*k)-(g*l))-d*((e*k)-(g*i))+c*((e*l)-(h*i)))/u
        let z = (a*((f*l)-(h*j))-b*((e*l)-(h*i))+d*((e*j)-(f*i)))/u
        let result = document.getElementById("result")
        result.innerText = ( `x = ${x} , y = ${y} and z = ${z}`)
    }else{
        alert("Input all field")
    }
       
})



