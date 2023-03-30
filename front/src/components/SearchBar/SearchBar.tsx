import {TextInput, View} from 'react-native';
import styles from './styles';

interface Props {
  searchPhrase: string;
  setSearchPhrase: (text: string) => void;
}

export const SearchBar = ({searchPhrase, setSearchPhrase}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchPhrase}
        value={searchPhrase}
        placeholder="Search stations by name"
        placeholderTextColor="#777777"
      />
    </View>
  );
};
