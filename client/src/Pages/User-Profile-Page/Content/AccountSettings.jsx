import React, { useState } from "react";
import { updateDataUser } from "../../../actions/actions";
import { useDispatch, useSelector  } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
  Box,
  Button,
} from "@chakra-ui/react";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = 'Se requiere un nombre';
  }
   else if (!input.lastname) {
  errors.lastname = 'Se requiere un apellido';
  }
  else if (!input.email) {
  errors.email = 'Se requiere un email';
  }
  return errors;
};

export default function AccountSettings() {
const dispatch = useDispatch();
const history = useHistory();
const [isLogged, setIsLogged] = useState(true);
const [errors, setErrors] = useState({});
const [input, setInput] = useState('');


//const {userId} = useSelector((state) => state.userId)


const handleInputChange = (e) => {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
}


 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(input)
  setErrors(validate({
      ...input,
      [e.target.name]:e.target.value
  }));
  if(input.name && input.lastname && input.email) {
    dispatch(updateDataUser(input));
    
    alert('Se han actualizados sus datos')
   
    
  }
}  

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
    <FormControl id="firstName">
      <FormLabel>Nombres</FormLabel>
      <Input focusBorderColor="brand.blue"  
      type="text" 
      name='name'
      placeholder="nombre"  
      value={input.name}
      onChange={handleInputChange} />
      {errors.name && (
                      <p className='error'>{errors.name}</p>
                  )}
    </FormControl>
    <FormControl id="lastName">
      <FormLabel>Apellidos</FormLabel>
      <Input focusBorderColor="brand.blue" 
      type="text"
      name='lastname' 
      placeholder="apellido" 
      value={input.lastname}
      onChange={handleInputChange} />
      {errors.lastname && (
                      <p className='error'>{errors.lastname}</p>
                  )}
    </FormControl>
    <FormControl id="phoneNumber">
      <FormLabel>Número de teléfono</FormLabel>
      <Input
        focusBorderColor="brand.blue"
        type="tel"
        name='phone'
        value={input.phone}
        placeholder="número de telefóno"
        onChange={handleInputChange}
      />
    </FormControl>
    <FormControl id="emailAddress">
      <FormLabel>Email</FormLabel>
      <Input
        focusBorderColor="brand.blue"
        type="email"
        name='email'
        value={input.email}
        placeholder="suemail@email.com"
        onChange={handleInputChange}
      />
       {errors.email && (
                      <p className='error'>{errors.email}</p>
                  )}
    </FormControl>
    <FormControl id="city">
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
    <FormControl id="country">
      <FormLabel>País</FormLabel>
      <Select focusBorderColor="brand.blue" placeholder="Select country">
        <option value="america" selected>
          Argentina
        </option>
      </Select>
    </FormControl>
    <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
    <Button onClick={handleSubmit}>
      Update
    </Button>
  </Box>
  <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
    <Button  onClick={handleLogout}>
     Logout
    </Button>
    </Box>
  </Grid>
)
}

