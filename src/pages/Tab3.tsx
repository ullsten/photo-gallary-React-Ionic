import { IonContent, IonDatetime, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import '../theme/variables.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calender</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
       <div className='dateTimeStyle'>
       <IonDatetime color='warning' size='cover' showClearButton={true} showDefaultButtons={false} showDefaultTimeLabel={true}>
        <span slot='title'>UllstenCode</span>
       </IonDatetime>
       </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
