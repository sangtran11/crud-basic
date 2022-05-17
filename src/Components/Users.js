import React from "react";
import { Table, Button, Form } from "react-bootstrap";

const Users = ({ users, onDeleteItem, onEditItem, onSelectedRow }) => {
  const handleDelete = (id) => {
    onDeleteItem(id);
  };

  const handleEdit = (item) => {
    onEditItem(item);
  };

  const onChangeChecked = (id) => {
    onSelectedRow(id);
  };

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>No</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>PhoneNumber</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => (
          <tr key={index}>
            <td>
              {" "}
              <Form.Check
                type="checkbox"
                id={item.id}
                onChange={() => onChangeChecked(item.id)}
              />
            </td>
            <td>{index + 1}</td>
            <td>{item.fullName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
              <Button variant="info" onClick={() => handleEdit(item)}>
                Edit
              </Button>
              <Button
                className="mx-2"
                variant="danger"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Users;
