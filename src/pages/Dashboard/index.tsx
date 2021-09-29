import React from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const Dashboard: React.FC = () => {
    const options = [
        {label: "FIX", value: 10},
        {label: "TEST", value: 26},
        {label: "CAR", value: 15}
    ];
    return (
        <Container>
            <ContentHeader title="DashBoad" lineColor="#4FF">
                <SelectInput onChange={() => {}} options={options}/>
            </ContentHeader>
            
        </Container>
    );
}

export default Dashboard;