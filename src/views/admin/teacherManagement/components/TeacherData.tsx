import Card from 'components/card';
import Checkbox from 'components/checkbox';
import React, { useEffect, useState } from 'react'
import { MdAdd, MdCheck, MdDelete, MdEdit, MdOutlineClose } from 'react-icons/md';
import CreatePopUp from './CreatePopup';
import Dropdown from 'components/dropdown';
import { BsThreeDotsVertical, BsSearch } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import Pagination from '../../../../components/pagination/index';



const TeacherData = (props: any) => {
    const { tableData, setModal, handleActive, reset, setEdit } = props
    // console.log(tableData)
    const [open, setOpen] = React.useState(false);
    const [checked, setchecked] = useState<boolean>();
    const transparent = false

    const dateConvertor = (dateString: string) => {
        return new Date(dateString).toLocaleDateString()
    }
    console.log(tableData)

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
        <header className="relative flex items-center justify-between mb-6 mt-4">
            {/* <div className="text-xl font-bold text-navy-700 dark:text-white">
                TEACHER MANAGEMENT
            </div> */}
            <div className='border rounded-lg max-w-xs w-full bg-white flex items-center px-5'>
                <BsSearch size={20} />
                <input type="text" placeholder='Search Teacher...' className='flex h-12 w-full items-center justify-center rounded-xl bg-white/0 p-3 text-sm outline-none' />
            </div>
            <button className="linear flex items-center justify-center rounded-lg bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                onClick={handleCreate}>
                <MdAdd className="h-6 w-6" />Create Teacher
            </button>
        </header>
        <Card extra={"w-full h-full py-2 border"}>
            <div className="overflow-x-scroll xl:overflow-x-hidden">
                <table className="w-full">
                    <thead className='px-4'>
                        <tr className="!border-px !border-gray-400">
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 text-start p-5">
                                <div className="items-center justify-between text-sm font-medium text-gray-800">
                                    Name
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 text-start">
                                <div className="items-center justify-between text-sm font-medium text-gray-800">
                                    Subject(S)
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 text-start">
                                <div className="items-center justify-between text-sm font-medium text-gray-800">
                                    Available from
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 text-start">
                                <div className="items-center justify-between text-sm font-medium text-gray-800">
                                    Phone
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 text-start">
                                <div className="text-sm font-medium text-gray-800">
                                    Active
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 text-start">
                                <div className="items-center justify-between text-sm font-medium text-gray-800">
                                    Email
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 text-start">
                                <div className="flex items-center justify-center text-sm font-medium text-gray-800">
                                    Status
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 text-start">
                                <div className="flex items-center justify-center text-sm font-medium text-gray-800">
                                    Actions
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData && tableData.map((data: any, i: number) => {
                            return (<tr key={data._id}>
                                <td className="min-w-[110px] border-white/0 p-3 flex items-center gap-3">
                                    <div className='w-[32px] h-[32px] bg-gray-100 border-gray-500 rounded-full flex items-center justify-center text-sm font-medium'>{data.firstName.charAt(0).toUpperCase()}{data.lastName.charAt(0).toUpperCase()}</div>
                                    <div>
                                        <p className='text-sm font-medium text-[#101828]'>{data.firstName} {data.lastName}</p>
                                        <p className='text-xs font-medium text-gray-600'>{data.email}</p>
                                    </div>
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className='text-sm font-medium text-[#101828] flex gap-2 flex-wrap'>{data.subjects.map((subject: any, i: number) =>
                                        <div className={`flex items-center justify-center gap-2 border py-1 px-2 rounded-full 
                                    ${i === 0 && 'bg-[#F9F5FF] border-[#E9D7FE] text-[#6941C6]'}
                                    ${i === 1 && 'bg-[#EFF8FF] border-[#B2DDFF] text-[#175CD3]'}
                                    ${i === 2 && 'bg-[#EEF4FF] border-[#C7D7FE] text-[#3538CD]'}
                                    `}>{subject.name}</div>)}</p>
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className='text-sm font-medium text-[#101828]'>{dateConvertor(data.availableFrom)}</p>
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className="text-sm font-medium text-[#101828]">{data.mobileNo}</p>
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
                                        onChange={(e) => handleActive(e.target.value, !data.isActive)}
                                    />
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <div className="text-sm font-medium text-[#101828]">{data.emailVerified ?
                                        <div className='flex items-center justify-center gap-2 border border-green-300 px-3 py-1 bg-green-100 text-green-700 rounded-full'>
                                            <MdCheck className='text-green-500' />
                                            <p>Verified</p>
                                        </div> :
                                        <div className='flex items-center justify-center gap-2 border border-orange-300 px-3 py-1 bg-orange-100 text-orange-600 rounded-full'>
                                            <AiOutlineClockCircle className='text-orange-500' />
                                            <p>Pending</p>
                                        </div>}
                                    </div>

                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className="text-sm font-medium flex justify-center">
                                        {data.status === "approved" ?
                                            <span className="text-green-700 px-3 py-1 border border-green-500 rounded-full">Approved</span> :
                                            data.status === null ?
                                                <span className=" text-orange-500 border border-orange-500 rounded-full px-3 py-1">Pending</span> :
                                                <span className=" text-red-500 border border-red-500 rounded-full px-3 py-1">Rejected</span>
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
                                                        : "p-2 text-gray-600 hover:bg-gray-100"
                                                        } linear justify-center rounded-lg font-bold transition duration-200`}
                                                >
                                                    <BsThreeDotsVertical className="h-6 w-6" />
                                                </button>
                                            }
                                            animation={`${i === 4 ? "origin-bottom-right" : "origin-top-right"} transition-all duration-300 ease-in-out`}
                                            classNames={`${i === 4 ? "top-[-60px] right-[40px]" : "top-11 right-0"}  w-max`}
                                            children={
                                                <div className="z-100 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500">
                                                    <p onClick={() => handleEdit(data)} className=" text-[16px] flex cursor-pointer items-center gap-4 p-2 hover:bg-[#007bff] hover:text-white rounded-xl">
                                                        <span>
                                                            <MdEdit />
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

                {/* <Pagination /> */}
            </div>

        </Card >
    </>
    )
}

export default TeacherData