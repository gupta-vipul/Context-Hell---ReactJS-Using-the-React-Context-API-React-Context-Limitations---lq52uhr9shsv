// App.js
import React from 'react';

import MyComponent from '../components/MyComponent';
import { UserProvider } from '@/contexts/UserContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ConfigProvider } from '@/contexts/ConfigContext';

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          <ConfigProvider>
            <MyComponent />
          </ConfigProvider>
        </LanguageProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
