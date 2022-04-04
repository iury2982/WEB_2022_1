import React, { Component } from "react";

/*
class Questão02 extends Component (){
    render(){
        return(
            <div>
                <h2>Nome: Iury de Oliveira Queiroz</h2>
                <h2>Curso: Sistemas de Informação</h2>
                <h2>Cidade: Quixadá</h2>
            </div>
        )
    }
}
*/

class Questão02 extends Component {
    
    constructor(props){
        super(props)
    }

    render() {
        const {nome,curso,cidade} = this.props   
        return (
            <div>
                <h2>Nome: {nome}</h2>
                <h2>Curso: {curso}</h2>
                <h2>Cidade: {cidade}</h2>
            </div>
        )
    }
}

export default Questão02