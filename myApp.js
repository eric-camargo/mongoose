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
  Person.find({name: personName}, (err, personFound) => {
    if (err) return console.log(err)
    done(null, personFound)
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, personFound) => {
    if (err) return console.log(err)
    done(null, personFound)
  })
};

const findPersonById = (personId, done) => {
  Person.findById({_id: personId}, (err, personFound) => {
    if (err) return console.log(err)
    done(null, personFound)
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, person) => {
    if (err) return console.log(err)

    person.favoriteFoods.push(foodToAdd)

    person.save((err, personUpdated) => {
      if (err) return console.log(err);
      done(null, personUpdated)
    })
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedPerson) => {
    if (err) return console.log(err)
    done(null, updatedPerson)
  })
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedPerson) => {
    if (err) return console.log(err)
    done(null, removedPerson)
  })
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (err, removedPeople) => {
    if (err) return console.log(err)
    done(null, removedPeople)
  })
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
