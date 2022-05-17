import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UserForm from "./UserForm";
import Users from "./Users";
import { v4 as uuidv4 } from "uuid";

const UserManagement = () => {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [userItem, setUserItem] = useState(null);
  const [selectedRow, setSelectedRow] = useState([]);

  const handleAddNew = () => {
    setUserItem(null);
    handleOpenForm();
  };

  const handleOpenForm = () => {
    setShow(true);
  };

  const handleCloseForm = () => {
    setShow(false);
  };

  const handleSubmit = (user) => {
    if (!user.id) {
      user.id = uuidv4();
      setUsers([...users, user]);
    } else {
      const index = users.findIndex((item) => item.id === user.id);
      users[index] = user;
      setUsers(users);
    }
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEditItem = (item) => {
    setUserItem(item);
    handleOpenForm();
  };

  const handleSelectedRow = (id) => {
    const isSelected = selectedRow.includes(id);
    if (isSelected) {
      setSelectedRow(selectedRow.filter((item) => item !== id));
    } else {
      setSelectedRow([...selectedRow, id]);
    }
  };

  return (
    <div>
      <Button className="my-4" variant="primary" onClick={handleAddNew}>
        Add New
      </Button>
      {users.length > 0 && (
        <Users
          users={users}
          onDeleteItem={handleDelete}
          onEditItem={handleEditItem}
          onSelectedRow={handleSelectedRow}
        />
      )}
      <Modal
        show={show}
        onHide={handleCloseForm}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <UserForm
            onClose={handleCloseForm}
            onSubmit={handleSubmit}
            userItem={userItem}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserManagement;
