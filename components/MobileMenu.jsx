import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { slugify } from '../src/utils';
import Button from '@mui/material/Button'
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
  const isActive = (url) => currentPage === url;
  
  const itemStyles = {
    color: isActive(href) ? 'primary.main' : null,
    borderBottom: children ? '1px solid' : null,
    borderBottomColor: children ? 'primary.main' : null,
    pb: 1,
  };
  const textStyles = {
    fontWeight: 700,
    color: href ? 'primary.main' : null,
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
  const isActive = (url) => currentPage === url;
  
  return (
    <List>
      {items.map(({ text, href, target, action }) => (
        <ListItem
          key={`mobile-menu-sub-item-${slugify(text)}`}
          disablePadding
        >
          {action ? (
            <ListItemButton onClick={() => { handleExpandMenu(false); action(); }}>
              <ListItemText primary={text} />
            </ListItemButton>
          ) : (
            <ListItemButton href={href} target={target || ''} component='a'>
              <ListItemText sx={{ color: isActive(href) ? 'primary.main' : null }} primary={text} />
            </ListItemButton>
          )}
        </ListItem>
      ))}
    </List>
  );
}