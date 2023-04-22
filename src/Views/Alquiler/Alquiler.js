import React from "react";

import { Container, Box, Link, Text, Input, CardBody, Card, Select, RadioGroup, Stack, Radio, Textarea, Grid, GridItem, Button } from '@chakra-ui/react'

// import { Link } from "react-router-dom";

import "./alquiler.css";

export const Alquiler = () => {


  const [check, setCheck] = React.useState('1')
  return (
    <>
      <Container maxW='container.xl' color='#262626'>
        <Box >

          <Text mb='20px  ' textAlign='center' fontSize='5xl'>Viajes Especiales</Text>
          <Text fontSize='xl'>Este servicio de “Viajes Especiales” te permite contratar un bus, minibus o combis, para uso completo y exclusivo de grupos de al menos 10 pasajeros de acuerdo a tus necesidades. Te ofrecemos total libertad de elección en cuanto a destinos, servicios y cantidad de personas. El objetivo es facilitar la organización de viajes grupales con fines deportivos, empresariales, políticos, conferencias, recitales o cualquier evento. Nuestro equipo te ayudará a organizar el viaje con el mejor servicio y al precio más conveniente.</Text>
          <Text mb='15px'>
            Para solicitar presupuesto u obtener más información completá la planilla o enviá E-mail a {' '}
            <Link color='#E53E3E' href='https://alize-viajes-y-turismo.vercel.app/'>
              https://alize-viajes-y-turismo.vercel.app/
            </Link>
          </Text>
          <Box mt='40px' mb='40px' backgroundColor='#FF385C' borderRadius='50px'>
            <Text textAlign='center' color='white' fontSize='4xl'>​Formulario para la cotización de su viaje </Text>

            <Card p='50px' border='solid 2px #FF385C'>
              <CardBody >
                <Text fontSize='1xl'>* Campos obligatorios</Text>
                <Box display='flex' justifyContent='center'>
                  <Input mb='80px' justifyContent='center' textAlign='center' w='20%' placeholder='Cantidad de pasajeros' />
                </Box>
                <Box mb='20px' display='flex' justifyContent='center'>
                  <Text mb='40px' w='30%' display='flex' justifyContent='center' borderBottom='solid 1px gray' fontSize='2xl'>Origen</Text>

                </Box>
                <Box mb='40px' display='flex' gap='20'>
                  <Input placeholder='Calle' />
                  <Input placeholder='Ciudad' />
                  <Input placeholder='Provincia' />
                  <Input placeholder='Pais' />
                </Box>
                <Box display='flex' justifyContent='center'>

                  <Text mb='40px' w='30%' display='flex' justifyContent='center' borderBottom='solid 1px gray' fontSize='2xl'>Destino</Text>
                </Box>
                <Box mb='40px' display='flex' gap='20'>
                  <Input placeholder='Calle' />
                  <Input placeholder='Ciudad' />
                  <Input placeholder='Provincia' />
                  <Input placeholder='Pais' />
                </Box>
                <Box display='flex' justifyContent='center' >

                  <Text mb='40px' w='30%' display='flex' justifyContent='center' borderBottom='solid 1px gray' fontSize='2xl'>Salida desde el origen</Text>
                </Box>
                <Box mb='40px' display='flex' gap='20'>
                  <Input placeholder='Seleccione Fecha' />
                  <Select placeholder='Momento de partida'>
                    <option value='option1'>Mañana</option>
                    <option value='option2'>Tarde</option>
                    <option value='option3'>Noche</option>
                  </Select>
                  <Input placeholder='Horario' />
                </Box>
                <Box display='flex' justifyContent='center' >

                  <Text mb='40px' w='30%' display='flex' justifyContent='center' borderBottom='solid 1px gray' fontSize='2xl'>Partida desde el destino</Text>
                </Box>
                <Box mb='40px' display='flex' gap='20'>
                  <Input placeholder='Seleccione Fecha' />
                  <Select placeholder='Momento de partida'>
                    <option value='option1'>Mañana</option>
                    <option value='option2'>Tarde</option>
                    <option value='option3'>Noche</option>
                  </Select>
                  <Input placeholder='Horario' />
                </Box>

                <Box mb='40px' display='flex' justifyContent='center'>
                  <Text mb='40px' w='30%' display='flex' justifyContent='center' borderBottom='solid 1px gray' fontSize='2xl'>Una vez en destino</Text>
                </Box>



                <Grid mb='80px' templateColumns='repeat(2, 1fr)' gap={6}>
                  <GridItem w='100%'  >
                    <Text gap='20' display='flex' justifyContent='center' borderBottom='solid 1px gray' fontSize='2xl'>¿Movimientos en destino?
                      <RadioGroup onChange={setCheck} value={check}>
                        <Stack direction='column'>
                          <Radio value='1'>Si</Radio>
                          <Radio value='2'>No</Radio>
                        </Stack>
                      </RadioGroup>


                    </Text>
                  </GridItem>
                  <GridItem w='100%'  >
                    <Textarea placeholder='Ingresá la descripción de los movimientos que van a hacer cuando lleguen a destino' />
                  </GridItem>

                </Grid>


                <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                  <GridItem mb='30px' w='100%' h='10'>
                    <Text>¿El coche debe permanecer con el grupo?</Text>
                    <Select placeholder='Seleccione'>
                      <option value='option1'>1</option>
                      <option value='option2'>2</option>


                    </Select>
                  </GridItem>
                  <GridItem w='100%' h='10'>
                    <Text>Categoria del coche</Text>
                    <Select placeholder='Seleccione'>
                      <option value='option1'>Comun con aire</option>
                      <option value='option2'>Semicama</option>
                      <option value='option3'>Cama</option>
                      <option value='option3'>Suite</option>
                      <option value='option3'>Ejecutivo</option>
                    </Select>
                  </GridItem>
                  <GridItem w='100%' h='10'>
                    <Text>Catering a bordo</Text>
                    <Select placeholder='Seleccione'>
                      <option value='option1'>Cafe / Jugo</option>
                      <option value='option2'>Viandas</option>
                      <option value='option3'>Comidas en parador</option>
                      <option value='option3'>Sin catering</option>
                    </Select>
                  </GridItem>

                  <GridItem w='100%' h='10'>
                    <Text>¿Alojan y proveen alimentos a los choferes?</Text>
                    <Select placeholder='Seleccione'>
                      <option value='option1'>Si</option>
                      <option value='option2'>No</option>
                    </Select>
                  </GridItem>

                  <GridItem w='100%' h='10'>
                    <Text>Caracteristicas de los pasajeros</Text>
                    <Select placeholder="Seleccione" >
                      <option value='option1'>Escolares y/o jovenes</option>
                      <option value='option2'>Adultos</option>
                      <option value='option3'>Jubilados</option>
                      <option value='option3'>Familias</option>
                      <option value='option3'>Otros</option>
                    </Select>
                  </GridItem>




                </Grid>

              </CardBody>
              <Box mt='50px' mb='40px' display='flex' justifyContent='center'>
                <Text mb='40px' w='50%' display='flex' justifyContent='center' borderBottom='solid 1px gray' fontSize='2xl'>Institucion para la que pide el servicio</Text>
              </Box>
              <Box display='flex' justifyContent='center'>
                <Input mb='80px' justifyContent='center' textAlign='center' w='20%' placeholder='Nombre de la institucion' />
              </Box>
              <Box mb='40px' display='flex' gap='20'>
                <Input placeholder='Calle' />
                <Input placeholder='Ciudad' />
                <Input placeholder='Provincia' />
                <Input placeholder='Pais' />
              </Box>
              <Box mt='50px' mb='40px' display='flex' justifyContent='center'>
                <Text mb='40px' w='50%' display='flex' justifyContent='center' borderBottom='solid 1px gray' fontSize='2xl'>Datos para contacto</Text>
              </Box>
              <Box display='flex' justifyContent='center'>
                <Input mb='80px' justifyContent='center' textAlign='center' w='20%' placeholder='Nombre y apellido' />
              </Box>
              <Box mb='40px' display='flex' gap='20'>
                <Input placeholder='Calle' />
                <Input placeholder='Ciudad' />
                <Input placeholder='Provincia' />
                <Input placeholder='Pais' />
              </Box>
              <Box mb='40px' display='flex' gap='20'>
                <Input placeholder='Telefono de contacto' />
                <Input placeholder='Mail de contacto' />
                <Input placeholder='Provincia' />
                <Input placeholder='Pais' />
              </Box>
              <Box mt='50px' mb='40px' display='flex' justifyContent='center'>
                <Text mb='40px' w='50%' display='flex' justifyContent='center' borderBottom='solid 1px gray' fontSize='2xl'>Observaciones</Text>
              </Box>
              <Textarea placeholder='Observaciones...' />
              <Box mt='50px' mb='40px' display='flex' justifyContent='center'>
                <Text mb='40px' w='50%' display='flex' justifyContent='center' borderBottom='solid 1px gray' fontSize='2xl'>¿Como nos conocio?</Text>
              </Box>
              <Select placeholder='Seleccione'>
                <option value='option1'>Redes Sociales</option>
                <option value='option2'>Por buscadores de internet (Google, Yahoo, Bing)</option>
                <option value='option1'>En la pagina oficial de alize</option>
                <option value='option1'>Por capacitacion para turismo</option>
                <option value='option1'>Por recibir un mail con la noticia</option>
                <option value='option1'>Por conocidos o referidos</option>
                <option value='option1'>Otros</option>
              </Select>
              <Button mt='40px' fontSize='14px' borderRadius='25px' w='20%' colorScheme='blackAlpha'>Enviar Solicitud</Button>
            </Card>
          </Box>
          <Text mb='30px' fontSize='16px'>Para mas informacion sobre contratacion de unidades especiales, envie sus numeros de telefono a viajesespeciales@alizeviajesyturismo.com y lo llamaremos a la brevedad.</Text>
        </Box>
      </Container>

    </>
  )

}