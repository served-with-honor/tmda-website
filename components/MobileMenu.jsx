import { useCallback, useRef, useState, useContext } from 'react';
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { slugify } from '../src/utils';
import { styled } from '@mui/system';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from "@mui/material/styles";
import Link from '../src/Link';
import MUILink from '@mui/material/Link'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu';
import { visuallyHidden } from '@mui/utils';
import ListItemButton from '@mui/material/ListItemButton';


export default function MobileMenu({ isMobileMenuOpen, handleExpandMenu, items }) {
console.log(items)

// create the list items includes the heading and the sub items 
// have the background of the heading menu text with a different background color and hard line with the primary color
    // we need to loop through items
    // we need to loop through children and say that if it is undefined don't do anything... 
    // if there is no href then there should be an action
// have a border line at the bottom of each sub items



  return (
    <Drawer
      anchor="top"
      open={isMobileMenuOpen}
      onClose={handleExpandMenu}
    >
      <Box sx={{width: '100%'}}>
          <nav>
            {items.map(({ text, children, href }) => (
              <List sx={{my: 8, mx: 6 }}>
                <ListItem key={`mobile-menu-root-item-${slugify(text)}`}>
                  {href ? <ListItemButton href={href}>
                      <ListItemText primary={text} />
                    </ListItemButton> :
                    <ListItemText primary={text} /> 
                  }
                </ListItem>
                {children && (
                  <ListItem>
                    {children.map(({ text: childText, href, target, action }) => (
                      <ListItemButton 
                        key={`mobile-menu-sub-item-${slugify(childText)}`} 
                        href={href || null} 
                        target={target || ''} 
                        onClick={action || null}
                      >
                        <ListItemText primary={childText} />
                      </ListItemButton>
                    ))}
                  </ListItem>
                )}
              </List>
            ))}

            {/* {items.map(({ text, children }) => (
                <ListItem key={`mobile-menu-root-item-${slugify(text)}`}>
                    <ListItemText primary={text} />
                    <Divider />
                    {children && (
                      <>
                        {children.map(({ text: childText, href, target, action }) => (
                        <ListItem
                            key={`mobile-menu-sub-item-${slugify(childText)}`}
                        >
                            {action ? (
                            <ListItemText primary={childText} onClick={action} />
                            ) : (
                            <ListItemText
                                primary={childText}
                                component="a"
                                href={href}
                                target={target || ''}
                            />
                            )}
                        </ListItem>
                        ))}
                      </>
                    )}
                </ListItem>
                ))} */}
          </nav>

      </Box>
    </Drawer>
  )
}


const MyMenuItem = styled(MenuItem)(({ theme }) => ({
    position: 'relative',
    color: theme.palette.primary.main,
    transition: 'all 0.125s ease-in-out',
    lineHeight: 1,
    
    'span': { lineHeight: 'inherit' },
    'a': {
      color: 'inherit',
      textDecoration: 'none',
    },
    
    '&:before': {
      content: '""',
      height: '1em',
      display: 'block',
      position: 'absolute',
      left: 10,
      borderLeft: 'solid 2px',
      opacity: 0,
      transition: 'all 0.125s ease-in-out',
    },
    
    '&:hover, &:focus': {
      backgroundColor: 'transparent',
      color: theme.palette.secondary.main,
      
      '&:before': { opacity: 1 },
    },
    
    '&.Mui-selected': {
      cursor: 'default',
      color: theme.palette.secondary.main,
    }
    
  }));
  
  const MenuGroup = ({ label, items, selected, menuShowingDropdown, setMenuShowingDropdown }) => {
  
    const theme = useTheme();
    const buttonRef = useRef(null);
  
    const menuName = `basic-${slugify(label)}`;
    const buttonId = `${menuName}-button`;
    const menuId = `${menuName}-menu`;
  
    return <>
    <Button
        ref={buttonRef}
        variant={'text'}
        size={'small'}
        id={buttonId}
        // aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        sx={{
          cursor: 'pointer',
          margin: 0,
          fontWeight: 700,
          position: 'relative',
          zIndex: theme.zIndex.modal + 1,
        }}
      >
        {label}
      </Button>  
      <Menu
        id={menuId}
        anchorEl={buttonRef.current}
        open={menuShowingDropdown === label}
        MenuListProps={{
          'aria-labelledby': buttonId,
        }}
        keepMounted
      >
        {items.map(({ href, text, target, action }) => {
          const isSelected = href === selected;
          const key = `main-menu-sub-item-${slugify(text)}`;
  
          return (
            <MyMenuItem key={key} selected={isSelected}>
              <Typography variant={'subtitle1'} component={'span'}>
                {isSelected ? (
                  <><Box component={'span'} sx={visuallyHidden}>Current Page: </Box>{text}</>
                ) : action ? (
                  <MUILink onClick={action}>{ text }</MUILink>
                ) : (
                  <Link href={href} target={target || ''}>{text}</Link>
                )}
              </Typography>
            </MyMenuItem>
          );
        })}
      </Menu>
    </>
  }