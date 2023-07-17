import React from 'react'
import Card from 'components/card'
import { MdClose } from 'react-icons/md';


const TroubleEditPopup = (props: any) => {

    const { troublePopup,
        setTroublePopup,
        troubleRowData,
        intitialTroubleDtObj,
        setTroubleRowData, status } = props

    return (
        <div>        <div className="bg-[rgba(0,0,0,0.5)] w-screen h-screen overflow-y-hidden fixed top-0 right-0 z-50 flex items-center justify-center">
            <Card extra="w-auto h-auto p-6">
                <header className="relative flex items-center justify-between">
                    <div className="text-xl font-bold text-navy-700 dark:text-white">
                        Update Trouble Ticket
                    </div>
                    <MdClose className='h-6 w-6 cursor-pointer'
                        onClick={() => { setTroublePopup(false); setTroubleRowData(intitialTroubleDtObj) }}
                    />
                </header>
                <div>
                    {/* <form onSubmit={handleSubmit(addMenu)}> */}
                    <main className="mt-8 flex justify-between gap-10" >
                        <div className='flex flex-col'>
                            <div className='mb-3 w-80'>
                                <label className='inputLabel'><b>Status</b></label>
                                <select id="status" className='inputField'
                                // onChange={(e) => { onChangeHandler(e) }}
                                // {...register("gender")} 
                                >
                                    {
                                        status.map((ele: any, i: number) => <option key={i} selected={troubleRowData.status == ele.value} value={ele.value}>{ele.label}</option>)
                                    }
                                </select>
                            </div>
                            <div className='mb-3 w-80'>
                                <label className='inputLabel'><b>Notes</b></label>
                                <textarea id="notes" rows={4} defaultValue={troubleRowData.notes} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Notes..."></textarea>

                            </div>
                        </div>
                    </main>

                    {/* <div >
                        {modalData?.rolesObjData?.length > 0 &&
                            modalData?.rolesObjData.map((ele: any, index: any) => <div className='displayFlex' >
                                {ele}
                                <AiFillDelete className='rolesAdder' /></div>)}
                    </div> */}

                    <div className='displayFlex floatRight'>
                        <button className=" ml5 linear mt-4 flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                            Cancel
                        </button>
                        <button type="submit" className="ml5 linear mt-4 flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                            Save
                        </button>
                    </div>


                    {/* </form> */}


                </div>
            </Card >
        </div ></div >
    )
}

export default TroubleEditPopup