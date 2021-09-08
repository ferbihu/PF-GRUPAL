import React, {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch,useSelector} from "react-redux";
import {postAprobation, byCountrys,coordenadas} from '.././actions/actions';
import './RegistrateLugarSeguro.css';



function validate(input) {

    let errors = {};
    if (!input.name) {
      errors.name = 'Se requiere un nombre';
    } else if (!input.lastname) {
      errors.lastname = 'Se requiere un apellido';
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
        errors.direction = 'Se requiere un número';
    }
    else if (!input.postcode) {
        errors.postcode = 'Se requiere un código postal';
    }
    else if (!input.mail) {
        errors.mail = 'Se requiere un mail';
    }  
    else if (!input.telephone) {
        errors.telephone = 'Se requiere un teléfono';
    }
    else if (!input.keyword) {
        errors.keyword = 'Se requiere una palabra clave';
    }
    return errors;
  };

export default function Registrate() {



    const [sitie,setsitie] =useState ([]);
    const dispatch = useDispatch()
    const history = useHistory()
    //const userId = useSelector((state)=> state.userId);
    const userId = 1;


    const [errors,setErrors] = useState({});
    const [input,setInput] = useState({
        name: "",
        lastname: "",
        country: "",
        town: "",
        street: "",
        number: "",
        postcode: "",
        lat:1,
        lng:1,
        email: "",
        telephone: "", 
        keyword: "",
        relation: "",
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
         ...input,
         [e.target.name]: e.target.value
       }));
        console.log(input)
    }


       // `https://maps.googleapis.com/maps/api/geocode/json?address=${input.number}+${input.street}+${input.town}+${input.country}+View,+CA&key=AIzaSyDclWfFnp7AQpJjZQj7E9fsD7j6M9vPhTk`
  
 
       function camelize(text) {
        return text.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2, offset) {
            if (p2) return p2.toUpperCase();
            return p1.toLowerCase();        
        });
        }
    const traductor=useEffect(()=>{
        var street=camelize(input.street)
        var town=camelize(input.town)
        var country=camelize(input.country)
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${input.number}+${street}+${town}+${input.country}+View,+CA&key=AIzaSyDclWfFnp7AQpJjZQj7E9fsD7j6M9vPhTk`)
        .then(resp => resp.json())
        .then((json)=>setsitie(json));
         },[sitie])        

     

    function handleSubmit(e){
        e.preventDefault();

        setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
        }));
        
        dispatch(postAprobation(input,userId))
        alert("Registro creado!")
        setInput({
        name: "",
        lastname: "",
        country: "",
        town: "",
        street: "",
        number: "",
        postcode: "",
        lat:0,
        lng:0,
        email: "",
        telephone: "", 
        keyword: "",
        relation: "", 
        })
        history.push('/')
    }
    const handleFilterCountrys = (e,) => {
        setInput({...input,country:e.target.value})
        dispatch(byCountrys(e.target.value));


        var lat=parseFloat(sitie.results[0].geometry.location.lat)
        var lng=parseFloat(sitie.results[0].geometry.location.lng)

       console.log("conversion",lng);
       console.log("conversion",lat); 

        setInput({...input,lat:lat,lng:lng})
        dispatch(coordenadas(lat,lng));

      };


    return (
        <div className='pageregistro'>
            <div className='title'><h1>Registro de lugar seguro</h1></div>
            <div className="postlugarSeguro-line"></div>
            <div className='primerparrafo'> <p>Completá el formulario y registrá tu comercio, empresa o entidad.</p> </div>
           <div className='segundoparrafo' >
           <p>Ayudanos a luchar contra la violencia machista y sexual.</p>
           </div>
           <div >
           <form className='rectangulo' onSubmit={(e)=>handleSubmit(e)}>
               <input  className='formname'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.name}
                    name= "name"
                    placeholder="Nombre"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.name && (
                        <p className='error'>{errors.name}</p>
                        )}  
               <input className='formlastname'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.lastname}
                    name= "lastname"
                    placeholder="Apellido"
                    onChange={(e)=>handleChange(e)} 
                    />
                    {errors.lastname && (
                        <p className='error'>{errors.lastname}</p>
                    )}
                    <select className='formcountry' onChange={e => handleFilterCountrys(e)}>
                      <option value="All">País del lugar seguro</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Brasil">Brasil</option>
                      <option value="Chile">Chile</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Perú">Perú</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Venezuela">Venezuela</option>
                     </select>
                    
               {/* <input className='formcountry'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.country}
                    name= "country"
                    placeholder="Pais del lugar seguro"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.country && (
                        <p className='error'>{errors.country}</p>
                    )} */}
               <input className='formtown'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.town}
                    name= "town"
                    placeholder="Ciudad del lugar seguro"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.town && (
                        <p className='error'>{errors.town}</p>
                    )}
               <input className='formstreet'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.street}
                    name= "street"
                    placeholder="Calle del lugar seguro"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.street && (
                        <p className='error'>{errors.street}</p>
                    )}
                     <input className='formnumber'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.number}
                    name= "number"
                    placeholder="Número"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.number && (
                        <p className='error'>{errors.number}</p>
                    )}
                         <input className='formpostcode'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.postcode}
                    name= "postcode"
                    placeholder="Código postal del lugar seguro"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.postcode && (
                        <p className='error'>{errors.postcode}</p>
                    )}
               <input className='formmail'
                    autoComplete = 'off'
                    type= "email"
                    value= {input.email}
                    name= "email"
                    placeholder="nombre@example.com"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.mail && (
                        <p className='error'>{errors.mail}</p>
                    )}
               <input className='formtelephone'
                    autoComplete = 'off'
                    type= "tel"
                    value= {input.telephone}
                    name= "telephone"
                    placeholder="Teléfono"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.telephone && (
                        <p className='error'>{errors.telephone}</p>
                    )}
               <input className='formkeyword'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.keyword}
                    name= "keyword"
                    placeholder="Palabra clave"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.keyword && (
                        <p className='error'>{errors.keyword}</p>
                    )}
               <input className='formrelation'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.relation}
                    name= "relation"
                    placeholder="Cuál es tu relación con el lugar seguro a registrar?"
                    onChange={(e)=>handleChange(e)} 
                   />
                    {errors.relation && (
                        <p className='error'>{errors.relation}</p>
                    )}
               <button className="btninput" type='submit'>Registrar</button>
           </form>
           </div>
        </div>
    )
}