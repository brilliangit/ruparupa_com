import React from 'react';
import { View, Text, Button, SafeAreaView, StatusBar, Image } from 'react-native';

const DetailsEvent = ({ navigation, route }) => {
    const { fullDate, image, title } = route.params
    const handleDismiss = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight, flex: 1 }} >
            <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
                <Image
                    resizeMode="contain"
                    source={image} />
                <View style={{padding:16}}>
                    <Text style={{ fontSize: 30, marginBottom:16 }}>{title}</Text>
                    <Button onPress={handleDismiss} title="Dismiss" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DetailsEvent;