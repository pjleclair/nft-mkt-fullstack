import "./card.css"
import NFT from "./images/NFT.svg"

const Card = ({title, image, floor_price}) => {
    return (
        <div className="card--container">
            <img src={image || NFT} alt="nft"/>
            <div id="title">{title || "Liquid Wave"}</div>
            <div className="info--container">
                <div className="info">
                    <div>Auction Time</div>
                    <div>Current Bid</div>
                </div>
                <div id="bid">0.05 ETH</div>
            </div>
            <div className="vals">
                <div>3h 1m 50s</div>
                <div>{floor_price}</div>
            </div>
            <button id="bid--button">Place a Bid</button>
        </div>
    )
}

export default Card;