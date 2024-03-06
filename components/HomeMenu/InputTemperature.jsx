import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ImageBackground, TextInput  } from 'react-native';
import React, { useState } from "react";

export default function App() {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={text} onChangeText={newText => setText(newText)}/>
            <Text>°C</Text>
        </View>
    );
};
      

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        borderRadius: 5,
        width: 300,
        marginVertical: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 8
    },
    input: {
        flex: 3
    }

});
  
