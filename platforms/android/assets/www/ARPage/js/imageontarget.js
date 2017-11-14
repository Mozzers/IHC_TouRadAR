
var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {
		/*
			First an AR.ClientTracker needs to be created in order to start the recognition engine. It is initialized with a URL specific to the target collection. Optional parameters are passed as object in the last argument. In this case a callback function for the onLoaded trigger is set. Once the tracker is fully loaded the function worldLoaded() is called.

			Important: If you replace the tracker file with your own, make sure to change the target name accordingly.
			Use a specific target name to respond only to a certain target or use a wildcard to respond to any or a certain group of targets.
		*/
		this.tracker = new AR.ClientTracker("assets/test3.wtc", {
            onLoaded: this.worldLoaded
        });

		/*
			The next step is to create the augmentation.
			In this example an image resource is created and passed to the AR.ImageDrawable.
			A drawable is a visual component that can be connected to an IR target (AR.Trackable2DObject) or a
			geolocated object (AR.GeoObject). The AR.ImageDrawable is initialized by the image and its size.
			Optional parameters allow for position it relative to the recognized target.
		*/



		var phonegap_text = new AR.ImageResource("assets/phonegap.png");
		var overlayOne = new AR.ImageDrawable(phonegap_text, 1, {
			offsetX: 0,
			offsetY: -0.70
		});
        var label = new AR.Label("X", 1, {
        	offsetX:.5,
			offsetY:-.5
		});

        var htmlDrawableClickMe = new AR.HtmlDrawable({uri:"clickme.html"}, 228/429, {
            offsetX : 0,
            offsetY : -0.5,
            viewportWidth : 228,
            viewportHeight : 200,
            horizontalAnchor : AR.CONST.HORIZONTAL_ANCHOR.CENTER,
            verticalAnchor : AR.CONST.VERTICAL_ANCHOR.BOTTOM,
            opacity : 0.9,
			zOrder: 5
        });

		/*
			The last line combines everything by creating an AR.Trackable2DObject with the previously created tracker, the name of the image target and the drawable that should augment the recognized image.
			Please note that in this case the target name is a wildcard. Wildcards can be used to respond to any target defined in the target collection. If you want to respond to a certain target only for a particular AR.Trackable2DObject simply provide the target name as specified in the target collection.
		*/
		this.imgButton = new AR.ImageResource("assets/wwwButton.png");
		var pageOneButton = this.createWwwButton("www.google.com", 0.1, {
            translate: {
                x: -0.25,
                y: -0.25
            }
        });

		var pageOne = new AR.Trackable2DObject(this.tracker, "*", {
			drawables: {
				cam: [htmlDrawableClickMe,pageOneButton]
			},
            onEnterFieldOfVision: function() {
				console.log("Entered");
			}
        });


	},

	worldLoaded: function worldLoadedFn() {
		/*var message = " style='text-align: center; font-family:Arial, sans-serif;'";
		document.getElementById('loadingMessage').innerHTML =
			"<div" + message + ">Swipe right or use back button to exit.</div>";

		// Remove Scan target message after 10 sec.
		setTimeout(function() {
			var e = document.getElementById('loadingMessage');
			e.parentElement.removeChild(e);
		}, 10000);*/
	},

	createWwwButton: function createWwwButtonFn(url, size, options) {

            options.onClick = function() {
               // console.log("BLUE BUTTON CLICKING");
                onMarkerSelected();
            };
            return new AR.ImageDrawable(this.imgButton, size, options);
     }

};

function closeWikitudePlugin()
{
    console.log("CLOSING WIKITUDE PLUGIN");
    document.location = 'architectsdk://action=closeWikitudePlugin';
}

function showNaruto() {
    document.location = 'architectsdk://action=showNaruto';
}

/*
function ssss(){
    document.getElementById("testaralho").innerHTML = 'okay';
     document.getElementById("poi-detail-title").innerHTML = 'title here';
                                    		document.getElementById("poi-detail-description").innerHTML ='description here';



                                    		document.getElementById("poi-detail-distance").innerHTML= '99999 km';

                                    		// show panel
                                    		document.getElementById("poidetail").panel("open", 123);
                                    		}
*/

  function onMarkerSelected() {
    		//World.currentMarker = marker;

    		/*
    			In this sample a POI detail panel appears when pressing a cam-marker (the blue box with title & description),
    			compare index.html in the sample's directory.
    		*/
    		// update panel values
    		$("#poi-detail-title").html('title');
    		$("#poi-detail-description").html('description');

    		/*
    		// It's ok for AR.Location subclass objects to return a distance of `undefined`. In case such a distance was calculated when all distances were queried in `updateDistanceToUserValues`, we recalculate this specific distance before we update the UI.
    		if( undefined == marker.distanceToUser ) {
    			marker.distanceToUser = marker.markerObject.locations[0].distanceToUser();
    		}

    		// distance and altitude are measured in meters by the SDK. You may convert them to miles / feet if required.
    		var distanceToUserValue = (marker.distanceToUser > 999) ? ((marker.distanceToUser / 1000).toFixed(2) + " km") : (Math.round(marker.distanceToUser) + " m");
    */

    		$("#poi-detail-distance").html('99999 km');

    		// show panel
    		$("#panel-poidetail").panel("open", 123);

    		$(".ui-panel-dismiss").unbind("mousedown");
    /*
    		// deselect AR-marker when user exits detail screen div.
    		$("#panel-poidetail").on("panelbeforeclose", function(event, ui) {
    			World.currentMarker.setDeselected(World.currentMarker);
    		});*/
    	}
World.init();
