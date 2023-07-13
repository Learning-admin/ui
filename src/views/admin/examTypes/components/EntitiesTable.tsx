import Card from 'components/card'
import React from 'react'
import { MdAdd, MdEdit } from 'react-icons/md'

const EntitiesTable = (props: any) => {
    const {entities, setEntityModal} = props
  return (
    <div>
        <Card extra={"w-full pb-10 p-4 h-full"}>
        <header className="relative flex items-center justify-between mt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
          Exam Types List
          </div>
          {/* <CardMenu transparent={false} data={'create'}/> */}
          <button className="linear flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={()=>setEntityModal(true)}
            >
            <MdAdd className="h-6 w-6" />Add Entity
          </button>
        </header>

        <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
          <table className="w-full">
            <thead>
              <tr className="!border-px !border-gray-400">
                <th
                  className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                  <div className="items-center justify-between text-sm font-bold text-gray-600">
                    S.NO
                  </div>
                </th>
                <th
                  className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                  <div className="items-center justify-between text-sm font-bold text-gray-600">
                    TITLE
                  </div>
                </th>
                <th
                  className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                  <div className="items-center justify-between text-sm font-bold text-gray-600">
                    CODE
                  </div>
                </th>
                <th
                  className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                  <div className="text-center text-sm font-bold text-gray-600">
                   ACTIONS
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                 entities && entities.map((entity: any, index: number) => {
                  return (
                    <tr key={entity._id}>
                      <td className="min-w-[110px] border-white/0 py-3  pr-4">
                        <p className='text-sm font-bold text-navy-700'>{index + 1}</p>
                      </td>
                      <td className="min-w-[110px] border-white/0 py-3  pr-4">
                        <p className='text-sm font-bold text-navy-700'>{entity.title}</p>
                      </td>
                      {/* <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                        <p className='text-sm font-bold text-navy-700'>{''}</p>
                                    </td> */}
                      <td className="min-w-[110px] border-white/0 py-3  pr-4">
                        <p className="text-sm font-bold text-navy-700">{entity.code}</p>
                      </td>
                      <td className="min-w-[110px] border-white/0 py-3  pr-4 flex justify-center">
                        <div className="flex items-center gap-3 justify-center cursor-pointer p-2 text-[#007bff] hover:bg-gray-100 w-10 h-10 rounded-lg">
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

      </Card>
    </div>
  )
}

export default EntitiesTable