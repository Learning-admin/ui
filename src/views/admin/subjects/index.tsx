import React, { useEffect, useState } from 'react'
import subjectData from './data/subjectData'
import SubjectTable from './components/SubjectTable'
import { axiosGet } from "services/axiosService";
import { ToastContainer, toast } from 'react-toastify';

import '../../../assets/css/Subjects.css'

const Subjects = () => {

  // test/subject?entityType=${entity value}`

  type Default = {
    subjectType: string
  }

  const [subjectTypeSelected, setSubjectTypeSelected] = useState<any>("sat");

  const [subjectData, setsubjectData] = useState<any>([])

  const [count, setCount] = useState<number>(0)


  // {
  //   "name": "Reading",
  //     "subCat": [
  //       "SS (Social Studies / Sciences)",
  //       "AL (Arts / Literature)"
  //     ],
  //       "status": 1,
  //         "_id": "60725312789819c5d2621d6f",
  //           "entityType": "act"
  // }

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
    console.log(subjectTypeSelected);
    getMenus();
  }, [subjectTypeSelected])


  const getMenus = async () => {
    try {
      const res = await axiosGet(`test/subject?entityType=${subjectTypeSelected}`)

      let resp = res.data.data;

      // for (let i = 0; i < resp.length; i++) {
      //   resp[i]["sNo"] = i+1;
      // }

      setsubjectData(resp);
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
      {/* <ToastContainer /> */}

      <SubjectTable
        tableData={subjectData}
        subjectTypeSelected={subjectTypeSelected}
        setSubjectTypeSelected={setSubjectTypeSelected}
        modalData={modalData}
        setModalData={setModalData}
        initialVal={initialVal}
        setCount={setCount}
        count={count}
      />
    </div>
  )
}

export default Subjects