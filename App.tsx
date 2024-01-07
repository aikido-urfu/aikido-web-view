import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import WebView from 'react-native-webview';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <WebView source={{uri: 'http://venchass.ru:3004/'}} style={{flex: 1}} />;
    </SafeAreaView>
  );
}

export default App;
