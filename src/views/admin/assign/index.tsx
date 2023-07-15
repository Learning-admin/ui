import React, { useEffect } from 'react'
import { axiosGet } from 'services/axiosService'

const Assign = () => {
  useEffect(()=>{
    axiosGet('test/paper?publish=true&active=true&type=General&entityType=sat').then(res=>console.log(res, 'assign')).catch(err=>console.log(err))
  },[])
  return (
    <div>Assign</div>
  )
}

export default Assign