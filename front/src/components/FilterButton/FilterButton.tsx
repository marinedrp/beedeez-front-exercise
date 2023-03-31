import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {colors} from '../../theme/theme'

interface Props {
  label: string;
  active: boolean;
  onPress: () => void;
  buttonColor: string,
  buttonColorActive: string,
}

export const FilterButton: React.FC<Props> = ({
  label,
  active,
  onPress,
  buttonColor,
  buttonColorActive,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: active ? buttonColorActive : buttonColor}]}
      onPress={onPress}>
      <Text style={[styles.label, {color: active ? colors.white : colors.black}]}>{label}</Text>
    </TouchableOpacity>
  );
};
