
import Card from 'components/card'
import moment from 'moment'
import { MdAdd, MdCheck, MdClose, MdDelete, MdEdit, MdOutlinePendingActions } from 'react-icons/md'


const TroublesData = (props: any) => {
    const { troublesData, troubleTypes, troubleTypesObj, priority,
        priorityObj, status,
        statusObj, setTroubleModal } = props;

    const modelHandler = () => {
        setTroubleModal(true);
    }

    return (
        <div>        <Card extra={"w-full pb-10 p-4 h-full"}>
            <header className="relative flex items-center justify-between mt-4">
                <div className="text-xl font-bold text-navy-700 dark:text-white">
                    Menu List
                </div>
                {/* <CardMenu transparent={false} data={'create'}/> */}
                <button className="linear flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                    onClick={modelHandler}
                >
                    <MdAdd className="h-6 w-6" />Trouble Ticket
                </button>
            </header>

            <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="!border-px !border-gray-400">
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="items-center justify-between text-sm font-bold text-gray-600">
                                    TICKET ID
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="items-center justify-between text-sm font-bold text-gray-600">
                                    USER
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
                                    TROUBLE TYPE
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="text-sm font-bold text-gray-600">
                                    TROUBLE TICKET DATE
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="items-center justify-between text-sm font-bold text-gray-600">
                                    PRIORITY
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="flex items-center justify-center text-sm font-bold text-gray-600">
                                    ORDER ID
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
                                    NOTES
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="flex items-center justify-center text-sm font-bold text-gray-600">
                                    ACTION
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            troublesData && troublesData?.map((trouble: any, index: number) => {
                                return (
                                    <tr key={trouble._id}>
                                        <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                            <p className='text-sm font-bold text-navy-700'>{trouble.ticketId}</p>
                                        </td>
                                        <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                            <p className='text-sm font-bold text-navy-700'>{trouble?.user?.fullName == undefined ? (trouble?.user?.firstName + " " + trouble?.user?.lastName) : trouble?.user?.fullName}</p>
                                        </td>
                                        {/* <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className='text-sm font-bold text-navy-700'>{''}</p>
                                </td> */}
                                        <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                            <p className="text-sm font-bold text-navy-700">{troubleTypesObj[trouble.requestType]}</p>
                                        </td>
                                        <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                            <p className="text-sm font-bold text-navy-700">{moment(trouble?.createdAt).format("DD-MMM-yyyy")}</p>
                                        </td>
                                        <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                            <p className="text-sm font-bold text-navy-700">{priorityObj[trouble.priority]}</p>
                                        </td>
                                        <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                            <p className="text-sm font-bold text-navy-700">{trouble?.order?.orderId == undefined ? "" : trouble?.order?.orderId}</p>
                                        </td>
                                        <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                            <p className="text-sm font-bold text-navy-700">{statusObj[trouble?.status]}</p>
                                        </td>
                                        <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                            <p className="text-sm font-bold text-navy-700">{trouble?.notes}</p>
                                        </td>
                                        <td className="min-w-[110px] border-white/0 py-3  pr-4 flex justify-center">
                                            <div
                                                // onClick={() => { modelHandler(menu); }}
                                                className="flex items-center gap-3 justify-center cursor-pointer p-2 text-[#007bff] hover:bg-gray-100 w-10 h-10 rounded-lg">
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
        </Card ></div>
    )
}

export default TroublesData