import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Separator = (props: any) => {
    return (
        <View style={[styles.separator,
        {
            borderColor: props.color ? props.color : '#eceff1'
        }]} />
    )
}
const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: 1,
    }
});