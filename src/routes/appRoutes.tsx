import { RouteType } from "./config";
import Dashboard from '../Pages/DashBoard/Index';
import Chat from '../Pages/Chat/Index';
import Tickets from '../Pages/Tickets/Index';
import Settings from '../Pages/Settings/Index';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SettingsIcon from '@mui/icons-material/Settings';


const appRoutes: RouteType[] = [
  {
    index: true,
    path: "/dashboard",
    element: <Dashboard />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: "bx-grid-alt"
      // icon: <DashboardIcon />
    }
  },
  {
    path: "/tickets",
    element: <Tickets />,
    state: "tickets",
    sidebarProps: {
      displayText: "Tickets",
      icon: "bx-calendar-check"
      // icon: <FormatListBulletedIcon />
    },
  },
  {
    path: "/chat",
    element: <Chat />,
    state: "chat",
    sidebarProps: {
      displayText: "Chat",
      icon: "bx-conversation"
      // icon: <QuestionAnswerIcon />

    }
  },
  {
    path: "/settings",
    element: <Settings />,
    state: "settings",
    sidebarProps: {
      displayText: "Settings",
      icon: "bx-cog"
      // icon: <SettingsIcon />
    }
  }
];

export default appRoutes;