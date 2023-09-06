import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Dashboard.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Analytics from "./DashboardMenueScreeen/Analytics/Analytics";
import Chart from "./DashboardMenueScreeen/chart/Chart";
import Customer from "./DashboardMenueScreeen/Customer/Customer";
import Food from "./DashboardMenueScreeen/Food/Food";
import FoodDetail from "./DashboardMenueScreeen/FoodDetail/FoodDetail";
import Priwe from './DashboardMenueScreeen/Preview/priwe';
import Calender from './DashboardMenueScreeen/Calender/Calender'
import { BiMenuAltLeft } from 'react-icons/bi'
import { BsFillChatLeftDotsFill } from 'react-icons/bs'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { PiBowlFoodThin } from 'react-icons/pi'
import { PiNotePencilFill } from 'react-icons/pi'
import { PiPencilLineLight } from 'react-icons/pi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { BsChatLeftDotsFill } from 'react-icons/bs'
import { GoGift } from 'react-icons/go';
import { AiOutlineSetting} from 'react-icons/ai'











const drawerWidth = 240;

export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [model, setModel] = React.useState([
    {
      name: "Analytics",
      navigator: "analy",
      icon : <BiMenuAltLeft size={25} />,
    },
    {
      name: "Chart",
      navigator: "chart",
      icon : <BsFillChatLeftDotsFill size={25} />,

    },{
      name: "Customer",
      navigator: "customer",
      icon : <AiOutlineUsergroupAdd size={25} />,

    },{
      name: "Food",
      navigator: "food",
      icon : <PiBowlFoodThin size={25} />,

    },{
      name: "FoodDetail",
      navigator: "fooddetail",
      icon : <PiNotePencilFill size={25} />,

    },

    {
      name: "Preview",
      navigator: "preview",
      icon : <PiPencilLineLight size={25} />,

    },{
      name: "Celender",
      navigator: "calender",
      icon : <AiOutlineCalendar size={25} />,

    },
  ]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate()

  const drawer = (
    <div>
      <Toolbar>
        <div>
          <div className="main__title">
            Sedap<span className="Span">.</span>
          </div>
          <div className="main__PEra">Modern Admin Dashboard</div>
        </div>
      </Toolbar>
      <List>
        {model.map((text, index) => (
          <ListItem onClick={()=>{
            navigate(`/${text.navigator}`)
          }} className="pading" key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text.icon}
              </ListItemIcon>
              <ListItemText className="okay" primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className="work">
      Sedap Restaurant Admin Dashboard
<span className="copyright">© 2020 All Rights Reserved</span>
      </div>
      <div className="end"> Made with <span className="okaynhihe">♥ </span>by Peterdraw</div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className='backgroun'  sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{
          background:'#F3F2F7',
          boxShadow: 'none',
        }}
      >
        
         <div className="d-flex align-items-center h-100 ">
          <div className="input__div">
<input type="text" className="input"  placeholder="Search here" />
<span className="icon">
<BsSearch  color="black" size={25}/>
</span>
          </div>
          <div className="icondiv">
<MdOutlineNotificationsActive size={30}  color="#72c1f1"/>
          </div>
          <div className="icondiv1">
<BsChatLeftDotsFill size={30}  color="#868fad"/>
          </div>
          <div className="icondiv2">
<GoGift size={30}  color="#FF5B5B"/>
          </div>
          <div className="icond__iv3">
<AiOutlineSetting size={30}  color="#6610f2"/>
          </div>
          <div className="d-flex jsutify-content-center align-items-center gtext">dfsdf
          Hello, Samantha
          </div>
          <div className="icondiv3">

          </div>
         </div>
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/analy" element={<Analytics />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/food" element={<Food />} />
          <Route path="/fooddetail" element={<FoodDetail />} />
          <Route path="/preview" element={<Priwe />} />
          <Route path="/calender" element={<Calender />} />

        </Routes>
      </Box>
    </Box>
  );
}
