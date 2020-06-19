import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Input, ListItem, Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';

class Detail extends Component {
  state = {
    list: [],
    data: [],
    text: '',
    clickedProv: [],
    visible: false,
  };

  componentDidMount() {
    Axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi').then(
      res => {
        this.setState({
          list: res.data.data,
          data: res.data.data,
        });
      },
    );
  }

  _onChange(data) {
    console.log(data.nativeEvent.text);
    let dataByProv = [...this.state.list];
    dataByProv = [];
    this.state.list
      .filter(cond => cond.provinsi.includes(data.nativeEvent.text))
      .map(elem => {
        console.log(elem);
        dataByProv.push(elem);
        this.setState({
          text: data.nativeEvent.text,
          data: dataByProv,
        });
      });
  }

  toggleOverlay(prov) {
    if (prov) {
      console.log(prov);
      this.state.list
        .filter(cond => cond.provinsi.includes(prov))
        .map(elem => {
          console.log(elem);
          this.setState({
            clickedProv: elem,
          });
        });
    }
    let tof = this.state.visible;
    this.setState({visible: !tof});
  }

  render() {
    return (
      <ScrollView>
        <Overlay
          isVisible={this.state.visible}
          overlayStyle={styles.overlayStyle}
          onBackdropPress={() => this.toggleOverlay()}>
          <View>
            <Text style={{marginBottom: 20, fontSize: 30, fontWeight: 'bold'}}>
              {this.state.clickedProv.provinsi}
            </Text>
            <Text>Kasus Sembuh: {this.state.clickedProv.kasusSemb}</Text>
            <Text>Kasus Meninggal: {this.state.clickedProv.kasusMeni}</Text>
            <Text>Kasus Positif: {this.state.clickedProv.kasusPosi}</Text>
          </View>
        </Overlay>

        <View style={{flex: 1, margin: 20}}>
          <Input
            label="Search Berdasarkan Provinsi"
            labelStyle={{color: 'green'}}
            placeholder="Search Berdasarkan Provinsi"
            leftIcon={{type: 'font-awesome', name: 'search'}}
            onEndEditing={e => this._onChange(e)}
          />

          <View>
            {this.state.data.map(l => (
              <ListItem
                key={l.provinsi}
                rightIcon={{type: 'font-awesome', name: 'chevron-right'}}
                title={l.provinsi}
                bottomDivider
                onPress={() => this.toggleOverlay(l.provinsi)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  overlayStyle: {
    padding: 30,
  },
});
export default Detail;
