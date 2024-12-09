import classes from "../../App.module.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageMain from "../../DesktopPages/PageMain.tsx";
import PageDiscover from "../../DesktopPages/Discover/PageDiscover.tsx";
import PageCreators from "../../DesktopPages/Creators/PageCreators.tsx";
import PageSells from "../../DesktopPages/Sells/PageSells.tsx";
import PageStats from "../../DesktopPages/Stats/PageStats.tsx";
import PAGE_TEST_ANOTHER_PROJECT from "../../DesktopPages/PAGE_TEST_ANOTHER_PROJECT.tsx";

const DesktopVersion= () => {
    return(
        <BrowserRouter>
            <div className={classes.background}>
                <Routes>
                    <Route path="/" element={<PageMain/>}/>
                    <Route path="/discover" element={<PageDiscover/>}/>
                    <Route path="/creators" element={<PageCreators/>}/>
                    <Route path="/sells" element={<PageSells/>}/>
                    <Route path="/stats" element={<PageStats/>}/>
                    <Route path="/test" element={<PAGE_TEST_ANOTHER_PROJECT/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default DesktopVersion