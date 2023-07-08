import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'carpool',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    url:"http://192.168.100.6:3000",
    cleartext: true,
    androidScheme: 'http'
  }
};

export default config;
