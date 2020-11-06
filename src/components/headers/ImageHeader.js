import React from 'react';
import { Image, StyleSheet } from 'react-native';
const ImageHeader = () => {
    return (
        <Image
            style={styles.logo}
            source={require('../../assets/ruparupa-logo.png')}
        />
    )
}

const styles = StyleSheet.create({
    logo: {
        resizeMode: "contain",
        width: 100
    },
});

export default ImageHeader;