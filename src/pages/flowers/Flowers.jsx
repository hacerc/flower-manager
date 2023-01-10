import React from "react";
import { Route, Routes } from "react-router-dom";
import "../flowers/flowers.scss";
import FlowerList from "../../components/app/flowers/list/FlowerList";
import FlowerDetails from "../../components/app/flowers/details/FlowerDetails";
import FlowerCreate from "../../components/app/flowers/create/FlowerCreate";
import RequireAuth from "../../components/routers/RequireAuth";

const Flowers = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<FlowerList />} />
        <Route path=":id" element={<FlowerDetails />} />
        <Route
          path="create"
          element={
            <RequireAuth>
              <FlowerCreate />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};
export default Flowers;
