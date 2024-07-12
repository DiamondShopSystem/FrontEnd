// SizeGuidePage.jsx
import React from 'react';
import BlogLayout from './GuideComponent.jsx'; // Import BlogLayout component
// import '../../styles/SizeGuidePage.css'; // Import the CSS file

const articles = [
    { id: 1, slug: "ring", title: "Cách Đo Size, Ni Nhẫn Nữ/Nam Chính Xác Và Đơn Giản", date: "17/11/2021", image: "https://www.pnj.com.vn/blog/wp-content/uploads/2021/11/huong-dan-do-size-nhan-534x462.jpg", description: "PNJ sẽ hướng dẫn bạn cách đo kích thước nhẫn tại nhà & cách bí mật đo nhân để tạo bất ngờ cho món quà dành tặng người thân, nhất là đối với..." },
    { id: 2, slug: "bracelet",title: "Hướng dẫn đo size lắc và vòng tay", date: "19/01/2021", image: "https://www.pnj.com.vn/blog/wp-content/uploads/2021/01/3-cach-do-size-lac-vong-tay-don-gian-thumnail-534x462.jpg", description: "Đo size lắc tay để làm gì? Có khá nhiều người thắc mắc vấn đề này bởi họ nghĩ lắc tay thì cần gì phải đo, chỉ cần mua là có thể đeo vừa. Điều này không đúng bởi tay mỗi người thường to nhỏ khác nhau cũng như có rất nhiều loại lắc tay khác nhau..." },
    { id: 3, slug: "necklace",title: "Hướng dẫn đo size dây chuyền, dây cổ và kiềng", date: "16/01/2021", image: "https://www.pnj.com.vn/blog/wp-content/uploads/2021/01/hinh-dai-dien-mach-ban-cach-do-size-day-chuyen-day-co-500x462.jpg", description: "Để mua một món đồ trang sức như dây chuyền, dây cổ và kiềng... không đơn giản như bạn nghĩ, đặc biệt là làm quà tặng. Ngoài việc lựa chọn những mẫu phù hợp thì kích thước phù hợp cũng là yếu tố bạn cần quan tâm..." }
];

function SizeGuidePage() {
    return (
        <BlogLayout articles={articles} />
    );
}

export default SizeGuidePage;
