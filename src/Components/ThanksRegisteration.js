import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Col, Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'

const ThanksRegisteration = () => {
    return (
        <CartProvider>
            <NavBar />
            <div className='pt-5'></div>
            <Container className='pt-5'>
                <Row>
                    <Col>
                        <h2 className='title-center mb-2'>
                           لقد تمت عمليه التسجيل بنجاح
                        </h2>
                        <NavLink className='btn btn-danger m-auto d-block main w-25 mt-5 mt-2' to='/'>القائمة الرئيسية</NavLink>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </CartProvider>
    )
}

export default ThanksRegisteration