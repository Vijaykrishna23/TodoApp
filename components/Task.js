import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Task = ({ title, onPress }) => {
    return <>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.item}>
                <Text style={styles.itemText}>{title}</Text>
                <View style={styles.circular}></View>
            </View>
        </TouchableOpacity>
    </>
}

export default Task;

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#fff',
        padding: 15,
        margin: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'blue',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 20,
    },

    itemText: {
        maxWidth: '80%',
    },

    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: 'center'
      },
})