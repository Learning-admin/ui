import React, { useEffect, useState } from 'react'
import AssignmentTable from './components/AssignmentTable';
import { axiosGet } from "services/axiosService";
import { ToastContainer, toast } from 'react-toastify';
import '../../../assets/css/Subjects.css'

const Assign = () => {


    type Default = {
      assignmentType: string
    }
  
    const [assignmentTypeSelected, setAssignmentTypeSelected] = useState<any>("sat");
  
    const [assignmentData, setAssignmentData] = useState<any>([])
  
  
    interface rowObject {
      "name": string,
      "subCat": string,
      "status": string,
      "_id": string,
      "entityType": string,
      "subCatObj": Object
    }
  
    const initialVal: rowObject = {
      "name": "",
      "subCat": "",
      "status": "",
      "_id": "",
      "entityType": "",
      "subCatObj": []
    };
  
    const [modalData, setModalData] = useState(initialVal)
  
    useEffect(() => {
      console.log(assignmentTypeSelected);
      getMenus();
    }, [assignmentTypeSelected])
  
  
    const getMenus = async () => {
      try {
        const res = await axiosGet(`test/subject?entityType=${assignmentTypeSelected}`)
  
        let resp = res.data.data;
  
  
        setAssignmentData(resp);
        toast.success('Data Fetched!', {
          position: toast.POSITION.TOP_RIGHT,
          className: 'toast-message',
          hideProgressBar: true
        });
  
      } catch (err: any) {
        console.log(err.response.data.message)
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          className: 'toast-message',
          hideProgressBar: true
        });
      }
    }
    return (
      <div className='pt-5'>
  
        <AssignmentTable
          tableData={assignmentData}
          assignmentTypeSelected={assignmentTypeSelected}
          setAssignmentTypeSelected={setAssignmentTypeSelected}
          modalData={modalData}
          setModalData={setModalData}
          initialVal={initialVal}
        />
      </div>
    )
}

export default Assign