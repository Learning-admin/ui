import Card from 'components/card';
import Checkbox from 'components/checkbox';
import React, { useEffect, useState } from 'react'
import { MdAdd, MdCheck, MdDelete, MdEdit, MdOutlineClose } from 'react-icons/md';
import CreatePopUp from './CreatePopup';
import Dropdown from 'components/dropdown';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';



const TeacherData = (props: any) => {
    const { tableData, setModal, handleActive, reset, setEdit } = props
    // console.log(tableData)
    const [open, setOpen] = React.useState(false);
    const [checked, setchecked] = useState<boolean>();
    const transparent = false

    const dateConvertor = (dateString: string) => {
        return new Date(dateString).toLocaleDateString()
    }


    const handleCreate = () => {
        setEdit(false)
        setModal(true)
        reset()
    }
    const handleEdit = (data: any) => {
        setEdit(true)
        reset((formValues: any) => ({
            ...formValues, ...data
          }))
        setModal(true)
        // setDefaultValues(data)
    }

    return (<>
        <Card extra={"w-full pb-10 p-4 h-full"}>
            <header className="relative flex items-center justify-between mt-4">
                <div className="text-xl font-bold text-navy-700 dark:text-white">
                    TEACHER MANAGEMENT
                </div>
                {/* <CardMenu transparent={false} data={'create'}/> */}
                <button className="linear flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                    onClick={handleCreate}>
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
                                    SUBJECT(S)
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="items-center justify-between text-sm font-bold text-gray-600">
                                    AVAILABLE FROM
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="items-center justify-between text-sm font-bold text-gray-600">
                                    PHONE
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="text-sm font-bold text-gray-600">
                                    ACTIVE
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="items-center justify-between text-sm font-bold text-gray-600">
                                    EMAIL VERIFICATION
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="flex items-center justify-center text-sm font-bold text-gray-600">
                                    STATUS
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
                        {tableData && tableData.map((data: any, i: number) => {
                            return (<tr key={data._id}>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className='text-sm font-bold text-navy-700'>{data.firstName} {data.lastName}</p>
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className='text-sm font-bold text-navy-700'>{data.subjects.map((subject: any) => `${subject.name}, `)}</p>
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className='text-sm font-bold text-navy-700'>{dateConvertor(data.availableFrom)}</p>
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className="text-sm font-bold text-navy-700">{data.mobileNo}</p>
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    {/* <Checkbox defaultChecked={data.isActive} checked={checked} handleChange={handleActive} value={data}/> */}
                                    <input
                                        type="checkbox"
                                        className={'checkBox'}
                                        id={data.name}
                                        value={data._id}
                                        checked={checked}
                                        defaultChecked={data.isActive}
                                        onChange={(e)=>handleActive(e.target.value, !data.isActive)}
                                    />
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <div className="text-sm font-bold text-navy-700">{data.emailVerified ?
                                        <div className='flex items-center justify-center gap-2 border border-green-400 px-3 py-1 bg-green-200 text-green-500 rounded-full'>
                                            <MdCheck />
                                            <p>Verified</p>
                                        </div> :
                                        <div className='flex items-center justify-center gap-2 border border-orange-400 px-3 py-1 bg-orange-200 text-orange-500 rounded-full'>
                                            <AiOutlineClockCircle />
                                            <p>Pending</p>
                                        </div>}
                                    </div>

                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className="text-sm font-bold text-navy-700 flex justify-center">
                                        {data.status === "approved" ?
                                            <span className="px-3 text-green-400 rounded-xl">Approved</span> :
                                            data.status === null ?
                                                <span className=" text-orange-500 rounded-xl">Pending</span> :
                                                <span className=" text-red-500 rounded-xl">Rejected</span>

                                        }
                                    </p>
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <div className="flex items-center gap-3 justify-center">
                                        {/* <MdEdit className="cursor-pointer text-blue-500" onClick={()=>handleEdit(data)}/>
                                        {
                                            data.status && data.status === "approved" ? <MdOutlineClose className="cursor-pointer text-red-500 text-xl"/> : <MdCheck className="cursor-pointer text-green-500 text-xl"/>
                                        } */}
                                        <Dropdown
                                            button={
                                                <button
                                                    onClick={() => setOpen(!open)}
                                                    className={`flex items-center text-xl hover:cursor-pointer ${transparent
                                                        ? "bg-none text-white hover:bg-none active:bg-none"
                                                        : "p-2 text-[#007bff] hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
                                                        } linear justify-center rounded-lg font-bold transition duration-200`}
                                                >
                                                    <BsThreeDotsVertical className="h-6 w-6" />
                                                </button>
                                            }
                                            animation={`${i === 4 ? "origin-bottom-right" : "origin-top-right"} transition-all duration-300 ease-in-out`}
                                            classNames={`${i === 4 ? "top-[-60px] right-[40px]" : "top-11 right-0"}  w-max`}
                                            children={
                                                <div className="z-100 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500">
                                                    <p onClick={()=>handleEdit(data)} className=" text-[16px] flex cursor-pointer items-center gap-4 p-2 hover:bg-[#007bff] hover:text-white rounded-xl">
                                                        <span>
                                                            <MdEdit/>
                                                        </span>
                                                        Edit
                                                    </p>
                                                    <p className="text-[16px] flex cursor-pointer items-center gap-4 p-2 hover:bg-[#007bff] hover:text-white rounded-xl">
                                                        <span>
                                                            <MdDelete />
                                                        </span>
                                                        Reject
                                                    </p>
                                                </div>
                                            }
                                        />

                                        {/* <p className="cursor-pointer">Reject</p> */}
                                    </div>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </Card >
    </>
    )
}

export default TeacherData