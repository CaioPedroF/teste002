import React from 'react'
import {View, Text, Image} from 'react-native'
import styles from './style'

export default function Login(){
    return(
        <View>
            <View style={styles.logoContainer}>
                <Image
                style={styles.logo}
                source={require('../../assents/Logo.png')}/>
            </View>
            <View>
                <Text style={styles.welcomeText}>Bem-vindo</Text>
                <Text style={styles.subtitleText}>Entre na sua conta</Text>
            </View>
        </View>
    )
}