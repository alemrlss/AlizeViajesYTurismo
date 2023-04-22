import React, { useState, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';

const SlideShow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <>

            <Box width='100%' height='100%' position="absolute">
                <Image objectFit='cover' borderRadius='15px' key={currentIndex} position="relative"
                    transition="opacity 0.5s ease-in-out"
                    opacity={1} w='100%' h="100%" src={images[currentIndex]} alt="slide" />

                {images.map(( index) => (

                    <Box
                        key={index}
                        bg={currentIndex === index ? 'white' : '#FF385C'}
                        w="15px"
                        h="15px"
                        borderRadius="50%"
                        position="absolute"
                        bottom="10px"
                        left={`${index * 20 + 10}px`}
                        transition="background-color 0.5s ease-in-out"
                        _hover={{ cursor: 'pointer' }}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </Box>

            <Box>

            </Box>
        </>
    );
};

export default SlideShow;