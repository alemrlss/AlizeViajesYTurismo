import React from "react";
import { useState } from "react";
import { BsSuitHeart } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Box, CloseButton, Divider, Icon, InputLeftElement, Text, useDisclosure } from "@chakra-ui/react";
import { firebase } from 'firebase/app'




import "./header.css";
import { Link } from "react-router-dom";

import { Button, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";



export const Header = ({ setIsOpenMenu, setIsFavorite }) => {


  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const onClose1 = () => setIsOpen1(false);
  const onOpen1 = () => setIsOpen1(true);

  const onClose2 = () => setIsOpen2(false);
  const onOpen2 = () => setIsOpen2(true);




  return (
    <>

      <div className="header">

        <div className="header__rigth">
          <button className="header__btn">
            <RxHamburgerMenu
              className="header__btn-burguer"
              onClick={() => setIsOpenMenu(true)}
            />
          </button>

          <Link to="/">
            <p className="header__a">alize</p>
            <p className="header__p">az</p>
          </Link>
        </div>

        <div className="header__center">
          <nav className="header__nav">
            <ul className="header__nav-ul">
              <li className="header__nav-li">

                <Link className="header__nav-a" to="/destinos">
                  <Button colorScheme='gray' variant='ghost'>
                    Destinos
                  </Button>
                </Link>
              </li>
              <li className="header__nav-li">

                <Link className="header__nav-a" to="/beneficios">
                  <Button colorScheme='gray' variant='ghost'>
                    Beneficios
                  </Button>
                </Link>
              </li>
              <li className="header__nav-li">

                <Link className="header__nav-a" to="/terminales">
                  <Button colorScheme='gray' variant='ghost'>
                    Terminales
                  </Button>
                </Link>
              </li>
              <li className="header__nav-li">

                <Link className="header__nav-a" to="/info">
                  <Button colorScheme='gray' variant='ghost'>
                    Info para viajeros
                  </Button>
                </Link>
              </li>
              <li className="header__nav-li">

                <Link className="header__nav-a" to="/devolucion">
                  <Button colorScheme='gray' variant='ghost'>
                    Devolucion de pasajes

                  </Button>
                </Link>
              </li>
              <li className="header__nav-li">

                <Link className="header__nav-a" to="/alquiler">
                  <Button colorScheme='gray' variant='ghost'>
                    Alquiler de buses

                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Box className="header__left">
          <Button color='gray' onClick={onOpen1}>Mis Favoritos</Button>
          <Modal isOpen={isOpen1} onClose={onClose1}>
            <ModalOverlay />
            <ModalContent >
              <CloseButton onClick={onClose1} position="absolute" right="1rem" top="1rem" />
              <ModalHeader mb='20px' mt='60px' display='flex' justifyContent='center'>Accede a tu cuenta</ModalHeader>
              <ModalBody padding='0px 100px 0px 100px'>
                <Input mb='20px' placeholder='Email' />
                <Input mb='20px' placeholder='Contraseña' />
                <Link className="link__password" href="#ancla" >He olvidado mi contraseña</Link>
                <Button mt='20px' color='white' bg='red.400' width='100%' display='flex' justifyContent='center' alignItems='center' >Iniciar Sesion</Button>
                <Divider borderColor="gray" borderWidth="0,5px" mb='40px' mt='70px' orientation='horizontal' />
                <Text mb='20px' display='flex' justifyContent='center' color='gray' fontSize='sm'>Accede con tu red social favorita</Text>

                <Box justifyContent='center' display='flex'>
                  <Button width='100%' marginBottom='10px' >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      width="40" height="40"
                      viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    <Text paddingLeft='10px' fontSize='sm'>Continuar con Google</Text>

                  </Button>
                </Box>

                <Box alignItems='flex-start' justifyContent='center' display='flex'>
                  <Button width='100%' marginBottom='10px' bg="black" color="white" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" style={{ fill: 'rgba(249, 241, 240, 0.8)', transform: 'msFilter' }}><path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path></svg>
                    <Text paddingLeft='10px' fontSize='sm'>Continuar con Apple</Text>
                  </Button>
                </Box>

                <Box mb='35px' alignItems='flex-start' justifyContent='center' display='flex'>
                  <Button width='100%' >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      width="48" height="48"
                      viewBox="0 0 48 48">
                      <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                    </svg>
                    <Text paddingLeft='10px' fontSize='sm'>Continuar con Facebook</Text>
                  </Button>
                </Box>
                <Link className="link__password" href="#ancla" >No tengo cuenta y quiero registrarme</Link>
              </ModalBody>
              <ModalFooter>

              </ModalFooter>
            </ModalContent>
          </Modal>

          <Button color='white' bg='red.400' onClick={onOpen2}>Iniciar Sesion</Button>
          <Modal isOpen={isOpen2} onClose={onClose2}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader mb='20px' mt='60px' display='flex' justifyContent='center'>Entra o registrate en Alize</ModalHeader>
              <CloseButton onClick={onClose2} position="absolute" right="1rem" top="1rem" />
              <ModalBody padding='0px 100px 0px 100px'>
                <Input mb='20px' placeholder='Email' />
                <Button mt='20px' color='white' bg='red.400' width='100%' display='flex' justifyContent='center' alignItems='center'>Continuar</Button>
                <Divider borderColor="gray" borderWidth="0,5px" mb='40px' mt='70px' orientation='horizontal' />
                <Box justifyContent='center' display='flex'>
                  <Button width='100%' marginBottom='10px' >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      width="40" height="40"
                      viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    <Text paddingLeft='10px' fontSize='sm'>Continuar con Google</Text>

                  </Button>
                </Box>

                <Box alignItems='flex-start' justifyContent='center' display='flex'>
                  <Button width='100%' marginBottom='10px' bg="black" color="white" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" style={{ fill: 'rgba(249, 241, 240, 0.8)', transform: 'msFilter' }}><path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path></svg>
                    <Text paddingLeft='10px' fontSize='sm'>Continuar con Apple</Text>
                  </Button>
                </Box>

                <Box mb='35px' alignItems='flex-start' justifyContent='center' display='flex'>
                  <Button width='100%' >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      width="48" height="48"
                      viewBox="0 0 48 48">
                      <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                    </svg>
                    <Text paddingLeft='10px' fontSize='sm'>Continuar con Facebook</Text>
                  </Button>
                </Box>
              </ModalBody>
              <ModalFooter>

              </ModalFooter>
            </ModalContent>
          </Modal>








          {/* <Modal
            isOpen={isOpen} onClose={onClose}
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
          >
            <ModalOverlay />
            <ModalContent padding='70px'>
              <ModalHeader display='flex' justifyContent='center'>Accede a tu cuenta</ModalHeader>
              <Input mb='30px' placeholder='Email' />
              <Input mb='30px' placeholder='Contraseña' />
              <Link color='#e53e3e' fontSize='sm'>He olvidado mi contraseña</Link>
              <ModalCloseButton />
              <ModalBody>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </ModalContent>
          </Modal> */}
















          {/* <Button colorScheme='red' onClick={onOpen}>Iniciar Sesion</Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent paddingTop='50px' paddingRight='60px' paddingLeft='60px' paddingBottom='30px'>
              <ModalHeader>Entra o regístrate en Alize</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl marginBottom='50px'>
                  <Input marginBottom='30px' ref={initialRef} placeholder='Ingresa tu nombre' />
                  <Button w='100%' colorScheme='red'>Continuar</Button>
                </FormControl>
                <Divider marginBottom='30px' borderColor="red" orientation='horizontal' />
                <FormControl mt={4}>

                 

                </FormControl>
              </ModalBody>


            </ModalContent>
          </Modal> */}
        </Box>
      </div>
      
    </>
  );
};
