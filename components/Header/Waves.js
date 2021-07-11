import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';


export default function WavyHeader({ customStyles }) {
  return (
    <View style={customStyles}>
      <View style={{ backgroundColor: '#a2d9ff', height: 300 }}>
        <Svg
          height="90%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', top: 200 }}
        >
          <Path
            fill="#a2d9ff" fill-opacity="1" d="M0,96L24,122.7C48,149,96,203,144,208C192,213,240,171,288,138.7C336,107,384,85,432,96C480,107,528,149,576,186.7C624,224,672,256,720,277.3C768,299,816,309,864,282.7C912,256,960,192,1008,154.7C1056,117,1104,107,1152,128C1200,149,1248,203,1296,208C1344,213,1392,171,1416,149.3L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          />
        </Svg>

         <Svg
           height="100%"
           width="100%"
           viewBox="0 0 1440 320"
           style={{ position: 'absolute', top: 700 }}
         >
          <Path
          fill="#a2d9ff" fill-opacity="1" d="M0,256L24,240C48,224,96,192,144,186.7C192,181,240,203,288,208C336,213,384,203,432,170.7C480,139,528,85,576,101.3C624,117,672,203,720,224C768,245,816,203,864,197.3C912,192,960,224,1008,229.3C1056,235,1104,213,1152,213.3C1200,213,1248,235,1296,224C1344,213,1392,171,1416,149.3L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        />
        </Svg>
      </View>
    </View>
  );
}