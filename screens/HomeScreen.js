import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation()
    const handlePress = () => {
        navigation.navigate("Camera")
    }

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button size="sm" onPress={handlePress}>open camera</Button>
        </View>
    )
}

export default HomeScreen