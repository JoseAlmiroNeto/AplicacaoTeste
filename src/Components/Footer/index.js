import React from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import {AreaFooter} from './styled';

function Footer(){

    return(
        <AreaFooter>
            <img src="../../../logoTaugor.png" />
            <div className="copyright">
                <p>Copyright © 2020 - Taugor Corporation. Todos direitos reservados.</p>
                <div className="social">
                    <button className="btnFacebook"><FacebookOutlinedIcon></FacebookOutlinedIcon></button>
                    <button className="btnInstagram"><InstagramIcon></InstagramIcon></button>
                    <button className="btnYoutube"><YouTubeIcon></YouTubeIcon></button>
                </div>
            </div>
        </AreaFooter>
            
        
    );
}

export default Footer;