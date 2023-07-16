import Card from 'components/card'
import InputField from 'components/fields/InputField';
import LargeDropdown from 'components/largeDropdown';
import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md';
import { GrAdd } from "react-icons/gr";

const AddAssignmentModal = (props: any) => {

  const { setModal, subjectType, modalData,setModalData } = props;
  const subjects = ["SAT", "ACT", "MCAT", "K-12 Tutoring", "Default"]
  const genders = ["Male", "Female", "Other"]

  const [subject, setSubject] = useState<string>("SAT")
  const [gender, setGender] = useState<string>("---Select Gender---")

  const addHandler = () => {

    setModalData((prev: any) => {
      let arr = prev.subCatObj;
      arr.push({ id: arr.length, value: "" })
      return ({ ...prev, ["subCatObj"]: arr })
    })
  }

  const popHandler = (ele: any) => {
    console.log(ele)
    setModalData((prev: any) => {
      let arr = prev.subCatObj;
      let filterarr = arr.filter((d: any) => d.id != ele.id)
      return ({ ...prev, ["subCatObj"]: filterarr })
    })
  }

  const onChangeHandler = (e: any) => {
    const { id, value } = e.target
    setModalData((prev: any) => ({ ...prev, [id]: value }))
  }

  const onChangeSubHandler = (e: any, ele: any) => {
    const { id, value } = e.target
  }
  return (
  <div className="bg-[rgba(0,0,0,0.5)] w-screen h-screen overflow-y-hidden fixed top-0 right-0 z-50 flex items-center justify-center">
    <Card extra="w-auto h-auto p-6">
      <header className="relative flex items-center justify-between">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Add Assignment
        </div>
        <MdClose className='h-6 w-6 cursor-pointer'
          onClick={() => setModal(false)}
        />
      </header>
      <main className="mt-8 flex justify-between gap-10" >
        <div className='flex flex-col'>
        <select id="entityType" className='inputField mr-4'
        onChange={(e) => { onChangeHandler(e) }}
        >
        <option value="">{"ACT"}</option>
          {
           subjectType.map((ele: any, i: number) => <option key={i} selected={modalData?.entityType == ele.value} value={ele.value}>{ele.label}</option>)
          }
      </select>
          <div className='mb-3 w-80'>
            <label className='inputLabel'>Test Paper</label>
            <select id="entityType" className='inputField'
              onChange={(e) => { onChangeHandler(e) }}
              >
              <option value="">{"<<Please Select>>"}</option>
                {
                  subjectType.map((ele: any, i: number) => <option key={i} selected={modalData?.entityType == ele.value} value={ele.value}>{ele.label}</option>)
                }
            </select>
          </div>

          <div className='mb-3 w-80'>
            <label className='inputLabel'>Batch</label>
            <select id="entityType" className='inputField'
              onChange={(e) => { onChangeHandler(e) }}
              >
              <option value="">{"<<Please Select>>"}</option>
                {
                  subjectType.map((ele: any, i: number) => <option key={i} selected={modalData?.entityType == ele.value} value={ele.value}>{ele.label}</option>)
                }
            </select>
          </div>
        </div>
      </main>
      <div className='displayFlex floatRight'>
        <button className=" ml5 linear mt-4 flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Cancel
        </button>
        <button onClick={() => { console.log(modalData) }} type="submit" className="ml5 linear mt-4 flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Save
        </button>
      </div>
    </Card >
  </div >
  )
}

export default AddAssignmentModal
