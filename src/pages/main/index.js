import React, {Component} from 'react';
import api from '../../services/api';
import Menu from '../../components/Menu';

export default class Main extends Component{

    state = {
        listaNomes : ["nextevolution","tom29","gbcruz-fc","bacanawel-fc",
        "vaiquemquefuteboleme","marzulo-fc","velocirraptorr-fc",
        "porkpig","ibis-sport-club-3.0","athletico-tabajara-fc",
        "ec-nick-futebol-arte","tc-breezy-fc","s.e-elektra-fc",
        "rompe-tormenta-s-a","vai-zica-fc","rapaduras","edmais"],
        times : []
    };

    componentDidMount(){
        this.state.listaNomes.map( time => {
            this.loadTime(time);
        });
    }

    async loadTime(time){
        //const response = await api.get(`/time/slug/${time}`);
        const response = await api.get(`/times?q=${time}`);
        const {times} = this.state;

        const timesTemp = times;
        timesTemp.push( response.data[0] );

        this.setState ({ times : timesTemp });
    }

    render (){
        const { times } = this.state;
        console.log(times)

        return (

            <div className="Navbar">
                <Menu/>

                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Time</th>
                            <th>Cartola</th>
                        </tr>
                    </thead>
                    <tbody>
                        {times.map( time => (                         
                            <tr key={time.time_id}>
                                <td><img alt="escudo" src={time.url_escudo_png} width="30" height="30" /> </td>
                                <td>{time.nome}</td>
                                <td>{time.nome_cartola}</td>
                            </tr>
                        ) )}
                    </tbody>
                </table>
            </div>
        );
    }
}