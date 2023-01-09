import React, { FC, PropsWithChildren, useState } from 'react'
import { Container } from '@mui/material'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    const [open, setOpen] = useState(false)
    const handleMenuClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <Container>
                <Header onMenuClick={handleMenuClick} />
                <Sidebar open={open} onRequestClose={handleMenuClick} />
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default MainLayout