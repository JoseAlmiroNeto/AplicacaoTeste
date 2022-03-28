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
                    <a href="https://www.facebook.com/taugor/" className="btnFacebook">
                        <i><FacebookOutlinedIcon color="primary"  /></i>
                    </a>

                    <a href="https://www.instagram.com/taugorbr/" className="btnInstagram">
                        <i><InstagramIcon color="primary"  /></i>
                    </a>

                    <a href="https://www.youtube.com/user/canaltaugor" className="btnYoutube">
                        <i><YouTubeIcon color="primary"  /></i>
                    </a>
                </div>
            </div>
        </AreaFooter>
            
        
    );
}

export default Footer;
