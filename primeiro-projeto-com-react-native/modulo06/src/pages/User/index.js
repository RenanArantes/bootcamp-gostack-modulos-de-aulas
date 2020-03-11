import React from 'react';
import { View, Alert } from 'react-native';

// import { Container } from './styles';

export default function User({ navigation }) {
    Alert.alert(`${navigation.getParam('user')}`);

    return <View />;
}

User.navigationOptions = {
    title: 'Usuários',
};
