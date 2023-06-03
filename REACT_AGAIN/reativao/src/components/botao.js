import React from "react"
import { Text, Button,StyleSheet, View } from "react-native"
import style from './estilo'

export default props => {

    let numero = props.inicial
    const inc= () => numero++;
    const dec=() => numero--;

    return(
        <View style={style.Button}>  
            <Text>2</Text>
            <Button  title="+" onPress={inc} />
            <Button title="-" onPress={dec}/>
        </View>
    )
}
