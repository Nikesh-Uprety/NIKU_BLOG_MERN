import React from 'react';
import '../../Css/Tools.css';
// import Cypherrat from '../Tools/CypherRat.rar';
import Menu from './Menu';

const Tools = () => {



    return (
        <main className="main">
           
            <section className="card-area">

                {/* Card: City */}
                <section className="card-section">
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--city">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeNyc03Y3WPIIAXtViG2FPJ-W4d9Kue70LQ&usqp=CAU" alt="" />
                                        <h2 className="card-front__heading">Cypher Rat v3.4</h2>
                                        <p className="card-front__text-price">For Free</p>
                                    </div>

                                    <div className="card-front__bt">
                                        <p className="card-front__text-view card-front__text-view--city">
                                            Details
                                        </p>
                                    </div>
                                </div>
                                <div className="card-back">

                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeNyc03Y3WPIIAXtViG2FPJ-W4d9Kue70LQ&usqp=CAU" style={{width:"250px",height:"238px"}} className="video__media" alt="" />
                                    
                                </div>
                            </div>
                        </div>
                        <div className="inside-page">
                            <div className="inside-page__container">
                                <h3 className="inside-page__heading inside-page__heading--city">
                                    RAT for Android
                                </h3>
                                <p className="inside-page__text">
                                    A very powerful Remote Access Trojen for Android phones with a lots of features.
                                </p>
                                <a href="#" target='_blank' download="CypherRat_V3.rar" className="inside-page__btn inside-page__btn--city" rel="noreferrer">
                                    Downlaod Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </section>

        </main>

    );

}

export default Tools;