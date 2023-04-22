import React from "react";
import { CalendarIcon } from '@chakra-ui/icons'
import SlideShow from '../SlideShow/slide';


import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  ChakraProvider,
} from '@chakra-ui/react'
import { BsPerson } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Carrousel } from "../Carrousel/Carrousel";


import { Places } from "../Places/Places";
import { Regions } from "../Regions";


import "./main.css";
import { Box, Button, Card, CardFooter, CardHeader, Container, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react";


const images = ['Images/promocion-img1.jpg', 'Images/promocion-img2.jpg', 'Images/promocion-img3.jpg', 'Images/promocion-img4.jpg', 'Images/promocion-img5.jpg'];


export const Main = () => {
  return (
    <Box as="section" className="main">
      <Box display='flex' justifyContent='center' position='relative' backgroundSize='cover' height='750px' backgroundImage='/Images/image-background-new.jpg'>


        <Container alignItems='center' bottom='2px' position='absolute' height='500px' display={'flex'} justifyContent='center' marginTop={"20px"} >
          <SimpleGrid spacing={5} templateColumns='1fr 1fr'>
            <Card padding='15px' sx={{ w: "600px", bg: "#706A6F" }}>

              <CardHeader>
                <Heading sx={{ color: "white" }} size='md'>Comprá tus pasajes acá</Heading>
              </CardHeader>

              <Box marginBottom='25px'>
                <Box marginBottom='12px' gap='8px' alignItems='center' display='flex'>
                  <FiMapPin color="white" />
                  <Text sx={{ color: "white" }}>Origen</Text>
                </Box>
                <Input focusBorderColor="#FF385C" bg='white' placeholder='Ingrese ciudad o terminal' />
              </Box>

              <Box marginBottom='25px'>
                <Box marginBottom='12px' gap='8px' alignItems='center' display='flex'>

                  <FiMapPin color="white" />
                  <Text sx={{ color: "white" }}>Destino</Text>
                </Box>
                <Input focusBorderColor="#FF385C" bg='white' placeholder='Ingrese ciudad o terminal' />
              </Box>

              <SimpleGrid columns={[2, null, 3]} spacing='40px'>
                <Box height='80px'>
                  <Box paddingBottom='8px' gap='15px' alignItems='center' display='flex'>
                    <CalendarIcon color='white' />
                    <Text color="white">Partida</Text>

                  </Box>

                  <Input focusBorderColor="#FF385C" bg='white' opacity='0.5' cursor='pointer'
                    placeholder="Seleccione fecha"
                    size="md"
                    type="datetime-local"
                  />
                </Box>
                <Box height='80px'>
                  <Box paddingBottom='8px' gap='15px' alignItems='center' display='flex'>
                    <CalendarIcon color='white' />
                    <Text color="white">Regreso (opcional)</Text>
                  </Box>
                  <Input focusBorderColor="#FF385C" bg='white' placeholder='Seleccione Fecha'>

                  </Input>

                </Box>
                <Box height='80px'>
                  <Box paddingBottom='8px' gap='15px' alignItems='center' display='flex'>
                    <Text color="white">Pasajeros</Text>
                    <BsPerson color="white" />
                  </Box>
                  <NumberInput focusBorderColor="#FF385C" borderRadius='50px' bg='white' size='sm' maxW={20} defaultValue={10} min={1}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Box>

              </SimpleGrid>

              <CardFooter>
                <Button  borderRadius='50px' _hover={{ bg: 'red.400', color: "white" }} color='black' w='100%'>BUSCAR PASAJES</Button>
              </CardFooter>
            
            </Card>



{/* 
            <Card width='100%' alignItems='center' sx={{ w: "700px", }}>

              <ChakraProvider  >
                <SlideShow images={images} />
              </ChakraProvider>
            </Card> */}



          </SimpleGrid>



        </Container>
      </Box>


      <section className="sponsor">
        <div className="sponsor__w">
          <h2 className="sponsor__t">
            "¡Comprá en cuotas"
            <br />y empezá a viajar!
          </h2>
        </div>
        <Carrousel />

        <h2 className="sponsor__t">
          Te invitamos a conocer algunos <br />
          de nuestros destinos
        </h2>
        <Places />
        <h2 className="sponsor__t">Viaja sin limites</h2>
        <Regions />

        {/* <section className="outside">
          <h2 className="outside__p">Viajá sin límites</h2>
          <div className="outside__w">
            <div className="outside__card-norte">
              <div className="outside__wrapper-p">
                <p className="ouside__p">Norte</p>
              </div>
            </div>
            <div className="outside__card-litoral">
              <div className="outside__wrapper-p">
                <p className="ouside__p">Litoral</p>
              </div>
            </div>
            <div className="outside__card-bs">
              <div className="outside__wrapper-p">
                <p className="+">Buenos Aires</p>
              </div>
            </div>
            <div className="outside__card-cordoba">
              <div className="outside__wrapper-p">
                <p className="ouside__p">Cordoba</p>
              </div>
            </div>
            <div className="outside__card-brasil">
              <div className="outside__wrapper-p">
                <p className="ouside__p">Brasil</p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="download">
          <video
            className="download__video"
            src="https://carontestudio.com/img/f4.mp4"
            autoPlay
            muted
            loop
            poster="https://carontestudio.com/img/contacto.jpg"
          ></video>
          <div className="download__wrapper-video">
            <div className="download__g">
              <h2 className="download__t">
                Te acompañamos con la mejor <br /> app para comprar tus pasajes
                <br /> o visitar desde tu sofa la mejor opcion para tu viaje
              </h2>
              <div className="download__w">
                <a href=""></a>
                <a className="download__a">
                  <img className="download__img-as" />
                </a>
                <a className="download__a">
                  <img className="download__img-gp" />
                </a>
              </div>
            </div>
            <div className="download__g">
              <p className="download__p">
                Descubre la app que todo el mundo usa
              </p>
              <img className="download__img" />
            </div>
          </div>
        </section>
      </section>
    </Box>
  );
};
