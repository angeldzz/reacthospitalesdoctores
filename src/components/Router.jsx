import React, { Component } from 'react'
import { BrowserRouter,Routes,Route, useParams } from "react-router-dom";
import MenuHospitales from './MenuHospitales';
import Home from "./Home";
import Doctores from './Doctores';
import CreateHospitales from './CreateHospitales';
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
        <Route path='/' element={<Home/>}></Route>
        <Route path='/doctores/:idHospital' element={<DoctoresElement/>}></Route>
        <Route path='/createHospital' element={<CreateHospitales/>}></Route>
      </Routes>
      </BrowserRouter>
    )
  }
}
