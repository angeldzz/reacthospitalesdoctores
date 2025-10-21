import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import DetallesDoctor from './DetallesDoctor'

export default class Doctores extends Component {
    url = Global.apiDoctores
    state = {
        doctores: [],
        iddoctor:""
    }
    loadDoctores = () => {
        let request = "api/doctores/DoctoresHospital/" + this.props.idHospital
        axios.get(this.url+request).then(response => {
            this.setState({
                doctores: response.data
            })
        })
    }
    componentDidUpdate = (oldProps) => {
        this.setState({idDoctor:""})
        if(oldProps.idHospital !== this.props.idHospital){
            console.log("props cambiado");
            this.loadDoctores();
        }
    }
  render() {
    return (
      <div>
        <table className='table table-striped table-info'>
            <thead>
                <tr>
                    <td>Id Doctor</td>
                    <td>Apellido</td>
                    <td>Especialidad</td>
                    <td>Salario</td>
                    <td>Id Hospital</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.doctores.map((doctor,index) => {
                        return(
                            <tr key={index}>
                                <td>{doctor.idDoctor}</td>
                                <td>{doctor.apellido}</td>
                                <td>{doctor.especialidad}</td>
                                <td>{doctor.salario}</td>
                                <td>{doctor.idHospital}</td>
                                <td><button onClick={() => this.setState({iddoctor:doctor.idDoctor})} className='btn btn-warning'>Detalles doctor</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
            {
                    this.state.iddoctor !== "" &&
                    <DetallesDoctor idDoctor={this.state.iddoctor}/>
            }
      </div>
    )
  }
}
