const Traveller = require('./Traveller');
const Trip = require('./Trip');
const Location = require('./Location');

Traveller.hasMany(Trip, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});

Trip.belongsTo(Traveller, {
  foreignKey: 'reader_id',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

module.exports = { Reader, Book, LibraryCard };
