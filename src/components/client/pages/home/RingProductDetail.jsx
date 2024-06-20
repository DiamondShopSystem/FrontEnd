import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../../styles/RingProductDetail.css';

const RingProductDetail = () => {

    const { id } = useParams();
    const [rings, setRings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRings = async () => {
            try {
                const respone = await fetch('https://fakestoreapi.com/products');
                const data = await respone.json();
                setRings(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchRings();
    }, []);

    const ring = rings.find((item) => { return item.id === parseInt(id) });

    if (loading) {
        return <div>Loading...</div>; // Hiển thị loading trong khi chờ dữ liệu
    }

    return (
        <section>
            <div>
                <div className='RingProductDetail-image-ring-container'>
                    <img className='RingProductDetail-image-ring' src={ring.image} alt='' />
                </div>
            </div>
        </section>
    )
}

export default RingProductDetail
