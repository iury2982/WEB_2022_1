import './App.css';
/*
import Questão01 from './Component/Questão01';
import Questão02 from './Component/Questão02';
import Questão03 from './Component/Questão03';
*/

import Arena from './Atividade02/Arena';
import Hero from './Atividade02/Hero';
import Enemy from './Atividade02/Enemy';
import World from './Atividade02/World';

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