import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { slugify } from '../src/utils';
import ListItemButton from '@mui/material/ListItemButton';

export default function MobileMenu({ isMobileMenuOpen, handleExpandMenu, items, currentPage }) {
  return (
    <Drawer
      anchor="left"
      open={isMobileMenuOpen}
      onClose={handleExpandMenu}
      PaperProps={{
        sx: { width: 'calc(100vw - 15px)' },
      }}
    >
      <Box>
          <nav>
            <List sx={{ mt: 10 }}>
              {items.map(item => (
                <RootItem
                  key={`mobile-menu-root-item-${slugify(item.text)}`}
                  {...item}
                  handleExpandMenu={handleExpandMenu}
                  currentPage={currentPage}
                />
              ))}
            </List>
          </nav>
      </Box>
    </Drawer>
  )
}

const RootItem = ({ text, children, href, currentPage, handleExpandMenu }) => {
  const isActive = currentPage === href;
  
  const itemStyles = {
    color: isActive ? 'primary.main' : null,
    borderBottom: children ? '1px solid' : null,
    borderBottomColor: children ? 'primary.main' : null,
    pb: 1,
  };
  const textStyles = {
    fontWeight: 700,
    color: href ? 'secondary.600' : null,
  }
  
  return (
    <>
      <ListItem>
        {href ? (
          <ListItemButton sx={{ p: 0, ...itemStyles }} href={href} component='a'>
            <ListItemText primaryTypographyProps={textStyles} primary={text} />
          </ListItemButton>
        ) : (
          <ListItemText sx={{ ...itemStyles }} primaryTypographyProps={textStyles} primary={text} />
        )}
      </ListItem>
      {children ? (
        <SubMenu
          items={children}
          currentPage={currentPage}
          handleExpandMenu={handleExpandMenu}
        />
      ) : null}
    </>
  );
}

const SubMenu = ({ items, currentPage, handleExpandMenu }) => {
  return (
    <List>
      {items.map(({ text, href, target, action }) => {
        const isActive = currentPage === href;
        const buttonStyles = {
          // py: '3px',
        };
        const textStyles = {
          fontWeight: 600,
          color: isActive ? null : 'secondary.600',
        };
        return (
          <ListItem
            key={`mobile-menu-sub-item-${slugify(text)}`}
            disablePadding
            sx={{
              '&:before': isActive ? {
                content: '""',
                display: 'block',
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                borderLeft: isActive ? 'solid 4px' : null,
                borderLeftColor: isActive ? 'secondary.main' : null,
              } : null,
            }}
          >
            {action ? (
              <ListItemButton onClick={() => { handleExpandMenu(false); action(); }} sx={{ ...buttonStyles }}>
                <ListItemText primary={text} primaryTypographyProps={{ ...textStyles }} />
              </ListItemButton>
            ) : (
              <ListItemButton href={href} target={target || ''} component='a'  sx={{ ...buttonStyles }}>
                <ListItemText primary={text} primaryTypographyProps={{ ...textStyles }} />
              </ListItemButton>
            )}
          </ListItem>
        );
      })}
    </List>
  );
}