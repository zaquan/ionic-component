import { ElementRef, Injectable } from '@angular/core';
import {
    CameraPosition,
    GoogleMap,
    GoogleMaps,
    GoogleMapsAnimation,
    GoogleMapsEvent,
    GoogleMapsMapTypeId,
    LatLng,
    MarkerOptions,
} from '@ionic-native/google-maps';

import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class NativeGoogleMapsProvider {
  map: GoogleMap;
  location:LatLng;

  constructor(
    public geolocation: Geolocation,
    private googleMaps: GoogleMaps) {
      this.location = new LatLng(51.51042486968929, -0.12084960687502644);
  }

  // Note: Call this method on ngAfterViewInit
  create(element: ElementRef) {
    
    const cameraPosition: CameraPosition<any> = {
      zoom  : 18,
      tilt  : 60,
      bearing: 140
    };

    const mapOptions = {
      mapType: GoogleMapsMapTypeId.NORMAL,
      styles: [
        {
          featureType: "all",
          stylers: [
            { saturation: -80 }
          ]
        },{
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            { hue: "#00ffee" },
            { saturation: 50 }
          ]
        },{
          featureType: "poi.business",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }        
      ],
      camera: cameraPosition,
      backgroundColor: 'white',
      controls: {
        compass: true,
        myLocationButton: true,
        indoorPicker: true,
        zoom: true
      },
      gestures: {
        scroll: true,
        tilt: true,
        rotate: true,
        zoom: true
      },
      preferences: {
        zoom: {
          minZoom: 15,
          maxZoom: 18
        },
        building: false
      }         
    };    

    this.map = this.googleMaps.create(element.nativeElement, mapOptions);
    //this.map = this.googleMaps.create(element.nativeElement, options);
    return this.map.one(GoogleMapsEvent.MAP_READY);
  }

  addMarkerNew() {
    this.map.addMarker({
      title: 'My Marker',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: this.location.lat,
        lng: this.location.lng
      }
    })
    .then(marker => {
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        alert('Marker Clicked');
      });
    });
  }   

  centerToGeolocation() {
    return this.getGeolocationPosition().then((position) => {
      return this.centerToPosition(position);
    }, error => {
      return Promise.reject(error);
    });
  }

  getGeolocationPosition() {
    return new Promise((resolve, reject) => {
      this.geolocation.getCurrentPosition().then((position) => {
        const latLng: LatLng = new LatLng(position.coords.latitude, position.coords.longitude);
        resolve(latLng);
      }, error => {
        reject(error);
      });
    });
  }

  centerToPosition(latLng: any, zoom?: number, tilt?: number) {
    const cameraPosition: CameraPosition<any> = {
      target: latLng,
      zoom  : zoom || 18,
      tilt  : tilt || 10
    };
    return this.map.moveCamera(cameraPosition);
  }

  addMarker(position, title: string, infoClickCallback, animated = true) {
    const markerOptions: MarkerOptions = {
      position,
      title,
      animation: animated ? GoogleMapsAnimation.BOUNCE : null,
      infoWindowAnchor: infoClickCallback
    };

    return this.map.addMarker(markerOptions);
  }

  addMarkerToGeolocation(title: string, infoClickCallback, animated?: boolean) {
    this.getGeolocationPosition().then(position => {
      this.addMarker(position, title, infoClickCallback, animated);
    });
  }
}
