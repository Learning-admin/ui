import Card from 'components/card'
import InputField from 'components/fields/InputField';
import LargeDropdown from 'components/largeDropdown';
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';

const AddMenu = (props: any) => {
    const subjects = ["SAT", "ACT", "MCAT", "K-12 Tutoring", "Default"]
    const genders = ["Male", "Female", "Other"]

    const [subject, setSubject] = useState<string>("SAT")

    const [gender, setGender] = useState<string>("---Select Gender---")


    const rolesData = ["admin", "student", "tutor", "parent"]

    const [roles, setRoles] = useState<string>("")

    // console.log(props.modalData)

    // console.log(selectedOptions)
    return (
        <div className="bg-[rgba(0,0,0,0.5)] w-screen h-screen overflow-y-hidden fixed top-0 right-0 z-50 flex items-center justify-center">
            <Card extra="w-auto h-auto p-6">
                <header className="relative flex items-center justify-between">
                    <div className="text-xl font-bold text-navy-700 dark:text-white">
                        Add Menu
                    </div>
                    <MdClose className='h-6 w-6 cursor-pointer'
                        onClick={() => props.setMenuModal(false)}
                    />
                </header>
                <div>
                    <main className="mt-8 flex justify-between gap-10">
                        {/* <LargeDropdown
                        extra="mb-3"
                        label="Exam Type *"
                        dropdownData={examTypes}
                        selected={examSelect}
                        setSelected={setExamSelect}
                        id="exam-type"
                    />
                    <LargeDropdown
                        extra="mb-3"
                        label="Plan *"
                        dropdownData={plans}
                        selected={planSelect}
                        setSelected={setPlanSelect}
                        id="exam-type"
                        disabled={true}
                    /> */}
                        <div className='flex flex-col'>
                            <InputField
                                variant="auth"
                                extra="mb-3 w-[400px]"
                                label="Icon"
                                placeholder="Icon..."
                                id="icon"
                                type="text"
                            />
                            <InputField
                                variant="auth"
                                extra="mb-3 w-[400px]"
                                label="External Link"
                                placeholder="External Link..."
                                id="last-name"
                                type="text"
                            />
                            <LargeDropdown
                                extra="mb-3"
                                label="Roles"
                                dropdownData={rolesData}
                                selected={roles}
                                setSelected={setRoles}
                                id="roles"
                            />
                        </div>
                    </main>
                    <button className="linear mt-4 flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                        Add
                    </button>

                    <div style={{ display: "flex", float: "right" }} >
                        <button className=" ml5 linear mt-4 flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                            Cancel
                        </button>
                        <button className="ml5 linear mt-4 flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                            Save
                        </button>
                    </div>

                </div>
            </Card>
        </div>
    )
}

export default AddMenu