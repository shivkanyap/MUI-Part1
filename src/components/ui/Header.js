import React ,{useState,useEffect} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {makeStyles} from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from '@material-ui/core/styles'
import  SwipeableDrawer   from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


import logo from '../../assets/logo.svg'



import useScrollTrigger from '@material-ui/core/useScrollTrigger';


function ElevationScroll(props) {
  const { children} = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
    
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
//this is for the marigin of the header
const useStyles=makeStyles(theme=>({
    toolbarMargin:{
        ...theme.mixins.toolbar,
        marginBottom:"3em",
        [theme.breakpoints.down("md")]:{
            marginBottom:"2em"
        },
        [theme.breakpoints.down("xs")]:{
            marginBottom:"1.25em"
        }
    },
    logo:{
        height:"8em",
        [theme.breakpoints.down("md")]:{
            height:"7em"
        },
        [theme.breakpoints.down("xs")]:{
            height:"5.5em"
        }
    },
    logoContainer:{
        padding:0,
        "&:hover":{
            backgroundColor:"transparent"
        }
    },
    tabContainer:{
         marginLeft:'auto'
    },
    tab:{
        ...theme.typography.tab,
        minWidth:10,
        marginLeft:"25px"

    },
    button:{
        ...theme.typography.estimate,
        borderRadius:"50px",
        marginLeft:"50px",
        marginRight:"25px",
      
        height:"45px"

    },
    menu:{
        backgroundColor:theme.palette.common.blue,
        color:"white",
        borderRadius:"0px"
    },
    menuItem:{
        ...theme.typography.tab,
        opacity:0.7,
        "&:hover":{
            opacity:1
        }
    },

    drawerIconContainer:{
        marginLeft:"auto",
        "&:hover":{
            backgroundColor:"transparent"
        }
    },
    drawerIcon:{
        height:"50px",
        width:"50px"
    },
    drawer:{
        backgroundColor:theme.palette.common.blue
    },
    drawerItem:{
        ...theme.typography.tab,
        color:"white",
        opacity:0.7
    },
    drawerItemEstimate:{
        backgroundColor:theme.palette.common.orange
    },
    drawerItemSelected:{
        opacity:1
    }
}))



const Header=(props)=>{
    const classes =useStyles()
    const theme=useTheme()
    const matches=useMediaQuery(theme.breakpoints.down("md"))
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [openDrawer,setOpenDrawer]=useState(false)
    const [value,setValue]=useState(0)
    const [anchorEl,setAnchorEl]=useState(null)
    const [openMenu,setOpenMenu]=useState(false)
    const [selectedIndex,setSelectedIndex]=useState(0)
    

    const handleChange=(e,newvalue)=>{
        setValue(newvalue)
    }

    const handleClick=(e)=>{
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    }
    const handleClose=(e)=>{
        setAnchorEl(null)
        setOpenMenu(false)

    }
    const handleMenuItemClick=(e,i)=>{
        setAnchorEl(null)
        setOpenMenu(false)
        setSelectedIndex(i)
    }
    const menuOptions=[{name:"Services" ,link:"/services"},{name:"Custom Software Developement",link:"/customsoftware"},
    {name:"Mobile App Development",link:"/mobileapp"},{name:"Website development",link:"/websites"}]
    useEffect(()=>{
        if(window.location.pathname==='/' && value!==0){
            setValue(0)
        }
       else if(window.location.pathname==='/services' && value!==1){
            setValue(1)
        }
       else if(window.location.pathname==='/revolution' && value!==2){
            setValue(2)
        }
        else if(window.location.pathname==='/about' && value!==3){
            setValue(3)
        }
        else if(window.location.pathname==='/contact' && value!==4){
            setValue(4)
        }
        else if(window.location.pathname==='/estimate' && value!==5){
            setValue(5)
        }

        switch(window.location.pathname){
            case "/":
                if(value!==0){

                    setValue(0)
                }
                break;
            case "/services":
                if(value!==1){
                    setValue(1)
                    setSelectedIndex(0)
                }
                break;
            case "/customsoftware":
                if(value!==1){
    
                    setValue(1)
                    setSelectedIndex(1)
                }
                break;
            case "/mobileapps":
                if(value!==1){
    
                    setValue(1)
                    setSelectedIndex(2)
                 } 
                 break; 
             case "/websites":
                    if(value!==1){
    
                        setValue(1)
                        setSelectedIndex(3)
                    } 
                    break; 
             case "/revolution":
                        if(value!==2){
        
                            setValue(2)
                        }
                        break;
             case "/about":
                    if(value!==3){
            
                        setValue(3)
                    }
                    break;
            case "/contact":
                     if(value!==4){
        
                        setValue(4)
                    }
                    break;
            case "/estimate":
                    if(value!==5){
        
                        setValue(5)
                    }
                    break;
            default:
                break;
        }
    },[value])
    const tabs=(
        <React.Fragment>
             <Tabs value={value}
                      onChange={handleChange}
                      className={classes.tabContainer}
                      indicatorColor="primary">
                    <Tab  className={classes.tab}
                     component={Link} 
                     label="Home"
                     to="/"/>
                    <Tab
                    aria-owns={anchorEl?"simple-menu":undefined}
                    aria-haspopup={anchorEl?"true":undefined}
                    className={classes.tab} 
                    onMouseOver={e=>handleClick(e)}
                     component={Link}
                      label="Services"
                      to="/services"/>
                    <Tab className={classes.tab} 
                    component={Link} 
                    label="The Revolution"
                    to="/revolution"/>

                    <Tab className={classes.tab} 
                    component={Link} 
                    label="About Us"
                    to="/about"/>

                    <Tab className={classes.tab}
                     component={Link} 
                      label="Contact Us"
                      to="/contact"/>

                </Tabs>
                <Button variant="contained" color="secondary" className={classes.button}>Free estimate</Button>
                <Menu id="simple-menu"
                 anchorEl={anchorEl}
                  open={openMenu} 
                  onClose={handleClose}
                   MenuListProps={{onMouseLeave:handleClose}}
                   classes={{paper:classes.menu}}
                   elevation={0}>
                       
                    {menuOptions.map((option,i)=>(
                    <MenuItem key={option} component={Link} to={option.link} classes={{root:classes.menuItem}}
                     onClick={(e)=>{handleMenuItemClick(e,i);setValue(1); handleClose()}} selected ={i===selectedIndex  && value===1}>
                    {option.name}

                    </MenuItem>
                ))}
                </Menu>
        </React.Fragment>
    )
    const drawer=(
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} 
            onClose={()=>setOpenDrawer(false)} onOpen={()=>setOpenDrawer(true)}  classes={{paper:classes.drawer}} >
                <List disablePadding>
                    <ListItem  onClick={()=>{setOpenDrawer(false);setValue(0)} }
                    divider
                    button
                    component={Link} 
                    to="/" 
                    selected={value===0}
                    >
                        <ListItemText className= {value===0?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} 
                         disableTypography>Home</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{setOpenDrawer(false);setValue(1)}} divider button component={Link} to="/services" selected={value===1}>
                        <ListItemText className={value===1?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>Services</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{setOpenDrawer(false);setValue(2)}} divider button component={Link} to="/revolution" selected={value===2}>
                        <ListItemText className={value===2?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>The Revolution</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{setOpenDrawer(false);setValue(3)}} divider button component={Link} to="/about" selected={value===3}>
                        <ListItemText className={value===3?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>About Us</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{setOpenDrawer(false);setValue(4)}} divider button component={Link} to="/contact" selected={value===4}>
                        <ListItemText className={value===4?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>Contact US</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{setOpenDrawer(false);setValue(5)}} divider button component={Link} to="/estimate" selected={value===5} className={classes.drawerItemEstimate} >
                        <ListItemText className={value===5?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography> Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton  className ={classes.drawerIconContainer} onClick={()=>setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>

        </React.Fragment>
    )
    return (
        <React.Fragment>
        <ElevationScroll>
        <AppBar position="fixed" color="primary">
            {/* //disableGutters  for adjusting the padding the of logo */}
            <Toolbar disableGutters={true}>
                <Button component={Link} to="/"  onClick={()=>setValue(0)} className={classes.logoContainer} disableRipple>
                <img alt="company logo"  className={classes.logo} src={logo}/>

                </Button>
                {matches ?drawer: tabs}
               
                

            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </React.Fragment>
    )
}
export default Header