import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from './styles';
import {colors} from '../../theme/theme';
import EbikeIcon from '../../assets/icons/EbikeIcon';
import MechanicalBike from '../../assets/icons/MechanicalBike';

interface Props {
  label: string;
  active: boolean;
  onPress: () => void;
  buttonColor: string;
  buttonColorActive: string;
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
      style={[
        styles.button,
        {backgroundColor: active ? buttonColorActive : buttonColor},
      ]}
      onPress={onPress}>
      {label === 'Electric Bikes' ? (
        <View>
          <EbikeIcon color={active ? colors.white : colors.black} />
        </View>
      ) : (
        <View>
          <MechanicalBike color={active ? colors.white : colors.black} />
        </View>
      )}
      <Text
        style={[
          styles.label,
          {color: active ? colors.white : colors.black},
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};