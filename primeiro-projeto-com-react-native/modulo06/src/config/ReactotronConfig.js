import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
    const tron = Reactotron.configure({ host: '192.168.1.12' })
        .useReactNative()
        .connect();

    console.tron = tron;

    tron.clear();
}
