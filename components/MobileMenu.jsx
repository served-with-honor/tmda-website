import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { slugify } from '../src/utils';
import Button from '@mui/material/Button'
import ListItemButton from '@mui/material/ListItemButton';

export default function MobileMenu({ isMobileMenuOpen, handleExpandMenu, items, currentPage }) {
  const isActive = (url) => currentPage === url;
  
  return (
    <Drawer
      anchor="left"
      open={isMobileMenuOpen}
      onClose={handleExpandMenu}
      PaperProps={{
        sx: { width: 'calc(100vw - 15px)' },
      }}
    >
      <Box sx={{width: '100%'}}>
          <nav>
            <List sx={{mt: 10, mx: 2}}>
            {items.map(({ text, children, href }) => {
              return (
                <>
                  <ListItem disablePadding key={`mobile-menu-root-item-${slugify(text)}`}>
                    {href ?
                      <ListItemButton sx={{ mt: -1, ml: -2 }} href={href}>
                        <ListItemText sx={{ color: isActive(href) ? 'primary.main' : null }} primary={text} />
                      </ListItemButton> :
                      <ListItemText sx={{ borderBottom: '1px solid', borderBottomColor: 'primary.main' }} primary={text} />
                    }
                  </ListItem>
                  {children && (
                    <List>
                      {children.map(({ text: childText, href, target, action }) => (
                        <ListItem
                          disablePadding
                          key={`mobile-menu-sub-item-${slugify(childText)}`}
                        >
                          {!action ?
                            <ListItemButton
                              href={href || null}
                              target={target || ''}
                            >
                              <ListItemText sx={{ color: isActive(href) ? 'primary.main' : null }} primary={childText} />
                            </ListItemButton> : null}
                        </ListItem>
                      ))}
                    </List>
                  )}
                </>
              );
            })}
            </List>
            {items.map(({ children, text}) => (
              <div key={`mobile-menu-root-item-${slugify(text)}`}>
              {children && (
                <Box sx={{textAlign: 'center', mb: 4}}>
                  {children.map(({ text:childText, action}) => (
                    action && 
                    <Button 
                      key={`mobile-menu-root-item-${slugify(text)}`} 
                      onClick={action}
                      variant='contained'
                      color='secondary'
                    >
                      {childText}
                    </Button>
                  ))}
                </Box>
              )}
              </div>
            ))}
            
          </nav>

      </Box>
    </Drawer>
  )
}
