import Card from 'components/card';
import Checkbox from 'components/checkbox';
import React, { useEffect, useState } from 'react'
import { MdAdd, MdCheck, MdDelete, MdEdit, MdOutlineClose } from 'react-icons/md';
// import CreatePopUp from './CreatePopUp';
import Dropdown from 'components/dropdown';
import { BsThreeDotsVertical, BsSearch } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { MdDisabledVisible } from 'react-icons/md';
import Pagination from '../../../../components/pagination/index';



const TestPapersData = (props: any) => {
    const { tableData, setModal, handleActive, setEdit } = props
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
    }
    const handleEdit = (data: any) => {
        setEdit(true)
        // reset((formValues: any) => ({
        //     ...formValues, ...data
        // }))
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
                <MdAdd className="h-6 w-6" />Paper
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
                                    S.No
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 text-start">
                                <div className="items-center justify-between text-sm font-medium text-gray-800">
                                    Paper
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 text-start">
                                <div className="items-center justify-between text-sm font-medium text-gray-800">
                                    Exam Type
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 text-start">
                                <div className="items-center justify-between text-sm font-medium text-gray-800">
                                    Type
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 text-start">
                                <div className="text-sm font-medium text-gray-800">
                                    Subjects
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 text-start">
                                <div className="items-center justify-between text-sm font-medium text-gray-800">
                                    Status
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 text-start">
                                <div className="items-center justify-between text-sm font-medium text-gray-800">
                                    Actions
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData && tableData.map((data: any, i: number) => {
                            return (<tr key={data._id}>
                                <td className="min-w-[110px] border-white/0 py-3 pl-5">
                                    <p className="text-sm font-medium text-gray-600">{i + 1}</p>
                                </td>
                                <td className="min-w-[110px] border-white/0">
                                    <p className="text-sm font-medium text-gray-600">{data.name}</p>
                                </td>
                                <td className="min-w-[110px] border-white/0">
                                    <p className="text-sm font-medium text-gray-600">{data.entityType}</p>
                                </td>
                                <td className="min-w-[110px] border-white/0 ">
                                    <p className="text-sm font-medium text-gray-600">{data.type}</p>
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className='text-sm font-medium text-[#101828] flex gap-2 flex-wrap'>{data.subject.map((subject: any, i: number) =>
                                        <div className={`flex items-center justify-center gap-2 border py-1 px-2 rounded-full 
                                    ${i === 0 && 'bg-[#F9F5FF] border-[#E9D7FE] text-[#6941C6]'}
                                    ${i === 1 && 'bg-[#EFF8FF] border-[#B2DDFF] text-[#175CD3]'}
                                    ${i === 2 && 'bg-[#EEF4FF] border-[#C7D7FE] text-[#3538CD]'}
                                    `}>{subject.subjectId.name}</div>)}</p>
                                </td>


                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <div className="text-sm font-medium text-[#101828]">{data.publish ?
                                        <div className='flex items-center justify-center gap-2 border border-green-300 px-3 py-1 bg-green-100 text-green-700 rounded-full'>
                                            <MdCheck className='text-green-500' />
                                            <p>Published</p>
                                        </div> :
                                        <div className='flex items-center justify-center gap-2 border border-gray-300 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg cursor-pointer'>
                                            <p>Publish</p>
                                        </div>}
                                    </div>

                                </td>
                                <td className="min-w-[110px] border-white/0 flex gap-2 py-3 text-gray-600">
                                   <AiOutlineEye size={20} className='cursor-pointer'/>
                                   <MdDisabledVisible size={20} className='cursor-pointer'/>
                                   <MdDelete  size={20} className='cursor-pointer'/>
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

export default TestPapersData