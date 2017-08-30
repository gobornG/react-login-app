// Need webpack to render in ES6, importing react to give us var component
import React, { Component } from 'react';
import './header.css';

//creating a header class that goes inside this component
class Header extends Component {
    render() {
        //returns what we want to print
        return ( 
            <div className='login-header'> 
                <h1>{this.props.value ? `Welcome, ${this.props.value}` : 'Login'}</h1> 
            </div>
        )
    }
}

//gives other files access to Body component
export default Header;