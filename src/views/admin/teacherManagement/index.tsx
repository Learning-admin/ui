import React, { useEffect, useMemo, useState } from 'react'
import TeacherTable from './components/TeacherTable'
import teacherData from './data/teacherData'
import { axiosGet, axiosPost, axiosPut } from 'services/axiosService'
import TeacherData from './components/TeacherData'
import CreatePopUp from './components/CreatePopup'
import { ZodType, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ToastContainer, toast } from 'react-toastify'
import { useAuthHook } from 'hooks/useAuthHook'

type Default = {
  firstName: string
}

const TeacherManagement = () => {
  const [teacherdata, setTeacherdata] = useState<any>([])
  const [modal, setModal] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false)

  const handleLogout = useAuthHook()

  const FormSchema = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    email: z.string().email(),
    mobileNo: z.string().min(10).max(11),
    qualification: z.string().min(6).max(15),
    dateOfBirth: z.coerce.date(),
    subjects: z.array(z.string()),
    gender: z.string(),
    availableFrom: z.coerce.date(),
    summary: z.string().min(10).max(20),
    address: z.string().min(10).max(30),
  })

  type FormInput = z.infer<typeof FormSchema>;

  // console.log(defaultValues)


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobileNo: '',
      qualification: '',
      subjects: [],
      gender: '',
      dateOfBirth: new Date(),
      availableFrom: new Date(),
      summary: '',
      address: ''
    }
  })

  const getAllTeachers = async () => {
    try {
      const response = await axiosGet("teacher/getTeachers?pageNo=1&pageSize=5")
      // console.log(response.data.data)
      setTeacherdata(response?.data?.data)
      // toast.success('Data Fetched!', {
      //   position: toast.POSITION.TOP_RIGHT,
      //   className: 'toast-message',
      //   hideProgressBar: true
      // });
    } catch (err: any) {
      console.log(err.response.data.status)
      if (err.response.data.status === 401) handleLogout()
      toast.error(err.response?.data?.message, {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-message',
        hideProgressBar: true
      });
    }
  }
  const handleReRender = () => {
    setRender(!render)
  }
  const addTeacher = async (data: any) => {
    console.log(data)
    try {
      const response = await axiosPost("teacher/addTeacher", data)
      console.log(response)
    }
    catch (err) {
      console.log(err)
    }
  }
  const handleActive = (id: string, isActive: boolean) => {
    axiosPut('teacher/updateTeacher',
      {
        isActive: isActive,
        _id: id
      }).then((res) => {
        handleReRender()
        console.log(res)
        toast.success('Status updated successfully!', {
          position: toast.POSITION.TOP_RIGHT,
          className: 'toast-message',
          hideProgressBar: true
        });

      }).catch(err => console.log(err))
  }

  const handleUpdateTeacher = (data: any) =>{
    
  }


  useEffect(() => {
    getAllTeachers()
  }, [render])

  return (
    <div className="pt-5">
      <ToastContainer />
      {/* <TeacherTable tableData={teacherdata} /> */}
      {modal && <CreatePopUp
        setModal={setModal}
        handleSubmit={handleSubmit}
        handleActive={handleActive}
        addTeacher={addTeacher}
        register={register}
        errors={errors}
        edit={edit}

      />}

      <TeacherData
        tableData={teacherdata}
        setModal={setModal}
        handleActive={handleActive}
        reset={reset}
        setEdit={setEdit}
      />
    </div>
  )
}

export default TeacherManagement