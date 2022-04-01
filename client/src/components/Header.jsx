

import {AppBar,Toolbar,makeStyles} from '@material-ui/core';
import {Menu} from '@material-ui/icons';

const useStyles = makeStyles({
    header: {
      background: '#fff',
      height: 80,
    },
    menu:{
        color:'#000',
        
    },
    logo: {
        height:55,
        margin:'auto',
        paddingRight:70,
        paddingBottom:190,
    },
    
})
const Header = () => {
    const classes=useStyles();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    return(
         <AppBar className={classes.header}> //this(useStyles) CSS will be applied here
             <Toolbar>
                 <Menu className={classes.menu} />
               <img src={url} alt="logo" className={classes.logo}/>
             </Toolbar>
         </AppBar>
     )
     }

export default Header;