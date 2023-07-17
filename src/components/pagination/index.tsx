
import React, { useEffect, useState } from 'react'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

//Logic Part
const Pagination = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)


  const selectPageHandle = (selectedPage: any) => { // Pagination Logic
    if (selectedPage >= 1 &&
      selectedPage <= users.length / 5 &&
      selectedPage !== page) {
      setPage(selectedPage)
    }
  }

  return (
    <>

      <div className='flex items-center justify-end gap-5 w-full mt-5'>
        <div className='bg-lightPrimary p-2 text-[#007bff] hover:bg-gray-100 dark:bg-navy-700 text-xl hover:cursor-pointer rounded-lg ' onClick={() => selectPageHandle(page - 1)}>
          <MdKeyboardArrowLeft size={25} />
        </div>
        <div className='flex items-center'>
          {
            [...Array(20 / 5)].map((n, i) => {
              return <button
                className={`num transition-colors  hover:bg-[#007bff] hover:text-[#fff] w-10 h-10 rounded-lg ${page === i + 1 ? `numActive` : ''}`}
                onClick={() => selectPageHandle(i + 1)}>{i + 1}</button>
            })
          }
        </div>
        <div className='bg-lightPrimary p-2 text-[#007bff] hover:bg-gray-100 dark:bg-navy-700 text-xl hover:cursor-pointer rounded-lg ' onClick={() => selectPageHandle(page + 1)}>
          <MdKeyboardArrowRight size={25} />
        </div>
      </div>
    </>
  )
}

export default Pagination
