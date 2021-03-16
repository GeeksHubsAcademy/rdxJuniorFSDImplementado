
import React, {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import './Header.css';
import { LOGOUT, SEARCH } from '../../redux/types/userType';

const Header = (props) => {

    let history = useHistory();

    //HOOKS

    const [peliculaId, setPelicula] = useState({
        pelicula : ''
    });

    //HANDLERS

    const manejaEstado = (ev) => {
        setPelicula({...peliculaId, [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value});
        
    }

    const takemeLogin = () => {
        history.push('/login');
    }

    const logOut = () => {
        //procedemos a borrar los datos de usuario 
        //de RDX y así conseguiremos el logOut

        props.dispatch({ type: LOGOUT, payload : {}});

        setTimeout(()=> {
            history.push('/');
        },500);
    }

    const busca = () => {
        
        props.dispatch({type : SEARCH, payload : peliculaId.pelicula});
        history.push('/profile');
    }

    if(props.user?.name){
        return (
            <div className="componenteHeader">
                    <div><input type="text" maxLength="30" placeholder="" name="pelicula" onChange={manejaEstado}></input>
                    <button onClick={()=> busca()}>BUSCA</button></div>
                    <div className="nombreUsuario">
                        Hola {props.user.name}
                    </div>
                    <div onClick={()=> logOut()} className="boton">
                        LOGOUT
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