import Card from 'components/card'
import Dropdown from 'components/dropdown'
import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs'
import { MdAdd, MdCheck, MdClose, MdDelete, MdEdit, MdOutlinePendingActions } from 'react-icons/md'


const StudentData = (props: any) => {
    const { tableData, handleCreate } = props
    const [open, setOpen] = React.useState(false);
    const transparent = false
    // console.log(tableData)
    return (
        <>
            <Card extra={"w-full pb-10 p-4 h-full"}>
                <header className="relative flex items-center justify-between mt-4">
                    <div className="text-xl font-bold text-navy-700 dark:text-white">
                        STUDENT MANAGEMENT
                    </div>
                    {/* <CardMenu transparent={false} data={'create'}/> */}
                    <button className="linear flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                        onClick={handleCreate}
                    >
                        <MdAdd className="h-6 w-6" />Create
                    </button>
                </header>

                <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
                    <table className="w-full">
                        <thead>
                            <tr className="!border-px !border-gray-400">
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                    <div className="items-center justify-between text-sm font-bold text-gray-600">
                                        NAME
                                    </div>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                    <div className="items-center justify-between text-sm font-bold text-gray-600">
                                        EXAM TYPE
                                    </div>
                                </th>
                                {/* <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                    <div className="items-center justify-between text-sm font-bold text-gray-600">
                                        1-1 (OR) SMALL GROUP
                                    </div>
                                </th> */}
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                    <div className="items-center justify-between text-sm font-bold text-gray-600">
                                        EMAIL ID
                                    </div>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                    <div className="text-sm font-bold text-gray-600">
                                        PHONE NUMBER
                                    </div>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                    <div className="items-center justify-between text-sm font-bold text-gray-600">
                                        GRADE
                                    </div>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                    <div className="flex items-center justify-center text-sm font-bold text-gray-600">
                                        EMAIL VERIFIED
                                    </div>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                    <div className="flex items-center justify-center text-sm font-bold text-gray-600">
                                        STUDENT TYPE
                                    </div>
                                </th>
                                <th
                                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                    <div className="flex items-center justify-center text-sm font-bold text-gray-600">
                                        ACTIONS
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData && tableData.map((student: any) => {
                                    return (
                                        <tr key={student._id}>
                                            <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                                <p className='text-sm font-bold text-navy-700'>{student.firstName} {student.lastName}</p>
                                            </td>
                                            <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                                <p className='text-sm font-bold text-navy-700'>{student.entity}</p>
                                            </td>
                                            {/* <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                                <p className='text-sm font-bold text-navy-700'>{''}</p>
                                            </td> */}
                                            <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                                <p className="text-sm font-bold text-navy-700">{student.email}</p>
                                            </td>
                                            <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                                <p className="text-sm font-bold text-navy-700">{student.mobileNo}</p>
                                            </td>
                                            <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                                <p className="text-sm font-bold text-navy-700">{student.grade}</p>
                                            </td>
                                            <td className="min-w-[110px] border-white/0 py-3  pr-4 flex justify-center">
                                                <p className="text-sm font-bold text-navy-700">{student.emailVerified ?
                                                    <div className='flex items-center gap-2 border border-green-400 px-3 py-1 bg-green-200 text-green-500 rounded-full'>
                                                        <MdCheck />
                                                        <p>Verified</p>
                                                    </div> :
                                                    <div className='flex items-center gap-2 border border-orange-400 px-3 py-1 bg-orange-200 text-orange-500 rounded-full'>
                                                        <AiOutlineClockCircle/>
                                                        <p>Pending</p>
                                                    </div>}
                                                </p>

                                            </td>
                                            <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                                <p className="text-sm font-bold text-navy-700">{student.accountType}</p>
                                            </td>
                                            <td className="min-w-[110px] border-white/0 py-3  pr-4 flex justify-center">
                                                <div className="flex items-center gap-3 justify-center cursor-pointer p-2 text-[#007bff] hover:bg-gray-100 w-10 h-10 rounded-lg">
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