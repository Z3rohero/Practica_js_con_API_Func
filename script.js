 const  ingreso = async () => {
  try {
    // We are using fetch to get the response
    const response = await
      fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    alert("este el erro" + error);
  }
}

ingreso()
console.log("hello world")