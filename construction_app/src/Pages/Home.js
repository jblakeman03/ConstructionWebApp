import HomeSection from "../Components/HomeSection";
function Home() {
  const getData = async (url) => {
    const newData = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
    console.log(newData);
  };

  getData("/api");
  return (
    <>
      <HomeSection></HomeSection>
    </>
  );
}

export default Home;
