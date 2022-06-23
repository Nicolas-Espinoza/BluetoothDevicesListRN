import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Subtitle = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
            <View style={styles.line} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center'
    },
    text: {
        marginLeft: 10,
        color: 'grey',
        fontSize: 18,
        fontWeight: 'bold'
    },
    line: {
        marginLeft: 5,
        borderBottomWidth: 1,
        flex: 1,
        marginTop: 5,
        borderColor: '#eceff1'
    }
});