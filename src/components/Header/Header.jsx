
import React from 'react';
import {useHistory} from 'react-router-dom';

import {connect} from 'react-redux';

import './Header.css';

const Header = (props) => {

    let history = useHistory();

    const takemeLogin = () => {
        history.push('/login');
    }

    if(props.user?.name){
        return (
            <div className="componenteHeader">
                    <div>
                        Hola {props.user.name}
                    </div>
                    
            </div>
        )
    }else{
        return (
            <div className="componenteHeader">
                    <div onClick={()=> takemeLogin()} className="boton buttonLogin">
                        LOGIN
                    </div>
                    <div className="boton buttonRegister">
                        REGISTER
                    </div>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        user : state.userReducer.user
    }
}

export default connect(mapStateToProps)(Header);