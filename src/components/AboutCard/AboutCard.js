import React from 'react';
import '../../styles/AboutCard.css'
import Pic from '../../utils/images/Wedding_2018.jpg'
import Card from 'react-bootstrap/Card'


function AboutCard() {
    return (
        <Card className="aboutMe">
            <Card.Body className="card-body">
                <h3 className="aboutHeader">About Us</h3>
                <img className="usImage" src={Pic} alt="Us" />
                <section className="text">
                    First and foremost I want to thank you for visiting our blog.
                    My name is Joanna and my husband is Cisco. We like to live life to the fullest!
                    Here you will find what we enjoy most such as: traveling, cooking, home life, gardening, & improving the look of our home.
                    This is Us!
                </section>

                <div className="row mt-4">
                    <div className="card mx-auto">
                        <div className="card-body">
                            <blockquote className="blockquote mx-auto">
                                <p>"Life itself is a privilege, but to live life to the fullest - well, that is a choice."</p>
                                <p className="blockquote-footer">Andy Andrews <cite title="Source Title">Writing from Nowhere</cite>
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>

            </Card.Body >
        </Card>
    )
};


export default AboutCard;