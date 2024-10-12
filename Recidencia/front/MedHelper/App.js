import React from 'react';
import { View,StyleSheet} from 'react-native';
import Login from './src/components/Login/Index'
import Logo from './src/components/Logo/Index'

const App = () => {
  return (
   <View style={styles.container}>
    <Logo/>
    <Login/>
  </View>  
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#352a49',
    alignItems: 'center',
    justifyContent: 'center',
  }
})


export default App;

