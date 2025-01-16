// Import necessary libraries
import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Countdown = ({ initialSeconds = 5, onCountdownEnd = () => { } }) => {
    const [seconds, setSeconds] = useState(initialSeconds)

    useEffect(() => {
        if (seconds > 0) {
            const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
            return () => clearTimeout(timer);
        } else if (seconds === 0 && onCountdownEnd) {
            onCountdownEnd();
        }
    }, [seconds, onCountdownEnd]);

    return (
        <Box
            sx={{
                bgcolor: '#FEE4E2',
                display: 'grid',
                placeContent: 'center',
                p: 2,
                width: 70,
                height: 70,
                borderRadius: '50%',
                border: '8px solid #FEF3F2',
                fontSize: 20,
                fontWeight: 500
            }}
        >
            {seconds}
        </Box>
    )
}

export default Countdown;

// Usage Example:
// Import Countdown in your App.js or another component
// <Countdown initialSeconds={10} />
