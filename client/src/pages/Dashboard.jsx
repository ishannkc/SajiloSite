import { ArrowLeft } from 'lucide-react'
import { motion } from 'motion/react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const {userData} = useSelector(state => state.user)
  const navigate = useNavigate()
  return (
    <div className='min-h-screen bg-black text-white'>
      <div className='sticky top-0 z-40 bg-black/50 backdrop-blur-xl p-4 text-2xl font-bold border-b border-white/10'>
      <div className="max-w-7xl mx-auto px-6 h-16 flex item-center justify-between">
        <div className= "flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-white/10 transition" onClick={()=>navigate("/")}><ArrowLeft size={16}/></button>
          <h1>Dashboard</h1>
        </div>
        <button className='bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition' onClick={()=>navigate("/generate")}>
          + New Wbsite
        </button>
      </div>
      </div>
      <div className='max-w-7xl mx-auto px-6 py-10'>
        <motion.div
        initial={{opacity:0, y:12}}
        animate={{opacity:1, y:0}}
        className="mb-10"
        >
          <p className='text-sm text-zinc-400 mb-1'>Welcome Back</p>
          <h1 className='text-3xl font-bold'>{userData?.name || 'User'}</h1>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
