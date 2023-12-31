import React, { useEffect, useState } from 'react'
import ColumnsTable from './components/ColumnsTable'
import tableDataColumns from '../tables/variables/tableDataColumns'
import { axiosGet } from 'services/axiosService'
import Events from './components/Events'
import { ToastContainer, toast } from 'react-toastify'

const EventManagement = () => {
  const [events, setEvents] = useState<any>()
  const getClasses = async () => {
    try {
      const response = await axiosGet('event/getClasses')
      // console.log(response.data.data)
      setEvents(response.data.data)
      toast.success('Data Fetched!', {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-message',
        hideProgressBar: true
      });
    } catch (err: any) {
      console.log(err.response.data.message)
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-message',
        hideProgressBar: true
      });
    }
  }
  useEffect(() => {
    getClasses()
  }, [])
  return (
    <div className="w-100 mt-5 grid h-full gap-5">
      <ToastContainer />
      {/* <ColumnsTable tableData={tableDataColumns} /> */}
      <Events tableData={events} />
    </div>
  )
}

export default EventManagement