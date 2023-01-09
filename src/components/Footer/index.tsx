import React from 'react'
import { Box, styled, Container, Grid, Stack, colors, Typography, IconButton } from '@mui/material'
import LogoImage from '../../assets/logo.png'
import { Logo } from '../Header'
import { FacebookOutlined, Instagram } from '@mui/icons-material'

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Grid container spacing={5}>
                    <Grid item md={8} xs={12}>
                        <Box>
                            <Logo src={LogoImage} />
                            <Typography
                                color={colors.grey['500']}
                                sx={{ marginTop: 2 }}
                                variant="body2">
                                Is the best place to review a book
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={2} xs={6}>
                        <Typography>Navigation</Typography>
                        <Stack mt={2} spacing={1.5}>
                            <NavigationItem>Home</NavigationItem>
                            <NavigationItem>Best Seller</NavigationItem>
                            <NavigationItem>Category</NavigationItem>
                            <NavigationItem>Community</NavigationItem>
                            <NavigationItem>Blog</NavigationItem>
                        </Stack>
                    </Grid>
                    <Grid item md={2} xs={6}>
                        <Typography>Company</Typography>
                        <Stack mt={2} spacing={1.5}>
                            <NavigationItem>admin@reviewbook.com</NavigationItem>
                            <NavigationItem>Jln. Stiabudhi No. 193</NavigationItem>
                            <NavigationItem>Bandung Indonesia</NavigationItem>
                        </Stack>
                    </Grid>
                </Grid>
                <Stack mt={5} flexDirection="row" alignItems={"center"} justifyContent="space-between">
                    <NavigationItem>© 2021 ReviewBook. All rights reserved.</NavigationItem>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                        <StyledIconButton>
                            <Instagram />
                        </StyledIconButton>
                        <StyledIconButton>
                            <FacebookOutlined />
                        </StyledIconButton>
                    </Box>
                </Stack>
            </Container>
        </StyledFooter >
    )
}

const StyledFooter = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    paddingTop: 40,
    paddingBottom: 40,
}))

const NavigationItem = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    color: colors.grey['500'],
}))

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
    }

}))
export default Footer