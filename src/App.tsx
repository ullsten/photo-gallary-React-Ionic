import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, square, triangle, alert, calendar, home } from 'ionicons/icons';
import Tab1 from './pages/Home';
import Tab2 from './pages/Photos';
import Tab3 from './pages/Calender';
import Tab4 from './pages/About';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import './App.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import DarkModeToggle from './components/darkModeToggle';
/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (

<IonApp>
<div className='toggleStyle'><DarkModeToggle/></div>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Tab1 />
          </Route>
          <Route exact path="/photos">
            <Tab2 />
          </Route>
          <Route path="/calender">
            <Tab3 />
          </Route>
          <Route path="/about">
            <Tab4/>
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/photos">
            <IonIcon aria-hidden="true" icon={images} />
            <IonLabel>Photos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/calender">
            <IonIcon aria-hidden="true" icon={calendar} />
            <IonLabel>Calender</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/about">
            <IonIcon aria-hidden="true" icon={alert} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>

);

export default App;
