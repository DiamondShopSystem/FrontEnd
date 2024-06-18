import React, { useState } from 'react'
import MultiStepProgress from '../../../helpers/MultiStepProgress'
import '../../styles/CheckOutCart.css'
import Cart from './Cart';
import { MdShoppingCart } from "react-icons/md";
import InforBuyerStep1 from './InforBuyerStep1';
import ReceiveMethodStep2 from './ReceiveMethodStep2';


const steps = ['Thông tin người mua', 'Hình thức nhận hàng', 'Đặt hàng', 'Thanh toán'];

const fillInfor = (step) => {
    switch (step) {
        case 1:
            return <InforBuyerStep1 />

        case 2:
            return <ReceiveMethodStep2 />

        default:
            break;
    }
}

const CheckOutCart = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);

    const nextStep = () => {
        currentStep === steps.length ? setComplete(true) : setCurrentStep(prev => Math.min(prev + 1, steps.length))
    }

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
        setComplete(false);
    };

    const getNameButton = () => {
        if (currentStep === steps.length - 2) {
            return 'Đặt hàng';
        } else if (currentStep === steps.length - 1) {
            return 'Thanh toán';
        } else if (currentStep === steps.length) {
            return 'Hoàn thành'
        } else {
            return 'Sau';
        }
    };

    return (
        <div className='CheckOutCart-Container'>
            <div className='CheckOutCart-Button-Continous-Shopping-Container'>
                <div className='CheckOutCart-Arrow'>{"<"}</div>
                <div className='CheckOutCart-Button-Continous-Shopping-Cover'>
                    <button className='CheckOutCart-Button-Continous-Shopping'>Tiếp tục mua hàng</button>
                    <div className='CheckOutCart-Button-MdShoppingCart'>
                        <MdShoppingCart size='25px' />
                    </div>
                </div>
            </div>

            <div className='CheckOutCart-Cover'>
                <div className='CheckOutCart-Your-Cart'>
                    <Cart />
                </div>

                <div className='CheckOutCart-Your-Infor'>
                    <div className='CheckOutCart-MultiStepProgress'>
                        <MultiStepProgress steps={steps} currentStep={currentStep} complete={complete} />
                    </div>

                    <div className='CheckOutCart-Infor-Content'>
                        <h2 className='CheckOutCart-Infor-Content-H2'>{steps[currentStep - 1]}</h2>
                        {fillInfor(currentStep)}
                    </div>
                    <div className='CheckOutCart-button-navigation'>
                        <button className='CheckOutCart-button' onClick={prevStep}>Trước</button>
                        {complete ? '' : <button className='CheckOutCart-button' onClick={nextStep}>{getNameButton()}</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutCart
