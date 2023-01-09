import React from 'react'
import { Grid } from '@mui/material'
import { Book, Section, Slider, SliderItem, Recomended, Testimoni } from '../components'
import data from '../assets/dummy/book'
import testimoniData from '../assets/dummy/testimoni'

const HomeView = () => {
    return (
        <div>
            <Slider>
                <SliderItem />
            </Slider>
            <Section title='Popular Now'>
                <Grid container spacing={{ xs: 2, md: 5 }} sx={{ alignItems: 'stretch' }}>
                    {data.slice(0, 4).map((item, index) => <Book {...item} key={`popular-${index}`} />)}
                </Grid>
            </Section>
            <Section title='Latest Books'>
                <Grid container spacing={{ xs: 2, md: 5 }} sx={{ alignItems: 'stretch' }}>
                    {data.slice(4, 8).map((item, index) => <Book {...item} key={`latest-${index}`} />)}
                </Grid>
            </Section>
            <Recomended />
            <Section>
                <Grid container spacing={{ xs: 8, md: 4 }} sx={{ alignItems: 'stretch' }}>
                    {testimoniData.map((item, index) => <Testimoni key={`testimoni-${index}`} {...item} />)}
                </Grid>
            </Section>
            <br />
            <br />
            <br />
        </div>
    )
}

export default HomeView