import React, { useState } from "react";
import { updateDataUser } from "../../../actions/actions";
import { useDispatch } from "react-redux";
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
const [input, setInput] = useState({
  name: '', 
  lastname:'', 
  email:'', 
  phone:'', 
  town:'', 
  country:'',
});

const handleInputChange = (e) => {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = (e) => {
  e.preventDefault();
  setErrors(validate({
      ...input,
      [e.target.name]:e.target.value
  }));
  if(input.name && input.lastname && input.email) {
    dispatch(updateDataUser(input));
    setInput({ 
    name: '', 
    lastname:'', 
    email:'', 
    phone:'', 
    town:'', 
    country:'',
  });
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
      <Input focusBorderColor="brand.blue"  type="text" value= {input.name} placeholder="nombre"  onChange={handleInputChange} />
      {errors.name && (
                      <p className='error'>{errors.name}</p>
                  )}
    </FormControl>
    <FormControl id="lastName">
      <FormLabel>Apellidos</FormLabel>
      <Input focusBorderColor="brand.blue" type="text" value= {input.lastname} placeholder="apellido"  onChange={handleInputChange} />
      {errors.lastname && (
                      <p className='error'>{errors.lastname}</p>
                  )}
    </FormControl>
    <FormControl id="phoneNumber">
      <FormLabel>Número de teléfono</FormLabel>
      <Input
        focusBorderColor="brand.blue"
        type="tel"
        value= {input.phone} 
        placeholder="número de telefóno"
        onChange={handleInputChange}
      />
    </FormControl>
    <FormControl id="emailAddress">
      <FormLabel>Email</FormLabel>
      <Input
        focusBorderColor="brand.blue"
        type="email"
        value= {input.email} 
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
        <option value="Caracas">Caracas</option>
        <option value="Bogotá">Bogotá</option>
        <option value="Lima">Lima</option>
      </Select>
    </FormControl>
    <FormControl id="country">
      <FormLabel>País</FormLabel>
      <Select focusBorderColor="brand.blue" placeholder="Select country">
        <option value="america" selected>
          Argentina
        </option>
        <option value="venezuela">Venezuela</option>
        <option value="colombia">Colombia</option>
        <option value="perú">Perú</option>
        <option value="chile">Chile</option>
      </Select>
    </FormControl>
    <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
    <Button  type='submit' disabled={ !input.name || !input.lastname || !input.email } onSubmit={handleSubmit} > Update</Button>
  </Box>
  <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
    <Button  onClick={handleLogout}>
     Logout
    </Button>
    </Box>
  </Grid>
)
}

