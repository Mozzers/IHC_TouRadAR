var detalhes = "";
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
		/*this.tracker = new AR.ClientTracker("assets/test3.wtc", {
            onLoaded: this.worldLoaded
        });*/

        this.tracker = new AR.ClientTracker("assets/se-velha-main.wtc", {});

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

        /*
        var htmlDrawableClickMe = new AR.HtmlDrawable({uri:"clickme.html"}, 228/429, {
            offsetX : 0,
            offsetY : -0.5,
            viewportWidth : 228,
            viewportHeight : 200,
            horizontalAnchor : AR.CONST.HORIZONTAL_ANCHOR.CENTER,
            verticalAnchor : AR.CONST.VERTICAL_ANCHOR.BOTTOM,
            opacity : 0.9,
			zOrder: 5
        });*/

		/*
			The last line combines everything by creating an AR.Trackable2DObject with the previously created tracker, the name of the image target and the drawable that should augment the recognized image.
			Please note that in this case the target name is a wildcard. Wildcards can be used to respond to any target defined in the target collection. If you want to respond to a certain target only for a particular AR.Trackable2DObject simply provide the target name as specified in the target collection.
		*/
		this.imgButton = new AR.ImageResource("assets/wwwButton.png");
		var pageOneButton = this.createWwwButton(0.1, {
            translate: {
                x: -0.25,
                y: -0.25
            }
        });

		/*var pageOne = new AR.Trackable2DObject(this.tracker, "*", {
			drawables: {
				cam: [pageOneButton]
			},
            onEnterFieldOfVision: function() {
				console.log("Entered");
			}
        });*/

        //Dinis
        var d_dinis_detail2 = new AR.Trackable2DObject(this.tracker, "d_dinis_detail2", {
        			drawables: {
        				cam: [pageOneButton]
        			},
                    onEnterFieldOfVision: function() {
        				console.log("Entered");
        				detalhes = 'Nos anos 50, foi inaugurada a estátua do rei D. Dinis, fundador da Universidade de Coimbra. Este largo tem hoje o nome do rei que, em 1290, fundou em Lisboa os chamados Estudos Gerais que seriam depois transferidos para Coimbra.';
        			}
                });

        var d_dinis_detail1 = new AR.Trackable2DObject(this.tracker, "d_dinis_detail1", {
        			drawables: {
        				cam: [pageOneButton]
        			},
                    onEnterFieldOfVision: function() {
        				console.log("Entered");
        				detalhes = 'Dinis I, O Lavrador ou O Poeta (Lisboa, 9 de outubro de 1261 – Santarém, 7 de janeiro de 1325), foi Rei de Portugal e do Algarve de 1279 até sua morte. Era o  lho mais velho do rei Afonso III e sua segunda esposa Beatriz de Castela.';
        			}
                });

        var d_dinis_detail3 = new AR.Trackable2DObject(this.tracker, "d_dinis_detail3", {
                			drawables: {
                				cam: [pageOneButton]
                			},
                            onEnterFieldOfVision: function() {
                				console.log("Entered");
                				detalhes = 'A estatuária pública, durante a Ditadura, era encomendada pelo poder central e tinha que transmitir determinados valores, representando  guras históricas e fazendo a propaganda da autoridade e da tradição.';
                			}
                        });

        //Se velha
        var d_dinis_detail_se-velha-detail2 = new AR.Trackable2DObject(this.tracker, "d_dinis_detail_se-velha-detail2", {
                			drawables: {
                				cam: [pageOneButton]
                			},
                            onEnterFieldOfVision: function() {
                				console.log("Entered");
                				detalhes = '';//'O aspecto mais notável da decoração românica da Sé Velha é o grande número de capitéis esculpidos (cerca de 380), que a converte em um dos principais núcleos da escultura românica portuguesa.';
                			}
                        });

        /*var se-velha-detail3 = new AR.Trackable2DObject(this.tracker, "se-velha-detail3", {
                        			drawables: {
                        				cam: [pageOneButton]
                        			},
                                    onEnterFieldOfVision: function() {
                        				console.log("Entered");
                        				detalhes = 'Constitui um dos edifícios em estilo românico mais importantes do país. A sua construção começou em algum momento depois da Batalha de Ourique (1139), quando Afonso Henriques se declarou rei de Portugal e escolheu Coimbra como capital do reino.';
                        			}
                                });

        var se-velha-detail1 = new AR.Trackable2DObject(this.tracker, "se-velha-detail1", {
                                			drawables: {
                                				cam: [pageOneButton]
                                			},
                                            onEnterFieldOfVision: function() {
                                				console.log("Entered");
                                				detalhes = 'Em 1772, vários anos após a expulsão dos Jesuítas pelo Marquês de Pombal, a sede episcopal foi transferida por ele para a antiga Igreja Jesuíta (a Sé Nova de Coimbra).';
                                			}
                                        });

        //Se Nova
        var Senova_detail1 = new AR.Trackable2DObject(this.tracker, "Senova_detail1", {
                        			drawables: {
                        				cam: [pageOneButton]
                        			},
                                    onEnterFieldOfVision: function() {
                        				console.log("Entered");
                        				detalhes = 'Em 1759, os Jesuítas foram banidos de Portugal pelo Marquês de Pombal e, em 1772, a sede episcopal de Coimbra foi transferida da ilustre Catedral de Coimbra Igreja de Santa Maria denominada Sé Velha,para a Sé Nova.';
                        			}
                                });


        var Senova_detail2 = new AR.Trackable2DObject(this.tracker, "Senova_detail2", {
                                			drawables: {
                                				cam: [pageOneButton]
                                			},
                                            onEnterFieldOfVision: function() {
                                				console.log("Entered");
                                				detalhes = 'A parte superior da fachada, terminada só no século XVIII, tem decoração barroca e contrasta com as partes inferiores, em estilo maneirista.';
                                			}
                                        });

         //Porta ferrea
        var porta_ferrea_detail1 = new AR.Trackable2DObject(this.tracker, "porta_ferrea_detail1", {
                                			drawables: {
                                				cam: [pageOneButton]
                                			},
                                            onEnterFieldOfVision: function() {
                                				console.log("Entered");
                                				detalhes = 'A primeira grande obra da Universidade após a aquisição do Palácio Real ao Rei Filipe I, em 1597, e por ela totalmente  nanciada.';
                                			}
                                        });

        var porta_ferrea_detail2 = new AR.Trackable2DObject(this.tracker, "porta_ferrea_detail2", {
                                        			drawables: {
                                        				cam: [pageOneButton]
                                        			},
                                                    onEnterFieldOfVision: function() {
                                        				console.log("Entered");
                                        				detalhes = 'O escultor Manuel de Sousa foi responsável pelo projecto escultórico que o integra alegorias que se referem às diversas faculdades - Medicina e Leis no exterior; Teologia e Cânones no interior -, e estátuas dos reis que as estabeleceram, D. Dinis e D.João III, para além da  gura da Sapiência a coroar todo este conjunto.';
                                        			}
                                                });
        //Joanina
        var joanina_detail2 = new AR.Trackable2DObject(this.tracker, "joanina_detail2", {
                                                			drawables: {
                                                				cam: [pageOneButton]
                                                			},
                                                            onEnterFieldOfVision: function() {
                                                				console.log("Entered");
                                                				detalhes = 'A Joanina reúne cerca de 70 mil volumes, a maior parte dos quais no andar nobre. Aí se conservam os principais fundos de Livro Antigo (documentos até 1800) da Universidade. Os seus cerca de 1250 m2 úteis actuais foram obtidos com o arranjo de dois níveis de caves, para depósito e salas de trabalho.';
                                                			}
                                                        });

        var joanina_detail1 = new AR.Trackable2DObject(this.tracker, "joanina_detail1", {
                                                        			drawables: {
                                                        				cam: [pageOneButton]
                                                        			},
                                                                    onEnterFieldOfVision: function() {
                                                        				console.log("Entered");
                                                        				detalhes = 'Apresenta um estilo marcadamente barroco, sendo reconhecida com uma das mais originais e espectaculares bibliotecas barrocas europeias. A sua construção começou no ano de 1717, no exterior do perímetro islâmico, com o objectivo de albergar a biblioteca universitária de Coimbra, e foi concluída em 1728 .';
                                                        			}
                                                                });*/

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

	createWwwButton: function createWwwButtonFn(size, options) {

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

/*
function showNaruto() {
    document.location = 'architectsdk://action=showNaruto';
}*/

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
      		//$("#poi-detail-title").html('Estátua D.Dinis');
      		//$("#poi-detail-description").html('description');

      		/*
      		// It's ok for AR.Location subclass objects to return a distance of `undefined`. In case such a distance was calculated when all distances were queried in `updateDistanceToUserValues`, we recalculate this specific distance before we update the UI.
      		if( undefined == marker.distanceToUser ) {
      			marker.distanceToUser = marker.markerObject.locations[0].distanceToUser();
      		}

      		// distance and altitude are measured in meters by the SDK. You may convert them to miles / feet if required.
      		var distanceToUserValue = (marker.distanceToUser > 999) ? ((marker.distanceToUser / 1000).toFixed(2) + " km") : (Math.round(marker.distanceToUser) + " m");
      */

      		$("#poi-detail-distance").html(detalhes);

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
