table = document.getElementById("table")
console.log(table)
fetch("http://localhost:8080/show/light").then(
            (responce) => {
            return responce.json();
        }).then((data) =>{
            table.innerText = data[0][0]
        }); 