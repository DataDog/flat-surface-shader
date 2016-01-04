/**
 * @class Material
 * @author Matthew Wagerfield
 */
FSS.Material = function(ambient, diffuse, fillOpacity, strokeOpacity, strokeWidth) {
  this.ambient = new FSS.Color(ambient || '#444444');
  this.diffuse = new FSS.Color(diffuse || '#FFFFFF');
  this.strokeOpacity = (strokeOpacity === undefined)? 1 : strokeOpacity;
  this.fillOpacity = (fillOpacity === undefined)? 1 : fillOpacity;
  this.strokeWidth = (strokeWidth === undefined)? 1 : strokeWidth;
  this.slave = new FSS.Color();
};
