import React from 'react';

import PieChart from 'react-native-pie-chart';

import {Container} from './styles';

const EntrySummaryGraph = ({data}) => {
  const series = data.map(item => item.amount);
  const sliceColor = data.map(item => item.category.color);

  return (
    <Container>
      {data[0] && (
        <PieChart
          widthAndHeight={130}
          series={series}
          sliceColor={sliceColor}
          doughnut={true}
          coverRadius={0.75}
          coverFill={'#34495e'}
        />
      )}
    </Container>
  );
};

export default EntrySummaryGraph;
