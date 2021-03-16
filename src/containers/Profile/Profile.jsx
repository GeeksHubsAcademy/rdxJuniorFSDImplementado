
import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Profile = (props) => {

    let history = useHistory();

    const [pelicula, setPeliculon] = useState({
        peliculon : {},
        query : ''
    });


    useEffect (()=> {
        
        if(props.criterio !== '' && props.criterio !== pelicula.query){
            console.log("EN PROFILE EL CRITERIO ES... ", props.criterio);
            fetchData();
        }
    });

    const fetchData = async () => {
        //buscamos en la api de peliculas
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${props.criterio}?api_key=cac61624997edd865edf5c5c8caec2a2&language=en-US`);
        setPeliculon({...pelicula, peliculon : res.data, query : props.criterio});
    }

    if(props.user?.token){
        if(props.criterio !== ''){
            return (
                <div>
                    <div>El criterio de busqueda ha sido.... {props.criterio}</div>
                    <div>{JSON.stringify(pelicula)}</div>
                </div>
            )
        }else{
            return (
                <div>ESTAMOS EN PROFILE PERO NO SE HA BUSCADO NADA</div>
            )
        }
        
    }else{
        
        setTimeout(()=>{
            history.push('/');
        },3500);

        return (
            <div>Redirigiendo a home...</div>
            
        )

       
    }
    
}

const mapStateToProps = state => {
    return {
        user : state.userReducer.user,
        criterio : state.userReducer.query
    }
}

export default connect(mapStateToProps)(Profile);