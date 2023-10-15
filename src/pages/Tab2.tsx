import { camera, trash, close } from 'ionicons/icons';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  const {photos, takePhoto} = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Photo Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 2 page" /> */}
        
        <IonGrid>
        <IonRow>
          {photos.map((photo, index) => (
            <IonCol size='6' key={photo.filepath}>
              <IonImg src={photo.webviewPath}></IonImg>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
      <IonFab vertical='bottom' horizontal='center' slot='fixed'>
        <IonFabButton onClick={() => takePhoto()}>
          <IonIcon icon={camera}></IonIcon>
        </IonFabButton>
      </IonFab>
      </IonContent>

     

    </IonPage>
  );
};

export default Tab2;
