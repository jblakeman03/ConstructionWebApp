import HomeSection from "../Components/HomeSection";
function Home(loginStatus) {

  console.log('in home', loginStatus)
  return (
    <>
      <HomeSection parentToChild={loginStatus.parentToChild}></HomeSection>
    </>
  );
}

export default Home;
