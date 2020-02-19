import React,{ Component } from 'react';

import logo from '../assets/tecno_logo.png';
import avatar from '../assets/avatar.png';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div>
                        <img src={logo} alt="Tecnodata Logo"></img>
                        <p>TECNODATA</p>
                        <p className="sub-name"> CONTABILIDADE</p>
                    </div>                  
                    <div>
                        <p>Usuario</p>
                        <i className="fas fa-user-circle"></i>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;