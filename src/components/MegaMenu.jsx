// components/MegaMenu.jsx
import { AnimatePresence, motion } from 'framer-motion'
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const MegaMenu = ({ activeMenu, currentData, onClose }) => {
     const navigate = useNavigate();

     return (
          <AnimatePresence>
               {activeMenu && (
                    <motion.div
                         initial={{ opacity: 0, y: -60 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -60 }}
                         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                         onMouseLeave={onClose}
                         className='absolute left-0 top-full w-full bg-black/20 backdrop-blur-xl h-[calc(100vh-56px)] md:h-auto overflow-y-auto overscroll-contain'
                    >
                         <div className='w-full min-h-full md:min-h-auto border-t border-white/10 bg-dark-blue/85 backdrop-blur-3xl'>
                              <div className='max-w-360 mx-auto px-4 md:px-18 xl:px-32 py-16'>
                                   <div className='grid grid-cols-1 lg:grid-cols-[0.7fr_1fr] gap-16 items-start'>

                                        {/* LEFT */}
                                        <div>
                                             <motion.h2
                                                  key={activeMenu}
                                                  initial={{ opacity: 0, y: 20 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ duration: 0.5 }}
                                                  className='playfair text-[42px] md:text-[72px] leading-[0.95] tracking-[-2px] font-bold text-white'
                                             >
                                                  {activeMenu === 'work' ? 'Selected Work' : 'What We Do'}
                                             </motion.h2>

                                             <motion.p
                                                  key={`${activeMenu}-desc`}
                                                  initial={{ opacity: 0, y: 20 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ duration: 0.5, delay: 0.08 }}
                                                  className='mt-6 text-white/60 text-[16px] leading-8 max-w-105'
                                             >
                                                  {activeMenu === 'work'
                                                       ? 'A curated selection of premium digital experiences...'
                                                       : 'We build modern digital systems combining strategy...'}
                                             </motion.p>
                                        </div>

                                        {/* RIGHT */}
                                        <div className='relative min-h-85 overflow-hidden'>
                                             <AnimatePresence mode='wait'>
                                                  <motion.div
                                                       key={activeMenu}
                                                       initial={{ opacity: 0, x: 60 }}
                                                       animate={{ opacity: 1, x: 0 }}
                                                       exit={{ opacity: 0, x: -60 }}
                                                       transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                                       className='absolute inset-0'
                                                  >
                                                       <div className='grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8'>
                                                            {currentData.map((item, index) => (
                                                                 <div
                                                                      key={index}
                                                                      onClick={() => {
                                                                           onClose();
                                                                           activeMenu === 'work' ? navigate('/work') : navigate('/services');
                                                                      }}
                                                                      className='group border-b border-white/10 pb-5 flex items-center justify-between cursor-pointer'
                                                                 >
                                                                      <div>
                                                                           <div className='text-[24px] md:text-[30px] playfair text-white transition-all duration-300 group-hover:translate-x-1'>
                                                                                {item}
                                                                           </div>
                                                                           <div className='mt-2 text-white/40 text-[14px]'>
                                                                                Premium digital experience
                                                                           </div>
                                                                      </div>
                                                                      <div className='relative overflow-hidden w-12 h-12 rounded-full border border-white/10 flex items-center justify-center'>
                                                                           <motion.div
                                                                                initial={false}
                                                                                whileHover={{ scale: 1.15 }}
                                                                                transition={{ duration: 0.3 }}
                                                                                className='absolute inset-0 bg-white'
                                                                           />
                                                                           <GoArrowUpRight className='relative z-10 text-black w-5 h-5' />
                                                                      </div>
                                                                 </div>
                                                            ))}
                                                       </div>
                                                  </motion.div>
                                             </AnimatePresence>
                                        </div>

                                   </div>
                              </div>
                         </div>
                    </motion.div>
               )}
          </AnimatePresence>
     );
};

export default MegaMenu;