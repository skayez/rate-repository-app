import { StyleSheet } from 'react-native';
import { useField, Formik } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    color: '#d73a4a',
    paddingLeft: 5
  },
  inputItemInvalid: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#d73a4a',
    margin: 5
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  if (showError) {
    props.style = styles.inputItemInvalid
  }

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;