import * as React from "react";
import { Link } from "react-router-dom";

function About (){
    return (
        <>
            <main>
                <h3>
                    <p>
                        Bom está Pagina serve para auxiliar o desenvolvimento da Disciplina WEB, conto com você para transformar-me em uma página de qualidade 
                    </p>
                </h3>

            </main>
            <Link to = '/'>Inicio</Link>
        </>
        );
}

export default About