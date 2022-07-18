import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

const Page2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'ppppp',
      headerBackTitle: '뒤로',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>페이지2</Text>
      <Button title="page3" onPress={() => navigator.navigate('Page3Screen')} />
    </View>
  );
};

export default Page2Screen;
