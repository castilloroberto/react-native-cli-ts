 import React, { useState } from 'react';
 import {
   Button,
   StyleSheet,
   Text,
   TextInput,
   View,
 } from 'react-native';
 import RNImmediatePhoneCall from 'react-native-immediate-phone-call';


 

 const App = () => {
  const call = ()=>{
    RNImmediatePhoneCall.immediatePhoneCall(number);
  }
  const [number, setNumber] = useState<string>('')
  
   return (
    <View style={styles.body}>
      <Text>Ingrese el numero de telefono:</Text>
      <TextInput onChangeText={setNumber} value={number}/>
      <Button title="Call"  onPress={call} />
    </View> 
   );
 };

 const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }   
 });

 export default App;
