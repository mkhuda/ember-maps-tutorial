import Ember from 'ember';

const communityPropertyTypes = [
  'Premium Kost',
  'Premium Kost And Hotel'
];

export function rentalPropertyType([house_type]/*, hash*/) {
  if (communityPropertyTypes.contains(house_type)) {
      return 'Rumah Sewa';
  }

  return 'Rumah Sendiri';
}

export default Ember.Helper.helper(rentalPropertyType);
