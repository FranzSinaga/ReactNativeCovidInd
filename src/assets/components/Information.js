import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableHighlight,
  Linking,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import image from '../image/image.jpg';

const Information = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableHighlight
          underlayColor={'transparent'}
          activeOpacity={0.6}
          onPress={() =>
            Linking.openURL('https://www.unicef.org/indonesia/id/coronavirus')
          }>
          <View style={styles.card}>
            <ImageBackground
              source={image}
              style={styles.image}
              imageStyle={{borderRadius: 15}}>
              <Text style={styles.text}>Hal-hal Yang Perlu Diketahui</Text>
            </ImageBackground>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={'transparent'}
          activeOpacity={0.6}
          onPress={() =>
            Linking.openURL('https://infeksiemerging.kemkes.go.id/')
          }>
          <View style={styles.card}>
            <ImageBackground
              source={image}
              style={styles.image}
              imageStyle={{borderRadius: 15}}>
              <Text style={styles.text}>Media Informasi</Text>
            </ImageBackground>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={'transparent'}
          activeOpacity={0.6}
          onPress={() =>
            Linking.openURL(
              'https://www.kompas.com/tren/read/2020/03/03/183500265/infografik-daftar-100-rumah-sakit-rujukan-penanganan-virus-corona',
            )
          }>
          <View style={styles.card}>
            <ImageBackground
              source={image}
              style={styles.image}
              imageStyle={{borderRadius: 15}}>
              <Text style={styles.text}>Daftar RS Rujukan Pasien</Text>
            </ImageBackground>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={'transparent'}
          activeOpacity={0.6}
          onPress={() =>
            Linking.openURL(
              'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public',
            )
          }>
          <View style={styles.card}>
            <ImageBackground
              source={image}
              style={styles.image}
              imageStyle={{borderRadius: 15}}>
              <Text style={styles.text}>COVID-19 Advice</Text>
            </ImageBackground>
          </View>
        </TouchableHighlight>
      </ScrollView>

      <TouchableHighlight
        underlayColor={'transparent'}
        activeOpacity={0.6}
        onPress={() => Linking.openURL('https://github.com/FranzSinaga')}>
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>Made With ❤️ By Developer</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 120,
    marginTop: 10,
    marginLeft: 15,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 10,
  },
  footerContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  footer: {marginTop: 40},
});

export default Information;
