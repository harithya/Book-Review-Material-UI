import React, { FC, PropsWithChildren } from 'react'
import { Paper, styled, BoxProps } from '@mui/material'
import HeroImage from '../../assets/card.png'

interface Props {
    heroSx?: BoxProps,
    sx?: BoxProps
}
const HeroSection: FC<PropsWithChildren<Props>> = ({ children, heroSx, sx }) => {
    return (
        <StyledPaper elevation={0} sx={sx}>
            <HeroBg src={HeroImage} sx={heroSx} />
            {children}
        </StyledPaper>
    )
}

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    paddingRight: 80,
    paddingLeft: 80,
    paddingTop: 40,
    borderRadius: 25,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        padding: 40,
        minHeight: '300px',
    }
}))

const HeroBg = styled('img')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    right: 15,
    height: 120,
    [theme.breakpoints.down('md')]: {
        height: 70
    }
}))


export default HeroSection