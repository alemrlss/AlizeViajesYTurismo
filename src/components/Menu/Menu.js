// import {
//   Box,
//   Menu,
//   MenuButton,
//   MenuDivider,
//   MenuItem,
//   MenuList,
//   href,
//   background,
// } from "@chakra-ui/react";

// const pages = [
//   { title: "Destinos" },
//   {
//     title: "Beneficios",
//     children: [
//       { label: "Como comprar online",  },
//       { label: "Equipaje", href: "asdasdas" },
//       { label: "Documentacion", href: "asdasdas" },
//       { label: "E-Ticket: Viaja mas facil", href: "asdasdas" },
//       { label: "Pases de discapacidad", href: "asdasdas" },
//       { label: "Puntos de venta", href: "asdasdas" },
//       { label: "Nuestros Buses", href: "asdasdas" },
//       { label: "Terminales", href: "asdasdas" },
//     ],
//   },
//   {
//     title: "Info para viajeros",
//     children: [
//       { label: "Como comprar online", href: "../" },
//       { label: "Equipaje", href: "asdasdas" },
//       { label: "Documentacion", href: "asdasdas" },
//       { label: "E-Ticket: Viaja mas facil", href: "asdasdas" },
//       { label: "Pases de discapacidad", href: "asdasdas" },
//       { label: "Puntos de venta", href: "asdasdas" },
//       { label: "Nuestros Buses", href: "asdasdas" },
//       { label: "Terminales", href: "asdasdas" },
//     ],
//   },
//   { title: "Devolución de pasajes" },
//   { title: "Contacto" },
// ];

// export const MenuComponent = () => {
//   return (
//     <Box display={{ base: 'none', lg: "flex" }} gap="19px">
//       {pages.map(({ title, children }, i) => (
//         <Menu  key={i}>

//           <MenuButton _hover= "red"
            
//             fontWeight="600"
//             cursor="pointer"
//             fontSize="15px"
//             variant="link"
//           >
//             {title}
//           </MenuButton>

//           {children && (
//             <MenuList>
//               {children.map(({ label, href }, i) => (
//                 <MenuItem key={i}>{label}</MenuItem>
//               ))}
//             </MenuList>
//           )}
//         </Menu>
//       ))}
//     </Box>
//   );
// };
