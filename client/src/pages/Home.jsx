import React from 'react'
import {motion} from 'motion/react'
function Home() {

    const hightlights = [
            'AI Generated Websites',
            'Fully Responsive',
            'Production Ready',
    ]

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

        <section className = 'pt-44 pb-32 px-6 text-center'>
            <motion.h1
            initial = {{opacity:0, y:40}}
            animate = {{opacity:1, y:0}}
            className='text-5xl md:not-first:text-7xl font-bold tracking-tight'>
                Build Your Own Website <br />
                <span className='bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>with  AI</span>
            </motion.h1>
            <motion.p 
            initial = {{opacity:0, y:20}}
            animate = {{opacity:1, y:0}}
            className='mt-8 max-w-2xl mx-auto text-zinc-400 text-lg'>
                Describe your idea and let AI generate a website for you.
            </motion.p>
            
                <button className='px-10 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition mt-12'>Get Started</button>
        </section>

        <section className='max-w-7xl mx-auto px-6 pb-32'>
            <div className = 'grid grid-cols-1 md:grid-cols-3 gap-10'>
                {hightlights.map((h,i)=>(
                    <motion.div
                        key={i}
                        initial = {{opacity:0, y:40}}
                        whileInView={{opacity:1, y:0}}
                        className='rounded-2xl bg-white/5 border border-white/10 p-8'
                    > 
                    <h1 className='text-xl font-semibold mb-3'>{h}</h1>   

                    <p className= 'text-sm text-zinc-400'>
                            SajiloSite builds real websites - clean code, animations, responsive design, and more.
                    </p>
                    </motion.div>
                ))}
            </div>
        </section>

        <footer className = 'border-t border-white/10 py-10 text-center text-sm text-zinc-500' >
            &copy;{new Date().getFullYear()} SajiloSite
        </footer>
    </div>
  )
}

export default Home