import React,{ Component } from 'react';

import logo from '../assets/logo.png';
import avatar from '../assets/avatar.png';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <img src={logo} alt="Facebook Logo"></img>
                    <div>
                        <p>Usuario</p>
                        <i class="fas fa-user-circle"></i>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;