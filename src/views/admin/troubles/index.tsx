import React, { useEffect, useState } from 'react'
import { axiosGet } from 'services/axiosService'
import TroubleModal from './components/TroubleModal'
import TroublesData from './components/TroublesData'
import "../../../assets/css/Troubles.css"

const Troubles = () => {

  const [troublesData, setTroublesData] = useState<any>([])
  const [troubleModal, setTroubleModal] = useState<boolean>(false);
  const [troubleModalData, setTroubleModalData] = useState<any>([])

  const pageInitialVal = {
    pageSize: 5,
    page: 1
  }

  const [pageObj, setPageObj] = useState<any>(pageInitialVal)

  const troubleTypes = [
    { value: 0, label: "Payment Issue" },
    { value: 1, label: "General Questions" },
    { value: 2, label: "Technical Issue" },
    { value: 3, label: "Customer Support" },
  ]

  const troubleTypesObj: any = {}
  troubleTypes.map((d: any) => {
    troubleTypesObj[d.value] = d.label;
  })


  const priority: any = [
    { value: 0, label: "High" },
    { value: 1, label: "Normal" },
    { value: 2, label: "Low" },
  ]

  const priorityObj: any = {};

  priority.map((d: any) => {
    priorityObj[d.value] = d.label;
  })

  const status = [
    { value: 0, label: "Assigned" },
    { value: 1, label: "Researching" },
    { value: 2, label: "Work in Progress" },
    { value: 3, label: "Pending" },
    { value: 4, label: "Resolved" }
  ]

  const statusObj: any = {};

  status.map((d: any) => {
    statusObj[d.value] = d.label;
  })

  const [studentData, setStudentData] = useState<any>([])


  useEffect(() => {
    troublesDataFnc();
    getStudentList();
  }, [pageObj])


  const troublesDataFnc = () => {
    axiosGet(`ticket/?page=${pageObj.page}&pageSize=${pageObj.pageSize}`)
      .then(res => {
        let resp = res.data.data;
        setTroublesData(resp);
      })
      .catch(err => console.log(err))
  }

  const getStudentList = () => {
    axiosGet(`student/getStudentList`)
      .then(res => {
        let resp = res.data;
        setStudentData(resp);
      })
      .catch(err => console.log(err))
  }

  return (
    <div>

      {troubleModal &&
        <TroubleModal
          troubleModal={troubleModal}
          setTroubleModal={setTroubleModal}
          setTroubleModalData={setTroubleModalData}
          troubleTypes={troubleTypes}
          priority={priority}
          studentData={studentData}


        // setMenuModal={setMenuModal}
        // modalData={modalData}
        // handleSubmit={handleSubmit}
        // errors={errors}
        // addMenu={addMenu}
        // setModalData={setModalData}
        // initialVal={initialVal}
        />}

      <TroublesData
        troublesData={troublesData}
        troubleTypes={troubleTypes}
        troubleTypesObj={troubleTypesObj}
        priority={priority}
        priorityObj={priorityObj}
        status={status}
        statusObj={statusObj}
        studentData={studentData}
        setTroubleModal={setTroubleModal}
      />
    </div>
  )
}

export default Troubles