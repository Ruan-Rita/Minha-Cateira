import React from "react";
import { Container, Header, LogoImg, MenuContainer , MenuItemLink, Title } from "./styles";
import {
    MdDashboard,
    MdArrowUpward,
    MdArrowDownward,
    MdExitToApp
} from "react-icons/md";

const Aside : React.FC = () => {
    return (
        <>
            <Container>
                <Header>
                    <LogoImg src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMtXgHOAsKOjsbF_2u2d7F9CkGHY7WDBFEtXy48uAvclhRPR4xplU9a722goE_FnIR4s&usqp=CAU"} alt="Logo Minha Carteira" />
                    <Title>Minha Carteira</Title>
                </Header>
                <MenuContainer>
                    <MenuItemLink href="/dashboard"><MdDashboard/>Dashboad</MenuItemLink>
                    <MenuItemLink href="/list/input"><MdArrowUpward/>Entrada</MenuItemLink>
                    <MenuItemLink href="/list/output"><MdArrowDownward/>Saída</MenuItemLink>
                    <MenuItemLink href="/exit"><MdExitToApp/>Sair</MenuItemLink>
                </MenuContainer>
            </Container>
        </>
    );
}

export default Aside ;