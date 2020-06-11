import React from "react";
import io from 'socket.io-client';
import './connected.css';

const socket = io.connect('http://localhost:8080', { reconnect: true });


export default class Connected extends React.Component {
    constructor() {
        super();
        this.state = {status: "Not Connected",
                      class: "disconnected"};
    }

    render() {
        socket.on('connect', () => {
            this.setState({status: "Connected", class: "connected"});
            });

        socket.on('disconnect', () => {
         this.setState({status: "Disconnected", class: "disconnected"});
              });

        return (
            <h3 className={this.state.class}>
                {this.state.status}
            </h3>
        );
    }
}



