'use strict';

angular.module('mappifyApp')
  .controller('UiSettingsCtrl', function($scope, $modal) {
    
    /** marker settings */
    $scope.markerFilePath = null;
    
    $scope.markerSelected = function() {
      return $scope.markerFilePath !== null ? true : false;
    };
    
    $scope.open = function () {
      var modalInstance = $modal.open({
        fadeIn: false,
        templateUrl: 'views/markers.html',
        controller: MarkerModalCtrl
      });
      
      modalInstance.result.then(function (selectedPath) {
        $scope.markerFilePath = selectedPath;
      });
    };
    
    
    /** SPONATE query settings */
    $scope.sponateQuery =
      'SELECT * WHERE {\n' + 
        '    ?r rdfs:label ?label .\n' +
        '    ?r foaf:depiction ?d .\n' +
        '    ?r <http://www.w3.org/2003/01/geo/wgs84_pos#long> ?long .\n' +
        '    ?r <http://www.w3.org/2003/01/geo/wgs84_pos#lat> ?lat .}';
    $scope.updateQueryStatus = function(query) {
      $scope.sponateQuery = query;
    };
  });


var MarkerModalCtrl = function ($scope, $modalInstance) {
  $scope.markerPaths = markerPaths;
  $scope.selectedMarkerPath = {selected: null};
  $scope.ok = function () {
    $modalInstance.close($scope.selectedMarkerPath.selected);
  };
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};


