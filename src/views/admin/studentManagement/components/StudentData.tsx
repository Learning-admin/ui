import Card from 'components/card'
import Dropdown from 'components/dropdown'
import React, { useState } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsSearch, BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs'
import { MdAdd, MdCheck, MdClose, MdDelete, MdEdit, MdOutlinePendingActions } from 'react-icons/md'


const StudentData = (props: any) => {
    const { tableData, handleCreate } = props
    // console.log(tableData)
    return (
        <>
            <header className="relative flex items-center justify-between mb-6 mt-4">
                {/* <div className="text-xl font-bold text-navy-700 dark:text-white">
                TEACHER MANAGEMENT
            </div> */}
                <div className='border rounded-lg max-w-xs w-full bg-white flex items-center px-5'>
                    <BsSearch size={20} />
                    <input type="text" placeholder='Search Student...' className='flex h-12 w-full items-center justify-center rounded-xl bg-white/0 p-3 text-sm outline-none' />
                </div>
                <button className="linear flex items-center justify-center rounded-lg bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] "
                    onClick={handleCreate}>
                    <MdAdd className="h-6 w-6" />Create Student
                </button>
            </header>
            <Card extra={"w-full h-full py-2 border"}>

                <div className="overflow-x-scroll xl:overflow-x-hidden">
                    <table className="w-full">
                        <thead>
                            <tr className="!border-px !border-gray-400">
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 p-5 text-start">
                                    <div className="items-center justify-between text-sm font-medium text-gray-800">
                                        Name
                                    </div>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                    <div className="items-center justify-between text-sm font-medium text-gray-800">
                                        Exam type
                                    </div>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                    <div className="items-center justify-between text-sm font-medium text-gray-800">
                                        Phone number
                                    </div>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                    <div className="items-center justify-between text-sm font-medium text-gray-800">
                                        Grade
                                    </div>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 ">
                                    <div className="items-center justify-between text-sm font-medium text-gray-800">
                                        Email
                                    </div>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4">
                                    <div className="items-center justify-between text-sm font-medium text-gray-800">
                                        Student Type
                                    </div>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4">
                                    <div className="items-center justify-between text-sm font-medium text-gray-800">
                                        Actions
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData && tableData.map((student: any) => {
                                    return (
                                        <tr key={student._id}>
                                            <td className="min-w-[110px] border-white/0 p-3 flex items-center gap-3">
                                                <div className='w-[32px] h-[32px] bg-gray-100 border-gray-500 rounded-full flex items-center justify-center text-sm font-medium'>{student.firstName.charAt(0).toUpperCase()}{student.lastName.charAt(0).toUpperCase()}</div>
                                                <div>
                                                    <p className='text-sm font-medium text-[#101828]'>{student.firstName} {student.lastName}</p>
                                                    <p className='text-xs font-medium text-gray-600'>{student.email}</p>
                                                </div>                                            </td>
                                            <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                                <p className='text-sm font-medium text-[#101828]'>{student.entity}</p>
                                            </td>
                                            <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                                <p className="text-sm font-medium text-[#101828]">{student.mobileNo}</p>
                                            </td>
                                            <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                                <p className="text-sm font-medium text-[#101828]">{student.grade}</p>
                                            </td>
                                            <td className="min-w-[110px] border-white/0 py-3  pr-4 flex justify-center">
                                                <p className="text-sm font-medium text-[#101828]">{student.emailVerified ?
                                                    <div className='flex items-center justify-center gap-2 border border-green-300 px-3 py-1 bg-green-100 text-green-700 rounded-full'>
                                                        <MdCheck className='text-green-500'/>
                                                        <p>Verified</p>
                                                    </div> :
                                                    <div className='flex items-center justify-center gap-2 border border-orange-300 px-3 py-1 bg-orange-100 text-orange-600 rounded-full'>
                                                        <AiOutlineClockCircle className='text-orange-500'/>
                                                        <p>Pending</p>
                                                    </div>}
                                                </p>

                                            </td>
                                            <td className="min-w-[110px] border-white/0 py-3">
                                                <p className={`text-sm font-medium capitalize flex items-center justify-center ${student.accountType === 'active' ? 'text-green-700 px-3 py-1 border border-green-500 rounded-full' : 'text-gray-700 px-3 py-1 border border-gray-500 rounded-full' } `}>{student.accountType}</p>
                                            </td>
                                            <td className="min-w-[110px] border-white/0 py-3  pr-4 flex justify-center">
                                                <div className="flex items-center gap-3 justify-center cursor-pointer p-2 text-gray-500 hover:bg-gray-100 w-10 h-10 rounded-lg">
                                                    <MdEdit />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </Card >
        </>
    )
}

export default StudentData