const axios = require('axios')
const baseUrl = "https://api.coingecko.com/api/v3/nfts"

const getAll = () => {
    return axios.get(`${baseUrl}/list`)
}

const getNFT = (nft) => {
    return axios.get(`${baseUrl}/${nft}`)
}

module.exports = {
    getAll: getAll,
    getNFT: getNFT
}