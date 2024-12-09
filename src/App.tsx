import {useEffect} from "react";
import './App.module.scss'
import WebFont from "webfontloader";
import MobileVersion from "./DevicesVersions/MobileVersion/MobileVersion.tsx";
import {useMediaQuery} from "react-responsive";
import DesktopVersion from "./DevicesVersions/DesktopVersion/DesktopVersion.tsx";

function App () {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Poppins', 'Public Sans', 'Inter']
            }
        });
    }, []);
    const isMobile = useMediaQuery({ maxWidth: 375 });
    return (<div>
            {isMobile ? <MobileVersion/> : <DesktopVersion/>}
        </div>
    )
}

export default App
