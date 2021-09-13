import React, { useState, useEffect } from "react";
import { updateDataUser, getallsafesitie } from "../../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MySafePlace from "../../../Components/PlaceAprobation/MySafePlace";


import {
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
  Box,
  Button,
} from "@chakra-ui/react";


export default function AccountSettings() {
const dispatch = useDispatch();
const history = useHistory(); 
// const id = useSelector((state)=> state.userId);
const [isLogged, setIsLogged] = useState(true);
// const [errors, setErrors] = useState({});
// const [input, setInput] = useState('');
const[name, setName] = React.useState('')
const[lastname, setLastname] = React.useState('')
const[email, setEmail] = React.useState('')
const[phone, setPhone] = React.useState('')
const handleChangeName = (event) => setName(event.target.value)
const handleChangeLastname = (event) => setLastname(event.target.value)
const handleChangeEmail = (event) => setEmail(event.target.value)

    const [input,setInput] = useState({
        name: "",
        lastname: "",
        email: "",
        country: "",
        town: "",
        phone: "",
       
    })

const handleInputChange = (e) => {
  e.preventDefault()
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
}


 const handleSubmit = (e) => {
  e.preventDefault()
   if(name && lastname && email) {
    dispatch(updateDataUser());
    alert('Se han actualizados sus datos')  
 }
} 
// history.push('/')
let lugaresSeguros = useSelector((state) => state.stateSitie) //estado con todos los lugares seguros aceptados
let id_usuario = useSelector((state) => state.userId) // me traigo el id del usuario que esta registrado

let lugaresSegurosFiltrados = lugaresSeguros.filter(e => e.userId === id_usuario)
console.log(lugaresSegurosFiltrados)

useEffect(() => {
  dispatch(getallsafesitie())
}, [dispatch]);


const handleLogout = (e) => {
  e.preventDefault();
  if(isLogged === true) {
    setIsLogged(false)
    history.push('/iniciasesion')
  }
}


return (
  <Grid 
    templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
    gap={6}
  >
    <FormControl method='POST' onSubmmit={(e)=>handleChangeName(e)} id="firstName">
      <FormLabel>Nombres</FormLabel>
      <Input focusBorderColor="brand.blue"  
      required
      type="text" 
      name='name'
      placeholder="nombre"  
      value={name}
      onChange={({target}) => setName(target.value)}/>
    </FormControl>
    <FormControl id="lastName"  onSubmmit={(e)=>handleChangeLastname(e)}>
      <FormLabel>Apellidos</FormLabel>
      <Input focusBorderColor="brand.blue" 
      type="text"
      name='lastname' 
      placeholder="apellido" 
      value={lastname}
      onChange={({target}) => setLastname(target.value)}/>
    </FormControl>
    <FormControl id="phoneNumber"  onSubmmit={(e)=>handleInputChange(e)}>
      <FormLabel>Número de teléfono</FormLabel>
      <Input
        focusBorderColor="brand.blue"
        type="tel"
        name='phone'
        value={phone}
        placeholder="número de telefóno"
        onChange={({target}) => setPhone(target.value)}/>
    </FormControl>
    <FormControl id="emailAddress"  onSubmmit={(e)=>handleChangeEmail(e)}>
      <FormLabel>Email</FormLabel>
      <Input
        focusBorderColor="brand.blue"
        type="email"
        name='email'
        value={email}
        placeholder="suemail@email.com"
        onChange={({target}) => setEmail(target.value)}/>
    </FormControl>
    <FormControl id="city"  onSubmmit={(e)=>handleInputChange(e)}>
      <FormLabel>Ciudad</FormLabel>
      <Select focusBorderColor="brand.blue" placeholder="Select city">
        <option value="palermo">Palermo</option>
        <option value="recoleta">Recoleta</option>
        <option value="centro">Centro</option>
        <option value="..." selected>
          Buenos Aires
        </option>
      </Select>
    </FormControl>
    <FormControl id="country ">
      <FormLabel>País</FormLabel>
      <Select focusBorderColor="brand.blue" placeholder="Select country">
        <option value="america" selected>
          Argentina
        </option>
      </Select>
    </FormControl>
    <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
    <Button type="submit"  onClick={(e) => handleSubmit(e)}>
      Update
    </Button>
  </Box>
  <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
    <Button  onClick={handleLogout}>
     Logout
    </Button>
    </Box>
    <Box>
      <h1>Mis lugares seguros</h1>
            {lugaresSegurosFiltrados.map(i => {
            return (
            <Box>  
                <MySafePlace
                  name={i.name}
                  country={i.country}
                  town={i.town}
                  telephone={i.telephone}
                  email={i.email}
                  street={i.street}
                  postcode={i.postcode}
                  number={i.number}
                  keyword={i.keyword}
                  relation={i.relation}
                  id={i.id}
               ></MySafePlace>
              
               </Box>

           );
          })}
      </Box>
  </Grid>
)
}