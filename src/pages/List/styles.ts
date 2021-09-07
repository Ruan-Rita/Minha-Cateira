import styled from "styled-components";

export const Container = styled.div`
    
`

export const Content = styled.div`
    
`

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .tag-filters{
        font-size: 18px;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.colors.white};
        margin: 0px 10px;
        transition: opacity .3s;
        margin-bottom: 30px;
        &:hover{
            opacity: .7;
        }

        &.tag-filters-recurrent::after{
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.colors.warning};
        }
        &.tag-filters-eventual::after{
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.colors.success};
        }
    }
    
`