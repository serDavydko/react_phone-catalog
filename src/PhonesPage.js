import React, { useState, useEffect, useContext } from 'react';
import { BasketContext } from './App';
import ScrollUpButton from "react-scroll-up-button";
import { Link } from "react-router-dom";
import Loader from './Loader';
import { getPhones } from './sources';

const PhonesPage = (props) => {
  const { handleCliCkAdd, items } = useContext(BasketContext);
  const [isLoaded, setLoaded] = useState(false);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    (async () => {
      const phonesFromServer = await getPhones();
      setPhones(phonesFromServer);
      setLoaded(true);
    })();
  }, []);


  if (!isLoaded) {
    return (
      <Loader />
    )
  }

  return (
    <>
      <ul className="catalog-container">
        {phones.map(phone => (
          <li className="catalog-item">
            <Link
              to={`${props.match.path}/${phone.id}`}
              className="link card-link"
            >
              <img src={`/${phone.imageUrl}`}
                className="product-image"
                alt={phone.id}
              />
              <p className="title">
                {phone.name}
              </p>
              <p className="overview">
                {phone.snippet}
              </p>

            </Link>

            <button disabled={items.some(item => item.id === phone.id)}
              className={`buy-button ${items.some(item => item.id === phone.id) && "disabled-button"}`}
              type="button"
              onClick={(event) => handleCliCkAdd(event, { id: phone.id, imageUrl: phone.imageUrl, count: 1 })}
            >
              {items.some(item => item.id === phone.id) ? "IN YOUR CART" : "ADD TO CART"}
            </button>

          </li>
        ))}
      </ul>

      <ScrollUpButton
        ContainerClassName="scroll-button"
        EasingType="easeInOutSine"
        StopPosition={1}
        ShowAtPosition={250}
      />
    </>
  )
}

export default PhonesPage;