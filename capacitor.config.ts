import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.FoodGuard',
  appName: 'FoodGuard',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
