require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()

const Person = require("./models/person")

app.use(express.static("build"))
app.use(express.json())
app.use(cors())



morgan.token("body", (req) => {
  return JSON.stringify(req.body)
})

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
)

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method)
  console.log("Path:", request.path)
  console.log("Body:", request.body)
  console.log("---")
  next()
}

app.use(requestLogger)

app.get("/info", (req, res, next) => {
  Person.countDocuments({})
    .then((persons) => {
      res.send(
        `<p>Phonebook has info for ${persons} people</p><p>${new Date()}</p>`
      )
    })
    .catch((error) => next(error))
})

app.get("/api/persons", (req, res, next) => {
  Person.find({})
    .then((persons) => {
      res.json(persons)
    })
    .catch((error) => next(error))
})

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
})

app.post("/api/persons", (request, response, next) => {
  const body = request.body
  const person = new Person({
    name: body.name,
    number: body.number
  })

  person
    .save()
    .then((savedPerson) => savedPerson.toJSON())
    .then((savedAndFormattedPerson) => {
      response.json(savedAndFormattedPerson)
    })
    .catch((error) => next(error))
})

app.put("/api/persons/:id", (request, response, next) => {
  const newPerson = {
    name: request.body.name,
    number: request.body.number,
  }
  Person.findByIdAndUpdate(request.params.id, newPerson, { new: true })
    .then((updatedPerson) => {
      response.json(updatedPerson)
    })
    .catch((error) => next(error))
})

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" })
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
