import { useEffect, useState } from "react";
import { axiosGet } from "services/axiosService";
import { ToastContainer, toast } from 'react-toastify';
import MenusTable from "./components/MenusTable";
import AddMenu from "./components/AddMenu";
// AddMenu

const Menus = () => {

  const [menusData, setMenusData] = useState<any>([])
  const [menuModal, setMenuModal] = useState<boolean>(false);






  interface rowObject {
    "_id": String,
    "roles": Object,
    "title": String,
    "icon": String,
    "externalLink": String
  }

  const initialVal: rowObject = {
    "_id": "",
    "roles": [],
    "title": "",
    "icon": "",
    "externalLink": ""
  };

  const [modalData, setModalData] = useState(initialVal)




  const getMenus = async () => {
    try {
      const res = await axiosGet('menus')

      let resp = res.data.data;

      // for (let i = 0; i < resp.length; i++) {
      //   resp[i]["sNo"] = i+1;
      // }

      setMenusData(resp);
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

  const modelHandler = (props: any) => {
    //  props
    // console.log(props)
    // console.log(props._id);
    // props._id == undefined ? setModalData(initialVal) : setModalData(props);
    setMenuModal(true);
  }

  // useEffect(() => {
  //   setMenuModal(true);
  // }, [modalData])


  useEffect(() => {
    getMenus();
  }, [])


  return (
    <div className="pt-5">
      <ToastContainer />

      {menuModal && <AddMenu setMenuModal={setMenuModal} modalData={modalData} />}


      <MenusTable
        menusData={menusData}
        modelHandler={modelHandler}
      />
    </div>
  );
};

export default Menus;
