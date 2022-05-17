import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const initialData = {
  fullName: "",
  email: "",
  phone: "",
};

const UserForm = ({ userItem, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(userItem ? userItem : initialData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onCloseModal();
  };

  const onCloseModal = () => {
    setFormData(initialData);
    onClose();
  };

  return (
    <Form>
      <h1 className="text-center">{userItem?.id ? "Edit User" : "Add User"}</h1>
      <Form.Group>
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
          onChange={handleChange}
          value={formData.fullName}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          className="mb-3"
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          value={formData.email}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          onChange={handleChange}
          value={formData.phone}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="text-end">
        <Button
          className="mx-3"
          variant="success"
          type="submit"
          onClick={onSubmitForm}
          block="true"
        >
          Submit
        </Button>
        <Button
          className="ml-3"
          variant="secondary"
          block="true"
          onClick={onCloseModal}
        >
          Close
        </Button>
      </Form.Group>
    </Form>
  );
};

export default UserForm;
