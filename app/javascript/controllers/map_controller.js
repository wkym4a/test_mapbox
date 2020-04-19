import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "map" ]

  initialize() {//←①

    mapboxgl.accessToken = 'pk.eyJ1Ijoid2t5bTRhIiwiYSI6ImNrOTc0YnZpZzEwOXkzZW8xZjhrc3VxMTgifQ.FSjecqZ_pzwIEgPzBfsuoQ';

    var map = new mapboxgl.Map({
        container: this.mapTarget.id ,
        style: 'mapbox://styles/mapbox/streets-v11'
    });

//        this.map = new Y.Map(this.mapTarget.id);//←②
//        this.map.drawMap(new Y.LatLng(35.66572, 139.73100), 17, Y.LayerSetId.NORMAL);//←③
//
// 　　　　//↓④
//        var center = new Y.CenterMarkControl
//        var control = new Y.LayerSetControl();
//        this.map.addControl(center);
//        this.map.addControl(control);

  }
}
