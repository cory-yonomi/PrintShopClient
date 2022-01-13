import { useEffect, useState, Fragment } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Container, Row } from "react-bootstrap"
import ListDisplay from './UI/ListDisplay'
import './Dashboard.css'

const Dashboard = () => {


    return (
        <div className="main">
            <div className='lists'>
                <ListDisplay >
                    
                </ListDisplay>
                <ListDisplay >
    
                </ListDisplay>
            </div>
            <div className="forms">

            </div>
        </div>
    )
}

export default Dashboard