import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import lawanCovid from '../../assets/image/lawanCovid.jpg';

import axios from 'axios';

class Home extends Component {
  state = {
    meninggal: 0,
    sembuh: 0,
    perawatan: 0,
    jumlahKasus: 0,
  };

  componentDidMount() {
    axios.get('https://indonesia-covid-19.mathdro.id/api').then(res => {
      this.setState({
        meninggal: res.data.meninggal,
        jumlahKasus: res.data.jumlahKasus,
        sembuh: res.data.sembuh,
        perawatan: res.data.perawatan,
      });
    });
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={lawanCovid}
          style={styles.imageBackground}
          imageStyle={{borderBottomRightRadius: 20}}
          resizeMode="cover">
          <Text style={styles.textInBackground}>Lawan</Text>
          <Text style={styles.textInBackground}>COVID-19</Text>
        </ImageBackground>
        <View style={styles.container}>
          <Text style={styles.h1}>Update Kasus Corona:</Text>
          <Text>Jumlah Kasus: {this.state.jumlahKasus}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 15,
            }}>
            <View>
              <Text style={styles.status}>😄</Text>
              <Text style={styles.statusSembuh}>
                {this.state.sembuh}
                {'\n'}Sembuh
              </Text>
            </View>
            <View>
              <Text style={styles.status}>😥</Text>
              <Text style={styles.statusMeninggal}>
                {this.state.meninggal}
                {'\n'}Meninggal
              </Text>
            </View>
            <View style={styles.statusPerawatan}>
              <Text style={styles.status}>👨‍⚕️</Text>
              <Text style={styles.statusPerawatan}>
                {this.state.perawatan}
                {'\n'}Dalam{'\n'}Perawatan
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

var {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  imageBackground: {
    width: width,
    height: 210,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
  },
  textInBackground: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'white',
    marginLeft: 20,
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#158a34',
  },
  status: {fontSize: 40, textAlign: 'center', marginBottom: 10},
  statusSembuh: {color: 'green', textAlign: 'center'},
  statusMeninggal: {color: 'red', textAlign: 'center'},
  statusPerawatan: {color: 'orange', textAlign: 'center'},
});

export default Home;
