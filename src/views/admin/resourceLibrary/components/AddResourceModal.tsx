import Card from 'components/card'
import InputField from 'components/fields/InputField';
import LargeDropdown from 'components/largeDropdown';
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';
import TextEditor from './TextEditor';


const AddResourceModal = (props: any) => {
    const { setModal } = props
    const subjects = ["SAT", "ACT", "MCAT", "K-12 Tutoring", "Default"]
    const genders = ["Male", "Female", "Other"]

    const [subject, setSubject] = useState<string>("SAT")
    const [gender, setGender] = useState<string>("---Select Gender---")

    // console.log(selectedOptions)
    return (
        <div className="bg-[rgba(0,0,0,0.5)] w-screen h-screen overflow-y-hidden fixed top-0 right-0 z-50 flex items-center justify-center">
            <Card extra="w-auto h-auto p-6">
                <header className="relative flex items-center justify-between">
                    <div className="text-xl font-bold text-navy-700 dark:text-white">
                        Add Reource
                    </div>
                    <MdClose className='h-6 w-6 cursor-pointer'
                        onClick={() => setModal(false)}
                    />
                </header>
                <div>
                    <main className="mt-8 flex flex-col justify-between gap-5">
                        <div className='flex flex-row justify-between'>
                            <LargeDropdown
                                extra="mb-3 w-[300px]"
                                label="Exam Type *"
                                dropdownData={subjects}
                                selected={subject}
                                setSelected={setSubject}
                                id="subjects"
                            />
                            <InputField
                                variant="auth"
                                extra="mb-3 w-[300px]"
                                label="Title *"
                                placeholder="Title..."
                                id="last-name"
                                type="Title"
                            />

                        </div>
                        <div>
                            <label className='inputLabel'>Overview*</label>
                            <TextEditor/>
                        </div>
                        <div>
                            <label className='inputLabel'>Syllabus*</label>
                            <TextEditor />
                        </div>
                    </main>
                    <button className="linear mt-4 flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                        Submit
                    </button>
                </div>
            </Card>
        </div>
    )
}

export default AddResourceModal