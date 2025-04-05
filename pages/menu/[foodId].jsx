import { useRouter } from 'next/router';
import React from 'react'
import DetailsPage from '../../components/templates/DetailsPage';

function Details({ data }) {

    const router = useRouter();

    if (router.isFallback) {
        return <h2>Loading...</h2>
    }

    return <DetailsPage {...data} />
}

export default Details


export async function getStaticPaths() {

    const res = await fetch(`${process.env.BASE_URL}/data`);
    const data = await res.json();

    const paths = data.slice(0, 10).map(food => ({ params: { foodId: food.id.toString() } }))

    return {
        paths,
        fallback: true
    }

}

export async function getStaticProps({ params }) {

    // fetching single food data by Id
    const res = await fetch(`${process.env.BASE_URL}/data/${params.foodId}`);
    const data = await res.json();

    // checking if the entered Id exist or not. If not, redirecting the user to 404 page
    if (!data.name) {
        return {
            notFound: true
        }
    }

    return {
        props: { data },
        revalidate: 10 // updates page after 10 seconds (only if requested)
    }

}