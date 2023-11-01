import React, {useState, useEffect} from 'react';
import { IonContent, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar, IonToggle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
import { warning } from 'ionicons/icons';
import DarkModeToggle from '../components/darkModeToggle';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='text-3xl font-bold underline'>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 4 page" /> */}
        <DarkModeToggle></DarkModeToggle>
        <IonText color="dark" className='text-2xl'>
              <h1>About</h1>
              <p>IonicReact test project styled with TailwindCSS</p>
        </IonText>

        <IonText color="warning">
          <IonIcon icon={warning}></IonIcon>
          
        </IonText>
      </IonContent>
    </IonPage>
   
  );
};

export default Tab1;
