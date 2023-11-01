import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import DialogContainer from '../components/DialogContainer';



const Tab1: React.FC = () => {
  
  return (
    <IonPage className=''>
      <IonHeader>
        <IonToolbar>
          <IonTitle>UllstenCode</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='contentContainer'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonText>
          <div className='homeStyle'>
          <h1>UllstenCode</h1>
          </div>

        </IonText>
        {/* Modal */}
        {/* <DialogContainer></DialogContainer> */}
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
