import React, { useEffect, useState } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { Pie, Line, Bar } from 'react-chartjs-2';
import axios from 'axios';
import '../../styles/Admin.css'
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../../styles/Admin.css';

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [categoryData, setCategoryData] = useState({ labels: [], datasets: [] });
  const [revenueData, setRevenueData] = useState({ labels: [], datasets: [] });
  const [orderData, setOrderData] = useState({ labels: [], datasets: [] });
  const [userData, setUserData] = useState({ labels: [], datasets: [] });
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [staff, setStaff] = useState([]);
  const [cart, setCart] = useState([]);

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
  }, []);

  useEffect(() => {
    // Fake data for product count by category
    const fakeCategoryData = {
      labels: ["Nhẫn", "Dây chuyền", "Lắc Tay", "Vòng Cổ"],
      counts: [100, 150, 75, 50]
    };
    setCategoryData({
      labels: fakeCategoryData.labels,
      datasets: [
        {
          label: 'Số lượng sản phẩm theo danh mục',
          data: fakeCategoryData.counts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });

    // Fake data for revenue
    const fakeRevenueData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      revenues: [22000, 20000, 19800, 23321, 25090, 26890]
    };
    setRevenueData({
      labels: fakeRevenueData.labels,
      datasets: [
        {
          label: 'Doanh thu',
          data: fakeRevenueData.revenues,
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
        },
      ],
    });

    // Fake data for order count
    const fakeOrderData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      counts: [5, 8, 12, 10, 15, 20]
    };
    setOrderData({
      labels: fakeOrderData.labels,
      datasets: [
        {
          label: 'Số lượng đơn hàng',
          data: fakeOrderData.counts,
          backgroundColor: 'rgba(153, 102, 255, 0.6)',
        },
      ],
    });

    // Fake data for user logins
    const fakeUserData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      logins: [50, 100, 210, 200, 150, 230]
    };
    setUserData({
      labels: fakeUserData.labels,
      datasets: [
        {
          label: 'Số lượng người dùng đăng kí',
          data: fakeUserData.logins,
          borderColor: 'rgba(255, 159, 64, 1)',
          fill: false,
        },
      ],
    });
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className='dashboard__cards'>
        <div className='dashboard__card'>
          <div className='dashboard__card-inner'>
            <h3>Tổng số sản phẩm</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>{product.length}</h1>
        </div>
        <div className='dashboard__card'>
          <div className='dashboard__card-inner'>
            <h3>Tổng số danh mục</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>{category.length}</h1>
        </div>
        <div className='dashboard__card'>
          <div className='dashboard__card-inner'>
            <h3>Tổng số tài khoản nhân viên</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{staff.length}</h1>
        </div>
        <div className='dashboard__card'>
          <div className='dashboard__card-inner'>
            <h3>Tổng số đơn hàng</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>{cart.length}</h1>
        </div>
      </div>
      <div className="chart-container">
        <div className="chart">
          <Pie data={categoryData} />
        </div>
        <div className="chart">
          <Line data={revenueData} />
        </div>
        <div className="chart">
          <Bar data={orderData} />
        </div>
        <div className="chart">
          <Line data={userData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



