import UsAnimated from '../assets/UsAnimated.jpg';

const home = () => {
  return (
    <div>
      <h1>Welcome to Acustles!</h1>
      <img className="d-block mx-auto" src={UsAnimated} alt="Animated" width="100%"/>
    </div>
  );
}

export default home;
