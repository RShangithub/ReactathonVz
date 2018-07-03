import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Clicker extends Component {

    constructor(props) {
        super();

        this.state = {
            count: props.count
        };

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    incrementCount() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    decrementCount() {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    resetCount() {
        this.setState(() => ({ count: 0 }));
    }

    render() {
        return (
            <div className="container">
                <div className="clicker border border-secondary rounded" style={{width:1500, height:600 , alignitems : 'centre'} }>
                    <div className="clicker-display d-flex align-items-center bg-light text-secondary">                        
                        <div className="mx-auto display-1">{this.state.count}</div>
                    </div>
                    <div className="Key-word-search">
                        <label style={{marginRight: '10px'}}>Enter Keywords : <input type="text"/> </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label style={{marginRight: '10px'}}>Category :<select className="category" value={this.state.selectCategoryValue} onChange={this.handleSelectCat} style={{display:'inline-block'}}>
                            <option value="DevRole">Developer</option>
                            <option value="Testrole">Testing</option>
                            <option value="DBA">DBA</option>
                        </select></label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       
                    </div>
                    <div className="Exp-yrs-search">
                        
                        <label style={{marginRight: '10px'}}>Years of Experience :<select className="category" value={this.state.selectCategoryValue} onChange={this.handleSelectCat} style={{display:'inline-block'}}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="above10">Above 10</option>
                        </select></label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       
                    </div>
                    <div>
                        <label>
                            Essay:
                            <textarea value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </div>
                
                    <div className="clicker-button-panel d-flex flex-row">
                        <button className="btn btn-success w-100" onClick={this.incrementCount}>
                            <i className="fa fa-plus fa-2x"></i>
                        </button>
                        <button className="btn btn-warning w-100" onClick={this.resetCount}>
                            <i className="fa fa-refresh fa-2x"></i>
                        </button>
                        <button className="btn btn-danger w-100" onClick={this.decrementCount}>
                            <i className="fa fa-minus fa-2x"></i>
                        </button>
                    </div>     
                </div>
            </div>
        );
    }
}

Clicker.defaultProps = {
    count: 0
};

Clicker.propTypes = {
    count: PropTypes.number
};

export default Clicker;