import React from 'react'
import '../../styles/ReceiveMethodStep2.css'

const ReceiveMethodStep2 = () => {
    return (
        <div className='ReceiveMethodStep2-container'>
            <form action="">
                <div>
                    <div className='ReceiveMethodStep2-title-ship-cover'>
                        <p className='ReveiveMethodStep2-title'>Giao hàng tận nơi</p>
                        <p className='ReveiveMethodStep2-title'>(Miễn phí giao hàng toàn quốc)</p>
                    </div>

                    <div className='ReceiveMethodStep2-select-address-cover'>
                        <select className='ReceiveMethodStep2-select-address'>
                            <option>-Chọn Tỉnh/TP-</option>
                            <option>-Chọn Tỉnh/TP-</option>
                            <option>-Chọn Tỉnh/TP-</option>
                            <option>-Chọn Tỉnh/TP-</option>
                        </select>

                        <select className='ReceiveMethodStep2-select-address'>
                            <option>-Chọn Quận/Huyện-</option>
                            <option>-Chọn Tỉnh/TP-</option>
                            <option>-Chọn Tỉnh/TP-</option>
                            <option>-Chọn Tỉnh/TP-</option>
                        </select>
                    </div>

                    <div className='ReceiveMethodStep2-select-address-cover'>
                        <select className='ReceiveMethodStep2-select-address'>
                            <option>-Chọn Phường/Xã-</option>
                            <option>-Chọn Tỉnh/TP-</option>
                            <option>-Chọn Tỉnh/TP-</option>
                            <option>-Chọn Tỉnh/TP-</option>
                        </select>

                        <input className='ReceiveMethodStep2-input-address' type='text' name='txtAddress' placeholder='Nhập địa chỉ khách hàng' />
                    </div>

                    <div className='ReceiveMethodStep2-input-address-takeNote-cover'>
                        <input className='ReceiveMethodStep2-input-address-takeNote' type='text' name='txtTakeNote' placeholder='Ghi chú khác' />
                    </div>

                    <p className='ReceiveMethodStep2-transport-method'>Phương thức vận chuyển</p>

                    <div className='ReceiveMethodStep2-transport-free-cover'>
                        <input type='radio' name='transportFree' value='free' defaultChecked />
                        <div>
                            <p className='ReceiveMethodStep2-transport-free'>Miễn phí giao hàng nhanh</p>
                            <p className='ReceiveMethodStep2-transport-free'>Dự kiến nhận hàng: 1-7 ngày.</p>
                        </div>
                    </div>

                    <div className='ReceiveMethodStep2-checkBox-policy-cover'>
                        <div className='ReceiveMethodStep2-checkBox-policy-body'>
                            <input className='ReceiveMethodStep2-checkBox-policy' type='checkbox' name='cbInvoice' /> Xuất hóa đơn công ty (không áp dụng phiếu quà tặng điện tử)
                        </div>

                        <div className='ReceiveMethodStep2-checkBox-policy-body'>
                            <input className='ReceiveMethodStep2-checkBox-policy' type='checkbox' name='cbReceivePromotionsViaSMS' defaultChecked /> Đồng ý nhận các thông tin và chương trình khuyến mãi của PNJ qua email, SMS , mạng xã hội…
                        </div>

                        <div className='ReceiveMethodStep2-checkBox-policy-body'>
                            <input className='ReceiveMethodStep2-checkBox-policy' type='checkbox' name='cbCollectInfor' defaultChecked /> Tôi đồng ý cho PNJ thu thập, xử lý dữ liệu cá nhân của tôi theo quy định tại Thông báo này và theo quy định của pháp luật.
                        </div>

                        <div className='ReceiveMethodStep2-checkBox-policy-body'>
                            <input className='ReceiveMethodStep2-checkBox-policy' type='checkbox' name='cbSentCart' /> Tôi muốn gửi thiệp và lời chúc qua tin nhắn
                        </div>
                    </div>
                </div>
            </form >
        </div>
    )
}

export default ReceiveMethodStep2
