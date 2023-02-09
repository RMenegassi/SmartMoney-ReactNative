import React from 'react';

import {Container} from './styles';

import PieChart from 'react-native-pie-chart';

const EntrySummaryGraph = ({dados}) => {
  const series = dados.map(item => item.amount);
  const sliceColor = dados.map(item => item.category.color);

  return (
    <Container>
      {dados[0] && (
        <PieChart
          widthAndHeight={130}
          series={series}
          sliceColor={sliceColor}
          doughnut={true}
          coverRadius={0.75}
          coverFill={'#34495e'}
        />
      )}
      {console.log('dados ::::::', dados[0])}
      {console.log('dados[0] existe ::::', dados[0] ? 'exite' : 'nao existe')}
    </Container>
  );
};

export default EntrySummaryGraph;
