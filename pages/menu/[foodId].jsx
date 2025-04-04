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

    const res = await fetch(`http://localhost:4000/data`);
    const data = await res.json();

    const paths = data.slice(0, 10).map(food => ({ params: { foodId: food.id.toString() } }))

    return {
        paths,
        fallback: true
    }

}

export async function getStaticProps({ params }) {

    const res = await fetch(`http://localhost:4000/data/${params.foodId}`);
    const data = await res.json();

    if (!data.name) {
        return {
            notFound: true
        }
    }

    return {
        props: { data },
        revalidate: 10
    }

}