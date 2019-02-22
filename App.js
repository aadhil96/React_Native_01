import React from 'react';
import { StyleSheet, Text, View , TextInput , Button } from 'react-native';

export default class App extends React.Component {



    state = {
      placeName:''
    }

    placeNameChangeHandler = val => {
      this.setState({
        placeName : val
      })

    }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput 
         
         style={styles.placeInput}
         placeholder = "An awsome place"
         value = {this.state.placeName} 
         onChangeText={this.placeNameChangeHandler}/>
     
      </View> 
       <Button title="Add" style={styles.placeButton}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    padding : 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
   
    
  },
    
  inputContainer : {
    //flex:1,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems : "center"
  },
  placeInput : {
    width:"70%"

  },
  placeButton : {
    width:"30%"
  },
});