var markerPaths = ['images/markers/2hand.png',
                   'images/markers/360degrees.png',
                   'images/markers/abduction.png',
                   'images/markers/aboriginal.png',
                   'images/markers/accesdenied.png',
                   'images/markers/acupuncture.png',
                   'images/markers/administration.png',
                   'images/markers/administrativeboundary.png',
                   'images/markers/aed-2.png',
                   'images/markers/agritourism.png',
                   'images/markers/air_fixwing.png',
                   'images/markers/aircraftcarrier.png',
                   'images/markers/aircraftsmall.png',
                   'images/markers/airport.png',
                   'images/markers/airport_apron.png',
                   'images/markers/airport_runway.png',
                   'images/markers/airport_terminal.png',
                   'images/markers/airshow-2.png',
                   'images/markers/algae.png',
                   'images/markers/alien.png',
                   'images/markers/alligator.png',
                   'images/markers/amphitheater-2.png',
                   'images/markers/amphitheater.png',
                   'images/markers/anchorpier.png',
                   'images/markers/anemometer_mono.png',
                   'images/markers/animal-shelter-export.png',
                   'images/markers/anniversary.png',
                   'images/markers/ant-export.png',
                   'images/markers/anthropo.png',
                   'images/markers/apartment-3.png',
                   'images/markers/apple.png',
                   'images/markers/aquarium.png',
                   'images/markers/arch.png',
                   'images/markers/archery.png',
                   'images/markers/army.png',
                   'images/markers/art-museum-2.png',
                   'images/markers/artgallery.png',
                   'images/markers/atm-2.png',
                   'images/markers/atv.png',
                   'images/markers/audio.png',
                   'images/markers/australianfootball.png',
                   'images/markers/avalanche1.png',
                   'images/markers/award.png',
                   'images/markers/badminton-2.png',
                   'images/markers/bags.png',
                   'images/markers/bank.png',
                   'images/markers/bar.png',
                   'images/markers/bar_coktail.png',
                   'images/markers/bar_juice.png',
                   'images/markers/barbecue.png',
                   'images/markers/barber.png',
                   'images/markers/barrier.png',
                   'images/markers/baseball.png',
                   'images/markers/basketball.png',
                   'images/markers/bats.png',
                   'images/markers/battlefield.png',
                   'images/markers/battleship-3.png',
                   'images/markers/beach.png',
                   'images/markers/beachvolleyball.png',
                   'images/markers/beautifulview.png',
                   'images/markers/beautysalon.png',
                   'images/markers/bed_breakfast1-2.png',
                   'images/markers/beergarden.png',
                   'images/markers/bicycle_shop.png',
                   'images/markers/bigcity.png',
                   'images/markers/bike_downhill.png',
                   'images/markers/bike_rising.png',
                   'images/markers/billiard-2.png',
                   'images/markers/binoculars.png',
                   'images/markers/birds-2.png',
                   'images/markers/blast.png',
                   'images/markers/boardercross.png',
                   'images/markers/boat.png',
                   'images/markers/boatcrane.png',
                   'images/markers/bobsleigh.png',
                   'images/markers/bollie.png',
                   'images/markers/bomb.png',
                   'images/markers/bomber-2.png',
                   'images/markers/bouddha.png',
                   'images/markers/bowling.png',
                   'images/markers/boxing.png',
                   'images/markers/bread.png',
                   'images/markers/brewery1.png',
                   'images/markers/bridge_modern.png',
                   'images/markers/bridge_old.png',
                   'images/markers/bulldozer.png',
                   'images/markers/bullfight.png',
                   'images/markers/bunker-2-2.png',
                   'images/markers/bus.png',
                   'images/markers/busstop.png',
                   'images/markers/bustour.png',
                   'images/markers/butcher-2.png',
                   'images/markers/butterfly-2.png',
                   'images/markers/cabin-2.png',
                   'images/markers/cablecar.png',
                   'images/markers/cafetaria.png',
                   'images/markers/calendar-3.png',
                   'images/markers/campfire-2.png',
                   'images/markers/camping-2.png',
                   'images/markers/candy.png',
                   'images/markers/canyon-2.png',
                   'images/markers/car.png',
                   'images/markers/caraccident.png',
                   'images/markers/carrental.png',
                   'images/markers/carwash.png',
                   'images/markers/casino-2.png',
                   'images/markers/castle-2.png',
                   'images/markers/cathedral.png',
                   'images/markers/catholicgrave.png',
                   'images/markers/caution.png',
                   'images/markers/cave-2.png',
                   'images/markers/cctv.png',
                   'images/markers/cemetary.png',
                   'images/markers/channelchange.png',
                   'images/markers/chapel-2.png',
                   'images/markers/chart-2.png',
                   'images/markers/cheese.png',
                   'images/markers/chemistry-2.png',
                   'images/markers/chicken-2.png',
                   'images/markers/childmuseum01.png',
                   'images/markers/chiropractor.png',
                   'images/markers/christmasmarket.png',
                   'images/markers/church-2.png',
                   'images/markers/cinema.png',
                   'images/markers/circus.png',
                   'images/markers/citysquare.png',
                   'images/markers/citywalls.png',
                   'images/markers/climbing.png',
                   'images/markers/clock.png',
                   'images/markers/closedroad.png',
                   'images/markers/clothers_female.png',
                   'images/markers/clothers_male.png',
                   'images/markers/cloudy.png',
                   'images/markers/cloudysunny.png',
                   'images/markers/coffee.png',
                   'images/markers/coins.png',
                   'images/markers/comedyclub.png',
                   'images/markers/comics.png',
                   'images/markers/comment-map-icon.png',
                   'images/markers/communitycentre.png',
                   'images/markers/company.png',
                   'images/markers/compost.png',
                   'images/markers/computers.png',
                   'images/markers/condominium.png',
                   'images/markers/conference.png',
                   'images/markers/congress.png',
                   'images/markers/construction.png',
                   'images/markers/constructioncrane.png',
                   'images/markers/contract.png',
                   'images/markers/conveniencestore.png',
                   'images/markers/convent-2.png',
                   'images/markers/conversation-map-icon.png',
                   'images/markers/convertible.png',
                   'images/markers/corral.png',
                   'images/markers/country.png',
                   'images/markers/court.png',
                   'images/markers/cow-export.png',
                   'images/markers/cowabduction.png',
                   'images/markers/craftstore.png',
                   'images/markers/cramschool.png',
                   'images/markers/cricket.png',
                   'images/markers/crimescene.png',
                   'images/markers/cromlech.png',
                   'images/markers/cropcircles.png',
                   'images/markers/cross-2.png',
                   'images/markers/crossingguard.png',
                   'images/markers/cruiseship.png',
                   'images/markers/cup.png',
                   'images/markers/curling-2.png',
                   'images/markers/currencyexchange.png',
                   'images/markers/customs.png',
                   'images/markers/cycling.png',
                   'images/markers/cycling_feed.png',
                   'images/markers/cycling_sprint.png',
                   'images/markers/dam.png',
                   'images/markers/dance_class.png',
                   'images/markers/dancinghall.png',
                   'images/markers/database.png',
                   'images/markers/daycare.png',
                   'images/markers/deepseafishing.png',
                   'images/markers/deer.png',
                   'images/markers/dentist.png',
                   'images/markers/departmentstore.png',
                   'images/markers/desert-2.png',
                   'images/markers/dinopark.png',
                   'images/markers/direction_down.png',
                   'images/markers/disability.png',
                   'images/markers/diving.png',
                   'images/markers/dogs_leash.png',
                   'images/markers/dolphins.png',
                   'images/markers/doublebendright.png',
                   'images/markers/downloadicon.png',
                   'images/markers/drinkingfountain.png',
                   'images/markers/drinkingwater.png',
                   'images/markers/drugstore.png',
                   'images/markers/duck-export.png',
                   'images/markers/earthquake-3.png',
                   'images/markers/eggs.png',
                   'images/markers/elephants.png',
                   'images/markers/elevator.png',
                   'images/markers/elevator_down.png',
                   'images/markers/elevator_up.png',
                   'images/markers/embassy.png',
                   'images/markers/entrance.png',
                   'images/markers/exchequer.png',
                   'images/markers/exit.png',
                   'images/markers/expert.png',
                   'images/markers/factory.png',
                   'images/markers/fallingrocks.png',
                   'images/markers/family.png',
                   'images/markers/farm-2.png',
                   'images/markers/farmstand.png',
                   'images/markers/fastfood.png',
                   'images/markers/female-2.png',
                   'images/markers/ferriswheel.png',
                   'images/markers/ferry.png',
                   'images/markers/festival.png',
                   'images/markers/fetalalcoholsyndrom.png',
                   'images/markers/field.png',
                   'images/markers/fillingstation.png',
                   'images/markers/findajob.png',
                   'images/markers/finish.png',
                   'images/markers/fire-hydrant-2.png',
                   'images/markers/fire.png',
                   'images/markers/fireexstinguisher.png',
                   'images/markers/firemen.png',
                   'images/markers/fireworks.png',
                   'images/markers/firstaid.png',
                   'images/markers/fishchips.png',
                   'images/markers/fishing.png',
                   'images/markers/fishingboat.png',
                   'images/markers/fishingstore.png',
                   'images/markers/fitness.png',
                   'images/markers/fjord-2.png',
                   'images/markers/flag-export.png',
                   'images/markers/flood.png',
                   'images/markers/flowers.png',
                   'images/markers/folder-2.png',
                   'images/markers/fooddeliveryservice.png',
                   'images/markers/foodtruck.png',
                   'images/markers/footprint.png',
                   'images/markers/ford-2.png',
                   'images/markers/forest.png',
                   'images/markers/forest2.png',
                   'images/markers/fossils.png',
                   'images/markers/foundry-2.png',
                   'images/markers/fountain-2.png',
                   'images/markers/fourbyfour.png',
                   'images/markers/freqchg.png',
                   'images/markers/frog-2.png',
                   'images/markers/fruits.png',
                   'images/markers/ft.png',
                   'images/markers/funicolar-22x22.png',
                   'images/markers/gas_cylinder1.png',
                   'images/markers/gay-female.png',
                   'images/markers/gay-male.png',
                   'images/markers/geocaching-3.png',
                   'images/markers/geothermal-site.png',
                   'images/markers/geyser-2.png',
                   'images/markers/ghosttown.png',
                   'images/markers/gifts.png',
                   'images/markers/glacier-2.png',
                   'images/markers/glasses.png',
                   'images/markers/golfing.png',
                   'images/markers/gondola-2.png',
                   'images/markers/gourmet_0star.png',
                   'images/markers/grass.png',
                   'images/markers/grocery.png',
                   'images/markers/group-2.png',
                   'images/markers/gumball_machine.png',
                   'images/markers/handball.png',
                   'images/markers/hanggliding.png',
                   'images/markers/harbor.png',
                   'images/markers/hare1.png',
                   'images/markers/hats.png',
                   'images/markers/haybale.png',
                   'images/markers/headstone-2.png',
                   'images/markers/helicopter.png',
                   'images/markers/highhills.png',
                   'images/markers/highschool.png',
                   'images/markers/highway.png',
                   'images/markers/hiking.png',
                   'images/markers/historical_museum.png',
                   'images/markers/historicalquarter.png',
                   'images/markers/hoergeraeteakustiker_22px.png',
                   'images/markers/home-2.png',
                   'images/markers/homecenter.png',
                   'images/markers/honeycomb.png',
                   'images/markers/hookah_final.png',
                   'images/markers/horseriding.png',
                   'images/markers/hospital-building.png',
                   'images/markers/hostel_0star.png',
                   'images/markers/hotairbaloon.png',
                   'images/markers/hotel_0star.png',
                   'images/markers/hotspring.png',
                   'images/markers/house.png',
                   'images/markers/hunting.png',
                   'images/markers/hut.png',
                   'images/markers/icecream.png',
                   'images/markers/icehockey.png',
                   'images/markers/iceskating.png',
                   'images/markers/icy_road.png',
                   'images/markers/indoor-arena.png',
                   'images/markers/information.png',
                   'images/markers/iobridge.png',
                   'images/markers/jacuzzi.png',
                   'images/markers/japanese-food.png',
                   'images/markers/japanese-lantern.png',
                   'images/markers/japanese-sake.png',
                   'images/markers/japanese-sweet-2.png',
                   'images/markers/japanese-temple.png',
                   'images/markers/jazzclub.png',
                   'images/markers/jeep.png',
                   'images/markers/jetfighter.png',
                   'images/markers/jewelry.png',
                   'images/markers/jewishgrave.png',
                   'images/markers/jewishquarter.png',
                   'images/markers/jogging.png',
                   'images/markers/judo.png',
                   'images/markers/junction.png',
                   'images/markers/karate.png',
                   'images/markers/karting.png',
                   'images/markers/kayak1.png',
                   'images/markers/kayaking.png',
                   'images/markers/kebab.png',
                   'images/markers/kingair.png',
                   'images/markers/kiosk.png',
                   'images/markers/kitesurfing.png',
                   'images/markers/laboratory.png',
                   'images/markers/lake.png',
                   'images/markers/landfill.png',
                   'images/markers/landmark.png',
                   'images/markers/laterne.png',
                   'images/markers/laundromat.png',
                   'images/markers/levelcrossing.png',
                   'images/markers/library.png',
                   'images/markers/lifeguard-2.png',
                   'images/markers/lighthouse-2.png',
                   'images/markers/linedown.png',
                   'images/markers/lingerie.png',
                   'images/markers/liquor.png',
                   'images/markers/lobster-export.png',
                   'images/markers/lock.png',
                   'images/markers/lockerrental.png',
                   'images/markers/lodging_0star.png',
                   'images/markers/love_date.png',
                   'images/markers/loveinterest.png',
                   'images/markers/magicshow.png',
                   'images/markers/mainroad.png',
                   'images/markers/male-2.png',
                   'images/markers/mall.png',
                   'images/markers/map.png',
                   'images/markers/mapicon.png',
                   'images/markers/marina-2.png',
                   'images/markers/markers.html',
                   'images/markers/market.png',
                   'images/markers/massage.png',
                   'images/markers/mastcrane1.png',
                   'images/markers/medicalstore.png',
                   'images/markers/medicine.png',
                   'images/markers/megalith.png',
                   'images/markers/memorial.png',
                   'images/markers/metronetwork.png',
                   'images/markers/military.png',
                   'images/markers/mine.png',
                   'images/markers/missile-2.png',
                   'images/markers/mobilephonetower.png',
                   'images/markers/modernmonument.png',
                   'images/markers/moderntower.png',
                   'images/markers/monkey-export.png',
                   'images/markers/monument-historique-icon-white-22x22.png',
                   'images/markers/monument.png',
                   'images/markers/moonstar.png',
                   'images/markers/mosquee.png',
                   'images/markers/mosquito-2.png',
                   'images/markers/motel-2.png',
                   'images/markers/motorbike.png',
                   'images/markers/motorcycle.png',
                   'images/markers/mountain-pass-locator-diagonal-reverse-export.png',
                   'images/markers/mountainbiking-3.png',
                   'images/markers/mountains.png',
                   'images/markers/movierental.png',
                   'images/markers/moving-walkway-enter-export.png',
                   'images/markers/muffin_bagle.png',
                   'images/markers/mural.png',
                   'images/markers/museum_archeological.png',
                   'images/markers/museum_art.png',
                   'images/markers/museum_crafts.png',
                   'images/markers/museum_industry.png',
                   'images/markers/museum_naval.png',
                   'images/markers/museum_openair.png',
                   'images/markers/museum_science.png',
                   'images/markers/museum_war.png',
                   'images/markers/mushroom.png',
                   'images/markers/music.png',
                   'images/markers/music_choral.png',
                   'images/markers/music_classical.png',
                   'images/markers/music_hiphop.png',
                   'images/markers/music_live.png',
                   'images/markers/music_rock.png',
                   'images/markers/nanny.png',
                   'images/markers/ne_barn-2.png',
                   'images/markers/newsagent.png',
                   'images/markers/no-nuke-export.png',
                   'images/markers/nordicski.png',
                   'images/markers/notvisited.png',
                   'images/markers/nursery.png',
                   'images/markers/nursing_home_icon.png',
                   'images/markers/observatory.png',
                   'images/markers/office-building.png',
                   'images/markers/oil-2.png',
                   'images/markers/oilpumpjack.png',
                   'images/markers/oilrig2.png',
                   'images/markers/olympicsite.png',
                   'images/markers/ophthalmologist.png',
                   'images/markers/outlet2.png',
                   'images/markers/oyster-3.png',
                   'images/markers/pagoda-2.png',
                   'images/markers/paint.png',
                   'images/markers/paintball.png',
                   'images/markers/palace-2.png',
                   'images/markers/palm-tree-export.png',
                   'images/markers/panoramicview.png',
                   'images/markers/paragliding.png',
                   'images/markers/parasailing.png',
                   'images/markers/parkandride.png',
                   'images/markers/parking-meter-export.png',
                   'images/markers/parkinggarage.png',
                   'images/markers/party-2.png',
                   'images/markers/patisserie.png',
                   'images/markers/peace.png',
                   'images/markers/pedestriancrossing.png',
                   'images/markers/penguin-2.png',
                   'images/markers/pens.png',
                   'images/markers/perfumery.png',
                   'images/markers/petanque.png',
                   'images/markers/petroglyphs-2.png',
                   'images/markers/pets.png',
                   'images/markers/phantom.png',
                   'images/markers/phones.png',
                   'images/markers/photo.png',
                   'images/markers/photography.png',
                   'images/markers/picnic-2.png',
                   'images/markers/pig.png',
                   'images/markers/pin-export.png',
                   'images/markers/pirates.png',
                   'images/markers/pizzaria.png',
                   'images/markers/planecrash.png',
                   'images/markers/planetarium-2.png',
                   'images/markers/playground.png',
                   'images/markers/pleasurepier.png',
                   'images/markers/poker.png',
                   'images/markers/police.png',
                   'images/markers/postal.png',
                   'images/markers/powerlinepole.png',
                   'images/markers/poweroutage.png',
                   'images/markers/powerplant.png',
                   'images/markers/powersubstation.png',
                   'images/markers/prayer.png',
                   'images/markers/presentation.png',
                   'images/markers/price-tag-export.png',
                   'images/markers/printer-2.png',
                   'images/markers/prison.png',
                   'images/markers/publicart.png',
                   'images/markers/pyramid.png',
                   'images/markers/quadrifoglio.png',
                   'images/markers/radar.png',
                   'images/markers/radiation.png',
                   'images/markers/radio-control-model-car.png',
                   'images/markers/radio-station-2.png',
                   'images/markers/rainy.png',
                   'images/markers/rape.png',
                   'images/markers/reatorlogowhite-22x22.png',
                   'images/markers/recycle.png',
                   'images/markers/regroup.png',
                   'images/markers/repair.png',
                   'images/markers/rescue-2.png',
                   'images/markers/resort.png',
                   'images/markers/restaurant.png',
                   'images/markers/restaurant_african.png',
                   'images/markers/restaurant_breakfast.png',
                   'images/markers/restaurant_buffet.png',
                   'images/markers/restaurant_chinese.png',
                   'images/markers/restaurant_fish.png',
                   'images/markers/restaurant_greek.png',
                   'images/markers/restaurant_indian.png',
                   'images/markers/restaurant_italian.png',
                   'images/markers/restaurant_korean.png',
                   'images/markers/restaurant_mediterranean.png',
                   'images/markers/restaurant_mexican.png',
                   'images/markers/restaurant_romantic.png',
                   'images/markers/restaurant_steakhouse.png',
                   'images/markers/restaurant_tapas.png',
                   'images/markers/restaurant_thai.png',
                   'images/markers/restaurant_turkish.png',
                   'images/markers/restaurant_vegetarian.png',
                   'images/markers/revolt.png',
                   'images/markers/riparianhabitat.png',
                   'images/markers/river-2.png',
                   'images/markers/road.png',
                   'images/markers/roadtype_gravel.png',
                   'images/markers/rockhouse.png',
                   'images/markers/rodent.png',
                   'images/markers/rollerskate.png',
                   'images/markers/ropescourse.png',
                   'images/markers/rowboat.png',
                   'images/markers/rugbyfield.png',
                   'images/markers/ruins-2.png',
                   'images/markers/sailing.png',
                   'images/markers/sandwich-2.png',
                   'images/markers/sauna.png',
                   'images/markers/sawmill-2.png',
                   'images/markers/school.png',
                   'images/markers/schreibwaren_web.png',
                   'images/markers/scoutgroup.png',
                   'images/markers/scubadiving.png',
                   'images/markers/seals.png',
                   'images/markers/segway.png',
                   'images/markers/seniorsite.png',
                   'images/markers/septic_tank.png',
                   'images/markers/share.png',
                   'images/markers/shark-export.png',
                   'images/markers/shintoshrine.png',
                   'images/markers/shipwreck.png',
                   'images/markers/shoes.png',
                   'images/markers/shooting.png',
                   'images/markers/shootingrange.png',
                   'images/markers/shore-2.png',
                   'images/markers/shower.png',
                   'images/markers/sight-2.png',
                   'images/markers/signpost-2.png',
                   'images/markers/sikh.png',
                   'images/markers/ski_shoe1.png',
                   'images/markers/skiing.png',
                   'images/markers/skijump.png',
                   'images/markers/skilifting.png',
                   'images/markers/skis.png',
                   'images/markers/skull.png',
                   'images/markers/sledge.png',
                   'images/markers/sledge_summer.png',
                   'images/markers/sledgerental.png',
                   'images/markers/slipway.png',
                   'images/markers/smallcity.png',
                   'images/markers/smiley_happy.png',
                   'images/markers/smoking.png',
                   'images/markers/snail.png',
                   'images/markers/snakes.png',
                   'images/markers/sneakers.png',
                   'images/markers/snorkeling.png',
                   'images/markers/snowboarding.png',
                   'images/markers/snowmobiling.png',
                   'images/markers/snowpark_arc.png',
                   'images/markers/snowshoeing.png',
                   'images/markers/snowy-2.png',
                   'images/markers/soccer.png',
                   'images/markers/solarenergy.png',
                   'images/markers/sozialeeinrichtung.png',
                   'images/markers/spa.png',
                   'images/markers/spaceport-2.png',
                   'images/markers/speed_50.png',
                   'images/markers/speedhump.png',
                   'images/markers/speedriding.png',
                   'images/markers/spelunking.png',
                   'images/markers/spider.png',
                   'images/markers/splice.png',
                   'images/markers/sportscar.png',
                   'images/markers/sportutilityvehicle.png',
                   'images/markers/square-compass.png',
                   'images/markers/squash-2.png',
                   'images/markers/stadium.png',
                   'images/markers/stairs.png',
                   'images/markers/star-3.png',
                   'images/markers/stargate-raw.png',
                   'images/markers/start-race-2.png',
                   'images/markers/statue-2.png',
                   'images/markers/steamtrain.png',
                   'images/markers/stop.png',
                   'images/markers/strike.png',
                   'images/markers/stripclub2.png',
                   'images/markers/submarine-2.png',
                   'images/markers/sugar-shack.png',
                   'images/markers/summercamp.png',
                   'images/markers/sumo-2.png',
                   'images/markers/sunny.png',
                   'images/markers/sunsetland.png',
                   'images/markers/supermarket.png',
                   'images/markers/surfacelift.png',
                   'images/markers/surfing.png',
                   'images/markers/surfpaddle.png',
                   'images/markers/surveying-2.png',
                   'images/markers/swimming.png',
                   'images/markers/synagogue-2.png',
                   'images/markers/taekwondo-2.png',
                   'images/markers/tailor.png',
                   'images/markers/takeaway.png',
                   'images/markers/targ.png',
                   'images/markers/taxi.png',
                   'images/markers/taxiboat.png',
                   'images/markers/taxiway.png',
                   'images/markers/teahouse.png',
                   'images/markers/tebletennis.png',
                   'images/markers/telephone.png',
                   'images/markers/temple-2.png',
                   'images/markers/templehindu.png',
                   'images/markers/tennis.png',
                   'images/markers/terrace.png',
                   'images/markers/text.png',
                   'images/markers/textiles.png',
                   'images/markers/theater.png',
                   'images/markers/theft.png',
                   'images/markers/themepark.png',
                   'images/markers/therapy.png',
                   'images/markers/theravadapagoda.png',
                   'images/markers/theravadatemple.png',
                   'images/markers/thunderstorm.png',
                   'images/markers/ticket_office2.png',
                   'images/markers/tidaldiamond.png',
                   'images/markers/tiger-2.png',
                   'images/markers/tires.png',
                   'images/markers/toilets.png',
                   'images/markers/tollstation.png',
                   'images/markers/tools.png',
                   'images/markers/tornado-2.png',
                   'images/markers/torture.png',
                   'images/markers/tower.png',
                   'images/markers/townhouse.png',
                   'images/markers/toys.png',
                   'images/markers/trafficcamera.png',
                   'images/markers/trafficlight.png',
                   'images/markers/train.png',
                   'images/markers/tramway.png',
                   'images/markers/trash.png',
                   'images/markers/travel_agency.png',
                   'images/markers/treasure-mark.png',
                   'images/markers/treedown.png',
                   'images/markers/triskelion.png',
                   'images/markers/trolley.png',
                   'images/markers/truck3.png',
                   'images/markers/tsunami.png',
                   'images/markers/tunnel.png',
                   'images/markers/turtle-2.png',
                   'images/markers/tweet.png',
                   'images/markers/u-pick_stand.png',
                   'images/markers/ufo.png',
                   'images/markers/umbrella-2.png',
                   'images/markers/underground.png',
                   'images/markers/university.png',
                   'images/markers/usfootball.png',
                   'images/markers/van.png',
                   'images/markers/vespa.png',
                   'images/markers/veterinary.png',
                   'images/markers/video.png',
                   'images/markers/videogames.png',
                   'images/markers/villa.png',
                   'images/markers/vineyard-2.png',
                   'images/markers/volcano-2.png',
                   'images/markers/volleyball.png',
                   'images/markers/waiting.png',
                   'images/markers/walkingtour.png',
                   'images/markers/war.png',
                   'images/markers/warehouse-2.png',
                   'images/markers/water.png',
                   'images/markers/watercraft.png',
                   'images/markers/waterfall-2.png',
                   'images/markers/watermill-2.png',
                   'images/markers/waterpark.png',
                   'images/markers/waterskiing.png',
                   'images/markers/watertower.png',
                   'images/markers/waterwell.png',
                   'images/markers/waterwellpump.png',
                   'images/markers/webcam.png',
                   'images/markers/wedding.png',
                   'images/markers/weights.png',
                   'images/markers/wetlands.png',
                   'images/markers/whale-2.png',
                   'images/markers/wifi.png',
                   'images/markers/wiki-export.png',
                   'images/markers/wildlifecrossing.png',
                   'images/markers/wind-2.png',
                   'images/markers/windmill-2.png',
                   'images/markers/windsurfing.png',
                   'images/markers/windturbine.png',
                   'images/markers/winebar.png',
                   'images/markers/winetasting.png',
                   'images/markers/woodshed.png',
                   'images/markers/workoffice.png',
                   'images/markers/workshop.png',
                   'images/markers/world.png',
                   'images/markers/worldheritagesite.png',
                   'images/markers/worldwildway.png',
                   'images/markers/wrestling-2.png',
                   'images/markers/yoga.png',
                   'images/markers/yooner.png',
                   'images/markers/you-are-here-2.png',
                   'images/markers/youthhostel.png',
                   'images/markers/zombie-outbreak1.png',
                   'images/markers/zoo.png',
                   'images/markers/zoom.png'];