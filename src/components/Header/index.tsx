import React, { FC } from 'react'
import { Toolbar, styled, Box, Typography, Avatar, useTheme, InputBase, IconButton } from '@mui/material'
import LogoImage from '../../assets/logo.png'
import { FavoriteBorderOutlined, Search, Menu } from '@mui/icons-material'
import { grey } from '@mui/material/colors'
import Navbar from '../Navbar'

interface Props {
    onMenuClick?: () => void,
}
const Header: FC<Props> = ({ onMenuClick }) => {
    const theme = useTheme()

    return (
        <Box component={'header'} mb={5}>
            <MainHeader>
                <LeftMenu>
                    <IconButton onClick={onMenuClick} sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <Menu color='info' />
                    </IconButton>
                    <Logo src={LogoImage} />
                </LeftMenu>
                <SearchBar>
                    <InputBase sx={{ fontSize: 14, width: "100%" }} placeholder='Find your favourite book' />
                    <Search htmlColor={grey['400']} />
                </SearchBar>
                <RightMenu>
                    <IconButton>
                        <FavoriteBorderOutlined color='info' />
                    </IconButton>
                    <Avatar sx={{ height: 36, width: 36, backgroundColor: theme.palette.primary.main }}>2</Avatar>
                    <Typography>EN</Typography>
                </RightMenu>
            </MainHeader>
            <Navbar position='header' />
        </Box>
    )
}

const MainHeader = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    gap: 15,
})

export const Logo = styled('img')(({ theme }) => ({
    height: "20px",
    display: 'block',
}))

const RightMenu = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down('md')]: {
        gap: '15px'
    }
}))

const SearchBar = styled(Box)(({ theme }) => ({
    backgroundColor: "#F8F7F5",
    width: "500px",
    display: "flex",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: '10px',
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const LeftMenu = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 10
}))

export default Header