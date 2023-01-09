import React, { FC, PropsWithChildren } from 'react'
import { Box } from '@mui/material'

const Slider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box mb={8}>
            {children}
        </Box>
    )
}

export default Slider