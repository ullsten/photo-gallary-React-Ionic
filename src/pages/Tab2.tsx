import { camera, trash, close, text } from 'ionicons/icons';
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

import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import React,{useState} from 'react';

const Tab2: React.FC = () => {
  const {photos, takePhoto, deletePhoto} = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

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
              <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath}></IonImg>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
      <IonFab vertical='bottom' horizontal='center' slot='fixed'>
        <IonFabButton onClick={() => takePhoto()}>
          <IonIcon icon={camera}></IonIcon>
        </IonFabButton>
      </IonFab>
      <IonActionSheet
      isOpen={!!photoToDelete}
      buttons={[
        {
          text: "Delete",
          role: "destructive",
          icon: trash,
          handler: () => {
            if (photoToDelete) {
              deletePhoto(photoToDelete);
              setPhotoToDelete(undefined);
            }
          },
        },
        {
          text: "Cancel",
          icon: close,
          role: "cancel",
        },
      ]}
      onDidDismiss={() => setPhotoToDelete(undefined)}
      ></IonActionSheet>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
