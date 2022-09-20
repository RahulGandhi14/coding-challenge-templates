const supervisorRoutes = require('express').Router()

supervisorRoutes.get('/', (req, res) =>
    res.status(200).json({ data: 'supervisor' })
)

module.exports = supervisorRoutes
