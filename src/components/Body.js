// Need webpack to render in ES6, importing react to give us var component
import React, { Component } from 'react';
import './body.css';

//creating a body class that goes inside this component
class Body extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            password:'',
        }
    }

    handleClick(event) {
        event.preventDefault();
        this.props.login(this.state.name);
    }

    handleChange(event) {
        //console.log(event.target.value);
        const state = this.state;
        const key = event.target.name;
        const value = event.target.value;

        state[key] = value;

        this.setState(state);
    }


    render() {
        //returns what we want to print
        //console.log(this.state.name); //prints name, and save every keystroke
        return ( 
            <div className='header-section'> 
                <form className='login-form'>
                    <p>enter name</p>
                <input type='text' placeholder='Enter Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this)}/>
                    <p>Enter Password</p>
                <input type='text' placeholder='Enter Password' name='password' value={this.state.password} onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handleClick.bind(this)}>Login</button>
                </form> 
            </div>
        )
    }
}

//gives other files access to Body component
export default Body;