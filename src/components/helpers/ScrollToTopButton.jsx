import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../client/styles/ScrollToTopButton.css';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {visible && 
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={scrollToTop}
                    style={{ borderRadius: '50%', minWidth: '50px', minHeight: '50px', backgroundColor: 'gray' }}
                >
                    <KeyboardArrowUpIcon />
                </Button>
            }
        </div>
    );
};

export default ScrollToTopButton;
