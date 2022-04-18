import './App.css';

import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from "./Atividade02/crud/Home";
import About from "./Atividade02/crud/About";

import CreateStudents from "./Atividade02/crud/students/CreateStudents";
import ListStudents from "./Atividade02/crud/students/ListStudents";
import EditStudents from "./Atividade02/crud/students/EditStudents";

import Page01 from "./Atividade02/crud/Page01";
import Page02 from "./Atividade02/crud/Page02";

/*
import Questão01 from './Component/Questão01';
import Questão02 from './Component/Questão02';
import Questão03 from './Component/Questão03';
*/
/*
import Arena from './Atividade02/Arena';
import Hero from './Atividade02/Hero';
import Enemy from './Atividade02/Enemy';
import World from './Atividade02/World';
*/


function App() {
    return (
        
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand" style={{paddingLeft:10}}>CRUD</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="navitem">
                    <Link to="/" className="nav-link">Pagina Inicial</Link>
                </li>
                <li className="navitem">
                    <Link to="/createStudents" className="nav-link">Create Students</Link>
                </li>
                <li className="navitem">
                    <Link to="/listStudents" className="nav-link">List Students</Link>
                </li>
                <li className="navitem">
                    <Link to="/about" className="nav-link">Sobre</Link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Students
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
            </ul>
            </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="createStudents" element={<CreateStudents />} />
          <Route path="listStudents" element={<ListStudents />} />
          <Route path="editStudents/:id" element={<EditStudents />} />
        </Routes>
        </div>
  
    );
  }

/*
function App (){
    return(
        <div className='App'>
            <World>
                <Arena Arena = "Dressrosa"/>
                <Hero nome = "Luffy"/>       
                <Enemy nome = "Jesus Burguess"/>
            </World>
            
            <World>
                <Arena Arena = "Wano"/>
                <Hero nome = "Luffy"/>       
                <Enemy nome = "Kaidou"/>
            </World>
        </div>
    )
}
*/

/*
function App (){
    return(
        <div className='App'>
            <Questão02 />
        </div>
    )
}
*/

/*
function App (){
    return(
        <div className='App'>
            <Questão03 />
        </div>
    )
}
*/

export default App;