// import Link from 'next/link';
import {Container, Typography, Box, Grid, Link} from "@mui/material";
import React from "react";

const Masthead = () => {
    const preventDefault = (event) => event.preventDefault();

    return (
        <>
            <Container
                maxWidth='xl'
            >
                <Grid
                    className='content__container'
                    container
                    spacing={2}
                    columns={16}
                    maxWidth='xl'
                    sx={{
                        padding: `60px 20px 20px`,
                    }}
                >
                    <Grid item xs={9} md={9}>
                        <Typography variant="h3" component="h2">
                            Fastest & secure trading platform for Cronos
                        </Typography>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                            animi impedit suscipit architecto, odio inventore nostrum.
                        </p>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'normal',
                                typography: 'body1',
                                '& > :not(style) + :not(style)': {
                                    ml: 2,
                                }
                            }}
                            onClick={preventDefault}
                        >
                            <Link href="#" underline="none">
                                Launch App
                            </Link>
                            <Link href="#" underline="none">
                                Download Whitepaper
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={7} md={7}>
                        <Typography variant="h3" component="h2">
                            Fastest & secure trading platform for Cronos
                        </Typography>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                            animi impedit suscipit architecto, odio inventore nostrum.
                        </p>

                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Masthead;