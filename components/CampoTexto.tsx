import { StyleSheet, Text, TextInput, View } from 'react-native';

type CampoTextoProps = {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
};

export default function CampoTexto({
  label,
  placeholder,
  secureTextEntry = false,
}: CampoTextoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
});