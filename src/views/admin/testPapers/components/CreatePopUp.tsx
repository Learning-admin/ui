import Card from 'components/card'
import Checkbox from 'components/checkbox';
import InputField from 'components/fields/InputField';
import LargeDropdown from 'components/largeDropdown';
import { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md';
import { axiosGet } from 'services/axiosService';

const CreatePopUp = (props: any) => {

    const { setModal, handleSubmit, addTeacher, register, errors, edit } = props

    const genders = ['Male', 'Female', 'Other']

    const [subject, setSubject] = useState<any>("sat")
    const [subjectByEntity, setSubjectByEntity] = useState<any>()
    const [gender, setGender] = useState<string>()
    const [entities, setEntities] = useState<any>()

    // console.log(subject, 'jkb')

    // console.log(selectedOptions)
    const getEntities = async () => {
        try {
            const res = await axiosGet('entities')
            // console.log(res.data.data)
            setEntities(res.data.data)
        }
        catch (err) {
            console.log(err)
        }
    }
    const getSubjectsByEntityType = async () => {
        try {
            const res = await axiosGet(`test/subject?entityType=${subject}`)
            // console.log(res.data.data)
            setSubjectByEntity(res.data.data)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getEntities()
        getSubjectsByEntityType()
        // console.log(defaultValues.firstName)
    }, [subject])
    return (
        <div className="bg-[rgba(0,0,0,0.5)] w-screen h-screen overflow-y-hidden fixed top-0 right-0 z-50 flex items-center justify-center">
            <Card extra="w-auto h-auto p-6">
                <header className="relative flex items-center justify-between">
                    <div className="text-xl font-bold text-navy-700 dark:text-white">
                        {edit ? 'Update Teacher': 'Add Teacher'}
                    </div>
                    <MdClose className='h-6 w-6 cursor-pointer'
                        onClick={() => setModal(false)}
                    />
                </header>
                <div>
                    <form onSubmit={handleSubmit(addTeacher)}>
                        <main className="mt-8 flex justify-between gap-10" >
                            <div className='flex flex-col'>
                                <div className='mb-3 w-80'>
                                    <label className='inputLabel'>First Name *</label>
                                    <input 
                                    type="text" 
                                    className='inputField' 
                                    {...register("firstName")}
                                    />
                                    {
                                        errors.firstName && <div className="text-red-500 text-sm">
                                            {errors.firstName.message}
                                        </div>
                                    }
                                </div>
                                <div className='mb-3 w-80'>
                                    <label className='inputLabel'>Last Name *</label>
                                    <input type="text" className='inputField' {...register("lastName")} />
                                    {errors.lastName && <div className="text-red-500 text-sm">
                                        {errors.lastName.message}
                                    </div>}
                                </div>
                                <div className='mb-3 w-80'>
                                    <label className='inputLabel'>Email *</label>
                                    <input type="email" className='inputField' {...register("email")} />
                                    {errors.email && <div className="text-red-500 text-sm">
                                        {errors.email.message}
                                    </div>}
                                </div>
                                <div className='mb-3 w-80'>
                                    <label className='inputLabel'>Phone *</label>
                                    <input type="text" className='inputField' {...register("mobileNo")} />
                                    {errors.mobileNo && <div className="text-red-500 text-sm">
                                        {errors.mobileNo.message}
                                    </div>}
                                </div>
                                <div className='mb-3 w-80'>
                                    <label className='inputLabel'>Qualification *</label>
                                    <input type="text" className='inputField' {...register("qualification")} />
                                    {errors.qualification && <div className="text-red-500 text-sm">
                                        {errors.qualification.message}
                                    </div>}
                                </div>
                                <div className='mb-3 w-80'>
                                    <label className='inputLabel'>Date Of Birth  *</label>
                                    <input type="date" className='inputField' {...register("dateOfBirth")} />
                                    {errors.dateOfBirth && <div className="text-red-500 text-sm">
                                        {errors.dateOfBirth?.message}
                                    </div>}
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                {entities && <div className='mb-3 w-80'>
                                    <label className='inputLabel'>Subjects *</label>
                                    <select name="subjects" className='inputField' onChange={e => setSubject(e.target.value)}>
                                        {
                                            entities.map((entity: any) => <option key={entity._id} value={entity.code}>{entity.title}</option>)
                                        }
                                    </select>
                                    {
                                        subjectByEntity && <div className='mt-2'>
                                            {
                                                subjectByEntity.map((subject: any) =>
                                                    <div className='flex items-center gap-2' key={subject._id}>
                                                        <input type="checkbox"
                                                            className={`defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                                                        justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                                                        checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-[#007bff] dark:checked:bg-brand-400`}
                                                            id={subject.name} value={subject.name}
                                                            {...register('subjects')} />
                                                        <label htmlFor={subject.name}>{subject.name}</label>
                                                    </div>
                                                )
                                            }

                                        </div>
                                    }

                                </div>}
                                <div className='mb-3 w-80'>
                                    <label className='inputLabel'>Gender *</label>
                                    <select className='inputField' onChange={e => setGender(e.target.value)} {...register("gender")} >
                                        {
                                            genders.map((gender, i) => <option key={i} value={gender}>{gender}</option>)
                                        }
                                    </select>
                                    {/* {errors.qualification && <div className="text-red-500 text-sm">
                                        {errors.qualification.message}
                                    </div>} */}
                                </div>
                                <div className='mb-3 w-80'>
                                    <label className='inputLabel'>Available From *</label>
                                    <input type="date" className='inputField' {...register("availableFrom")} />
                                    {errors.availableFrom && <div className="text-red-500 text-sm">
                                        {errors.availableFrom?.message}
                                    </div>}
                                </div>
                                <div className='mb-3 w-80'>
                                    <label className='inputLabel'>Summary *</label>
                                    <input type="text" className='inputField' {...register("summary")} />
                                    {errors.summary && <div className="text-red-500 text-sm">
                                        {errors.summary.message}
                                    </div>}
                                </div>
                                <div className='mb-3 w-80'>
                                    <label className='inputLabel'>Address *</label>
                                    <input type="text" className='inputField' {...register("address")} />
                                    {errors.address && <div className="text-red-500 text-sm">
                                        {errors.address.message}
                                    </div>}
                                </div>
                            </div>
                        </main>
                        {edit ? <button type="submit" className="linear mt-4 flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                            Update
                        </button>: <button type="submit" className="linear mt-4 flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                            Submit
                        </button>}
                        
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default CreatePopUp