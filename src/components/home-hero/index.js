import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

export default class Hero extends PureComponent {
    render() {
        return (
            <View style={{
                width: null,
                height: 70,
                backgroundColor: '#f25038',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 24
            }}>

                <View>
                    <Text style={{
                        fontSize: 28,
                        margin: 0,
                        color: "#fff",
                        fontWeight: '700'
                    }} >Halo Selamat siang</Text>

                    <Text style={{
                        fontWeight: '100',
                        color: '#ffffff70',
                    }}>
                        Brillian Andrie NW
                     </Text>
                </View>
            </View>
        )
    }
}
