import React, { useEffect, useState } from 'react'
import { axiosGet } from 'services/axiosService'
import TestPapersData from './components/TestPapersData'
import CreatePopUp from './components/CreatePopUp'
const TestPapers = () => {
  const [testPapers, setTestPapers] = useState<any>([])
  const [modal, setModal] = useState<boolean>(false)

  useEffect(() => {
    axiosGet('/test/paper?entityType=sat').then(res => setTestPapers(res.data.data)).catch(err => console.log(err))
    console.log(testPapers, 'testPapers')
  }, [])
  return (
    <div>
      {
        modal && <CreatePopUp setModal={setModal}/>
      }
      
      <TestPapersData
        tableData={testPapers}
        setModal={setModal}
        handleActive={true}
      />
    </div>

  )
}

export default TestPapers