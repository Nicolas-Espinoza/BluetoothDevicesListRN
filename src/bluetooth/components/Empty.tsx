import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Empty = (props: any) => {
    return (
        <View>
            <Text style={styles.texto}>{props.text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        color: 'black'
    }
});