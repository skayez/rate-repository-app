import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-native';
import FormikTextInput from './FormikTextInput';
import useSignIn from '../hooks/useSignIn'
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

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Please provide the username'),
  password: yup.string().required('Please provide the password')
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      navigate('/repositories')
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <FormikTextInput style={styles.inputItem} name='username' placeholder='username' />
          </View>
          <View style={styles.inputContainer}>
            <FormikTextInput style={styles.inputItem} name='password' placeholder='password' />
          </View>
          <Pressable onPress={handleSubmit}>
            <Text style={styles.buttonItem}>Sign in</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  )
};

export default SignIn;