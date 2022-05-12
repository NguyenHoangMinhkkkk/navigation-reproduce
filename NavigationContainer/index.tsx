import React from 'react';
import {
  NavigationContainer as NavigationContainerNative,
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
