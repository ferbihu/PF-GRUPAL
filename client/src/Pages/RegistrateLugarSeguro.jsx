import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { postAprobation, byCountrys, byTown, coordenadas } from '.././actions/actions';
import axios from "axios";
import './RegistrateLugarSeguro.css';
import swal from "sweetalert";
const { REACT_APP_BACK_BASE_URL } = process.env



function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = 'Se requiere un nombre';
    }
    else if (!input.country) {
        errors.country = 'Se requiere un pais';
    }
    else if (!input.town) {
        errors.town = 'Se requiere una ciudad';
    }
    else if (!input.street) {
        errors.street = 'Se requiere una calle';
    }
    else if (!input.number) {
        errors.number = 'Se requiere un número';
    }
    else if (!input.postcode) {
        errors.postcode = 'Se requiere un código postal';
    }
    else if (!input.email) {
        errors.email = 'Se requiere un mail';
    }
    else if (!input.telephone) {
        errors.telephone = 'Se requiere un teléfono';
    }
    else if (!input.keyword) {
        errors.keyword = 'Se requiere una palabra clave';
    }
    else if (!input.relation) {
        errors.relation = 'Se requiere una relación';
    }
    return errors;
};

export default function Registrate() {
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = localStorage.getItem("userId")


    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: "",
        country: "",
        town: "",
        street: "",
        number: "",
        postcode: "",
        lat: 1,
        lng: 1,
        email: "",
        telephone: "",
        keyword: "",
        relation: "",
    })

    function camelize(text) {
        return text.replace(/^([A-Z])|[\s-_]+(\w)/g, function (match, p1, p2, offset) {
            if (p2) return p2.toUpperCase();
            return p1.toLowerCase();
        });
    };

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    };


    async function handleSubmit(e) {
        e.preventDefault();
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        var street = camelize(input.street)
        var town = camelize(input.town)
        var country = camelize(input.country)
        const { data } = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${input.number}+${street}+${town}+${country}+View,+CA&key=AIzaSyAbMjLYFsoiuJmlFydaakLeC6uhqYh1iL0`)

        const lat = data.results[0].geometry.location.lat;
        const lng = data.results[0].geometry.location.lng;
       

        dispatch(postAprobation({ ...input, lat, lng }, userId))
        await axios.post(`${REACT_APP_BACK_BASE_URL}/email/registroSafePlace`, input)
        swal("Tu lugar fue registrado", "Verficá tu mail para continuar", "success");    
        setInput({
            name: "",
            country: "",
            town: "",
            street: "",
            number: "",
            postcode: "",
            lat: 0,
            lng: 0,
            email: "",
            telephone: "",
            keyword: "",
            relation: "",
        })
        history.push('/')
    }
    const handleFilterCountrys = (e) => {
        setInput({ ...input, country: e.target.value })
        dispatch(byCountrys(e.target.value));



        let lat = 0;
        let lng = 0;
        setInput({ ...input, lat: lat, lng: lng, country: e.target.value })
        dispatch(coordenadas(lat, lng));

    };
    const handleFilterTown = (e) => {
        setInput({ ...input, town: e.target.value })
        dispatch(byTown(e.target.value));
    };

    return (
        <div className='pageregistro'>
            <a href="/lugaresseguros" className="btnvolver">VOLVER</a>
            <div className='title'>Registro de lugar seguro</div>
            <div className="postlugarSeguro-line"></div>
            <div className='primerparrafo'> <p>Completá el formulario y registrá tu comercio, empresa o entidad.</p> </div>
            <div className='segundoparrafo' >
                <p>Ayudanos a luchar contra la violencia machista y sexual.</p>
            </div>
            <div >
                <form className='rectangulo'>
                    <input className='formname'
                        autoComplete='off'
                        type="text"
                        value={input.name}
                        name="name"
                        placeholder="Nombre"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.name && (
                        <p className='errorname'>{errors.name}</p>
                    )}
                    <select className='formcountry' onChange={e => handleFilterCountrys(e)}>
                        <option value="All">País del lugar seguro</option>
                        <option value="Argentina">Argentina</option>
                        {input.country}</select>
                    <select className='formtown' onChange={e => handleFilterTown(e)}>
                        <option value="All">Ciudad Del lugar seguro</option>

                        <option value="CABA">Ciudad Autónoma de Buenos Aires</option>
                        {input.town}</select>
                    <input className='formstreet'
                        autoComplete='off'
                        type="text"
                        value={input.street}
                        name="street"
                        placeholder="Calle del lugar seguro"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.street && (
                        <p className='errorstreet'>{errors.street}</p>
                    )}
                    <input className='formnumber'
                        autoComplete='off'
                        type="text"
                        value={input.number}
                        name="number"
                        placeholder="Número"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.number && (
                        <p className='errornumber'>{errors.number}</p>
                    )}
                    <input className='formpostcode'
                        autoComplete='off'
                        type="text"
                        value={input.postcode}
                        name="postcode"
                        placeholder="Código postal del lugar seguro"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.postcode && (
                        <p className='errorpost'>{errors.postcode}</p>
                    )}
                    <input className='formmail'
                        autoComplete='off'
                        type="email"
                        value={input.email}
                        name="email"
                        placeholder="nombre@example.com"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.mail && (
                        <p className='erroremail'>{errors.mail}</p>
                    )}
                    <input className='formtelephone'
                        autoComplete='off'
                        type="tel"
                        value={input.telephone}
                        name="telephone"
                        placeholder="Teléfono"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.telephone && (
                        <p className='errorteleph'>{errors.telephone}</p>
                    )}
                    <input className='formkeyword'
                        autoComplete='off'
                        type="text"
                        value={input.keyword}
                        name="keyword"
                        placeholder="Palabra clave"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.keyword && (
                        <p className='errorkeyw'>{errors.keyword}</p>
                    )}
                    {/* eslint-disable-next-line */}
                    <div className="caja"><a href='#' className='cuadradito'>?</a><span className="infoh">La palabra clave la utilizarán para pedir ayuda cuando recurran al lugar. Elegí algo representativo de tu establecimiento.</span></div>
                    <input className='formrelation'
                        autoComplete='off'
                        type="text"
                        value={input.relation}
                        name="relation"
                        placeholder="Cuál es tu relación con el lugar seguro a registrar?"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.relation && (
                        <p className='errorrelation'>{errors.relation}</p>
                    )}

                    <button className="btninput" type='submit' onClick={(e) => handleSubmit(e)}>Registrar</button>
                </form>
            </div>
        </div>
    )
}