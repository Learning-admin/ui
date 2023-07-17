import React from 'react'
import { MdClose } from 'react-icons/md';
import Card from 'components/card'


const TroubleViewPopup = (props: any) => {

    const { troublePopup, setTroublePopup,
        troubleRowData, troubleTypesObj,
        priorityObj,
        statusObj,
        intitialTroubleDtObj,
        setTroubleRowData
    } = props;


    console.log(troubleRowData)

    const obj: any = {
        "TicketId": "ticketId",
        "User": "user",
        "Description": "requestType",
        "Priority": "priority",
        "Status": "status",
        "Notes": "notes",
    }

    return (
        <div>        <div className="bg-[rgba(0,0,0,0.5)] w-screen h-screen overflow-y-hidden fixed top-0 right-0 z-50 flex items-center justify-center">
            <Card extra="w-auto h-auto p-6">
                <header className="relative flex items-center justify-between">
                    <div className="text-xl font-bold text-navy-700 dark:text-white">
                        {"Ticket ID  " + troubleRowData.ticketId}
                    </div>
                    <MdClose className='h-6 w-6 cursor-pointer'
                        onClick={() => {
                            setTroublePopup(false);
                            setTroubleRowData(intitialTroubleDtObj);
                            // setModalData(initialVal)
                        }}
                    />
                </header>
                <div>
                    {/* <form onSubmit={handleSubmit(addMenu)}> */}
                    <main className="mt-8 flex justify-between gap-10" >
                        <div className='flex flex-col'>

                            {Object.keys(obj).map((d: any, i: number) => {
                                return <div key={i} className='mb-3 w-80'>
                                    <label className='inputLabel'><b>{d}</b> {" : "}</label>
                                    <label className='inputLabel'>
                                        {obj[d] == "user" ? (troubleRowData[obj[d]]["firstName"] + " " + troubleRowData[obj[d]]["lastName"]) :
                                            obj[d] == "requestType" ? troubleTypesObj[troubleRowData[obj[d]]] :
                                                obj[d] == "priority" ? priorityObj[troubleRowData[obj[d]]] :
                                                    obj[d] == "status" ? statusObj[troubleRowData[obj[d]]] :
                                                        troubleRowData[obj[d]]}
                                    </label>
                                </div>
                            })}


                        </div>
                    </main>
                </div>
            </Card >
        </div ></div >
    )
}

export default TroubleViewPopup