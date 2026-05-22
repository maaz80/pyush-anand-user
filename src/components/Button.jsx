import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const Button = ({click=() => {}, widthHeight="w-32.25 lg:w-38.75 h-10 lg:h-12", text="Get in Touch", BG="bg-white", textColor="text-dark-blue", border=""}) => {
  return (
    <div>
            <button
            onClick={click}
                 className={`group relative isolate overflow-hidden ${BG} ${textColor} text-[12px] lg:text-[18px] ${widthHeight} flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 cursor-pointer active:scale-95 plus-jakarta ${border}`}
            >
                 <span className="relative z-10">{text}</span>

                 {/* Arrow Wrapper */}
                 <div className="relative z-10 w-5 h-5 overflow-hidden">

                      {/* First Arrow */}
                      <GoArrowUpRight
                           size={20}
                           className="
               absolute inset-0
               transition-all duration-300 ease-in-out
               group-hover:translate-x-5
               group-hover:-translate-y-5
               "
                      />

                      {/* Second Arrow */}
                      <GoArrowUpRight
                           size={20}
                           className="
               absolute inset-0
               -translate-x-5 translate-y-5
               transition-all duration-300 ease-in-out
               group-hover:translate-x-0
               group-hover:translate-y-0
               "
                      />
                 </div>
            </button>
    </div>
  )
}

export default Button