import React from 'react'
import { steps } from '@/data/steps'

interface StepsProps {
  currentStep: number
}

const Steps = ({ currentStep }: StepsProps) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step.id <= currentStep
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {step.id}
            </div>
            <span
              className={`ml-2 text-sm font-medium ${
                step.id <= currentStep ? 'text-black' : 'text-gray-500'
              }`}
            >
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="w-16 h-px bg-gray-300 mx-4" />
          )}
        </div>
      ))}
    </div>
  )
}

export default Steps