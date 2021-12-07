import { Component, ElementRef, ViewChild } from '@angular/core';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { LatLng } from '@capacitor-community/capacitor-googlemaps-native/dist/esm/types/common/latlng.interface';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('map') mapView:  ElementRef;

  constructor(private alertCtrl: AlertController) {}

  ionViewDiEnter(){
    this.createMap();
  }

  createMap() {

    const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;
    
    CapacitorGoogleMaps.create({
      width: Math.round(boundingRect.width),
      height: Math.round(boundingRect.height),
      x: Math.round(boundingRect.x),
      y: Math.round(boundingRect.y),
      //latitude?: number;
      //longitude?: number;
      zoom: 3,
      //liteMode?: boolean;
    });

    CapacitorGoogleMaps.addListener('onMapReady', async () => {
      CapacitorGoogleMaps.setMapType({
        type: 'normal'
      })
this.showCurrentPosition();
  })
}
showCurrentPosition(){
  Geolocation.requestPermissions().then(async permission =>{
    const coordinates = await Geolocation.getCurrentPosition();

    CapacitorGoogleMaps.addMarker({
      latitude: coordinates.coords.latitude,
      longitude: coordinates.coords.longitude,
      title: 'c moi bro',
    });

    CapacitorGoogleMaps.setCamera({
      latitude: coordinates.coords.latitude,
      longitude: coordinates.coords.longitude,
      zoom: 12,
      bearing: 0
  });
});
}

draw(){
  const points: LatLng[] = [
    {
    latitude: 51.88,
    longitude: 7.60,
  },
  {
    latitude: 55,
    longitude: 10,
  }
  ];

  CapacitorGoogleMaps.addPolyline({
    points,
    color: '#ff00ff',
    width: 2

  });
}
}
