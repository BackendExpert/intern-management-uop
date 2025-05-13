import { 
    BsFillGrid1X2Fill, 
    BsPersonWorkspace, 
    BsFileText, 
    BsCalendarCheck, 
    BsClipboardCheck, 
    BsPersonLinesFill,
    BsGearFill,
    BsFolderCheck,
    BsPersonBadgeFill,
    BsEnvelopeOpen,
    BsPersonCircle,
    BsClockHistory,
    BsFileEarmarkCheck,
    BsMegaphone,
    BsShieldLock
} from "react-icons/bs";

const dashsidedata = [
    {
        id: 1,
        name: "Dashboard",
        icon: BsFillGrid1X2Fill,
        link: '/Dashboard/Home',
        roles: ['intern', 'staff', 'security', 'admin', 'director']
    },
    {
        id: 2,
        name: "Manage Interns",
        icon: BsPersonWorkspace,
        link: '/Dashboard/Interns',
        roles: ['staff', 'security', 'admin', 'director']
    },
    {
        id: 3,
        name: "Applications",
        icon: BsFileText,
        link: '/Dashboard/Applications',
        roles: ['intern', 'staff', 'security', 'admin', 'director']
    },
    {
        id: 4,
        name: "Projects",
        icon: BsCalendarCheck,
        link: '/Dashboard/Projects',
        roles: ['intern', 'staff', 'admin', 'director']
    },
    {
        id: 5,
        name: "Evaluations",
        icon: BsClipboardCheck,
        link: '/Dashboard/Evaluations',
        roles: ['intern', 'staff', 'security', 'admin', 'director']
    },
    {
        id: 6,
        name: "Supervisors",
        icon: BsPersonLinesFill,
        link: '/Dashboard/Supervisors',
        roles: ['staff', 'security', 'admin', 'director']
    },
    {
        id: 7,
        name: "Attendance",
        icon: BsCalendarCheck,
        link: '/Dashboard/Attendance',
        roles: ['intern', 'staff', 'security', 'admin', 'director']
    },
    {
        id: 8,
        name: "Intern Reports / Logs",
        icon: BsFolderCheck,
        link: '/Dashboard/Reports',
        roles: ['intern', 'staff', 'security', 'admin', 'director']
    },
    {
        id: 9,
        name: "Time Tracking",
        icon: BsClockHistory,
        link: '/Dashboard/TimeTracking',
        roles: ['intern', 'staff', 'admin', 'director']
    },
    {
        id: 10,
        name: "Letters",
        icon: BsFileEarmarkCheck,
        link: '/Dashboard/Letters',
        roles: ['intern', 'security', 'admin', 'director']
    },
    {
        id: 11,
        name: "Security Reports",
        icon: BsShieldLock,
        link: '/Dashboard/SecurityReports',
        roles: ['security', 'admin', 'director']
    },
    {
        id: 12,
        name: "Announcements",
        icon: BsMegaphone,
        link: '/Dashboard/Announcements',
        roles: ['intern', 'staff', 'security', 'admin', 'director']
    },
    {
        id: 13,
        name: "Profile",
        icon: BsPersonCircle,
        link: '/Dashboard/Profile',
        roles: ['intern', 'staff', 'security', 'admin', 'director']
    },
    {
        id: 14,
        name: "Settings",
        icon: BsGearFill,
        link: '/Dashboard/Settings',
        roles: ['admin', 'director']
    }
];

export { dashsidedata };
