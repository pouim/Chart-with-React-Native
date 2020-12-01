import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Animate from 'react-native-animatable';

const {width} = Dimensions.get('window');

const ToolBar = (props) => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  
  const onSearchPressed = () => {
    setIsSearch(true);
  };

  const onSearchCleared = () => {
    setIsSearch(false);
    setSearchValue('');
  };

  const onSearchTextChanged = (searchValue) => {
    setSearchValue(searchValue);
  };

  const onSearchClearPressed = () => {
    setSearchValue('');
  };
  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

  return (
    <View
      style={[styles.iconsContainer, isSearch && {backgroundColor: '#FFFFFF'}]}>
      {!isSearch ? (
        <>
          <TouchableOpacity onPress={onSearchPressed}>
            <Image
              style={{height: 24, width: 24}}
              source={require('../assets/images/search-24px_1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{height: 24, width: 24, marginLeft: 6}}
              source={require('../assets/images/filter_list-24px.png')}
            />
          </TouchableOpacity>
        </>
      ) : (
        <Input
          placeholder="جستجو"
          value={props.value}
          onChangeText={props.onSet}
          keyboardType = 'numeric'
          leftIcon={
            <TouchableOpacity onPress={onSearchCleared}>
              <Icon name="times-circle-o" size={20} color="#000000" />
            </TouchableOpacity>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //    alignItems: 'flex-start',
  },
  iconsContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    width,
    padding: 20,
    maxHeight: 56,
    backgroundColor: '#FAFAFA',
  },
});

export default ToolBar;
