import Card from "../card/card.js"
import "./trending.css"

import React from "react"
import axios from "axios"

const Trending = () => {

    const [trendingNfts, setTrendingNfts] = React.useState({})
    const url = process.env.REACT_APP_BASE_URL

    console.log(trendingNfts)

    React.useEffect(()=> {
        axios
            .get(`${url}/list?order=h24_volume_native_asc`)
            .then(response => {
                setTrendingNfts(response.data)
            })
    }, [url])

    return(
        <div className="trending">
                <Card title="Liquid Wave"/>
                <Card title="Liquid Wave" />
                <Card title="Liquid Wave" />
                <Card title="Liquid Wave" />
                <Card title="Liquid Wave" />
                <Card title="Liquid Wave" />
                <Card title="Liquid Wave" />
                <Card title="Liquid Wave" />
        </div>
    )
}

export default Trending;