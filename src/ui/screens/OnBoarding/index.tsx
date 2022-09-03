import React from 'react';
import { StatusBar } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import { Flex } from '@react-native-material/core';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import Text from '@components/Text';
import WomanAnimation from '@assets/animations/woman-animation.json';
import * as S from './styles';

const OnBoarding = () => {
  const theme = useTheme();
  return (
    <LinearGradient
      colors={['#38B48A', '#01726B']}
      style={{ flex: 1 }}
      testID="onBoarding-container">
      <StatusBar backgroundColor="#38B48A" />
      <S.Container>
        <Animatable.View
          animation="fadeInDown"
          duration={1400}
          style={{ width: '100%', height: RFValue(270) }}>
          <AnimatedLottieView
            source={WomanAnimation}
            autoPlay
            loop
            style={{
              maxHeight: 270,
              marginTop: RFValue(20),
            }}
          />
        </Animatable.View>

        <S.NameWrapper animation={'fadeInLeft'} delay={700}>
          <Text fontWeight="bold" fontSize={RFValue(43)} color={'#ffffff'}>
            Salão Sempre
          </Text>
          <Text fontWeight="bold" fontSize={RFValue(43)} color={'#ffffff'}>
            Bela
          </Text>
          <Animatable.View animation="fadeInLeft" delay={800}>
            <Text
              fontWeight="regular"
              fontSize={RFValue(14)}
              color={'#ffffff'}
              marginTop={RFValue(16)}>
              There are many variations of passages of Lorem Ipsum available,
              but.
            </Text>
          </Animatable.View>
        </S.NameWrapper>
      </S.Container>

      <Animatable.View animation="fadeInUp" delay={1200}>
        <S.Button>
          <Text fontWeight="regular" color="#00726b">
            Cadastre-se
          </Text>
        </S.Button>
      </Animatable.View>
      <Animatable.View animation={'fadeInUp'} delay={1400}>
        <Flex direction="row" justify="center" mb={RFValue(33)}>
          <Text fontWeight="regular" color="white">
            {' '}
            Já tem uma conta ?
          </Text>
          <Text fontWeight="bold" color="white">
            {' '}
            Login
          </Text>
        </Flex>
      </Animatable.View>
    </LinearGradient>
  );
};

export default OnBoarding;
