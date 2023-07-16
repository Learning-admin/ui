import React, { useEffect, useState } from 'react'
import { axiosGet } from 'services/axiosService'

const TestPapers = () => {
  const [testPapers, setTestPapers] = useState<any>()

  useEffect(()=>{
    axiosGet('/test/paper?entityType=sat').then(res=>setTestPapers(res.data.data)).catch(err=>console.log(err))
  },[])
  return (
    <div>TestPapers</div>
    
  )
}

export default TestPapers