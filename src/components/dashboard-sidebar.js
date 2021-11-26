import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import { Cog as CogIcon } from '../icons/cog';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Selector as SelectorIcon } from '../icons/selector';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ArticleIcon from '@mui/icons-material/Article';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Users as UsersIcon } from '../icons/users';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Logo } from './logo';
import { NavItem } from './nav-item';

const items = [
  {
    href: '/',
    icon: (<DesktopWindowsIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/encuestas',
    icon: (<DesktopWindowsIcon fontSize="small" />),
    title: 'Encuestas'
  },
  {
    href: '/cuentas',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Cuentas'
  },
  {
    href: '/products',
    icon: (<PersonAddAltIcon fontSize="small" />),
    title: 'Usuarios'
  },
  {
    href: '/account',
    icon: (<ArticleIcon fontSize="small" />),
    title: 'Novedades'
  },
  {
    href: '/settings',
    icon: (<CogIcon fontSize="small" />),
    title: 'Configuración'
  },
  {
    href: '/login',
    icon: (<ApartmentIcon fontSize="small" />),
    title: 'Edificios'
  },
  {
    href: '/register',
    icon: (<ViewListIcon fontSize="small" />),
    title: 'Categorías'
  },
  {
    href: '/404',
    icon: (<ManageAccountsIcon fontSize="small" />),
    title: 'Roles'
  }
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink
              href="/"
              passHref
            >
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42
                  }}
                />
              </a>
            </NextLink>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
