import React from 'react'
import '../client/styles/MultiStepProgress.css'
import { TiTick } from 'react-icons/ti'

const MultiStepProgress = ({ steps, currentStep, complete }) => {

  return (
    <div className='MultiStepProgress-container'>
      {steps.map((step, index) => (
        <div key={index} className={`MultiStepProgress-step-container ${currentStep === index + 1 ? 'active' : ''} ${(index + 1 < currentStep) || complete ? 'complete' : ''}`}>
          <div className='MultiStepProgress-step-cover'>
            <div className='MultiStepProgress-step-body'>
              <div className={'MultiStepProgress-step'}>{(index + 1 < currentStep) || complete ? <TiTick size={25} /> : index + 1}</div>
            </div>
          </div>
          <p className='MultiStepProgress-step-infor'>{step}</p>
        </div>
      ))}

    </div>
  )
}

export default MultiStepProgress
