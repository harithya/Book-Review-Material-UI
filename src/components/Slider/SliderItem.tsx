import React from 'react'
import { styled, Typography, Stack, useTheme, useMediaQuery } from '@mui/material'
import BookMan from '../../assets/ilustration.svg'
import Button from '../Button'
import HeroSection from '../Layout/HeroSection'

const SliderItem = () => {
    const { palette, breakpoints } = useTheme()
    const isMobile = useMediaQuery(breakpoints.down('md'))

    return (
        <HeroSection heroSx={{ left: 40 }}>
            <Content>
                <Stack spacing={5} marginTop={{ xs: 6 }}>
                    <Stack spacing={2}>
                        <Typography variant={isMobile ? 'h4' : 'h4'} fontWeight={"bold"} lineHeight={1.5} color={palette.info.main}>
                            Book is a <br />window to the world
                        </Typography>
                        <Typography fontSize={{ xs: 15, md: 18 }}>wake up your dream by reading a book every day</Typography>
                    </Stack>
                    <Button>Read Now</Button>
                </Stack>
                <Illustration src={BookMan} alt="illustration" />
            </Content>
        </HeroSection>
    )
}

const Illustration = styled('img')(({ theme }) => ({
    height: 480,
    width: 350,
    display: 'block',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const Content = styled('div')(({ theme }) => ({
    display: 'flex',
    width: '100%',
    justifyContent: "space-between",
    alignItems: "center"
}))

export default SliderItem