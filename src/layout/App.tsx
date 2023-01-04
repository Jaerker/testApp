/* eslint-disable prettier/prettier */
/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  View,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import TestScreen from '../screens/test/TestScreen';

import { store, StoreContext } from '../stores/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationScreen from '../screens/authentication/AuthenticationScreen';




const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  const viewStyle = {
    backgroundColor: useColorScheme() === 'dark' ? '#ffffff' : '#000000' 
}
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    
    <StoreContext.Provider value={store}>
      <NavigationContainer >
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <Stack.Navigator initialRouteName="Authentication">

          <Stack.Screen name="Test" options={{ title: 'Test Area' }}>
                {(props) =>{
              return  <TestScreen {...props} />;
            }}
          </Stack.Screen>

          <Stack.Screen name="Authentication" options={{ title: 'Welcome!' }}>
            {(props) => <AuthenticationScreen {...props} />}
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    </StoreContext.Provider>
  );
};

export default App;


/* Example with component that takes information inside its own brackets */
// const Section: React.FC<
//   PropsWithChildren<{
//     title: string;
//   }>
// > = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'light';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };
