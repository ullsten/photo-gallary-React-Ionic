import React, { useEffect, useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRange,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import type { ToggleCustomEvent } from '@ionic/react';
import { personCircle, personCircleOutline, sunny, sunnyOutline } from 'ionicons/icons';

import '../theme/variables.css';

function Example() {
  const [themeToggle, setThemeToggle] = useState(false);

  // Listen for the toggle check/uncheck to toggle the dark theme
  const toggleChange = (ev: ToggleCustomEvent) => {
    toggleDarkTheme(ev.detail.checked);
  };

  // Add or remove the "dark" class on the document body
  const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle('dark', shouldAdd);
  };

  // Check/uncheck the toggle and update the theme based on isDark
  const initializeDarkTheme = (isDark: boolean) => {
    setThemeToggle(isDark);
    toggleDarkTheme(isDark);
  };

  useEffect(() => {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark theme based on the initial
    // value of the prefers-color-scheme media query
    initializeDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => initializeDarkTheme(mediaQuery.matches));
  }, []);

  return (
    <>
            <IonToggle checked={themeToggle} onIonChange={toggleChange} justify=''>
              Dark Mode
            </IonToggle>
    </>
  );
}
export default Example;