import { useRouter } from 'next/router';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LoginIcon from '@mui/icons-material/VpnKey';
import HomeIcon from '@mui/icons-material/Home';
import RegisterIcon from '@mui/icons-material/ContactMail';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@/components/common/Link';

const drawerWidth = 300;

export default function PersistentDrawerLeft({ mainPage }) {
  const router = useRouter();

  const activeRoute = (routeName, currentRoute) => {
    return routeName === currentRoute ? true : false;
  };

  const routes = [
    {
      id: 1,
      label: 'Home',
      path: '/',
      icon: HomeIcon,
    },
    {
      id: 2,
      label: 'Login',
      path: '/login',
      icon: LoginIcon,
    },
    {
      id: 3,
      label: 'Register',
      path: '/register',
      icon: RegisterIcon,
    },
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Mern Nextjs Example
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          ['& .MuiDrawer-paper']: {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {routes.map((item, index) => (
              <Link
                href={item.path}
                style={{ textDecoration: 'none', color: 'black' }}
                key={index}
              >
                <MenuItem selected={activeRoute(item.path, router.pathname)}>
                  <ListItem button key={index}>
                    <ListItemIcon>
                      {' '}
                      <item.icon />{' '}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                </MenuItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container>{mainPage}</Container>
      </Box>
    </Box>
  );
}
