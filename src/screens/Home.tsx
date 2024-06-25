import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  MovieDetail: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = ({ navigation }: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>Home</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Go to Movie Detail"
        onPress={() => navigation.navigate('MovieDetail')}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
