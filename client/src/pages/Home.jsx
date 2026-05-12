import React from 'react'
import {motion} from 'motion/react'
function Home() {
  return (
    <div className='relative min-h-screen bg-[#040404] text-white 
    overflow-hidden'>
        <motion.div
        initial= {{y: -40, opacity: 0}}
        animate = {{y: 0, opacity: 1}}
        transition={{duration: 0.5}}
        className = 'fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10'>
            <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
                <div className='text-lg font-semibold'>
                    SajiloSite
                </div>

                <div className='flex items-center gap-5'>
                    <button className = 'px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm'>
                      Get Started  
                    </button>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Home