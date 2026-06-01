import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
function Generate() {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen bg-linear-to-br from-[#050505] via-[#0b0b0b] to-[#050505] text-white'>
      <div className='sticky top-0 z-40 bg-black/50 backdrop-blur-xl p-4 text-2xl font-bold border-b border-white/10'>
      <div className="max-w-7xl mx-auto px-6 h-16 flex item-center justify-between">
        <div className= "flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-white/10 transition" onClick={()=>navigate("/")}><ArrowLeft size={16}/></button>
          <h1 className='text-lg font-semibold'>Sajilo<span className='text-zinc-400'>Site</span></h1>
        </div>

      </div>
      </div>
      <div className='max-w-6xl mx-auto px-6 py-16'>
        <motion.div
        initial={{opacity:0, y:30}}
        animate={{opacity:1, y:0}}
        className="mb-16 text-center"
        >
          <h1 className='text-4xl md:text-5xl font-bold mb-5 leading-tight'>
            Build Website with<span className='block bg-linear-to-r form-white to-zinc-400 bg-clip-text text-transparent'>Real AI Power</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto ">
            This process may take severla minutes.
            SajiloSite focuses on quality, not shortcuts.
          </p>
          
        </motion.div>
        <div className="mb-14">
          <h1 className='text-xl font-semibold mb-2'>Describe your website</h1>
          <div className="relative">
            <textarea name="" id=""placeholder="Describe your website in detail..."
             className='w-full h-56 p-6 rounded-3xl bg-black/60 border-white/10 outline-none resize-none text-sm leading-relaxed focus:ring-3 focus:ring-white/20'/>
          </div>
        </div>
        <div className="flex justify-center">
          <motion.button
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95}}
          className="px-14 py-4 rounded-2xl font-semibold text-lg bg-white text-black"
          >
            Generate Website
          </motion.button>
        </div>
      </div>
      </div>
  )
}

export default Generate