import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 5
  },
  inputItem: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#808080',
    margin: 5
  },
  buttonItem: {
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#0366d6',
    color: '#ffffff',
    borderRadius: 4,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 4,
    marginRight: 4
  }
});

const onSubmit = (values) => {
  console.log('täällä');
};

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Please provide the username'),
  password: yup.string().required('Please provide the password')
});

const SignIn = () => {
  return (
    <Formik initialValues={initialValues} onPress={onSubmit} validationSchema={validationSchema}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <FormikTextInput style={styles.inputItem} name='username' placeholder='username' />
        </View>
        <View style={styles.inputContainer}>
          <FormikTextInput style={styles.inputItem} name='password' placeholder='password' />
        </View>
        <Pressable onPress={onSubmit}>
          <Text style={styles.buttonItem}>Sign in</Text>
        </Pressable>
      </View>
    </Formik>
  )
};

export default SignIn;