import React, { Component } from 'react';
import Header from './Header';
import Clicker from './Clicker';

export default class ClickerApp extends Component {

    constructor() {
        super();

        this.state = {
            title: 'Verizon Job Search Engine'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="VZtitle">
                    <Clicker />
                </div>
            </div>
        );
    }
}
