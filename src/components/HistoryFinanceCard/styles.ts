import styled from "styled-components";
interface ITagProps {
    color: string
}
export const Container = styled.li`
    width: 100%;
    background-color: ${props => props.theme.colors.tertiary};
    list-style: none;
    border-radius: 5px;
    margin: 10px 0px;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    position: relative;

    &:hover{
      opacity: .7;
      transform: translateX(10px);
    }

    > div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;

        > span {
            font-size: 1.8rem;
            font-weight: 600;
        }
    }
`;

export const Tag = styled.div<ITagProps>`
    width: 20px;
    height: 60%;
    background-color: ${props => props.color};
    position: absolute;
    left: 0px;
    transform: translate(-50%,0);
    border-radius: 10px;
`;