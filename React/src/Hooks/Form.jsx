import React, { useEffect, useState } from 'react';

const Form = () => {
  const [storeForm, setStoreForm] = useState([]);
  const [form, setForm] = useState({
    username: '',
    email: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateStore = [...storeForm, form];

    localStorage.setItem('form', JSON.stringify(updateStore));
    setStoreForm(updateStore);

    setForm({
      username: '',
      email: '',
    });
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('form'));
    setStoreForm(data || []);
  }, []);

  return (
    <>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <br /><br />

        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {storeForm.length > 0 ? (
        <>
          <h3>Stored Users</h3>
          {storeForm.map((item, index) => (
            <div key={index}>
              <h5>{item.username}</h5>
              <h5>{item.email}</h5>
            </div>
          ))}
        </>
      ) : (
        <h5>No Data</h5>
      )}
    </>
  );
};

export default Form;
