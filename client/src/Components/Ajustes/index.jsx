import * as React from "react";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import BadgeIcon from "@mui/icons-material/Badge";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Profile from "../Profile/index";
import DashboardAdmin from "../DashboardAdmin/index";
import UsuariosInfo from "../UsuariosInfo/UsuarioInfo";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CreacionDePlanta from "../CreacionDePlanta";
import LocalFlorist from "@mui/icons-material/LocalFloristSharp";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Ajustes = () => {
  const [selectedTab, setSelectedTab] = React.useState("Profile");
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const isAdmin = useSelector((state) => state.user.admin);
  // console.log({ user }, "ESTE ES EL USUARIo");
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };
  return !isAuthenticated ? (
    <div className="container">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>Necesitas estar logueado para estar Aqui!</h3>
        <Stack direction="row" spacing={20}>
        <Button variant="contained" color="success" onClick={() => loginWithRedirect()}>
        Iniciar Sesion
      </Button>
      <Button variant="contained" color="success" onClick={() => navigate("/home")}>
        Volver a Inicio
      </Button>
        </Stack>
      </div>
    </div>
  ) : (
    <TabContext value={selectedTab} defaultValue={Profile}>
      <TabList onChange={handleChange} aria-label="icon label tabs example">
        <Tab
          icon={<BadgeIcon />}
          sx={{
            "&:focus": {
              outline: "none",
            },
          }}
          label="Perfil"
          value="Profile"
        />
        {isAdmin
          ? [
              <Tab
                icon={<ManageAccountsIcon />}
                sx={{
                  "&:focus": {
                    outline: "none",
                  },
                }}
                label="Admin Usuarios"
                value="AdminUser"
              />,
              <Tab
                icon={<LocalFlorist />}
                sx={{
                  "&:focus": {
                    outline: "none",
                  },
                }}
                label="Creacion De Planta"
                value="CreacionDePlanta"
              />,

              <Tab
                icon={<AttachMoneyIcon />}
                sx={{
                  "&:focus": {
                    outline: "none",
                  },
                }}
                label="DashBoard"
                value="DashBoard"
              />,
            ]
          : null}
      </TabList>
      <TabPanel value="Profile">
        <Profile />
      </TabPanel>
      {isAdmin
        ? [
            <TabPanel value="AdminUser">
              <UsuariosInfo />
            </TabPanel>,
            <TabPanel value="CreacionDePlanta">
              <CreacionDePlanta />
            </TabPanel>,
            <TabPanel value="DashBoard">
              <DashboardAdmin />
            </TabPanel>,
          ]
        : null}
    </TabContext>
  );
};

export default Ajustes;
