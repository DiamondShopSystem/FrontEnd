import React from 'react'
import logo from "../../../assets/logo1.png";

export default function Header() {
  return (
    <div style={{ backgroundColor: '#333', color: '#fff', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Diamond Logo" style={{ width: '50px', marginRight: '10px' }} />
        <h1 style={{ margin: 0 }}>Diamon Shop System</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Đăng Xuất</button>
      </div>
    </div>
  )
}
