import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView} from 'react-native'

export default function Header(props) {
    return (
        <View>
            <SafeAreaView>
                <View style={style.container}>
                    <Image 
                        source={require('../../../assets/logo.png')}
                        style={style.logo}
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    logo:{
        width: 80,
        height: 26,
        resizeMode: 'contain',
    },
    right:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})