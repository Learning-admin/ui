import React, { useEffect } from 'react'
import { axiosGet } from 'services/axiosService'

const Troubles = () => {

  useEffect(()=>{
    axiosGet('ticket/?page=2&pageSize=5').then(res=>console.log(res)).catch(err=>console.log(err))
  },[])
  return (
    <div>Troubles</div>
  )
}

export default Troubles