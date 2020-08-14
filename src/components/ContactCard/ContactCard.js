import React from 'react';
import Card from 'react-bootstrap/Card'
import '../../styles/ContactCard.css'



function ContactCard() {
    return (
        <Card.Body>
                <div className="row">
                    <div className="row-group col-md-7" id="socialmedia">
                        <h4 className="socialmedia">Find Me On:</h4>
                        <a href="https://www.linkedin.com/in/joanna-pino-0b627419a/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"> </a>
                        <a href="https://github.com/jpino7" className="fa fa-github" target="_blank" rel="noopener noreferrer"> </a>
                    </div>
                    <div className="row-group col-md-7">
                        <h4>Contact Me At:</h4>
                    </div>
                    <div className="row-group col-md-7">
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:pino3789@gmail.com" target="_blank" rel="noopener noreferrer"><h5>pino3789@gmail.com</h5> </a>
                    </div>
                    <div className="row-group col-md-7">
                        <i className="fas fa-mobile"></i>
                        <h5>520.661.9147</h5>
                    </div>
                    <div className="row-group col-md-7">
                        <h4 className="ProMaterials">Professional Materials:</h4>
                    </div>
                    <div className="row-group col-md-7">
                        <i className="fas fa-briefcase"></i>
                        <a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:167be073-c3b5-4e0a-9e95-7e2052964179" target="_blank" rel="noopener noreferrer">
                            <h5>Resume</h5>
                        </a>
                    </div>
                    <div className="row-group col-md-7">
                        <i className="fas fa-file-code" style={{fontSize: '20px'}}></i>
                        <a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:e5a45db1-6fb5-41df-9be1-6c7759c8b09f" target="_blank" rel="noopener noreferrer">
                            <h5>Certificate in Full Stack Web Development (Continuing and Professional Education)</h5>
                        </a>
                    </div>
                </div>


                <div className="row mt-4">
                    <div className="card mx-auto">
                        <div className="card-body">
                            <blockquote className="blockquote mx-auto">
                                <p>Design can be art. Design can be <span>aesthetics</span>. Design is so simple, that's why it is so
                            complicated.</p>
                                <p className="blockquote-footer">Paul Rand <cite title="Source Title">Good Reads</cite>
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </Card.Body>
            
    )
}

export default ContactCard;
