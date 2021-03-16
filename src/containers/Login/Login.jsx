
import React from 'react';

import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {LOGIN} from '../../redux/types/userType.js';

const Login = (props) => {

    let history = useHistory();

    const logeame = () => {
        //datos fake como que vienen del backend
        let datosFakeBackend = {
            id : '12341234',
            token : '1234mlsfmañlskdmfaslkdfm',
            name : 'Antonio'
        };

        //guardamos en redux
        
        props.dispatch({ type: LOGIN, payload: datosFakeBackend });

        //volvemos redireccionando a HOME
        // setTimeout(()=>{

            history.push('/profile');
        // },2000)
    }

    return (
        <div>
            soy Login
            <button onClick={()=> logeame()}>LOGEARME</button>
        </div>
    )
}



export default connect()(Login);