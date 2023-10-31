import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton,IonSearchbar,IonToolbar,IonHeader,IonTitle,IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail, } from '@ionic/react';
import { getWeatherByCity } from '../services/weatherServices'; // Correct import path
import './WeatherPage.css'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpeg'
import p6 from '../assets/p6.jpg'
import p7 from '../assets/p7.jpg'
import './WeatherPage.css'
import logo from '../assets/logo.png'

const WeatherPage: React.FC = () => {
  const [city, setCity] = useState<string>(''); // Specify the type
  const [weatherData, setWeatherData] = useState<any>(null); // You can update the type as needed

  const fetchWeather = async () => {
    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
    } catch (error) {
      // Handle error cases
    }
  };

  return (
    <>
    <div className='page'>
      
      <IonContent className='ion-text-center'>
      <IonHeader >
      <IonToolbar color={'primary'} className='image'>
        <img src={logo} />
      </IonToolbar>
    </IonHeader>
    <IonSearchbar value={city} animated={true}
          placeholder="Search City"
          onIonChange={(e) => setCity(e.detail.value!)} className='ion-padding custom-searchbar' ></IonSearchbar>
        <IonButton onClick={fetchWeather}>Fetch Weather</IonButton>

        {weatherData && (
          <div className='temp-details'>
            <h2 className='title2'>{weatherData.name}, {weatherData.sys.country}</h2>
            <div className='temp'>
            <p className='title3'>{weatherData.main.temp}°C</p>
            <p className='title2'>{weatherData.weather[0].description}</p>
            </div>
          </div>
        )}
        <div className='city'>
          <h1>Visakhapatnam</h1>
        </div>
      </IonContent>
      <IonCard className='card' color={'primary'}>
      <IonCardHeader>
        <IonCardTitle className='title'>Popular Places to Visit</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img src={p1} />
            </IonThumbnail>
            <IonLabel>Taj Mahal, Agra</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img src={p2} />
            </IonThumbnail>
            <IonLabel>Jaipur, Rajasthan</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img src={p3} />
            </IonThumbnail>
            <IonLabel>Varanasi, Uttar Pradesh</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img src={p4} />
            </IonThumbnail>
            <IonLabel>Goa</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img src={p5} />
            </IonThumbnail>
            <IonLabel>Kerala</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img src={p6} />
            </IonThumbnail>
            <IonLabel>Delhi</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img src={p7} />
            </IonThumbnail>
            <IonLabel>Rishikesh and Haridwar, Uttarakhand</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
    </div>
    </>
  );
};

export default WeatherPage;
