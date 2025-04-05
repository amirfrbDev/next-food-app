import React from 'react'
import CategoriesPage from '../../components/templates/CategoriesPage'

function Categories({foods}) {
  console.log(foods)
  return <CategoriesPage {...foods} />
}

export default Categories



export async function getServerSideProps({ query: { difficulty, time } }) {

  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  const filteredData = data.filter(food => {

    const difficultyResult = food.details.filter(detail =>
      detail.Difficulty && detail.Difficulty.toLowerCase() === difficulty.toLowerCase()
    );

    const timeResult = food.details.filter(detail => {
      const cookingTime = detail["Cooking Time"] || "";
      const detailTime = cookingTime.split(" ")[0];

      if (detailTime && time === "less" && +detailTime <= 30) {
        return true;
      } else if (detailTime && time === "more" && +detailTime > 30) {
        return true;
      }
      return false;
    });

    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return true;
    } else if (time && !difficulty && timeResult.length) {
      return true;
    } else if (!time && difficulty && difficultyResult.length) {
      return true;
    }

    return false;
  });


  return {
    props: {
      foods: filteredData
    }
  }

}