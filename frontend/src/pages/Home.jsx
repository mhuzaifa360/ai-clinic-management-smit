import HomeLayout from "../layouts/HomeLayout";
import Button from "../components/common/Button";
import Typography from "../components/common/Typography";

const Home = () => {
  return (
    <HomeLayout>

      <div className="text-center mt-20">

        <Typography variant="h1">
          Welcome to AI Clinic System
        </Typography>

        <Typography variant="p">
          Manage Patients, Doctors, Appointments with AI Power
        </Typography>

        <div className="mt-6 flex justify-center gap-3">
          <Button variant="primary">
            Get Started
          </Button>

          <Button variant="secondary">
            Login
          </Button>
        </div>

      </div>

    </HomeLayout>
  );
};

export default Home;