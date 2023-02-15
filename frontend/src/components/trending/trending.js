import Card from "../card/card.js"
import React from "react"
import "./trending.css"


const Trending = ({trendingNfts}) => {
    const [nfts, setNfts] = React.useState([])

    Promise.all(trendingNfts).then(response => setNfts(response))

    const displayArray = 
        nfts.map((obj) => {
            return <Card
                    key={obj.id}
                    title={obj.name}
                    image={obj.image.small}
                    floor_price={obj.floor_price.native_currency}
                />
    })

    return(
        <div className="trending">
                {displayArray}
                <Card />
                <Card />
                <Card />
                <Card />
        </div>
    )
}

export default Trending;