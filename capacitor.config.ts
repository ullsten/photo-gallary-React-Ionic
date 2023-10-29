import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallary',
  webDir: 'dist',
  plugins: {
    LiveUpdates: {
      appId: 'c71adc50',
      channel: 'production',
      autoUpdateMethod: 'none',
      maxVersions: 2,
    }
  },
  
  server: {
    androidScheme: 'https'
  },
  
};

export default config;
