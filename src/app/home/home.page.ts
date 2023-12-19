/// <reference types="@types/googlemaps" />
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ViewChild, ElementRef } from '@angular/core';

// Define an interface for the marker object
interface Marker {
  title: string;
  latitude: string;
  longitude: string;
}

declare var google: any

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  map : any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef!: ElementRef;

  infoWindows: any = [];
  markers: Marker[] = [
    {
      title : "He & She Coffee",
      latitude: "1.5598124898471237",
      longitude: "103.63727107882293"
    },

    {
      title : "Lemon Tree",
      latitude: "1.5595872677690923",
      longitude: "103.63387272003385"
    },

    {
      title : "Kafe Al-Rafi",
      latitude: "1.5622802761620669",
      longitude: ", 103.62884281703184"
    }

  ];

  constructor() {}

  ionViewDidEnter(){
    this.showMap();
  }

  addMarkersToMap(markers: Marker[]){
    for (let marker of markers){
      let position = new google.maps.LatLng(marker.latitude,marker.longitude);
      let mapMarker = new google.maps.marker({
        position : position,
        title : marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker)
    }
  }

  addInfoWindowToMarker(marker: google.maps.Marker){
    let infoWindowContent = '<div id = "content">'
                            '<h2 id = "+firstHeading" class "firstHeading">' + marker.title+ '</h2>'+
                            '<p>Latitude: '+marker.latitude + '</p>'+
                            '<p>Longitude: '+marker.longitude + '</p>'+
                            '</div>';

    let infoWindow = new google.maps.infoWindow({
      content: infoWindowContent
    });
    
    marker.addListener('click',() => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows(){
    for (let window of this.infoWindows){
      window.close();
    }
  }

  showMap(){
    const location = new google.maps.LatLng(1.5424, 103.6314);
    const options = {
      center : location,
      zoom: 15,
      disableDefaultUI:true
    }
    this.map= new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }
}
