import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './../../App.css'
import { useParams } from 'react-router-dom'


function RestraurantsDetail() {

    const { hotelName } = useParams();
    return (
        <div className="app-container">
            <Navbar />
            <main className="content">
                <h2 className="categories-title">
                    🍽️Hotel <span style={{ color: '#6a11cb', fontWeight: '600', textDecoration:'underline wavy black' }}>{hotelName.toUpperCase()}</span>
                </h2>

            </main>
            <Footer />
        </div>
    )
}

export default RestraurantsDetail
