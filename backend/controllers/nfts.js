const nftRouter = require('express').Router()
const nftService = require('../services/nft')

nftRouter.get('/', (req, res) => {
    nftService.getAll()
        .then(response => {
            res.send(response.data)
        })
        .catch(error =>
            res.status(404).send(error)
        )
})

nftRouter.get('/:id', (req, res) => {
    nftService.getNFT(req.params.id)
        .then(response => {
            res.send(response.data)
        })
        .catch(error =>
            res.status(404).send(error)
        )
})

nftRouter.post('/', (request, response) => {
    response.status(201)
})

module.exports = nftRouter