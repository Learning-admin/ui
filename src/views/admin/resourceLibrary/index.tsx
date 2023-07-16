import Card from 'components/card'
import '../../../assets/css/ReactQuill.css'
import { useEffect, useState } from 'react'
import AddResourceModal from './components/AddResourceModal';
import ResourceGrid from './components/ResourceGrid';
import { axiosGet } from 'services/axiosService';

const ResourceLibrary = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [resources, setResources] = useState<any>()

  useEffect(() => {
    axiosGet('resource?entityType=act')
      .then(res => {
        console.log(res.data.data)
        setResources(res.data.data)
      })
      .catch(err => console.log(err))
      
  }, [])

  return (
    <>
      {
        modal && <AddResourceModal
          setModal={setModal}
        />
      }
      <ResourceGrid
        modal={modal}
        setModal={setModal}
        resources={resources}
      />
    </>
  )
}

export default ResourceLibrary