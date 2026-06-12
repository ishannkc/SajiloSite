export const getCurrentUser=async(req,res)=>{
    try{
        if(!req.user){
            return res.json({user:null})
        }
        return res.json(req.user)
    } catch(error){
        return res.status(500).json({message:`get current user error ${error}`})
    }
}
import {generateResponse} from '../config/openRouter.js'

export const generateDemo = async(req,res)=>{
    try{
       const result=  await generateResponse('hello')
       return res.status(200).json(result)
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}