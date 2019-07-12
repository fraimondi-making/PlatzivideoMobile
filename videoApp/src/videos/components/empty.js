import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default function Empty(props) {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                {props.text}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 10
    },
    title:{
        fontSize: 16
    }
})
