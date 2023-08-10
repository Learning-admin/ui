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
                        Add Testpaper
                    </div>
                    <MdClose className='h-6 w-6 cursor-pointer'
                        onClick={() => setModal(false)}
                    />
                </header>
                <div>
                    
                </div>
            </Card>
        </div>
    )
}

export default CreatePopUp