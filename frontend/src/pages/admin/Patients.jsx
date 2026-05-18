import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

import DataTable from "../../components/tables/DataTable";
import Modal from "../../components/modals/Modal";
import Input from "../../components/forms/Input";
import Button from "../../components/common/Button";

const Patients = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
  });

  const [editingIndex, setEditingIndex] = useState(null);

  // TABLE COLUMNS (same as old logic)
  const columns = [
    { header: "First Name", accessor: "firstName" },
    { header: "Last Name", accessor: "lastName" },
    { header: "Age", accessor: "age" },
    { header: "Gender", accessor: "gender" },
  ];

  // SAMPLE DATA (old + simple)
  const [data, setData] = useState([
    { firstName: "Ali", lastName: "Khan", age: 25, gender: "male" },
    { firstName: "Sara", lastName: "Ahmed", age: 30, gender: "female" },
  ]);

  // OPEN ADD MODAL
  const handleAdd = () => {
    setForm({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
    });
    setEditingIndex(null);
    setIsModalOpen(true);
  };

  // EDIT
  const handleEdit = (row, index) => {
    setForm(row);
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  // DELETE
  const handleDelete = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  };

  // FORM CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SAVE (ADD + UPDATE)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      // UPDATE
      const updated = [...data];
      updated[editingIndex] = form;
      setData(updated);
    } else {
      // ADD
      setData([...data, form]);
    }

    setIsModalOpen(false);
  };

  return (
    <AdminLayout>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Patients
        </h2>

        <Button
          variant="primary"
          onClick={handleAdd}
        >
          + Add Patient
        </Button>

      </div>

      {/* TABLE (UPDATED DATA TABLE SYSTEM) */}
      <DataTable
        columns={columns}
        data={data}
        onEdit={(row) => {
          const index = data.findIndex(
            (item) => item.firstName === row.firstName
          );
          handleEdit(row, index);
        }}
        onDelete={(row) => {
          const index = data.findIndex(
            (item) => item.firstName === row.firstName
          );
          handleDelete(index);
        }}
      />

      {/* MODAL */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingIndex !== null ? "Edit Patient" : "Add Patient"}
      >

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

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
            value={form.age}
            onChange={handleChange}
          />

          <Input
            label="Gender"
            name="gender"
            value={form.gender}
            onChange={handleChange}
          />

          {/* ACTIONS */}
          <div className="flex justify-end gap-2 mt-3">

            <Button
              variant="secondary"
              type="button"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>

            <Button variant="primary" type="submit">
              {editingIndex !== null ? "Update" : "Save"}
            </Button>

          </div>

        </form>

      </Modal>

    </AdminLayout>
  );
};

export default Patients;