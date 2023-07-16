import Card from 'components/card'
import React from 'react'
import { GrAdd } from 'react-icons/gr'
import { MdClose } from 'react-icons/md'

const EntityModal = (props: any) => {
    const { setEntityModal } = props
    return (
        <div className="bg-[rgba(0,0,0,0.5)] w-screen h-screen overflow-y-hidden fixed top-0 right-0 z-50 flex items-center justify-center">
            <Card extra="w-auto h-auto p-6">
                <header className="relative flex items-center justify-between">
                    <div className="text-xl font-bold text-navy-700 dark:text-white">
                        Add Entity
                    </div>
                    <MdClose className='h-6 w-6 cursor-pointer'
                        onClick={() => setEntityModal(false)}
                    />
                </header>
                <div>
                    <div>
                        <main className="mt-8 flex justify-between gap-10" >
                            <div className='flex flex-col'>
                                <div className='mb-3 w-80'>
                                    <label className='inputLabel'>Title*</label>
                                    <input id="name" type="text" className='inputField'
                                    />
                                </div>
                                <div className='mb-3 w-80'>
                                    <label className='inputLabel'>Code*</label>
                                    <input id="name" type="text" className='inputField'
                                    />
                                </div>
                            </div>
                        </main>
                        <div >
                        </div>

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
                </div>
            </Card >
        </div >
    )
}

export default EntityModal