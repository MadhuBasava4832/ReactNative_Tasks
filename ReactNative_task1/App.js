import { StatusBar } from 'expo-status-bar';
import { View ,Image} from 'react-native';
import Cards from './Task_1/cards';
import Thub2blocks from './tasks_2/thubfv';
import Changing from './task_3/navigations_hooks';

export default function App() {
  return (
    <View>
      {/* <Cards/>  */}
      
      <Thub2blocks />
      {/* <Changing /> */}

    </View>
  );
}


