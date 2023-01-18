
const ingreso = async () => {
  try {
    // We are using fetch to get the response
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const fullname = [];
    data.map((elemento) => {
      fullname.push(elemento.name + " " + elemento.username)
    })
    var xd = fullname;
    getdata(xd)
  } catch (error) {
    alert("este el erro" + error);
  }
}


function getdata(data) {
  return console.log("esta funcionado carajo" + data)
}

ingreso()




/* Una manera de recorre los objectos por foreach pero la mejor manera con un map
la funcion foreach
user.forEach(function(elemento,index){
  console.log(elemento)
  console.log(index)
});


user.foreach((elemento)=>{console.log(elemento.name + " " + + elemento.lastname)})
*/






