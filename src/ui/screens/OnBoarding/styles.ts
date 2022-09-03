import {Platform, Touchable, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${Platform.OS === 'android' ? RFValue(70) : 0}px;
`;

export const NameWrapper = styled(Animatable.View)`
  width: 100%;
  margin-top: ${Platform.OS === 'ios' ? RFValue(30) : RFValue(30)}px;
  padding: ${RFValue(24)}px;
  gap: 20px;
`;

export const Button = styled.TouchableOpacity`
  height: ${RFValue(45)}px;
  border-radius: ${RFValue(10)}px;
  background-color: white;
  margin: ${RFValue(33)}px ${RFValue(24)}px;
  align-items: center;
  justify-content: center;
`;
