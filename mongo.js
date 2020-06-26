const mongoose = require("mongoose")

if (process.argv.length < 3) {
  console.log("give password as argument")
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://hannamari:${password}@klusteri-cqmqk.mongodb.net/puhelinluettelo?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model("Person", personSchema)

//jos on annettu vain salasana
if (process.argv.length === 3) {
  //hakee henkilöitä hakuehdolla
  console.log("phonebook:")
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
}

//jos on annettu myös nimi ja numero
if (process.argv.length > 3) {
  const name = process.argv[3]
  const number = process.argv[4]

  const person = new Person({
    name: name,
    number: number,
  })

  //tallenttaa uuden henkilön
  person.save().then((response) => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}
