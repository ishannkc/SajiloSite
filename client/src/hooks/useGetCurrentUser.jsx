import { useEffect, useState } from 'react'
import axios from 'axios'
import { serverUrl } from '../config'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'

function useGetCurrentUser() {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const result = await axios.get(`${serverUrl}/api/user/me`, 
                    {withCredentials: true})
                    dispatch(setUserData(result.data))
                
                console.log(result)
                
            } catch (error) {
                console.log( error)
            } finally {
                setLoading(false)
            }
        }
            getCurrentUser()
            }, [])

    return { loading }

}

export default useGetCurrentUser