import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

import FormWrapper from "../../components/forms/FormWrapper";
import Input from "../../components/forms/Input";
import Select from "../../components/forms/Select";
import Button from "../../components/common/Button";

const PatientForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <AdminLayout>

      <div className="max-w-2xl">

        <FormWrapper title="Add New Patient" onSubmit={handleSubmit}>

          <div className="grid grid-cols-2 gap-4">

            <Input
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />

            <Input
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />

            <Input
              label="Age"
              name="age"
              type="number"
              value={form.age}
              onChange={handleChange}
            />

            <Select
              label="Gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
            />

            <div className="col-span-2">
              <Input
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="flex justify-end mt-4">
            <Button type="submit" variant="primary">
              Save Patient
            </Button>
          </div>

        </FormWrapper>

      </div>

    </AdminLayout>
  );
};

export default PatientForm;