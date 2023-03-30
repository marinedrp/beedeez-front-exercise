import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

interface Props {
  label: string;
  active: boolean;
  onPress: () => void;
}

export const FilterButton: React.FC<Props> = ({
  label,
  active,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={active ? styles.activeButton : styles.button}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
