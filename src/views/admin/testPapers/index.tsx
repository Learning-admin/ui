import React, { useEffect, useState } from 'react'
import { axiosGet } from 'services/axiosService'
import TestPapersData from './components/TestPapersData'
const TestPapers = () => {
  const [testPapers, setTestPapers] = useState<any>([])

  useEffect(() => {
    axiosGet('/test/paper?entityType=sat').then(res => setTestPapers(res.data.data)).catch(err => console.log(err))
    console.log(testPapers, 'testPapers')
  }, [])
  return (
    <div>
      <TestPapersData
        tableData={testPapers}
        setModal={false}
        handleActive={true}
      />
    </div>

  )
}

export default TestPapers