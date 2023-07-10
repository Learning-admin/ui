import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

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


const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Teacher Management",
    layout: "/admin",
    path: "teacher-management",
    icon: <MdAccountBox className="h-6 w-6" />,
    // component: <NFTMarketplace />,
    component: <TeacherManagement/>,
    secondary: true,
  },
  {
    name: "Student Management",
    layout: "/admin",
    icon: <MdOutlineBadge className="h-6 w-6" />,
    path: "student-management",
    // component: <DataTables />,
    component: <StudentManagement/>
  },
  {
    name: "Event Management",
    layout: "/admin",
    path: "event-management",
    icon: <MdCalendarMonth className="h-6 w-6" />,
    component: <EventManagement/>,
  },
  {
    name: "Resource Library",
    layout: "/admin",
    path: "resource-library",
    icon: <MdArticle className="h-6 w-6" />,
    component: <ResourceLibrary />,
  },
  {
    name: "Subjects",
    layout: "/admin",
    path: "subjects",
    icon: <MdOutlineImportContacts className="h-6 w-6" />,
    // component: <Profile />,
    component: <Subjects/>
  },
  {
    name: "Menus",
    layout: "/admin",
    path: "menus",
    icon: <MdOutlineDialpad className="h-6 w-6" />,
    component: <Menus />,
  },
  {
    name: "Approvals",
    layout: "/admin",
    path: "approvals",
    icon: <MdOutlineVerifiedUser className="h-6 w-6" />,
    component: <Approvals />,
  },
  {
    name: "Test Papers",
    layout: "/admin",
    path: "test-papers",
    icon: <MdOutlineFeed className="h-6 w-6" />,
    component: <TestPapers />,
  },
  {
    name: "Test Results",
    layout: "/admin",
    path: "test-results",
    icon: <MdFactCheck className="h-6 w-6" />,
    component: <TestResults />,
  },
  {
    name: "Assign",
    layout: "/admin",
    path: "assign",
    icon: <MdEditCalendar className="h-6 w-6" />,
    component: <Assign />,
  },
  {
    name: "Exam Types",
    layout: "/admin",
    path: "exam-types",
    icon: <MdOutlineArticle className="h-6 w-6" />,
    component: <ExamTypes />,
  },
  {
    name: "Orders",
    layout: "/admin",
    path: "orders",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Orders />,
  },
  {
    name: "Troubles",
    layout: "/admin",
    path: "profile",
    icon: <MdLayers className="h-6 w-6" />,
    component: <Troubles />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: "",
    component: <SignIn />,
  },

];
export default routes;