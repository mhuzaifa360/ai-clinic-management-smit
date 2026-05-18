import AdminLayout from "../../layouts/AdminLayout";
import Typography from "../../components/common/Typography";
import Button from "../../components/common/Button";
import StatCard from "../../components/cards/StatCard";

const Dashboard = () => {
  return (
    <AdminLayout>

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <Typography variant="h1">
            Admin Dashboard
          </Typography>

          <Typography variant="p">
            Welcome back to AI Clinic System
          </Typography>
        </div>

        <div className="flex gap-3">
          <Button variant="secondary">Export</Button>
          <Button variant="primary">+ Add Patient</Button>
        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4">

        <StatCard
          title="Patients"
          value="120"
          color="blue"
          icon="👨‍⚕️"
        />

        <StatCard
          title="Appointments"
          value="45"
          color="green"
          icon="📅"
        />

        <StatCard
          title="Doctors"
          value="8"
          color="purple"
          icon="🩺"
        />

      </div>

    </AdminLayout>
  );
};

export default Dashboard;