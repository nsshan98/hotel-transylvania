// import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const HotelSection = ({ hotel }) => {
    // const [showFullText, setShowFullText] = useState(false);

    // const handleToggleText = () => {
    //     setShowFullText(!showFullText);
    // };



    const wordCount = hotel.overview.split(' ').length;

    const {hotel_id, photo1, hotel_name, overview, star_rating } = hotel
    return (
        <div>
            <Container>
                <Grid>
                    <Card sx={{ mt: 5 }}>
                        <CardActionArea>
                            <CardMedia sx={{ height: 200 }}
                                component="img"
                                image={photo1}
                                alt={hotel_name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {hotel_name}
                                </Typography>
                                <Typography sx={{ height: 100, textAlign: 'justify' }} variant="body2" color="text.secondary">
                                    {wordCount > 30 ? (
                                        <>
                                            {overview.split(' ').slice(0, 30).join(' ')}...
                                        </>
                                    ) : (
                                        { overview }
                                    )}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ justifyContent: 'space-between' }}>
                            <Grid>
                                <Link to={`/allhotel/${hotel_id}`}>
                                    <Button variant='contained' size="small" color="primary">
                                        Book Now
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid>
                                <Button><StarIcon fontSize='small'></StarIcon> {star_rating}</Button>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
            </Container>
        </div>
    );
};

export default HotelSection;