import React, { useEffect, useState } from "react";
import homeImage from '../pages/pictures/contact-background.jpg';
import './Other.css'
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Footer from "../Footer";

function Other() {
    const [usersList, setUsersList] = useState([]);
    const usersCollectionRef = collection(db, 'users')

    useEffect(() => {
        const getUsersList = async () => {
            try {
                const data = await getDocs(usersCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setUsersList(filteredData);
                console.log(filteredData)
                console.log("others baza")
            }
            catch (err) {
                console.error(err);
            }
        };

        getUsersList();
    }, []);

    console.log(usersList);
    console.log("others")

    return (
        <>
        <div className="other-container">
            <img className='other-image' src={homeImage} alt='Home Background' />
            <div className="other-wrapper">
                <div className='text-header-others'>Others accounts</div>
                <div className='others-information'>Other people who ride here</div>
                {
                    usersList.map((item) => {
                        return (
                            <div>
                                <br></br>
                                <div className='name-others'><strong>Name: </strong>{item.Name.name}<br></br>
                                </div>

                                <div className='name-others'><strong>Phone: </strong>{item.Phone.phone}<br></br>
                                </div>
                                <div className='name-others'><strong>Age: </strong>{item.Age.age}<br></br>
                                </div>
                                <div className='name-others'> <strong>Nivel de experienta: </strong>{item.Experience}<br></br>
                                </div>
                                <br></br>
                                <hr></hr>

                            </div>
                        );
                    })
                }
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Other 