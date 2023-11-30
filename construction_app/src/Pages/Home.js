import HomeSection from "../Components/HomeSection";
function Home(loginStatus) {

  return (
    <>
      <HomeSection parentToChild={loginStatus.parentToChild}></HomeSection>
    </>
  );
}

export default Home;
