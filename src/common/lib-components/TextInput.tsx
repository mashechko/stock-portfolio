import React from "react";
import styled from "styled-components";

import { colors } from "../globalStyle";

const InputContainer = styled.div`
    position: relative;
    min-height: 48px;
    width: 100%;
`;

// TODO: proper colors in this file
const Input = styled.input`
    height: 56px;
    border-radius: 8px;
    border: 1px solid ${colors.uiLightGray};
    background-color: ${colors.uiLight};
    color: ${colors.uiBlack};
    font-size: 16px;
    padding-left: 16px;
    padding-right: 40px;
    width: 100%;
    outline: none;
    appearance: none;

    &:focus {
        border: 1px solid ${colors.uiGray};
    }

    ::placeholder {
        color: ${colors.uiGray};
    }
`;

const TextInput = (props: {
    name: string;
    value: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    const { name, value, placeholder = "", onChange } = props;
    return (
        <div>
            <InputContainer>
                <Input
                    type="text"
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={(event) => onChange(event)}
                />
            </InputContainer>
        </div>
    );
};

export default TextInput;
