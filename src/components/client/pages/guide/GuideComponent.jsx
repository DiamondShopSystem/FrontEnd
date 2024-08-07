// BlogLayout.jsx
import React from 'react';
import Header from '../../partials/Header.jsx'; // Import Header component
import Footer from '../../partials/Footer.jsx'; // Import Header component
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material'; // Import Material-UI components
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../../styles/Client.css";

const GuideComponent = ({ articles }) => {
    return (
        <>
            <Header />
            <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Grid container spacing={3} className="size__guide">
                    {articles.map(article => (
                        <Grid item xs={12} md={6} key={article.id}>
                            <Card className="article-card">
                                <Link to={`${article.slug}`} className="link">
                                    <CardMedia
                                        component="img"
                                        image={article.image}
                                        alt={article.title}
                                        style={{ height: '300px', objectFit: 'cover' }}
                                    />
                                </Link>
                                <CardContent>
                                    <Link to={`${article.slug}`} className="link">
                                        <Typography className="title" gutterBottom variant="h5" component="div">
                                            {article.title}
                                        </Typography>
                                    </Link>
                                    <Typography variant="body2" color="text.secondary">
                                        {article.date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {article.description}
                                    </Typography>
                                    <Button variant="contained" color="primary" component={Link} to={`${article.slug}`}>
                                        Xem thêm
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default GuideComponent;
