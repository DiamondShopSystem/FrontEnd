import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material'; // Import Material-UI components
import { Link } from 'react-router-dom';
import "../../styles/Client.css";

const articles = [
    { id: 1, slug: "faqs", title: "Câu hỏi thường gặp", date: "1/11/2021", image: "https://pos.nvncdn.com/d5c59c-23832/art/artCT/20200419_KuKxqXjX7oLpB3x6kw7Wl2UG.jpg", 
        description: "PNJ sẽ hướng dẫn bạn cách đo kích thước nhẫn tại nhà & cách bí mật đo nhân để tạo bất ngờ cho món quà dành tặng người thân, nhất là đối với..." },
    {
        id: 2, slug: "diamond-tips", title: "Cẩm nang mua kim cương", date: "20/01/2021", image: "https://file.hstatic.net/1000381168/file/baner-cnkc-mobi_4083d5385c0f457e80e668383e66c4c0.png",
        description: "Xác định giá trị chính xác của từng viên kim cương trở thành vấn đề quan trọng, việc đánh giá này như thế nào để đáp ứng sự phát triển ngày càng lớn của thị trường. Do đó, các tổ chức chứng nhận..."
    },
    {
        id: 3, slug: "diamond-price", title: "Bảng giá kim cương tại TKC", date: "20/01/2021", image: "https://glosbejewelry.net/upload/product/bang-gia-kim-cuong_1.jpg",
        description: "Với những viên kim cương thiên nhiên đã được kiểm định bởi GIA, chúng tôi mang đến bảng giá tham khảo chi tiết dựa trên các yếu tố..."
    }
];

function SizeGuidePage() {
    return (
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
    );
}

export default SizeGuidePage;
