import React, { useEffect } from 'react'
import { axiosGet } from 'services/axiosService'

const TestPapers = () => {
  useEffect(()=>{
    axiosGet('/test/paper?entityType=sat').then(res=>console.log(res)).catch(err=>console.log(err))
  },[])
  return (
    <div>TestPapers</div>
  )
}

export default TestPapers