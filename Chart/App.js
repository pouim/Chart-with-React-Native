import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import TransGroup from './components/TransGroup';
import TransCard from './components/TransCard';
import Header from './components/Header';
import Chart from './components/Chart';
import ToolBar from './components/ToolBar';
import {data} from './data';
const {width} = Dimensions.get('window');
import Graph from './Rainbow/Graph';


const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [myData, setMyData] = useState([]);
  const filteredData = !searchValue.length === 0 ?  myData.filter(item => (item.cartNum.indexOf(searchValue) > -1)) :  myData;

   useEffect(() => {
    setMyData(data);
   }, [])
  return (
    <View style={styles.container}>
      <Graph />
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  chartContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  transactionsContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 0,
  },
});

export default App;
