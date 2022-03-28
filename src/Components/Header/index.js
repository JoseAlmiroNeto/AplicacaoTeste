import React from "react";
import { Link } from "react-router-dom"; 
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import HistoryEdu from "@mui/icons-material/HistoryEdu";
import {AreaHeader} from './styled'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AreaHeader>
         <div className="container">
             <div className="logo">
                 <Link to="/"><img src="../../../logo.png" /></Link>

                 <tile className="title"><strong>Portal de Relacinamento Taugor</strong></tile>
             </div>

             

             <nav>
                 <ul>
                     <li><Link to="/"><ReceiptLongIcon/>Solicitações</Link></li>
                     <li><Link to="/nova-solicitacao"><HistoryEdu/>Nova Solicitação</Link></li>
                     
                     <div className="profile">
                        <Button
                            className="profile-btn"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <AccountCircleIcon className="profile-btn-icon" />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                 </ul>
             </nav>
         </div>
        </AreaHeader>
    );
}

export default Header;
