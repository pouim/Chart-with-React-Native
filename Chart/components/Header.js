import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Chart from './Chart';
import Graph from '../Rainbow/Graph';
const {width} = Dimensions.get('window');
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
      
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          jsutiftyContent: 'center',
        }}>
        <Text style={[styles.price, {fontSize: 10, marginRight: 5}]}>
          تومان
        </Text>
        <Text style={styles.price}>‌۱،۸۷۰،۰۰۰ </Text>
      </View>
      <View style={styles.priceDetail}>
        <Text style={styles.priceDetailPrice}>‏ کاهش نسبت به روز قبل</Text>
        <Text style={[styles.priceDetailPrice, {color: '#D44D42'}]}>۳۳%</Text>
        <Image
          style={{height: 12, width: 12}}
          source={require('../assets/images/swap_horiz-24px.png')}
        />
      </View>

      <Graph />

      <View style={styles.infoBox}>
        <View style={styles.infoCard}>
          <Text
            style={{
              textAlign: 'center',
              color: '#666666',
              fontSize: 16,
              fontFamily: 'IRANSans(FaNum)',
            }}>
            ۲،۲۵۰،۰۰۰
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: '#666666',
              fontSize: 10,
              fontFamily: 'IRANSans(FaNum)',
            }}>
            تومان واریز
          </Text>
        </View>
        <View style={styles.infoCard}>
          <Text
            style={{
              textAlign: 'center',
              color: '#666666',
              fontSize: 16,
              fontFamily: 'IRANSans(FaNum)',
            }}>
            ۵۶
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: '#666666',
              fontSize: 10,
              fontFamily: 'IRANSans(FaNum)',
            }}>
            تراکنش
          </Text>
        </View>
      </View>

      <View style={{width: width / 1.2}}>

        <TouchableOpacity style={styles.button}>
           <Icon name="arrow-left" color="#FFFFFF" size={12} style={{position: 'absolute', left: 15}} />
           <Text style={styles.buttonText}>مشاهده تراکنش‌های درگاه</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
  },
  price: {
    color: '#333333',
    fontFamily: 'IRANSans(FaNum)',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: -50,
  },
  priceDetail: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopRightRadius: 0,
    borderRadius: 15,
    backgroundColor: '#A14E691A',
  },
  priceDetailPrice: {
    color: '#333333',
    fontFamily: 'IRANSans(FaNum)',
    fontSize: 10,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
    width,
    backgroundColor: '#FAFAFA',
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 4,
    paddingVertical: (width / 2) * 0.1,
    paddingHorizontal: (width / 2) * 0.32,
    shadowColor: '#0000000D',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 6,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4C9F87',
    height: 48,
    maxHeight: 48,
    borderRadius: 4,
    shadowColor: '#0000000D',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 0,
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'IRANSans(FaNum)',
    fontSize: 12,

  },
});

export default Header;
