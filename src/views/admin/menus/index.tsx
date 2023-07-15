import { useEffect, useState } from "react";
import { axiosGet } from "services/axiosService";
import { ToastContainer, toast } from 'react-toastify';
import MenusTable from "./components/MenusTable";
import AddMenu from "./components/AddMenu";
import { ZodType, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import "../../../assets/css/Menus.css";
// AddMenu

const Menus = () => {

  const [menusData, setMenusData] = useState<any>([])
  const [menuModal, setMenuModal] = useState<boolean>(false);


  const FormSchema = z.object({
    "roles": z.string(),
    "title": z.string(),
    "icon": z.string(),
    "externalLink": z.string()
    // firstName: z.string().min(2).max(30)
  })

  type FormInput = z.infer<typeof FormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      "roles": "",
      "title": "",
      "icon": "",
      "externalLink": ""
    }
  })




  interface rowObject {
    "_id": string,
    "roles": string,
    "title": string,
    "icon": string,
    "externalLink": string,
    "rolesObjData": Object
  }

  const initialVal: rowObject = {
    "_id": "",
    "roles": "",
    "title": "",
    "icon": "",
    "externalLink": "",
    "rolesObjData": []
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

    let tempProps = { ...props };
    tempProps["roles"] = "";
    tempProps["rolesObjData"] = props.roles;
    tempProps["externalLink"] = tempProps["externalLink"] == undefined ? "" : tempProps["externalLink"]

    setModalData(tempProps);
    setMenuModal(true);
  }

  // useEffect(() => {
  //   setMenuModal(true);
  // }, [modalData])


  useEffect(() => {
    getMenus();
  }, [])

  const addMenu = async (data: any) => {
    console.log(data)
    // console.log(modalData)
    // try {
    //   const response = await axiosPost("teacher/addTeacher", data)
    //   console.log(response)
    // }
    // catch (err) {
    //   console.log(err)
    // }
  }


  return (
    <div className="pt-5">
      <ToastContainer />

      {menuModal &&
        <AddMenu
          setMenuModal={setMenuModal}
          modalData={modalData}
          handleSubmit={handleSubmit}
          errors={errors}
          addMenu={addMenu}
          setModalData={setModalData}
          initialVal={initialVal}
        />}


      <MenusTable
        menusData={menusData}
        modelHandler={modelHandler}
      />
    </div>
  );
};

export default Menus;
