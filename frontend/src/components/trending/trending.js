import Card from "../card/card.js"
import React from "react"
import "./trending.css"


const Trending = ({displayArray}) => {
    const [nfts, setNfts] = React.useState([])

    Promise.all(displayArray).then(response => setNfts(response)).catch(err => console.log('error: ', err))

    const trendingCards = 
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
                {trendingCards}
                <Card />
                <Card />
                <Card />
                <Card />
        </div>
    )
}

export default Trending;