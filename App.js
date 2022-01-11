import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './Screen/Home';

const App =(props)=> {
  return(
   <View style={styles.screen}>
      <Home/>
   </View>
  )
}

const styles = StyleSheet.create({
    screen:{
      flex:1
    }
});

export default App;
