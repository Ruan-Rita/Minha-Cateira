import React, { useState } from "react";
import { Container, ToggleLabel, ToggleSelector } from "./styles";



const Toggle : React.FC = () => {
    const [stateToggle = false, setToggle] = useState<boolean>();
    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector 
                checked={stateToggle}
                onChange={()=> {setToggle(stateToggle ? false : true)}}
                uncheckedIcon={false}
                checkedIcon={false}
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    );
}


export default Toggle;