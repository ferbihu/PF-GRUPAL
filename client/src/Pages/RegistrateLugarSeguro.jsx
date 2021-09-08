import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch,useSelector} from "react-redux";
import {postAprobation, byCountrys} from '.././actions/actions';
import './RegistrateLugarSeguro.css';


function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Se requiere un nombre';
    }
    else if (!input.country) {
        errors.country = 'Se requiere seleccionar un país';
        }
    else if (!input.town) {
    errors.town = 'Se requiere una ciudad';
    }
    else if (!input.street) {
        errors.street = 'Se requiere una calle';
<<<<<<< HEAD
        }
    else if (!input.number) {
        errors.number = 'Se requiere un número';
=======
    }
    else if (!input.number) {
        errors.direction = 'Se requiere un número';
    }
    else if (!input.postcode) {
        errors.postcode = 'Se requiere un código postal';
>>>>>>> ffb20043a4b0f42ecaba1c12c0b3941c026199c1
    }
    else if (!input.email) {
        errors.mail = 'Se requiere un mail';
    }
    // else if (!input.postcode) {
    //     errors.postcode = 'Se requiere un código postal';
    // }
    else if (!input.telephone) {
        errors.telephone = 'Se requiere un teléfono';
    }
    else if (!input.keyword) {
        errors.keyword = 'Se requiere una palabra clave';
    }
    else if (!input.relation) {
        errors.relation= 'Se requiere una relación con el lugar seguro';
    }
   return errors;
};


export default function Registrate() {
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector((state)=> state.userId);



    const [errors,setErrors] = useState({});
    const [input,setInput] = useState({
        name: "",
        country: "",
        town: "",
        street: "",
        number: "",
        postcode: "",
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
    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
        }));
        dispatch(postAprobation(input,userId))
        alert("Registro creado!")
        setInput({
        name: "",
        country: "",
        town: "",
        street: "",
        number: "",
        postcode: "",
        email: "",
<<<<<<< HEAD
        telephone: 0,
=======
        telephone: "", 
>>>>>>> ffb20043a4b0f42ecaba1c12c0b3941c026199c1
        keyword: "",
        relation: "",
        })
        history.push('/')
    }
    const handleFilterCountrys = (e) => {
        setInput({...input,country:e.target.value})
        dispatch(byCountrys(e.target.value));
      };
      ;

    return (
        <div className='pageregistro'>
            <div className='title'><h1>Registro de lugar seguro</h1></div>
<<<<<<< HEAD
            <div className='postlugarSeguro-line'></div>
=======
            <div className="postlugarSeguro-line"></div>
>>>>>>> ffb20043a4b0f42ecaba1c12c0b3941c026199c1
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
                    placeholder="Nombre del lugar seguro"
                    onChange={(e)=>handleChange(e)}
                    />
                     {errors.name && (
                        <p className='error'>{errors.name}</p>
                        )}
                    <select 
                     className='formcountry' onChange={e =>  handleFilterCountrys(e)}>
                      <option selected value ="All">País del lugar seguro</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Brasil">Brasil</option>
                      <option value="Chile">Chile</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Perú">Perú</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Venezuela">Venezuela</option>
                      {input.country}  </select>
            

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
<<<<<<< HEAD

                     <input className='formnumber'
=======
                         <input className='formpostcode'
>>>>>>> ffb20043a4b0f42ecaba1c12c0b3941c026199c1
                    autoComplete = 'off'
                    type= "text"
                    value= {input.postcode}
                    name= "postcode"
<<<<<<< HEAD
                    placeholder="Código postal"
                    onChange={(e)=>handleChange(e)}
=======
                    placeholder="Código postal del lugar seguro"
                    onChange={(e)=>handleChange(e)} 
>>>>>>> ffb20043a4b0f42ecaba1c12c0b3941c026199c1
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
                    <div className="caja"><a href='#' className='signo'>?</a><span className="info">La palabra clave la utilizarán para pedir ayuda cuando recurran al lugar. Elegí algo representativo de tu establecimiento.</span></div>

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
                     <button className="btninput" type="submit" disabled={!input.name || !input.town || !input.street  || !input.number || !input.postcode  || !input.email || !input.telephone || !input.keyword || !input.relation || !input.country } >Registrar</button>
           </form>
           </div>
        </div>
    )
}