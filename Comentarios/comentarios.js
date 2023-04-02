class Comentarios {
  firstname;
  lastname;
  email;
  coment;

  constructor(firstname, lastname, email, coment) {
    this.firstname = firstname
    this.lastname = lastname;
    this.email = email;
    this.coment = coment;
  }
  comentar() {
    if (this.firstname === "" && this.lastname === "" && this.email === "" && this.coment === "") {
      return alert("Todos los campos se encuentran vacios.")
    }
    else if (this.firstname === "" || this.lastname === "" || this.email === "" || this.coment === "") {
      return alert("Algun campo se encuentra vacio.")
    }
    else {
      return alert(`El comentario: ${this.coment}. ha sido enviado con exito`)
    }
  }
}

function comentar2(){
  
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const coment = document.getElementById("coment").value;

  let comentar1 = new Comentarios(firstname, lastname, email, coment)
  comentar1.comentar();
}




