import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      apellido: "",
      edad: "",
      persona: { nombre: "", apellido: "", edad: "" }
    };
  }

  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value
    });
  }

  onChangeApellido(e) {
    this.setState({
      apellido: e.target.value
    });
  }

  onChangeEdad(e) {
    this.setState({
      edad: e.target.value
    });
  }

  guardarPersona(e) {
    e.preventDefault();
    let persona1 = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      edad: this.state.edad
    };
    this.setState({
      persona: persona1
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.guardarPersona(e)}>
          <input
            type="text"
            name="Nombre"
            value={this.state.nombre}
            placeholder="Ingresar Nombre"
            onChange={e => this.onChangeNombre(e)}
          />
          <input
            type="text"
            name="Apellido"
            value={this.state.apellido}
            placeholder="Ingresar Apellido"
            onChange={e => this.onChangeApellido(e)}
          />
          <input
            type="text"
            name="Edad"
            value={this.state.edad}
            placeholder="Ingresar Edad"
            onChange={e => this.onChangeEdad(e)}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p>
            {`Hola, soy ${this.state.persona.nombre} ${
              this.state.persona.apellido
            }
            y tengo ${this.state.persona.edad} años`}
          </p>
        </form>
      </div>
    );
  }
}

export default App;
