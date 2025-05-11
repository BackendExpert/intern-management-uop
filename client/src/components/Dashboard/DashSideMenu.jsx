import { 
    BsFillGrid1X2Fill, 
    BsPersonWorkspace, 
    BsBuilding, 
    BsFileText, 
    BsCalendarCheck, 
    BsClipboardCheck, 
    BsPersonLinesFill,
    BsPeopleFill,
    BsGearFill,
    BsFolderCheck,
    BsPersonBadgeFill,
    BsEnvelopeOpen,
    BsPersonCircle
} from "react-icons/bs";

const dashsidedata = [
    {
        id: 1,
        name: "Dashboard",
        icon: BsFillGrid1X2Fill,
        link: '/Dashboard/Home'
    },
    {
        id: 2,
        name: "Manage Interns",
        icon: BsPersonWorkspace,
        link: '/Dashboard/Interns'
    },
    {
        id: 3,
        name: "Applications",
        icon: BsFileText,
        link: '/Dashboard/Applications'
    },
    {
        id: 4,
        name: "Training Schedules",
        icon: BsCalendarCheck,
        link: '/Dashboard/Schedules'
    },
    {
        id: 5,
        name: "Evaluations",
        icon: BsClipboardCheck,
        link: '/Dashboard/Evaluations'
    },
    {
        id: 6,
        name: "Supervisors",
        icon: BsPersonLinesFill,
        link: '/Dashboard/Supervisors'
    },
    {
        id: 7,
        name: "Staff Members",
        icon: BsPeopleFill,
        link: '/Dashboard/Staff'
    },
    {
        id: 8,
        name: "Messages / Notices",
        icon: BsEnvelopeOpen,
        link: '/Dashboard/Messages'
    },
    {
        id: 9,
        name: "Profile",
        icon: BsPersonCircle,
        link: '/Dashboard/Profile'
    },
    {
        id: 10,
        name: "Settings",
        icon: BsGearFill,
        link: '/Dashboard/Settings'
    }
];

export { dashsidedata };
