import React from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import CustomButton from '../../components/customButton';
import CustomText from '../../components/customText';
import WelcomeWave from '../../assets/svg/WelcomeWave';
import { WELCOME_SCREEN_TEXT } from '../../constants/welcome';
import { ROUTES } from '../../constants/common';
import { RootStackParamList } from '../../navigations/types';
import styles from './welcome.style';

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  const handleSignIn = () => {
    // TODO: add sign in action
  };

  const handleRegister = () => {
    navigation.navigate(ROUTES.REGISTER);
  };

  return (
    <View style={styles.root}>
      <WelcomeWave style={styles.wave} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/doctor.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.content}>
          <CustomText variant="title" style={styles.centerText}>
            {WELCOME_SCREEN_TEXT.title}
          </CustomText>

          <CustomText variant="body" style={styles.description}>
            {WELCOME_SCREEN_TEXT.description}
          </CustomText>

          <CustomButton
            title={WELCOME_SCREEN_TEXT.signIn}
            onPress={handleSignIn}
            style={styles.button}
          />

          <View style={styles.footer}>
            <CustomText variant="caption">
              {WELCOME_SCREEN_TEXT.noAccount}
            </CustomText>
            <CustomText
              variant="link"
              onPress={handleRegister}
              style={styles.register}
            >
              {WELCOME_SCREEN_TEXT.register}
            </CustomText>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WelcomeScreen;
