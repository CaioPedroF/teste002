import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#4668FE',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#fff',
        marginBottom: 20,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30,
    },
    optionText: {
        color: '#fff',
        fontSize: 14,
    },
    loginButton: {
        width: '100%',
        backgroundColor: '#5AC8FA',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },  
    forgotPasswordText: {
        color: '#fff',
        fontSize: 14,
    },
})

export default styles