import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { history } from "../../../../helpers/HistoryHelper";
import BlankPicture from "../../../../img/blank-profile-photo.jpeg";
import ProductService from "../../../../services/ProductService";

const UserDetails = () => {
  const { id } = useParams();

  const [flower, setFlower] = useState({});

  useEffect(() => {
    const getUser = async (id) => {
      const result = await ProductService.getByIdAsync(id);
      if (!result.isSuccess) {
        history.navigate("/flowers");
      }
      setFlower(result.data);
    };

    getUser(id);
  }, [id]);

  return (
    <>
      <div className="user-details-container">
        <aside className="profile-image">
          <img
            src={flower.image }
            alt={`${flower.name}`}
          />
        </aside>
        <main className="details">
          <div className="details-title">{`${flower.name}`}</div>
          <div className="details-content">
            <div className="content-group">
              <label>Description</label>:<span>{flower.description}</span>
            </div>
            <div className="content-group">
              <label>Price</label>:<span>{`${flower.price} TL`}</span>
            </div>
            <div className="content-group">
              <label>Stock Count</label>:<span>{`${flower.stockCount} Adet`}</span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UserDetails;
