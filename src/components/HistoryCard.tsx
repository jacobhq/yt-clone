import React from 'react';
import { IonThumbnail, IonItem, IonLabel, IonContent } from '@ionic/react';

interface Props {
  name: string;
}

export const HistoryCard: React.FC<Props> = ({ name }) => (
  <IonContent>
    <IonItem>
      <IonThumbnail slot="start">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="thumbnail" />
      </IonThumbnail>
      <IonLabel>{name}</IonLabel>
    </IonItem>
  </IonContent>
);

export default HistoryCard;
