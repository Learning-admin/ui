import React, { useEffect, useState } from "react";
import Card from "components/card";
import AddAssignmentModal from "./AddAssignmentModal";



function AssignmentTable(props:any){
  const{
      tableData,
      modalData,
      setModalData,
      initialVal
    } = props;
  const [modal, setModal] = useState<boolean>(false);


  const subjectType = [
    { value: "sat", label: "SAT" },
    { value: "act", label: "ACT" },
    { value: "MCAT", label: "MCAT" },
    { value: "K-12 Tutoring", label: "K-12 Tutoring" },
    { value: "default", label: "Default" }
  ]




  const handleCreate = (assignmentRow: any) => {
    let obj = null;
    if (assignmentRow != undefined) {
      obj = { ...assignmentRow };

      let innerObj: any = []

      obj?.subCat?.map((d: any, i: number) => {
        innerObj.push({ "id": i, "value": d });
      })

      obj["subCatObj"] = innerObj;
      obj["subCat"] = "";
    }

    console.log(modalData)

    assignmentRow == undefined ?
      setModalData(initialVal)
      : setModalData(obj);
  }

  useEffect(() => {
    setModal(true);
  }, [modalData])



  const onChangeHandler = (e: any) => {
    const { id, value } = e.target
    setModalData((prev: any) => ({ ...prev, [id]: value }))
  }
  return (
    <>
      {modal && <AddAssignmentModal
        setModal={setModal}
        subjectType={subjectType}
        modalData={modalData}
        setModalData={setModalData}
      />}
      <Card extra={"w-full pb-10 p-4 h-full"}>
      <div className="absolute right-0 flex mt-4 mr-8 p-4">
      <select id="entityType" className='inputField mr-4'
        onChange={(e) => { onChangeHandler(e) }}
        >
        <option value="">{"ACT"}</option>
          {
           subjectType.map((ele: any, i: number) => <option key={i} selected={modalData?.entityType == ele.value} value={ele.value}>{ele.label}</option>)
          }
      </select>
      <select id="entityType" className='inputField mr-4'
              onChange={(e) => { onChangeHandler(e) }}
              >
              <option value="">{"Select Testpaper"}</option>
                {
                  subjectType.map((ele: any, i: number) => <option key={i} selected={modalData?.entityType == ele.value} value={ele.value}>{ele.label}</option>)
                }
            </select>
            <select id="entityType" className='inputField mr-4'
              onChange={(e) => { onChangeHandler(e) }}
              >
              <option value="">{"Select Batch"}</option>
                {
                  subjectType.map((ele: any, i: number) => <option key={i} selected={modalData?.entityType == ele.value} value={ele.value}>{ele.label}</option>)
                }
            </select>
        <button className="linear flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            onClick={handleCreate}>
            Assign
        </button>
    </div>
        <div className="mt-28 overflow-x-scroll xl:overflow-x-hidden">
          <table className="w-full">
            <thead>
              <tr className="!border-px !border-gray-400">
                <th
                  className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                  <div className="items-center justify-between text-sm font-bold text-gray-600">
                    TESTPAPER
                  </div>
                </th>
                <th
                  className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                  <div className="items-center justify-between text-sm font-bold text-gray-600">
                    STATUS
                  </div>
                </th>
                <th
                  className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                  <div className="text-sm font-bold text-gray-600">
                    BATCH
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
              {
                tableData && tableData.map((assignment: any, index: number) => {
                  return (
                    <tr key={assignment._id}>
                      <td className="min-w-[110px] border-white/0 py-3  pr-4">
                        <p className='text-sm font-bold text-navy-700'>{assignment.entityType}</p>
                      </td>
                      <td className="min-w-[110px] border-white/0 py-3  pr-4">
                        <p className="text-sm font-bold text-navy-700">{assignment.name}</p>
                      </td>
                      <td className="min-w-[110px] border-white/0 py-3  pr-4">
                        <p className="text-sm font-bold text-navy-700">{(assignment.subCat).map((d: any) => <><div style={{ marginRight: "5px" }} >{d}</div><div>{"  "}</div></>)}</p>
                      </td>
                      <td className="min-w-[110px] border-white/0 py-3  pr-4 flex justify-center">
                        <button className="linear flex items-center justify-center rounded-xl bg-[#f43f5e] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#be123c] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                          onClick={handleCreate}>
                          DeAssign
                        </button>
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>

      </Card>
    </>
  );
}

export default AssignmentTable;
