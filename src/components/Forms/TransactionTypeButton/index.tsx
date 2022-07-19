import React from "react";
import { Container, Title, Icon } from "./styles";
import { TouchableOpacityProps } from 'react-native';

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
}

const iconColor = {
    up: '#12A454',
    down: '#E83F5B',
};

interface Props extends TouchableOpacityProps {
    title: string;
    type: 'up' | 'down';
    isActive: boolean;
}

export function TransactionTypeButton({type, title, isActive, ...rest} : Props){
    return(
        <Container
            {...rest}
            isActive={isActive}
            type={type}
        >
            <Icon 
                name={icons[type]}
                color={iconColor[type]}
            />
            <Title> {title} </Title>

        </Container>
    )
}