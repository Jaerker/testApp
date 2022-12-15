import { ParamListBase, RouteProp } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { View } from 'react-native';
import Test from '../../features/test/Test';
import styles from '../../layout/styles';
import { useStore } from '../../stores/store';

interface Props {
    route: RouteProp<ParamListBase, string>,
    navigation: any
  }
  

const TestScreen = ({navigation}: Props) => {

    const {testStore} = useStore();
    
    const { btnPress } = testStore;
    
    const testPress = (): void => {
        btnPress(navigation);
    }

    return (<View style={styles.container}>
            <Test />
            <Test  />
        </View>);
};

export default TestScreen;