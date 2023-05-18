import React from "react";
import homeImage from '../pages/pictures/contact-background.jpg';
import Members from "./Members";
import './Other.css'

function Other() {
    return (
        <div className="other-container">
            <img className='other-image' src={homeImage} alt='Home Background' />
            <div className="other-wrapper">
                <div className='text-header'>Others accounts</div>
                <div className='information'>Other people who ride here</div>

                {
                    Members && Members.length > 0
                        ?
                        Members.map((item) => {
                            return (
                                <div>
                                    <br></br>
                                    <div className='name'><strong>Name: </strong>{item.Name}<br></br>
                                    </div>

                                    <div className='name'><strong>Phone: </strong>{item.Phone}<br></br>
                                    </div>
                                    <div className='name'><strong>Age: </strong>{item.Age}<br></br>
                                    </div>

                                    <div className='name'><strong>Nr abonamente: </strong>{item.Subscription}<br></br>
                                    </div>
                                    <div className='name'><strong>Nr sedinte ramase: </strong> {item.Remaining}<br></br>
                                    </div>
                                    <div className='name'> <strong>Sedinte fara abonament: </strong>{item.Sessions}<br></br>
                                    </div>
                                    <div className='name'> <strong>Cal preferat: </strong>{item.Horse}<br></br>
                                    </div>
                                    <div className='name'> <strong>Nivel de experienta: </strong>{item.Experience}<br></br>
                                    </div>
                                    <br></br>
                                    <hr></hr>
                                    
                                </div>
                            );
                        }) :
                        "No data"
                }
            </div>
        </div>
    );
}

export default Other 