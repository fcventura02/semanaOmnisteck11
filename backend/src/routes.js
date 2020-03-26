const express = require('express');
const { createOng, listOngs } = require('./controllers/OngController')
const { createIncident, listIncidents, deleteIncident } = require('./controllers/IncidentController')
const { index } = require('./controllers/ProfileController')
const { createSession } = require('./controllers/SessionController')


const routes = express()

routes.post('/session', createSession)

routes.get('/ongs', listOngs)
routes.post('/ongs', createOng)

routes.get('/incidents', listIncidents)
routes.post('/incidents', createIncident)
routes.delete('/incidents/:id', deleteIncident)

routes.get('/profile', index)

module.exports = routes