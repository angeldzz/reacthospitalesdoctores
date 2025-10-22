import React, { Component } from 'react'
import { BrowserRouter,Routes,Route, useParams } from "react-router-dom";
import MenuHospitales from './MenuHospitales';
import Home from "./Home";
import Doctores from './Doctores';
import CreateHospitales from './CreateHospitales';
import Hospitales from './Hospitales';
export default class Router extends Component {
  render() {
    function DoctoresElement(){
        let {idHospital} = useParams();
        return <Doctores idHospital={idHospital}/>
    }
    return (
      <BrowserRouter>
      <MenuHospitales/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctores/:idHospital' element={<DoctoresElement/>}/>
        <Route path='/createHospital' element={<CreateHospitales/>}/>
        <Route path='/hospitales' element={<Hospitales/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
