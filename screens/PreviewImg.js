import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';



const PreviewImg = ({ capturedPhoto, setCapturedPhoto }) => {
    const [previewPhoto, setPreviewPhoto] = useState(null);
    const navigation = useNavigation();

    const handlePress = () => {

    }
    const handleRemove = () => {
        setCapturedPhoto(null)
    }


    return (
        <View style={styles.previewContainer}>
            <Text style={styles.text}>Captured Photo:</Text>
            <View style={styles.previewImageContainer}>
                <Image source={{ uri: capturedPhoto }} style={styles.previewImage} />
            </View>
            <Button size="sm" onPress={handlePress}>upload image to aiml model</Button>
            <Button size="sm" onPress={handleRemove}>take another pic</Button>
        </View>
    )
}

export default PreviewImg

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    previewContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    previewImageContainer: {
        marginTop: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
        overflow: 'hidden',
    },
    previewImage: {
        width: 200,
        height: 300,
    },
});