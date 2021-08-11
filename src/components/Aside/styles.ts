import  styled  from "styled-components";


export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
`;
export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
`;
export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`;
export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;
export const MenuContainer = styled.nav`
    display: flex;
    margin-top: 50px;
    flex-direction: column;

`;  

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    transition: opacity .3s;
    margin: 7px 0px;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 700;

    &:hover{
        cursor: pointer;
        opacity: .7;
    }
    > svg {
        margin-right: 10px;
        font-size: 2rem;
    }
`;