const Traveller = require('./Traveller');
const Trip = require('./Trip');
const Location = require('./Location');

Traveller.hasMany(Trip, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});

Trip.hasMany(Traveller, {
  foreignKey: 'traveller_id',
});

Trip.hasMany(Location, {
  foreignKey: 'location_id',
})

Location.belongsTo(Trip, {
  foreignKey: 'location_id',
});

module.exports = { Reader, Book, LibraryCard };
