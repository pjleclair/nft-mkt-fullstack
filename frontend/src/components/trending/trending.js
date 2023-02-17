import Card from "../card/card.js"
import React from "react"
import "./trending.css"


const Trending = ({nfts}) => {

    let trendingCards
    if (nfts) {
        trendingCards = 
        nfts.map((obj) => {
            return <Card
                    key={obj.id}
                    title={obj.name}
                    image={obj.image.small}
                    floor_price={obj.floor_price.native_currency}
                />
        })
    } else {
        trendingCards = [
            <Card />,
            <Card />,
            <Card />,
            <Card />
        ]
    }

    return(
        <div className="trending">
                {trendingCards}
                <Card />
                <Card />
                <Card />
                <Card />
        </div>
    )
}

export default Trending;