import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdCalendarMonth,
  MdLayers,
  MdOutlineArticle,
  MdOutlineVerifiedUser,
  MdOutlineImportContacts,
  MdOutlineDialpad,
  MdOutlineBadge,
  MdOutlineFeed,
  MdAccountBox,
  MdArticle,
  MdEditCalendar,
  MdFactCheck
} from "react-icons/md";
import EventManagement from "views/admin/eventManagement";
import ResourceLibrary from "views/admin/resourceLibrary";
import TeacherManagement from "views/admin/teacherManagement";
import StudentManagement from "views/admin/studentManagement";
import Subjects from "views/admin/subjects";
import Menus from "views/admin/menus";
import Approvals from "views/admin/approvals";
import TestPapers from "views/admin/testPapers";
import TestResults from "views/admin/testResults";
import Assign from "views/admin/assign";
import ExamTypes from "views/admin/examTypes";
import Orders from "views/admin/orders";
import Troubles from "views/admin/troubles";


const studentRoutes = [
  {
    name: "Main Dashboard",
    layout: "/student",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <></>,
  },
  {
    name: "Teacher Management",
    layout: "/student",
    path: "teacher-management",
    icon: <MdAccountBox className="h-6 w-6" />,
    component: <TeacherManagement/>,
    secondary: true,
  },
  {
    name: "Student Management",
    layout: "/student",
    icon: <MdOutlineBadge className="h-6 w-6" />,
    path: "student-management",
    component: <StudentManagement/>
  }
  

];
export default studentRoutes;