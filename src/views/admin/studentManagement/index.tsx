import { useEffect, useState } from 'react'
import StudentData from './components/StudentData'
import { axiosGet } from 'services/axiosService'
import AddStudent from './components/AddStudent'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentManagement = () => {
  const [studentData, setStudentData] = useState<any>();
  const [modal, setModal] = useState<boolean>(false);

  const getStudent = async () => {
    try {
      const res = await axiosGet('student/getStudents')
      setStudentData(res.data.data)
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
    // console.log(res.data.data)

  }
  const handleCreate = () => {
    setModal(true)
  }
  useEffect(() => {
    getStudent()
  }, [])
  return (
    <div className='pt-5'>
      <ToastContainer />
      {/* <StudentTable tableData={studentData}/> */}
      {modal && <AddStudent setModal={setModal} />}
      <StudentData tableData={studentData} modal={modal} handleCreate={handleCreate} />
    </div>
  )
}

export default StudentManagement