import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import DialogContainer from '../components/DialogContainer';



const Tab1: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Modal */}
        <DialogContainer></DialogContainer>
        {/* <ExploreContainer name="Tab 1 page" /> */}
        <div className='table-container'>
        <table className='table-auto bg-sky-700 text-white'>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artis</th>
              <th>Year</th>
            </tr>
            </thead>
       
        <tbody>
          <tr>
            <td>The Sliding Mr.Bones</td>
            <td>Malcolm Lockyear</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
          </tr>
        </tbody>
        </table>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
