import React, { useState, useEffect } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import "../../styles/Admin.css";
import axios from 'axios';

function Home() {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [staff, setStaff] = useState([]);
  const [cart, setCart] = useState([]);
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  useEffect(() => {
    const fetchData = () => {
      axios.get('/admin/category')
        .then(function (response) {
          setCategory(response.data.records);
        })
        .catch(function (error) {
          console.log(error);
        });
        axios.get('/admin/product')
        .then(function (response) {
          setProduct(response.data.records);
        })
        .catch(function (error) {
          console.log(error);
        });
        axios.get('/admin/account/staff')
        .then(function (response) {
          setStaff(response.data.account);
        })
        .catch(function (error) {
          console.log(error);
        });
        axios.get('/admin/cart')
        .then(function (response) {
          setCart(response.data.cart);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchData();
  }, []); // Chỉ gọi API một lần khi component được mount

  return (
    <main className='dashboard__container'>
      <div className='dashboard__header'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='dashboard__cards'>
        <div className='dashboard__card'>
          <div className='dashboard__card-inner'>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>{product.length}</h1>
        </div>
        <div className='dashboard__card'>
          <div className='dashboard__card-inner'>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>{category.length}</h1>
        </div>
        <div className='dashboard__card'>
          <div className='dashboard__card-inner'>
            <h3>ACCOUNTS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{customer.length + staff.length}</h1>
        </div>
        <div className='dashboard__card'>
          <div className='dashboard__card-inner'>
            <h3>CART</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>{cart.length}</h1>
        </div>
      </div>

      <div className='dashboard__charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
