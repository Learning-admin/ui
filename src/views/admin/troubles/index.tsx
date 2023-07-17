import React, { useEffect, useState } from 'react'
import { axiosGet } from 'services/axiosService'
import TroubleModal from './components/TroubleModal'
import TroublesData from './components/TroublesData'
import "../../../assets/css/Troubles.css"
import TroubleViewPopup from './components/TroubleViewPopup'
import TroubleEditPopup from './components/TroubleEditPopup'

const Troubles = () => {

  const [troublesData, setTroublesData] = useState<any>([])
  const [troubleModal, setTroubleModal] = useState<boolean>(false);
  const [troubleModalData, setTroubleModalData] = useState<any>([]);
  const [troublePopup, setTroublePopup] = useState<string>("");

  const [troublesDataCount, setTroublesDataCount] = useState<number>(0);
  const [troublesDataPages, setTroublesDataPages] = useState<any>([])



  const intitialTroubleDtObj: any = {
    "priority": -1,
    "status": -1,
    "requestType": -1,
    "_id": "",
    "order": null,
    "user": {
      "_id": "",
      "firstName": "",
      "lastName": "",
      "fullName": ""
    },
    "notes": "",
    "createdBy": "",
    "createdAt": "",
    "updatedAt": "",
    "ticketId": -1,
    "__v": -1
  }

  const [troubleRowData, setTroubleRowData] = useState<any>(intitialTroubleDtObj)

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
        let count = res.data.total
        setTroublesData(resp);
        setTroublesDataCount(count);

        let pgs = parseInt(count) / parseInt(pageObj.pageSize);


        let arr = [];

        for (let i = 1; i <= pgs; i++) {
          arr.push(i);
        }

        if (pgs > arr[arr.length - 1]) {
          arr.push(arr[arr.length - 1] + 1)
        }

        setTroublesDataPages(arr);


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

      {troublePopup == "view" &&
        <TroubleViewPopup
          troublePopup={troublePopup}
          setTroublePopup={setTroublePopup}
          troubleRowData={troubleRowData}
          troubleTypesObj={troubleTypesObj}
          priorityObj={priorityObj}
          statusObj={statusObj}
          intitialTroubleDtObj={intitialTroubleDtObj}
          setTroubleRowData={setTroubleRowData}

        />
      }


      {troublePopup == "edit" &&
        <TroubleEditPopup
          troublePopup={troublePopup}
          setTroublePopup={setTroublePopup}
          troubleRowData={troubleRowData}
          intitialTroubleDtObj={intitialTroubleDtObj}
          setTroubleRowData={setTroubleRowData}
          status={status}

        />
      }


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
        setTroublePopup={setTroublePopup}
        setTroubleRowData={setTroubleRowData}
        troubleRowData={troubleRowData}
        troublesDataCount={troublesDataCount}
        troublesDataPages={troublesDataPages}
        setPageObj={setPageObj}
      />
    </div>
  )
}

export default Troubles