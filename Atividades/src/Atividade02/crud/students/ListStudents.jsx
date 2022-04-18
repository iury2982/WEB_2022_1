import * as React from "react";
import { Link } from "react-router-dom";

import StudentsTableRow from "./StudentsTableRow";
import { students } from './Data.js'

function ListStudents() {

    /*const students = [
    {id:0, name:"Iury de Oliveira", course: "Sistemas de Informação",ira:6.7},
    {id:1, name:"Gean", course: "Sistemas de Informação",ira:4.5},
    {id:2, name:"Aluisio", course: "Sistemas de Informação",ira:9.0},
    {id:3, name:"Douglas", course: "Sistemas de Informação",ira:7.8}
    ]*/

    function generateTable() {
        if(!students) return
        return students.map(
            (student,i) => {
                return <StudentsTableRow student={student} key={i} />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    List Students
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
                            <th colSpan={2} style={{textAlign:"center"}}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateTable()}
                    </tbody>
                </table>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default ListStudents