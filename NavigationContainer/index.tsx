import React from 'react';
import { StatusBar } from 'react-native';
import {
  InitialState,
  NavigationContainer as NavigationContainerNative,
  useNavigationContainerRef,
} from '@react-navigation/native';

import ModalGroup from './ModalGroup';
import ScreenGroup from './ScreenGroup';
import { NativeStack } from './StackBuilder';

export default function NavigationContainer() {
  
  return (
    <NavigationContainerNative>
      <NativeStack.Navigator>
        {ScreenGroup()}
        {ModalGroup()}
      </NativeStack.Navigator>
    </NavigationContainerNative>
  );
}
