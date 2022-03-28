import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Welcome',
    url: '/page/Welcome',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Download CV',
    url: '/page/CV',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Socials',
    url: '/page/Socials',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Leave a message',
    url: '/page/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Projects',
    url: '/page/Trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  
];

//const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="reveal" >
      
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Hello world!</IonListHeader>
          <IonNote>mzivkovic1996@gmail.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

       
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
