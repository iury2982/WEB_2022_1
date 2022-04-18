import * as React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <main>
                <h2>Bem Vindo à Pagina Inicial!</h2>
                <p>Ainda estamos em Desenvolvimento, aguarde processos futuros! ;D</p>
            </main>
            <nav>
                <Link to="/about">Sobre</Link>
            </nav>
        </>
    );
}

export default Home