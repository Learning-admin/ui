import Card from "components/card";
import Checkbox from "components/checkbox";
import InputField from "components/fields/InputField";
import LargeDropdown from "components/largeDropdown";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { axiosGet } from "services/axiosService";

const CreatePopUp = (props: any) => {
  const { setModal, handleSubmit, addTeacher, register, errors, edit } = props;

  const genders = ["Male", "Female", "Other"];

  const [subject, setSubject] = useState<any>("sat");
  const [subjectByEntity, setSubjectByEntity] = useState<any>();
  const [gender, setGender] = useState<string>();
  const [entities, setEntities] = useState<any>();

  // console.log(subject, 'jkb')

  // console.log(selectedOptions)
  const getEntities = async () => {
    try {
      const res = await axiosGet("entities");
      // console.log(res.data.data)
      setEntities(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getSubjectsByEntityType = async () => {
    try {
      const res = await axiosGet(`test/subject?entityType=${subject}`);
      // console.log(res.data.data)
      setSubjectByEntity(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getEntities();
    getSubjectsByEntityType();
    // console.log(defaultValues.firstName)
  }, [subject]);
  return (
    <div className="fixed right-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-y-hidden bg-[rgba(0,0,0,0.5)]">
      <Card extra="w-auto h-auto p-6">
        <header className="relative flex items-center justify-between">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Add Testpaper
          </div>
          <MdClose
            className="h-6 w-6 cursor-pointer"
            onClick={() => setModal(false)}
          />
        </header>
        <div>
          <form action="">
            <main className="mt-8 flex justify-between gap-10">
              <div className="flex flex-col">
                <div className="mb-3 w-80">
                  <label className="inputLabel" htmlFor="name">
                    Name
                  </label>
                  <input type="text" className="inputField" name="name" />
                </div>
                <div className="mb-3 w-80">
                  <label className="inputLabel" htmlFor="examType">
                    Exam Type
                  </label>
                  <select id="examType" className="inputField" name="examType">
                    <option value="volvo">SAT</option>
                    <option value="saab">ACT</option>
                    <option value="saab">K-12</option>
                  </select>
                </div>
                <div className="mb-3 w-80">
                  <label className="inputLabel" htmlFor="examType">
                    Exam Type
                  </label>
                  <select id="type" className="inputField" name="type">
                    <option value="volvo">General</option>
                    <option value="saab">Quiz</option>
                  </select>
                </div>
              </div>
            </main>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default CreatePopUp;
