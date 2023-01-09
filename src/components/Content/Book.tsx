import React, { FC } from 'react'
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    styled,
    Typography,
    Rating,
    Box,
    Stack,
    Avatar,
} from '@mui/material'

interface Props {
    cover: string;
    title: string;
    rating: number;
    author: string;
    time_ago: string;
    reviewer: string;
}
const Book: FC<Props> = ({ title, cover, author, reviewer, time_ago }) => {
    return (
        <Grid item md={3} xs={6} >
            <StyledCard elevation={0}>
                <CardMedia
                    sx={{ mt: 3 }}
                    component={'img'}
                    image={cover}
                    alt={title}
                />
                <StyledContent>
                    <Typography sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                    }}
                        fontWeight={"semibold"}
                        mb={1}
                        variant='h6'>
                        {title}
                    </Typography>
                    <Rating value={3} size="small" />
                    <Box mt={2} mb={3}>
                        <Typography color="gray" variant="caption">{author}</Typography>
                    </Box>
                    <Stack direction={"row"} spacing={1} alignItems="center" justifyContent={"space-between"}>
                        <Stack direction={"row"} alignItems="center" flex={1} spacing={1}>
                            <Avatar
                                alt={reviewer}
                                src={`https://i.pravatar.cc/100?u=${reviewer}`}
                                sx={{ width: 24, height: 24 }} />
                            <Typography sx={{ fontSize: 12 }}>{reviewer}</Typography>
                        </Stack>
                        <ul>
                            <Typography component={'li'} sx={{ fontSize: 11, }} color="gray">{time_ago}</Typography>
                        </ul>
                    </Stack>
                </StyledContent>
            </StyledCard>
        </Grid>
    )
}

const StyledCard = styled(Card)({
    height: '100%',
    borderRadius: 10,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',

})

const StyledContent = styled(CardContent)({
    padding: 20
})

export default Book