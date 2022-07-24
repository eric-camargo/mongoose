const mongoose = require('mongoose');

require('dotenv').config();

conn = mongoose.connect('mongodb+srv://ericbob:Beatles2893@cluster1.iovng.mongodb.net/**test**?retryWrites=true&w=majority');
console.log(conn)
// console.log(conn)

let Person;

let personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
})

Person = mongoose.model('Person', personSchema)

const createAndSavePerson = (done) => {
  let newPerson = new Person({name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"]})

  newPerson.save((err, data) => {
    if (err) return console.error(err);
    console.log("successfully created Person")
    done(null, data);
  });
};

const arrayOfPeople = [
  {name: "Yoland", age: 34, favoriteFoods: ["sushi", "almond", "veggies"]},
  {name: "Trey", age: 26, favoriteFoods: ["eggs", "fish", "fresh fruit"]},
  {name: "Bob", age: 13, favoriteFoods: ["eggs", "fish", "fresh fruit"]},
  {name: "Fifi", age: 52, favoriteFoods: ["eggs", "fish", "fresh fruit"]}
]

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.log(err)
    done(null, people)
  })
};

const findPeopleByName = (personName, done) => {
  People.find({name: personName}, (err, data) => {
    if (err) return console.log(err)
    done(null, data)
  })
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
