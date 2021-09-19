import React, { useState, useEffect } from "react";
import { updateDataUser, getallsafesitie,getUserById } from "../../../actions/actions";
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
  //const [isLogged, setIsLogged] = useState(true);
  // const [errors, setErrors] = useState({});
  // const [input, setInput] = useState('');
  //const[name, setName] = React.useState('')
  //const[lastname, setLastname] = React.useState('')
  //const[phone, setPhone] = React.useState('')
  //const handleChangeName = (event) => setName(event.target.value)
  //const handleChangeLastname = (event) => setLastname(event.target.value)

  let lugaresSeguros = useSelector((state) => state.stateSitie) //estado con todos los lugares seguros aceptados
  let id_usuario = localStorage.getItem("userId") // me traigo el id del usuario que esta registrado
  let isLogged = useSelector((state) => state.isLogged)
  const userDataById = useSelector((state) => state.userDataById);


//console.log("SOY USER DATAID",userDataById)
  const [input, setInput] = useState({
    name: userDataById?.name || "",
    lastname:userDataById?.lastname || "",
    country: userDataById?.country || "",
    town: userDataById?.town || "",
    phone: userDataById?.phone || "",

  });

  const handleInputChange = (e) => {
    console.log("entre acaaaaaaaaaaa")
    e.preventDefault()
    console.log("HANDLE CHANGE INPUUUUUUT",e.target.value)
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };


  const handleSelectCountry = (e) => {
    console.log(e.target.value);
    setInput({ ...input, country: e.target.value });
  };

  const handleSelectTown = (e) => {
    console.log(e.target.value);
    setInput({ ...input, town: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name && input.lastname) {
      dispatch(updateDataUser(id_usuario, input));
      alert("Se han actualizados sus datos");
    }
  };
  // history.push('/')


  let lugaresSegurosFiltrados = lugaresSeguros.filter(e => e.userId === id_usuario)
  console.log("sooooy lugares filtradossssssssssssssss",lugaresSegurosFiltrados)

  useEffect(() => {
    dispatch(getallsafesitie());
  }, [dispatch]);


  useEffect(()=>{
    console.log("ESTOY EN EL USE EFECT",id_usuario)
    dispatch(getUserById(id_usuario))
  },
  // eslint-disable-next-line
  [dispatch]);



  const handleLogout = (e) => {
    e.preventDefault();
    if (isLogged === true) {
      isLogged = false;
      localStorage.setItem('isLogged',false)
      localStorage.setItem('userId',null)
      localStorage.setItem('token',null)
      history.push("/iniciasesion");
      window.location.reload();
    }
  };

  /* const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteSafePlace(lugaresSegurosFiltrados.id))

  } */

  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={6}
    >
      <FormControl method="POST" id="firstName">
        <FormLabel>Nombres</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          required
          type="text"
          name="name"
          placeholder="nombre"
          value={userDataById.name}
          onChange={(e) => handleInputChange(e)}
        />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Apellidos</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          name="lastname"
          placeholder="apellido"
          value= {userDataById?.lastname}
          onChange={(e) => handleInputChange(e)}
        />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Número de teléfono</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          name="phone"
          value={userDataById.phone}
          placeholder="número de telefóno"
          onChange={(e) => handleInputChange(e)}
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          name="email"
          disabled={true}
          placeholder="suemail@email.com"
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel>Ciudad</FormLabel>
        <Select
          focusBorderColor="brand.blue"
          onChange={(e) => handleSelectTown(e)}
          placeholder="Select city"
          
        >
          <option value="palermo">Palermo</option>
          <option value="recoleta">Recoleta</option>
          <option value="centro">Centro</option>
          <option value="Buenos Aires" selected>
            Buenos Aires
          </option>
        </Select>
      </FormControl>
      <FormControl id="country ">
        <FormLabel>País</FormLabel>
        <Select
          focusBorderColor="brand.blue"
          onChange={(e) => handleSelectCountry(e)}
          placeholder="Select country"
        >
          <option value="Argentina" selected>
            Argentina
          </option>
        </Select>
      </FormControl>
      <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Update
        </Button>
      </Box>
      <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
        <Button onClick={handleLogout} value="Reload Page">
          Logout
        </Button>
      </Box>
      <Box>
        <h1>Mis lugares seguros</h1>
        {lugaresSegurosFiltrados.map((i) => {
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
  );
}
