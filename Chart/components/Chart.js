import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
const { width } = Dimensions.get("window");
const Chart = (props) => {
  return (
    <View>
      <LineChart
        withVerticalLabels={false}
        withHorizontalLabels={false}
        data={{
        //   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={props.width} // from react-native
        height={150}
        // yAxisLabel="$"
        // yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#FAFAFA',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: 'rgba(255,255,255,0.8)',
          decimalPlaces: 3, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(76, 159, 135, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '0',
            strokeWidth: '4',
            stroke: 'transparent',
          },
        }}
        bezier
        style={{
          marginVertical: 20,
          borderRadius: 0,
        }}
      />
    </View>
  );
};

export default Chart;
