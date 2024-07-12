import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow
} from 'mdb-react-ui-kit';
// import "../../styles/OrderDetail.css"

const OrderDetail = ({ order, onBack }) => {
  const renderTrackingStatus = (status) => {
    switch (status) {
      case 'Shipped':
        return (
          <div className="horizontal-timeline">
            <ul className="list-inline items d-flex justify-content-between">
              <li className="list-inline-item items-list">
                <p className="py-1 px-2 rounded text-white" style={{ backgroundColor: '#00FF00' }}>
                  Chưa xác nhận
                </p>
              </li>
              <li className="list-inline-item items-list">
                <p className="py-1 px-2 rounded text-white" style={{ backgroundColor: '#00FF00' }}>
                  Đã xác nhận
                </p>
              </li>
              <li className="list-inline-item items-list">
                <p className="py-1 px-2 rounded text-white" style={{ backgroundColor: '#00FF00' }}>
                  Đang giao
                </p>
              </li>
              <li className="list-inline-item items-list text-end" style={{ marginRight: '-8px' }}>
                <p style={{ marginRight: '-8px', color: '#00FF00', fontWeight: 'bold' }}>Đã nhận</p>
              </li>
            </ul>
          </div>
        );
      case 'On the way':
        return (
          <div className="horizontal-timeline">
            <ul className="list-inline items d-flex justify-content-between">
              <li className="list-inline-item items-list">
                <p className="py-1 px-2 rounded text-white" style={{ backgroundColor: '#00FF00' }}>
                  Chưa xác nhận
                </p>
              </li>
              <li className="list-inline-item items-list">
                <p className="py-1 px-2 rounded text-white" style={{ backgroundColor: '#00FF00' }}>
                  Đã xác nhận
                </p>
              </li>
              <li className="list-inline-item items-list">
                <p className="py-1 px-2 rounded text-white" style={{ backgroundColor: '#00FF00' }}>
                  Đang giao
                </p>
              </li>
              <li className="list-inline-item items-list text-end" style={{ marginRight: '-8px' }}>
                <p style={{ marginRight: '-8px' }}>Đã nhận</p>
              </li>
            </ul>
          </div>
        );
      case 'Unconfirmed':
        return (
          <div className="horizontal-timeline">
            <ul className="list-inline items d-flex justify-content-between">
              <li className="list-inline-item items-list">
                <p className="py-1 px-2 rounded text-white" style={{ backgroundColor: '#00FF00' }}>
                  Chưa xác nhận
                </p>
              </li>
              <li className="list-inline-item items-list">
                <p className="py-1 px-2 rounded text-white" style={{ backgroundColor: '#f37a27' }}>
                  Đã xác nhận
                </p>
              </li>
              <li className="list-inline-item items-list">
                <p className="py-1 px-2 rounded text-white" style={{ backgroundColor: '#f37a27' }}>
                  Đang giao
                </p>
              </li>
              <li className="list-inline-item items-list text-end" style={{ marginRight: '-8px' }}>
                <p style={{ marginRight: '-8px' }}>Đã nhận</p>
              </li>
            </ul>
          </div>
        );
      case 'Confirmed':
        return (
          <div className="horizontal-timeline">
          <ul className="list-inline items d-flex justify-content-between">
            <li className="list-inline-item items-list">
              <p className="py-1 px-2 rounded text-white" style={{ backgroundColor: '#00FF00' }}>
                Chưa xác nhận
              </p>
            </li>
            <li className="list-inline-item items-list">
              <p className="py-1 px-2 rounded text-white" style={{ backgroundColor: '#00FF00' }}>
                Đã xác nhận
              </p>
            </li>
            <li className="list-inline-item items-list">
              <p className="py-1 px-2 rounded text-white" style={{ backgroundColor: '#f37a27' }}>
                Đang giao
              </p>
            </li>
            <li className="list-inline-item items-list text-end" style={{ marginRight: '-8px' }}>
              <p style={{ marginRight: '-8px' }}>Đã nhận</p>
            </li>
          </ul>
        </div>
        );
      default:
        return <p style={{fontWeight: 'bold', fontSize: '20px', color: 'red'}}>Đơn hàng đã bị hủy</p>;
    }
  };

  return (
    <MDBContainer className="py-5">
      <MDBRow className="justify-content-center">
        <MDBCol lg="8" xl="6">
          <MDBCard className="border-top border-bottom border-3 border-color-custom">
            <MDBCardBody className="p-5">
              <p className="lead fw-bold mb-5" style={{ color: '#f37a27' }}>
                Purchase Receipt
              </p>

              <MDBRow>
                <MDBCol className="mb-3">
                  <p className="small text-muted mb-1">Date</p>
                  <p>{order.date}</p>
                </MDBCol>
                <MDBCol className="mb-3">
                  <p className="small text-muted mb-1">Order No.</p>
                  <p>{`#${order.id}`}</p>
                </MDBCol>
              </MDBRow>

              <div className="mx-n5 px-5 py-4" style={{ backgroundColor: '#f2f2f2' }}>
                <MDBRow>
                  <MDBCol md="8" lg="9">
                    <p>{order.product}</p>
                  </MDBCol>
                  <MDBCol md="4" lg="3">
                    <p>£{order.total}</p>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="8" lg="9">
                    <p className="mb-0">Shipping</p>
                  </MDBCol>
                  <MDBCol md="4" lg="3">
                    <p className="mb-0">£{order.shippingFee}</p>
                  </MDBCol>
                </MDBRow>
              </div>

              <MDBRow className="my-4">
                <MDBCol md="4" className="offset-md-8 col-lg-3 offset-lg-9">
                  <p className="lead fw-bold mb-0" style={{ color: '#f37a27' }}>
                    £{order.total - order.shippingFee}
                  </p>
                </MDBCol>
              </MDBRow>

              <p className="lead fw-bold mb-4 pb-2" style={{ color: '#f37a27' }}>
                Tracking Order
              </p>

              {renderTrackingStatus(order.status)}

              <p className="mt-4 pt-2 mb-0">
                Want any help?{' '}
                <a href="#!" style={{ color: '#f37a27' }}>
                  Please contact us
                </a>
              </p>

              <button className="btn btn-primary mt-3" onClick={onBack}>
                Back to Orders
              </button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default OrderDetail;
