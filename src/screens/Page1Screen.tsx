import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';

interface IProps extends StackScreenProps<any, any> {}

const Page1Screen = ({navigation}: IProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>페이지1</Text>
      <Button
        title="page2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      <Button
        title="PersonScreen"
        onPress={() => navigation.navigate('PersonScreen')}
      />

      <Text>Naver can argument</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PersonScreen', {
            id: 1,
            name: 'Spear',
          })
        }>
        <Text>버튼</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page1Screen;
