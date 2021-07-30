import * as React from 'react'
import { Svg, Path, G } from 'react-native-svg'
import { Colors } from '../res/Colors'

export function Arrow ({ percent_change_1h }) {
  return (
    <Svg
      viewBox='0 0 448.011 448.011'
      fill={percent_change_1h > 0 ? Colors.green : Colors.red}
      width={14}
    >
      <G rotation='90' origin='300, 150'>
        <Path d='M438.731 209.463l-416-192c-6.624-3.008-14.528-1.216-19.136 4.48a15.911 15.911 0 00-.384 19.648l136.8 182.4-136.8 182.4c-4.416 5.856-4.256 13.984.352 19.648 3.104 3.872 7.744 5.952 12.448 5.952 2.272 0 4.544-.48 6.688-1.472l416-192c5.696-2.624 9.312-8.288 9.312-14.528s-3.616-11.904-9.28-14.528z' />
      </G>
    </Svg>
  )
}
