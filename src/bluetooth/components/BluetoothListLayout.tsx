import React from 'react';
import { StyleSheet, Text, unstable_batchedUpdates, View } from 'react-native';

export const BluetoothListLayout = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {props.title}</Text>
            {/*props.childen hace que lo que meta dentro de este contenedor se cree en la posicion de props.children
            ver el componente bluetooth-list.tsx
            */}
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        marginLeft: 10,
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 25,
        backgroundColor: '#f5fcff',
    }
});