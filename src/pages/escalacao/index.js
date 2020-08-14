import React, { Component } from 'react'
import api from '../../services/api';

export default class Escalacao extends Component{
    state = {
        capitao ,
        atletas : [],
    };

    async componentDidMount(){
        const {id} = this.props.match.params;
    
        const response = await api.get(`/time/id/${id}`);

        this.setState({time: response.data})
    }

    render(){
        const {atletas} = this.state

        return (
            <div>
                <h1>{this.state.capitao}</h1>
                
                <table>    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                        
                    {atletas.map( atleta => (
                        <tbody key={atleta.atleta_id}>
                            <tr>
                                <td> </td>
                                <td>{atleta.apelido}</td>
                            </tr>
                        </tbody>    
                        
                    )  )}
                </table>
            </div>
        );
    }
}