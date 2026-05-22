import React from 'react'

const Philosophy = () => {
     return (
          <div className='bg-[#F2F3FB] min-h-149.25 w-full flex items-center justify-center'>
               <div className='max-w-92 md:max-w-195 flex flex-col items-center justify-center gap-8 mx-auto'>
                    <button className="mt-5 border border-dark-blue rounded-full w-46.5 h-8 md:h-12 text-[15px] md:text-[18px] bg-light-blue/10 text-dark-blue transition-all duration-300 plus-jakarta">
                         The Philosophy
                    </button>
                    <h2 className='text-black text-[36px] md:text-[44px] playfair text-center font-extralight'>"Strategy is the art of <span className='italic '>omission</span>{" "} We believe the most powerful brand stories are told through the lense of restraint, allowing the substance to speak for itself."</h2>
               </div>
          </div>
     )
}

export default Philosophy