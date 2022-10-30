import { View, Text, TouchableOpacity, Button, StyleSheet, Image, card, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Profile = () => {

    const navigation = useNavigation();

    return (
        <ScrollView>
            <Text>Profile picture  Name Email  </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',

    },

});

export default Profile;