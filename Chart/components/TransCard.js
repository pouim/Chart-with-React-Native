import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const TransCard = (props) => {
  const Colors =
    props.State === 0
      ? 'rgba(76,159,135, 0.2)'
      : props.State === 1
      ? 'rgba(212,77,66,0.3)'
      : props.State === 2
      ? 'rgba(249,211,88,0.5)'
      : props.State === 3
      ? 'rgba(187,187,187,0.5)'
      : '';

  const TransStateTitle =
    props.mode === 0 && props.State === 0
      ? 'تراکنش موفق'
      : props.mode === 0 && props.State === 1
      ? 'تراکنش ناموفق'
      : props.mode === 1 && props.State === 0
      ? 'تسویه موفق'
      : props.mode === 1 && props.State === 2
      ? 'در حال تسویه'
      : props.mode === 1 && props.State === 3
      ? 'تسویه لغو شده'
      : '';
   const KarmozTitle =
     props.mode === 0 && props.State === 0
       ? 'کارمزد 700 تومان'
       : props.mode === 0 && props.State === 1
       ? 'خطای بانک صادرکننده'
       : ''; 
  return (
    <View style={styles.transBox}>
      <View style={styles.transBoxInfo}>
        <View style={styles.transBoxMainInfo}>
          <View style={[styles.priceContainer, {backgroundColor: Colors}]}>
            <Text style={styles.mainInfoText}>‏{props.price}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.mainInfoText}>
               {TransStateTitle}
            </Text>
            <Image
              style={{height: 20, width: 20, marginLeft: 20}}
              source={
                props.mode === 0
                  ? require('../assets/images/Ascending-pack.png')
                  : require('../assets/images/Decending-pack_1.png')
              }
            />
          </View>
        </View>

        <View style={styles.transBoxSubInfo}>
          <Text style={styles.subInfoText}>مانده: {props.mande} تومان</Text>
          <Text style={styles.subInfoText}>|</Text>
          <Text style={styles.subInfoText}>{KarmozTitle}</Text>
          <Text style={styles.subInfoText}>|</Text>
          <Text style={styles.subInfoText}>{props.time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transBox: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 25,
    borderRadius: 4,
    shadowColor: '#0000001A',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 8,
    marginVertical: 5,
    marginHorizontal: 1,
  },
  transBoxMainInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transBoxSubInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  mainInfoText: {
    color: '#333333',
    fontFamily: 'IRANSans(FaNum)',
    fontWeight: 'bold',
    fontSize: 12,
  },
  subInfoText: {
    color: '#666666',
    fontSize: 10,
    fontFamily: 'IRANSans(FaNum)',
    marginTop: 10,
    marginHorizontal: 5,
  },
  priceContainer: {
    paddingVertical: 6,
    paddingHorizontal: 9,
    borderTopLeftRadius: 0,
    borderRadius: 8,
  },
});

export default TransCard;
