import { Dimensions } from 'react-native';
export default {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  intervalTiem: 5000, // 20 segundos
  statusCode: {
    BAD_REQUEST: 400,
    CREATEDS: 201,
    OK: 200
  }
};
