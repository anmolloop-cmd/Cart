import React from 'react';
const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconcontainer}>
                <img style={styles.cartIcon}
                    src=
                    "https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"
                    alt="cart-icon"
                />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}
const styles = {
    cartIcon: {
        height: 42,
        width: 42,
        margin: 10,
        marginLeft: 1420
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex'

    },
    cartIconcontainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
}
export default Navbar
