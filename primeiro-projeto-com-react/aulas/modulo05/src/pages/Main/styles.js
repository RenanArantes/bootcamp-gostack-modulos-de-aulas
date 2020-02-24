import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form.attrs(props => ({
    finded: props.finded,
}))`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid ${props => (props.finded ? '#ff6b6b' : '#eee')};
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;

        transition: border 0.25s ease-out;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;


export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #f01;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
    /*
    * Desativa o click do cursor enquanto o loading for true.
    */
    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    /*
    * Adicionando um conjunto de elementos baseado em uma propriedade.
    * faz o icone girar enquanto o loading for true.
    */
    ${props => props.loading && css`
        svg {
            animation: ${rotate} 2s linear infinite;
        }
    `}
`;


export const List = styled.ul`
    list-style: none;
    margin-top: 30px;

    li {
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;


        /*
        * Aplica uma estilização no li menos no primeiro
        */
        & + li {
            border-top: 1px solid #eee;
        }

        a {
            color:#f01;
            text-decoration: none;

        }
    }
`;
