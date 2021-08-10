import React from "react";
import Aside from "../Aside";
import MainHeader from "../Content";
import Content from "../MainHeader";
import { Grid } from "./styles";
 
const Layout : React.FC = () => {
    return (
        <>
            <Grid>
                <MainHeader />
                <Aside />
                <Content />
            </Grid>
        </>
    );
}

export default Layout ;