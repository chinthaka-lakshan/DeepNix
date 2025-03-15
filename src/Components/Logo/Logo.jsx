import logo from '../../Assets/Logo.png'
import './logo.css'
export default function Logo(){
    return(
        <>
            <div className="base">
            <div className="circle">
          
          </div>
          <div className="txtLogo">
            <img src={logo} alt="" />
            {/* <div className="logoT">DeexNix</div> */}
            </div>
            </div>

        </>
    );
}