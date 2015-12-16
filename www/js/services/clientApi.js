(function () {
    'use strict';

    angular.module('visaHackApp').factory('merchantInfoApi', [merchantInfoApi]);

     function merchantInfoApi() {
        
        var merchantInfo = JSON.parse('[{"id": 1,"name": "BJs","numoftxns": 500,"rating": 3.5,"ratingdetails": { "one": 7.0,"two": 12.0,"three": 61.0,"four": 11.0,"five": 9.0 }}, { "id": 2,"name": "Tabla","numoftxns": 1000,"rating": 3.2,"ratingdetails": {"one": 8.0,"two": 13.0,"three": 59.0,"four": 15.0,"five": 5.0 }}]');
        var merchantInfoNew = JSON.parse('[{"id": 31439335,"icon":"ion-android-restaurant","name": "Tokyo Village","street": "1221 Chess Dr","city": "Foster City","state": "CA","postalCode": "94404","phone": "308-515-2308","latitude": "37.562148","longitude": "-122.276976","totalRating": "3.72","transCount": "3260","one": "4","two": "7","three": "24","four": "43","five": "22"}, {"id": 62511201,"name": "ABC Seafood Restaurant","street": "973 E Hilldale Blvd B5","city": "Foster City","state": "CA","postalCode": "94404","phone":"308-153-8992","latitude": "37.556701","longitude": "-122.273891","totalRating": "3.19","transCount": "2414","one": "9","two": "15","three": "36","four": "28","five": "12"}, {"id": 17273955,"name": "El Torito MexicanRestaurant","street": "388 Vintage Park Dr","city": "Foster City","state": "CA","postalCode": "94404","phone": "308-216-3399","latitude": "37.563006","longitude": "-122.278883","totalRating": "3.84","transCount": "4018","one": "8","two": "6","three": "19","four": "28","five": "39"}, {"id": 17273955,"name": "Tabla Indian Restaurant","street": "1088 Shell Blvd Ste C","city": "Foster City","state": "CA","postalCode": "94404","phone": "213-399-5600","latitude": "37.54901","longitude": "-122.264111","totalRating": "4.12","transCount": "5461","one": "6","two": "7","three": "2","four": "39","five": "46"}, {"id": 17273955,"name": "Buri Tara Thai Cuisine","street": "939A Edgewater Blvd","city": "Foster City","state": "CA","postalCode": "94404","phone": "919-619-1486","latitude": "37.544862","longitude": "-122.271783","totalRating": "3.32","transCount": "3895","one": "11","two": "8","three": "38","four": "24","five": "19"}, {"name": "Kobe Japanese Cuisine","id": 22043911,"state": "CA","longitude": "-122.271802","city": "Foster City","four": 25,"one": 15,"latitude": "37.544941","five": 25,"transCount": 2260,"two": 15,"three": 20,"street": "929 EDGEWATER BLVD","phone": "308-515-2308","postalCode": "93304-2122","totalRating": 3.30}, {"name": "Plumeria Restaurant & Bar","id": 163414974,"state": "CA","longitude": "-122.271802","city": "Foster City","four": 35,"one": 10,"latitude": "37.544941","five": 46,"transCount": 2100,"two": 7,"three": 2,"street": "929A EDGEWATER BLVD","phone": "308-515-2308","postalCode": "93304-3760","totalRating": 4.0}, {"name": "Lotus Garden Restaurant","id": 131571307,"state": "CA","longitude": "-122.263929","city": "Foster City","four": 24,"one": 21,"latitude": "37.549874","five": 9,"transCount": 3440,"two": 18,"three": 28,"street": "1058 SHELL BLVD","phone":"408-515-2308","postalCode": "93304-3760","totalRating": 2.82}, {"name": "Chalet Ticino","id": 14672264,"state": "CA","longitude": "-122.263929","city": "Foster City","four": 24,"one": 21,"latitude": "37.549874","five": 9,"transCount": 3440,"two": 18,"three": 28,"street": "1058 SHELL BLVD STE C","phone": "408-515-2338","postalCode": "93304-3760","totalRating": 2.82},{"name": "Buri Tara Thai Cuisine","id": 143059170,"state": "CA","longitude": "-122.271783","city": "Foster City","four": 24,"one": 20,"latitude": "37.544862","five": 9,"transCount": 3880,"two": 10,"three": 28,"street": "939A EDGEWATER BLVD","phone": "408-515-2338","postalCode": "93304-3760","totalRating": 3.20}]');
        var merchantCoordData = JSON.parse('{}');
        //var nearbyData = JSON.parse('[{"id": 1,"title": "Resturants"}, {"id": 2,"title": "Bars"}, {"id": 3,"title": "Salons"}, {"id": 4,"title": "GO DUBS"}]');

        
        function getMerchantInfo(){
            return merchantInfoNew;
        }

        function getMerchantCoordData(){
            return merchantCoordData;
        };

        //revealing module pattern
        return {
            getMerchantInfo: getMerchantInfo,
            getMerchantCoordData: getMerchantCoordData
        };
    };
})();