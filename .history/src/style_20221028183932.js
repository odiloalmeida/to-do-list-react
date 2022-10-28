import styled from "styled-components";

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ToDoList = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 30px 20px;
    width: 541px;
`
export const Button = styled.button`
    background: #8052EC;
    border-radius: 5px;
    color: #ffffff;
    padding: 10px 21px;
    font-weight: 900;
    border: none;
    width: 130px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        padding: 13px 24px;
    }
    &:active {opacity: 0.5}
`
export const Input = styled.input`
    border-radius: 5px;
    border: 2px solid rgba(209, 211, 212, 0.4);
    padding: 10px 21px;
    margin-right: 10px;
    outline: none;
    width: 65%;
`

export const List = styled.li`
    list-style: none;
`

export const Ul = styled.ul`
    padding: 0;
    margin-top: 30px;
`

export const ListItem = styled.div`
    background: ${ props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    width: 95%;
`
export const Woitem = styled.h3`
    font-weight: 900;
    text-align: center;
    font-size: 20px;
    color: #b81313;
`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
`

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
`