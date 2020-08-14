import React, {Component} from 'react';
import api from '../../services/api';

export default class Parcial extends Component{
state = {
    capitao : [],
    atletas : []
};

    componentDidMount(){
        this.loadTime();
    }

    loadTime = async () => {
        const response = await api.get('/time/id/1149424');  
        this.setState({
            capitao : response.data.capitao_id,
            atletas : response.data.atletas
        })
        console.log(response);
    };

    render (){
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