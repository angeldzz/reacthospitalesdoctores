import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom'

export default class CreateHospitales extends Component {
    state = {
        mensaje: "",
        status:false,
    }
    url = Global.apiHospitales
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    insertHospital = (event) => {
        event.preventDefault();
        let request = "webresources/hospitales/post"
        let id = parseInt(this.cajaId.current.value)
        let camas = parseInt(this.cajaCamas.current.value)
        let hospital = {
            idhospital : id,
            nombre: this.cajaNombre.current.value,
            direccion: this.cajaDireccion.current.value,
            telefono: this.cajaTelefono.current.value,
            camas: camas
        }
        axios.post(this.url+request,hospital).then(response => {
            this.setState({
                mensaje:`Hospital ${hospital.nombre} insertado con exito`,
                status:true
            })
        })
        console.log("Hospital Creado");
    }
    render() {
        return (
            <div>
                <h1>Create Hospitales</h1>
                <h3 className='display-3'>{this.state.mensaje}</h3>
                <form className='form'>
                    <label className='form-label'>Inserte Id Hospital</label>
                    <input className='form-control' type="number" ref={this.cajaId}/>
                    <label className='form-label'>Inserte Nombre</label>
                    <input className='form-control' type="text" ref={this.cajaNombre}/>
                    <label className='form-label'>Inserte Direccion</label>
                    <input className='form-control' type="text" ref={this.cajaDireccion}/>
                    <label className='form-label'>Inserte Caja Telefono</label>
                    <input className='form-control' type="number" ref={this.cajaTelefono}/>
                    <label className='form-label'>Inserte Camas</label>
                    <input className='form-control' type="number" ref={this.cajaCamas}/>
                    <button className='m-4 btn btn-primary' onClick={this.insertHospital}>Create Hospital</button>
                </form>
                {
                    this.state.status === true &&
                    <Navigate to="/hospitales"/>
                }
            </div>
        )
    }
}
