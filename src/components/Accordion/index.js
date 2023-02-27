import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export const AccordionComponent = () => {
  return (
    <Accordion
      // width="60vh"
      display="flex"
      justifyContent="center"
      // border="1px solid red"
      marginBottom="100px"
      marginTop="100px"
      defaultIndex={[0]}
      allowMultiple
    >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              padding="10px"
              color="white"
              borderRadius="8px"
              backgroundColor="#706a6f"
              fontWeight="80px"
              as="span"
              flex="1"
              textAlign="left"
            >
              CENTRO
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="bck">
            <h4 className="destino__site-subtitle">Buenos Aires</h4>
            <h4 className="destino__site-subtitle">Cordoba</h4>
            <h4 className="destino__site-subtitle">La Pampa</h4>
          </div>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              padding="10px"
              color="white"
              borderRadius="8px"
              backgroundColor="#706a6f"
              fontWeight="80px"
              as="span"
              flex="1"
              textAlign="left"
            >
              NORTE
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="bck">
            <h4 className="destino__site-subtitle">Jujuy</h4>
            <h4 className="destino__site-subtitle"> Tucuman</h4>
            <h4 className="destino__site-subtitle">Salta</h4>
            <h4 className="destino__site-subtitle">Santiago del Estero</h4>
            <h4 className="destino__site-subtitle">Catamarca</h4>
            <h4 className="destino__site-subtitle">Santiago del Estero</h4>
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              padding="10px"
              color="white"
              borderRadius="8px"
              backgroundColor="#706a6f"
              fontWeight="80px"
              as="span"
              flex="1"
              textAlign="left"
            >
              LITORAL
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="bck">
            <h4 className="destino__site-subtitle">Entre rios</h4>
            <h4 className="destino__site-subtitle"> Santa Fe</h4>
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              padding="10px"
              color="white"
              borderRadius="8px"
              backgroundColor="#706a6f"
              fontWeight="80px"
              as="span"
              flex="1"
              textAlign="left"
            >
              NORESTE
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="bck">
            <h4 className="destino__site-subtitle">Corrientes</h4>
            <h4 className="destino__site-subtitle"> Formosa</h4>
            <h4 className="destino__site-subtitle">Chaco</h4>
            <h4 className="destino__site-subtitle">Misiones</h4>
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              padding="10px"
              color="white"
              borderRadius="8px"
              backgroundColor="#706a6f"
              fontWeight="80px"
              as="span"
              flex="1"
              textAlign="left"
            >
              BRASIL
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="bck">
            <h4 className="destino__site-subtitle">Florianopolis</h4>
            <h4 className="destino__site-subtitle">Camboriu</h4>
            <h4 className="destino__site-subtitle">Imbituba</h4>
            <h4 className="destino__site-subtitle">Torres</h4>
            <h4 className="destino__site-subtitle">Porto Alegre</h4>
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              padding="10px"
              color="white"
              borderRadius="8px"
              backgroundColor="#706a6f"
              fontWeight="80px"
              as="span"
              flex="1"
              textAlign="left"
            >
              URUGUAY
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="bck">
            <h4 className="destino__site-subtitle">Salto</h4>
            <h4 className="destino__site-subtitle">Paysandu</h4>
            <h4 className="destino__site-subtitle">Dayman</h4>
            <h4 className="destino__site-subtitle">Guaviyu</h4>
            <h4 className="destino__site-subtitle">Arapey</h4>
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              padding="10px"
              color="white"
              borderRadius="8px"
              backgroundColor="#706a6f"
              fontWeight="80px"
              as="span"
              flex="1"
              textAlign="left"
            >
              BOLIVIA
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="bck">
            <h4 className="destino__site-subtitle">Santa Cruz de la Sierra</h4>
            <h4 className="destino__site-subtitle">Camiri</h4>
            <h4 className="destino__site-subtitle">Yacuiba</h4>
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              padding="10px"
              color="white"
              borderRadius="8px"
              backgroundColor="#706a6f"
              fontWeight="80px"
              as="span"
              flex="1"
              textAlign="left"
            >
              CUYO
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="bck">
            <h4 className="destino__site-subtitle">San Juan</h4>
            <h4 className="destino__site-subtitle">La rioja</h4>
            <h4 className="destino__site-subtitle">Mendoza</h4>
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              padding="10px"
              color="white"
              borderRadius="8px"
              backgroundColor="#706a6f"
              fontWeight="80px"
              as="span"
              flex="1"
              textAlign="left"
            >
              PATAGONIA
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="bck">
            <h4 className="destino__site-subtitle"> Neuquen</h4>
            <h4 className="destino__site-subtitle">La Pampa</h4>
            <h4 className="destino__site-subtitle"> Rio Negro</h4>
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
