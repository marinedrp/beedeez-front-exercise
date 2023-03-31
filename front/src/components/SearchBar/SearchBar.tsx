import {TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import MagnifyingGlass from '../../assets/icons/MagnifyingGlass';
import CloseButton from '../../assets/icons/CloseButton';


interface Props {
  searchPhrase: string;
  setSearchPhrase: (text: string) => void;
  clearSearchPhrase: () => void;
}

export const SearchBar = ({searchPhrase, setSearchPhrase, clearSearchPhrase}: Props) => {
  return (
    <View style={styles.container}>
      <MagnifyingGlass />
      <TextInput
        style={styles.input}
        onChangeText={setSearchPhrase}
        value={searchPhrase}
        placeholder="Search stations by name"
        placeholderTextColor="#777777"
      />
      <TouchableOpacity onPress={clearSearchPhrase}>
        <CloseButton />
      </TouchableOpacity>
    </View>
  );
};
