import CategoriesPage from '../../components/templates/CategoriesPage'

function Categories({ foods }) {
  return <CategoriesPage foods={foods} />
}

export default Categories



export async function getServerSideProps({ query: { difficulty, time } }) {

  // fetching all foods data
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  // filtering the data by difficulty and time queries
  const filteredData = data.filter(food => {
    // filtering by difficulty
    const difficultyResult = food.details.filter(detail =>
      detail.Difficulty && detail.Difficulty?.toLowerCase() === difficulty?.toLowerCase()
    );

    // filtering by time
    const timeResult = food.details.filter(detail => {
      // selecting the cooking time
      const cookingTime = detail["Cooking Time"] || "";

      // extracting the food cooking time
      const detailTime = cookingTime.split(" ")[0];

      // checking if it's either less than 30 mins or more
      if (detailTime && time === "less" && +detailTime <= 30) {

        return true;

      } else if (detailTime && time === "more" && +detailTime > 30) {

        return true;

      }

      return false;
    });

    // returning food by queries
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