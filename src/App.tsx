import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import StudentLayout from "layouts/student";
import AuthLayout from "layouts/auth";
import { useEffect } from "react";
import SignIn from "views/auth/SignIn";
import NotFound from "./components/notFound/index"
import { AuthProvider } from "utils/AuthContext";

const App = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser === null) navigate('/sign-in')
  }, [])

  return (
    <AuthProvider>
      <Routes>
        <Route path="sign-in" element={<SignIn />} />

        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="student/*" element={<StudentLayout />} />
        <Route path="rtl/*" element={<RtlLayout />} />
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
