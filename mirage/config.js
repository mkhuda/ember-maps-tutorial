export default function() {

  this.get('/rentals', function(db, request) {

      let rentals = [{
        type: 'rentals',
        id: 1,
        attributes: {
          title: 'Ragunan Kost',
          owner: 'Surahno',
          city: 'Jakarta',
          type: 'Premium Kost',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'rentals',
        id: 2,
        attributes: {
          title: 'Kemang Living Place',
          owner: 'Margono',
          city: 'Semarang',
          type: 'Premium Kost And Hotel',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, {
        type: 'rentals',
        id: 3,
        attributes: {
          title: 'Rumah GG. Hikmah Ragunan',
          owner: 'Edi',
          city: 'Surakarta',
          type: 'Kost Murah',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      }];

      if(request.queryParams.city !== undefined) {
        let filteredRentals = rentals.filter(function(i) {
          return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
        });
        return { data: filteredRentals };
      } else {
        return { data: rentals };
      }

  });
}
