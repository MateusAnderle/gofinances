import React from "react";
import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from "./style";

interface Props {
    title: string;
    amount: string;
    lastTrasaction: string;
    type: 'up' | 'down' | 'total'
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

const iconColor = {
    up: '#12A454',
    down: '#E83F5B',
    total: '#FFFFFF'
}

export function HighlightCard( {title, amount, lastTrasaction, type} : Props){

    return(
        <Container type={type}>
            <Header>
                <Title type={type}>{title}</Title>
                <Icon name={icon[type]} color={iconColor[type]} />
            </Header>

            <Footer>
                <Amount type={type}>{amount}</Amount>
                <LastTransaction type={type}>{lastTrasaction}</LastTransaction>
            </Footer>

        </Container>
    )
}