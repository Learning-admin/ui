import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdAdd, MdCheck, MdClose, MdDelete, MdEdit, MdOutlinePendingActions } from 'react-icons/md'
import Card from 'components/card'
import { useEffect } from 'react';




const MenusTable = (props: any) => {
    const { menusData, modelHandler } = props;

    // useEffect(() => {
    //     console.log(menusData)
    // }, [menusData])


    return <>        <>
        <Card extra={"w-full pb-10 p-4 h-full"}>
            <header className="relative flex items-center justify-between mt-4">
                <div className="text-xl font-bold text-navy-700 dark:text-white">
                    Menu List
                </div>
                {/* <CardMenu transparent={false} data={'create'}/> */}
                <button className="linear flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                    onClick={modelHandler}
                >
                    <MdAdd className="h-6 w-6" />Add Menu
                </button>
            </header>

            <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="!border-px !border-gray-400">
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="items-center justify-between text-sm font-bold text-gray-600">
                                    S.NO
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="items-center justify-between text-sm font-bold text-gray-600">
                                    TITLE
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
                                    ICON
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="text-sm font-bold text-gray-600">
                                    ROLES
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="items-center justify-between text-sm font-bold text-gray-600">
                                    EXTERNAL LINK
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

                        {/* {
    "_id": "61eb82e8a1f3f8416e1fc4f8",
    "roles": [
        "admin",
        "student",
        "tutor",
        "parent"
    ],
    "title": "Schedule Classes",
    "icon": "https://eph.s3.amazonaws.com/ic_calendra@3x.png",
    "externalLink": "https://app.examprephub.com/"
} */}
                        {
                            menusData && menusData.map((menu: any, index: number) => {
                                return (
                                    <tr key={menu._id}>
                                        <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                            <p className='text-sm font-bold text-navy-700'>{index + 1}</p>
                                        </td>
                                        <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                            <p className='text-sm font-bold text-navy-700'>{menu.title}</p>
                                        </td>
                                        {/* <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                        <p className='text-sm font-bold text-navy-700'>{''}</p>
                                    </td> */}
                                        <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                            <p className="text-sm font-bold text-navy-700">{menu.icon}</p>
                                        </td>
                                        <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                            <p className="text-sm font-bold text-navy-700">{(menu.roles).map((d: any) => <span style={{ marginRight: "5px" }} >{d}</span>)}</p>
                                        </td>
                                        <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                            <p className="text-sm font-bold text-navy-700">{menu.externalLink}</p>
                                        </td>
                                        <td className="min-w-[110px] border-white/0 py-3  pr-4 flex justify-center">
                                            <div onClick={() => { console.log(menu); modelHandler(menu); }} className="flex items-center gap-3 justify-center cursor-pointer p-2 text-[#007bff] hover:bg-gray-100 w-10 h-10 rounded-lg">
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
    </></>
}
export default MenusTable;