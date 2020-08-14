import React from 'react';
import '../../styles/PortfolioCard.css'
import Card from 'react-bootstrap/Card'
import LaughyTasky from '../../utils/images/LaughyTasky.png'
import WeatherOrNot from '../../utils/images/WeatherorNot.png'
import CodeQuiz from '../../utils/images/CodeQuiz.png'
import TeamGenerator from '../../utils/images/TeamGenerator.png'
import READMEDemo from '../../utils/images/Demo.gif.gif'
import EatDaBurger from '../../utils/images/EatDaBurger.png'
import LeadAstray from '../../utils/images/LeadAstray.png'
import BudgetTracker from '../../utils/images/BudgetTracker.png'
import GoogleBooksSearch from '../../utils/images/GoogleBooksSearch.png'
import Spiral from '../../utils/images/Spiral.png'



function PortfolioCard() {
    return (
        <Card.Body className="card-body">
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://github.com/jpino7/TasksForLaughs" target="_blank" rel="noopener noreferrer"><img src={LaughyTasky}
                                title="Laughy Tasky Repo" className="card-img-top" alt="Project One Task App"></img></a>
                        <div className="card-body">
                            <a className="card-title" href="https://jpino7.github.io/TasksForLaughs/" target="_blank" rel="noopener noreferrer">Laughy Tasky</a>
                            <p className="card-text">This project was to bring motivation to a busy individual by creating a task
                            application to allow the user to save tasks throughout the day and when completing tasks have the choice
                                between a Chuck Norris joke or an Inspirational quote.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://github.com/jpino7/Weather-Dashboard" target="_blank" rel="noopener noreferrer"><img src={WeatherOrNot}
                                    title="Weather or Not Repo" className="card-img-top" alt="Weather or Not App"></img></a>
                        <div className="card-body">
                            <a className="card-title" href="https://jpino7.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">Weather or Not!</a>
                            <p className="card-text">This project was to create a Weather Dashboard application to allow the user to search
                                    weather in multiple cities</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://github.com/jpino7/Code-Quiz" target="_blank" rel="noopener noreferrer"><img src={CodeQuiz}
                                        title="Code Quiz Repo" className="card-img-top" alt="Code Quiz App"></img></a>
                        <div className="card-body">
                            <a className="card-title" href="https://jpino7.github.io/Code-Quiz/" target="_blank" rel="noopener noreferrer">Code Quiz</a>
                            <p className="card-text">This project was to create an application as a timed code quiz with multiple-choice
                                    questions.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://github.com/jpino7/TeamGenerator" target="_blank" rel="noopener noreferrer"><img src={TeamGenerator}
                                            title="Team Generator Repo" className="card-img-top" alt="Team Generator App"></img></a>
                        <div className="card-body">
                            <a className="card-title" href="https://github.com/jpino7/TeamGenerator/tree/master/output" target="_blank" rel="noopener noreferrer">Team Generator
                                                 Command Line Application</a>
                            <p className="card-text">This project was to build a software engineering team generator command line
                                    application.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://github.com/jpino7/READMEgenerator" target="_blank" rel="noopener noreferrer"><img src={READMEDemo}
                                title="READMEGenerator Repo" className="card-img-top" alt="README Generator App"></img></a>
                        <div className="card-body">
                            <a className="card-title" href="https://github.com/jpino7/READMEgenerator/blob/master/README.md"
                                        target="_blank" rel="noopener noreferrer">README
                                        Generator Command Line Application</a>
                            <p className="card-text">This project was to build a command line application that dynamically generates a
                                        README.md from a user's input. The app is invoked with the command: node index.js</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://github.com/jpino7/Burger" target="_blank" rel="noopener noreferrer"><img src={EatDaBurger}
                                    title="Eat Da Burger! Repo" className="card-img-top" alt="Eat Da Burger App"></img></a>
                        <div className="card-body">
                            <a className="card-title" href="https://shielded-inlet-96490.herokuapp.com/" target="_blank" rel="noopener noreferrer">Eat Da Burger!</a>
                            <p className="card-text">A burger logging application using MySQL, Node, Express, Handlebars, and ORM. This
                            application follows the MVC design pattern. The app uses Node and MySQL to query and route data and
                                            Handlebars to generate the HTML.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://github.com/lvarnum/Lead-Astray" target="_blank" rel="noopener noreferrer"><img src={LeadAstray}
                                        title="Lead Astray Repo" className="card-img-top" alt="Lead Astray App"></img></a>
                        <div className="card-body">
                            <a className="card-title" href="https://frozen-crag-01668.herokuapp.com/" target="_blank" rel="noopener noreferrer">Lead Astray</a>
                            <p className="card-text">A pet finding application using MySQL2, Sequelize, Express, Handlebars, Passport, and
                                                Amazon S3.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://github.com/jpino7/Budget-Tracker" target="_blank" rel="noopener noreferrer"><img src={BudgetTracker}
                                        title="Budget Tracker Repo" className="card-img-top" alt="Budget Tracker App"></img></a>
                        <div className="card-body">
                            <a className="card-title" href="https://jpino7.github.io/Budget-Tracker/" target="_blank" rel="noopener noreferrer">Budget Tracker</a>
                            <p className="card-text">A budget tracking app created with React. This app was created to help keep track of your expenses!</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://github.com/jpino7/GoogleBooksSearch" target="_blank" rel="noopener noreferrer"><img src={GoogleBooksSearch}
                                        title="Google Books Search Repo" className="card-img-top" alt="Google Books Search App"></img></a>
                        <div className="card-body">
                            <a className="card-title" href="https://mysterious-springs-66917.herokuapp.com/" target="_blank" rel="noopener noreferrer">Google Books Search</a>
                            <p className="card-text">A Google Books Search app created with React using Google Books API. This app was created so users can save books to review or purchase later.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://github.com/lvarnum/Spiral" target="_blank" rel="noopener noreferrer"><img src={Spiral}
                                        title="Spiral Repo" className="card-img-top" alt="Spiral App"></img></a>
                        <div className="card-body">
                            <a className="card-title" href="https://spiral-planner.herokuapp.com/" target="_blank" rel="noopener noreferrer">Google Books Search</a>
                            <p className="card-text">Spiral app created with React and built with Express, Material-UI, Morgan, Sequelize, Mongoose, and Passport. This app is for students needing a simple and useful way of keeping track of class schedules and assignments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card.Body>
    )
};


export default PortfolioCard;