import React, {useState, useEffect} from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonPage, 
  IonText, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
import { warning } from 'ionicons/icons';
import DarkModeToggle from '../components/darkModeToggle';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbarStyle' color=''>
         <div>
          <div><IonTitle className='text-3xl font-bold'>About</IonTitle></div>
          {/* <div><DarkModeToggle></DarkModeToggle></div> */}
         </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>
              <IonCard className='aboutCardStyle' color='medium'>
                <img alt='Silhouette of mountains' src='https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80&w=1769&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                <IonCardHeader>
                  <IonCardTitle>React/Ionic app by UllstenCode</IonCardTitle>
                  <IonCardSubtitle>
                    <p>Project is styled with TailwindCSS</p>
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <div className='text-'>
                  I will add and test futures now and then.
                  </div>
                </IonCardContent>
              </IonCard>
      </IonContent>
    </IonPage>
   
  );
};

export default Tab1;
