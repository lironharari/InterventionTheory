import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

class MobileDrawer extends React.Component {      
    constructor(props) {
        super(props);        
        this.state = { open: false };   
    }  
    render() {  
      const { open } = this.state; 
      const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        this.setState({ open });
      };                      
      const nav = this.props.nav.map( ( section, index ) => {
        return <li key={index} onClick={toggleDrawer(false)}><a href={`#${ section.id }`}>{section.text}</a></li>
      });       
      return (
        <div className="drawer-container">        
            <button onClick={toggleDrawer(true)}>
                <ArrowBackIosOutlinedIcon style={{ fontSize: 30, color:"rgba(0,0,0,.3)" }}/>
            </button>

            <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
                <nav className="section-nav-drawer">  
                    <h5>תוכן עניינים</h5>
                    <ul>
                    {nav}
                    </ul>
                </nav>                
            </Drawer>
        </div>
        );
    }
  }

export default MobileDrawer;