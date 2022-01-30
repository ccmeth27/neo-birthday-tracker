import React from 'react'
import burj from './assets/burj-khalifa.jpeg'
import wtc from './assets/one-world-trade-center.jpeg'
import eiffel from './assets/eiffel-tower.jpeg'
import pyramid from './assets/pyramid-giza.jpeg'
import football from './assets/football-field-2.jpeg'
import leaning from './assets/leaning-tower.jpeg'
import bowling from './assets/bowling-lane.jpeg'
import bus from './assets/school-bus.jpeg'

const Results = (props) => {

  const neos = props.results

    //Accepts props from /Body. Array is mapped to individual Cards.
    //If/else if statements that evaluates the size of the NEO and compares it to 8 well known objects. Same statement used to get the image of the size comparison.
    //Ternary Operator renders "Maybe" if NEO is potentially_hazardous is true. Renders "Doubtful" if false. The prompt says to "Scare-up interest" so this is intentionally vague.
  return(
    <div class="row row-cols-1 row-cols-md-2 g-4">
        
        {neos.map((neo) => {
            return  <div class="col">
                        <div class="card h-100" key={neo.id}>
                            
                            {(() => {
                                if (neo.estimated_diameter.meters.estimated_diameter_max > 830) {
                                    return (
                                        <img src={burj} class="card-img-top" alt="burj" ></img>
                                    )
                                } else if (neo.estimated_diameter.meters.estimated_diameter_max > 530) {
                                    return (
                                        <img src={wtc} class="card-img-top" alt="world-trade" ></img>
                                    )
                                } else if (neo.estimated_diameter.meters.estimated_diameter_max > 530) {
                                    return (
                                        <img src={eiffel} class="card-img-top" alt="eiffel" ></img>
                                    )
                                } else if (neo.estimated_diameter.meters.estimated_diameter_max > 320) {
                                    return (
                                        <img src={pyramid} class="card-img-top" alt="pyramid" ></img>
                                    )
                                } else if (neo.estimated_diameter.meters.estimated_diameter_max > 80) {
                                    return (
                                        <img src={football} class="card-img-top" alt="football" ></img>
                                    )
                                } else if (neo.estimated_diameter.meters.estimated_diameter_max > 50) {
                                    return (
                                        <img src={leaning} class="card-img-top" alt="leaning-tower" ></img>
                                    )
                                } else if (neo.estimated_diameter.meters.estimated_diameter_max > 15) {
                                    return (
                                        <img src={bowling} class="card-img-top" alt="bowling" ></img>
                                    )
                                } else if (neo.estimated_diameter.meters.estimated_diameter_max < 15) {
                                    return (
                                        <img src={bus} class="card-img-top" alt="bus" ></img>
                                    )
                                }
                            })()}
                        
                            <div class="card-body">
                                <h5 class="card-title">Object Name:  {neo.name}</h5>
                                <div>
                                    {(() => {
                                        if (neo.estimated_diameter.meters.estimated_diameter_max > 830) {
                                            return (
                                                <p class="card-text">Size Comparison: Bigger than Birj Khalifa</p>
                                            )
                                        } else if (neo.estimated_diameter.meters.estimated_diameter_max > 530) {
                                            return (
                                                <p class="card-text">Size Comparison: One World Trade Center</p>
                                            )
                                        } else if (neo.estimated_diameter.meters.estimated_diameter_max > 530) {
                                            return (
                                                <p class="card-text">Size Comparison: The Eiffel Tower</p>
                                            )
                                        } else if (neo.estimated_diameter.meters.estimated_diameter_max > 320) {
                                            return (
                                                <p class="card-text">Size Comparison: The Great Pyramid of Giza</p>
                                            )
                                        } else if (neo.estimated_diameter.meters.estimated_diameter_max > 80) {
                                            return (
                                                <p class="card-text">Size Comparison: A Football Field</p>
                                            )
                                        } else if (neo.estimated_diameter.meters.estimated_diameter_max > 50) {
                                            return (
                                                <p class="card-text">Size Comparison: The Leaning Tower of Pisa</p>
                                            )
                                        } else if (neo.estimated_diameter.meters.estimated_diameter_max > 15) {
                                            return (
                                                <p class="card-text">Size Comparison: A Bowling Lane</p>
                                            )
                                        } else if (neo.estimated_diameter.meters.estimated_diameter_max < 15) {
                                            return (
                                                <p class="card-text">Size Comparison: A School Bus</p>
                                            )
                                        }
                                    })()}
                                    </div>
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Is it dangerous?: 
                                    {neo.is_potentially_hazardous_asteroid 
                                    ? ' Maybe' : ' Doubtful'}
                                </li>
                            </ul>
                        </div>
                    </div> 
            })
        }
        
    </div>
    )
}

export default Results