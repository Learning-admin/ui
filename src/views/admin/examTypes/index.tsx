import React, { useEffect, useState } from 'react'
import EntitiesTable from './components/EntitiesTable'
import { axiosGet } from 'services/axiosService'
import EntityModal from './components/EntityModal'

const ExamTypes = () => {
  const [entities, setEntites] = useState<any>()
  const [entityModal, setEntityModal] = useState<boolean>()

  useEffect(() => {
    axiosGet('entities')
      .then(res => setEntites(res.data.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
     { entityModal && <EntityModal
      setEntityModal={setEntityModal}
      />}
      <EntitiesTable
        entities={entities}
        setEntityModal={setEntityModal}
      />
    </div>
  )
}

export default ExamTypes