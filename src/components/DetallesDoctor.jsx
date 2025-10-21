import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class DetallesDoctor extends Component {
    url = Global.apiDoctores
    state = {
        datosDoctor:{}
    }
    loadDoctor = () =>{
        axios.get(this.url+"api/Doctores/" + this.props.idDoctor).then(response => {
            this.setState({
                datosDoctor: response.data
            })
        })
    }
    componentDidUpdate = (oldProps) => {
        if(oldProps.idDoctor !== this.props.idDoctor){
            this.loadDoctor();
        }
    }
    render() {
        return (
            <div>
                <ul>
                    <li>ID Doctor {this.state.datosDoctor.idDoctor}</li>
                    <li>Apellidos {this.state.datosDoctor.apellido}</li>
                    <li>Especialidad {this.state.datosDoctor.especialidad}</li>
                    <li>Salario {this.state.datosDoctor.salario}</li>
                    <li>Id Hospital {this.state.datosDoctor.idHospital}</li>
                </ul>
            </div>
        )
    }
}
