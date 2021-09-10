import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'
import UpdateBtn from './Update'


export default function AccountSettings() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>Nombres</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Tina" />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Apellidos</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Casey" />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Número de teléfono</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="número de telefóno"
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="yourEmail@email.com"
        />
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
    </Grid>
  )
}



