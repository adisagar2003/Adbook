import React from 'react'
import "./RoomsCard.css"
function Rooms_card(props) {
  return (
    <div class="Rooms__hotelCarousal__card">
                <div class='Rooms__hotelCarousal__card__image'>
                    <img src={props.link} height="150" width="280" />
                </div>
                <div class='Rooms__hotelCarousal__card__utilities'>

                </div>
    </div>
  )
}

export default Rooms_card