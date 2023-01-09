import React, { FC, PropsWithChildren } from 'react'
import { Toolbar, styled, Typography, Box } from '@mui/material'

export interface LinkProps {
    status?: 'active' | 'inactive'
}

interface Props {
    position: 'sidebar' | 'header'
}
const Navbar: FC<Props> = ({ position }) => {
    return (
        <Box>
            <Nav position={position}>
                <Link status={'active'}><Typography>Home</Typography></Link>
                <Link><Typography>Best Seller</Typography></Link>
                <Link><Typography>Category</Typography></Link>
                <Link><Typography>Community</Typography></Link>
                <Link><Typography>Blog</Typography></Link>
            </Nav>
        </Box>
    )
}

const Nav = styled(Toolbar)<Props>(({ theme, position }) => ({
    justifyContent: "center",
    gap: 32,
    color: theme.palette.grey[500],
    display: 'flex',
    marginTop: 20,
    flexDirection: position === 'sidebar' ? 'column' : 'row',
    alignItems: position == 'sidebar' ? 'start' : 'center',
    [theme.breakpoints.down('md')]: {
        display: position == 'sidebar' ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'start',
    }
}))

const Link = styled(Box)<LinkProps>(({ theme, status }) => ({
    borderBottom: status == 'active' ? `2px solid ${theme.palette.primary.main}` : 'none',
    paddingBottom: 5,
    '&:hover': {
        cursor: "pointer",
    },
    '& .MuiTypography-root': {
        color: status == 'active' ? theme.palette.info.main : theme.palette.grey[500],
    }
}))

export default Navbar