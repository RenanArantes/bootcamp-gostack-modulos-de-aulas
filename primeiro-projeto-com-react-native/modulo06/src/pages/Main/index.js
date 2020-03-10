import React, { Component } from 'react';
import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

export default class Main extends Component {
    state = {
        newUser: '',
        users: [],
    };

    handlerAddUser = () => {
        Alert.alert('Ta funcionando');
    };

    render() {
        const { users, newUser } = this.state;

        return (
            <Container>
                <Form>
                    <Input
                        autoCorret={false}
                        autoCapitalize="none"
                        placeholder="Adicionar usuário"
                        value={newUser}
                        onChangeText={text => this.setState({ newUser: text })}
                        returnKeyType="send"
                        onSubmitEditing={this.handlerAddUser}
                    />

                    <SubmitButton onPress={this.handlerAddUser}>
                        <Icon name="add" size={20} color="#FFF" />
                    </SubmitButton>
                </Form>
            </Container>
        );
    }
}

Main.navigationOptions = {
    title: 'Tecnodata Análise',
};
