import React from "react";
import useDemo from "../../hooks/useDemo";

const ManageDemos = () => {
  const [demos, setDemos] = useDemo();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `http://localhost:5000/demos/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = demos.filter((demo) => demo._id !== id);
          setDemos(remaining);
        });
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Manage your demos</h2>
      {demos.map((demo) => (
        <div key={demo._id}>
          <p>
            {demo.name}{" "}
            <button onClick={() => handleDelete(demo._id)}>Delete</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ManageDemos;
