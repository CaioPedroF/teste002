import React from 'react'
import {View, Text,TextInput, Button,TouchableOpacity} from 'react-native'
import styles from './style'

export default function Login(){
    return(
        <View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    keyboardType='email-address'
                    placeholderTextColor="#ccc"
                ></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                    placeholderTextColor="#ccc"
                ></TextInput>
            </View>
            <View style={styles.optionsContainer}>
                <TouchableOpacity>
                    <Text style={styles.optionText}>Inscrever-se</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.optionText}>Manter Logado</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}