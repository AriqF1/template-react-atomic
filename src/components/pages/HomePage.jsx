import Button from "../atoms/Button";
import InputWithLabel from "../molecules/InputWithLabel";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome to Home Page</h2>
      <InputWithLabel label="Name" id="name" placeholder="Type Your Name..." />
      <InputWithLabel
        label="Password"
        id="password"
        placeholder="Type Your Password..."
      />
      <Button label="Submit" />
    </div>
  );
};

export default HomePage;
