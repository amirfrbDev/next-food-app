import React from 'react'
import MenuPage from '../../components/templates/MenuPage'

function Menu({ data }) {
    // getting foods data and passing it to MenuPage component
    return <MenuPage data={data} />
}

export default Menu


export async function getStaticProps() {

    // fetching foods data from api
    const res = await fetch(`${process.env.BASE_URL}/data`)
    const data = await res.json();

    return {
        props: { data },
        revalidate: 10 // updates page after 10 seconds (only if requested)
    }

}