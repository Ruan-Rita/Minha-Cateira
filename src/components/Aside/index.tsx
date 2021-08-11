import React from "react";
import { Container, Header, LogoImg, MenuContainer , MenuItemLink, Title } from "./styles";
import logoSVG from "../../../public/assets/logo.svg"
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
                    <MenuItemLink href="#"><MdDashboard/>Dashboad</MenuItemLink>
                    <MenuItemLink href="#"><MdArrowUpward/>Entrada</MenuItemLink>
                    <MenuItemLink href="#"><MdArrowDownward/>Saída</MenuItemLink>
                    <MenuItemLink href="#"><MdExitToApp/>Sair</MenuItemLink>
                </MenuContainer>
            </Container>
        </>
    );
}

export default Aside ;