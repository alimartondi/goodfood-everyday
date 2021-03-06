import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitMenuForm } from "../redux/cateringOrderSlice";
import { useForm } from "react-hook-form";
import Header from "./layout/Header";
import classNames from "classnames";

export default function MenuForm() {
  const [currentMenuDate, setCurrentMenuDate] = useState(null);

  const selectedDates = useSelector(
    (state) => state.cateringOrder.selectedDates
  );
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmission = (data) => {
    if (
      selectedDates.every((selectedDate) => selectedDate?.mainDish) === true
    ) {
      navigate("/summary");
      return;
    }
    console.log("handleSubmission", data);
    dispatch(
      submitMenuForm({
        id: currentMenuDate.id,
        cuisine: data.cuisineSelectOption,
        mainDish: data.mainDish,
        snack1: data.snack,
        snack2: data.snack1,
        drink: data.drink,
      })
    );
  };

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit(handleSubmission)}
        className="font-verlag-regular text-eggplant"
      >
        <div className="container py-5 px-3">
          <div className="row mb-5">
            <div className="col-lg-4">
              <h5>Calendar goes here</h5>
              <p>Submitted Date: {handleSubmission.date}</p>
              {selectedDates?.map((selectedDate) => (
                <p
                  key={selectedDate.id}
                  onClick={() => setCurrentMenuDate(selectedDate)}
                  className={classNames("menu-available-date", {
                    active: currentMenuDate?.id === selectedDate.id,
                  })}
                >
                  {selectedDate.date}
                </p>
              ))}
            </div>
            <div className="col-lg-1 d-flex justify-content-center">
              <span className="border-end"></span>
            </div>
            {currentMenuDate ? (
              <div className="col-lg-7">
                <div className="row mb-5 d-flex align-items-center">
                  <div className="col-lg-6">
                    <p className="align-middle m-0">
                      Pick your cuisine for {currentMenuDate.date}
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <select
                      {...register("cuisineSelectOption")}
                      name="cuisineSelectOption"
                      id="cuisineSelectOption"
                      className="form-select rounded-0 text-uppercase font-verlag-bold text-sm tracking-wide"
                      aria-label="cuisineSelectOption"
                    >
                      <option value="Indian">Indian</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Thailand">Thailand</option>
                    </select>
                  </div>
                </div>
                {dataMenu.map((data) => (
                  <div className="row" key={data.id}>
                    {data.foodCategory.map((category, i) => (
                      <div className="col-lg-12" key={i}>
                        <div className="row border-top pt-3">
                          <h5 className="text-uppercase font-verlag-black tracking-wide">
                            {category.category}
                          </h5>
                          <p>Please pick one (1) from oprions below</p>
                        </div>
                        <div className="row pb-4">
                          {category.foodMenu.map((menu, i) => (
                            <div className="col-lg-6" key={i}>
                              <div className="form-check">
                                <input
                                  {...register(menu.inputName)}
                                  className="form-check-input"
                                  type="radio"
                                  name={menu.inputName}
                                  id={menu.id}
                                  value={menu.id}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={menu.id}
                                >
                                  {menu.foodName}
                                </label>
                              </div>
                              <div className="d-flex">
                                <div className="ps-4 pe-2">
                                  <p className="description">
                                    {menu.description}
                                  </p>
                                  <h6>{menu.price}</h6>
                                </div>
                                <div
                                  className="d-flex flex-column align-items-center justify-content-center"
                                  style={{ backgroundColor: "#E8E7E8" }}
                                >
                                  <button
                                    type="button"
                                    className="btn count-button"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-chevron-up"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                                      />
                                    </svg>
                                  </button>
                                  <span>1</span>
                                  <button
                                    type="button"
                                    className="btn count-button"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-chevron-down"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="col-lg-7">
                <div className="row mb-5 d-flex align-items-center">
                  <div className="col-lg-6">
                    <p className="align-middle m-0">
                      Pick your cuisine date on the left
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-4">
              <button type="submit" className="btn main-button w-100 me-2">
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* <div className="container py-5 px-3">
        <div className="row font-verlag-regular text-eggplant mb-5">
          <div className="col-lg-4">
            <h5>Calendar goes here</h5>
            <p>Submitted Date: {handleSubmission.date}</p>
          </div>
          <div className="col-lg-1 d-flex justify-content-center">
            <span className="border-end"></span>
          </div>
          <div className="col-lg-7">
              <div className="row mb-5 d-flex align-items-center">
                <div className="col-lg-6">
                  <p className="align-middle m-0">
                    Pick your cuisine for Wed, 16 March 2022
                  </p>
                </div>
                <div className="col-lg-6">
                  <select
                    name="cuisineSelectOption"
                    id="cuisineSelectOption"
                    className="form-select rounded-0 text-uppercase font-verlag-bold text-sm tracking-wide"
                    aria-label="cuisineSelectOption"
                  >
                    <option value="Indian">Indian</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Thailand">Thailand</option>
                  </select>
                </div>
              </div>
              {dataMenu.map((data) => (
                <div className="row" key={data.id}>
                  {data.foodCategory.map((category, i) => (
                    <div className="col-lg-12" key={i}>
                      <div className="row border-top pt-3">
                        <h5 className="text-uppercase font-verlag-black tracking-wide">
                          {category.category}
                        </h5>
                        <p>Please pick one (1) from oprions below</p>
                      </div>
                      <div className="row pb-4">
                        {category.foodMenu.map((menu, i) => (
                          <div className="col-lg-6" key={i}>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name={menu.inputName}
                                id={menu.id}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={menu.id}
                              >
                                {menu.foodName}
                              </label>
                            </div>
                            <div className="d-flex">
                              <div className="ps-4 pe-2">
                                <p className="description">
                                  {menu.description}
                                </p>
                                <h6>{menu.price}</h6>
                              </div>
                              <div
                                className="d-flex flex-column align-items-center justify-content-center"
                                style={{ backgroundColor: "#E8E7E8" }}
                              >
                                <button
                                  type="button"
                                  className="btn count-button"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-chevron-up"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                                    />
                                  </svg>
                                </button>
                                <span>1</span>
                                <button
                                  type="button"
                                  className="btn count-button"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-chevron-down"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-4">
            <button
              type="submit"
              form="myform"
              className="btn main-button w-100 me-2"
            >
              Next
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

const dataMenu = [
  {
    id: 1,
    cuisine: "indonesia",
    foodCategory: [
      {
        category: "Main Dish",
        foodMenu: [
          {
            id: "mainDish1",
            inputName: "mainDish",
            foodName: "Seblak",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "Rp. 30.000",
          },
          {
            id: "mainDish2",
            inputName: "mainDish",
            foodName: "Cilok",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "Rp. 10.000",
          },
        ],
      },
      {
        category: "Snack",
        foodMenu: [
          {
            id: "snack1",
            inputName: "snack",
            foodName: "Kacang Sukro",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "Rp. 30.000",
          },
          {
            id: "snack2",
            inputName: "snack",
            foodName: "Emping",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "Rp. 10.000",
          },
          {
            id: "snack3",
            inputName: "snack1",
            foodName: "Seblak",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "Rp. 30.000",
          },
          {
            id: "snack4",
            inputName: "snack1",
            foodName: "Cilok",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "Rp. 10.000",
          },
        ],
      },
      {
        category: "Drink",
        foodMenu: [
          {
            id: "Drink1",
            inputName: "drink",
            foodName: "Ice Cream",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "Rp. 30.000",
          },
          {
            id: "Drink2",
            inputName: "drink",
            foodName: "Es Teh Manis",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "Rp. 10.000",
          },
        ],
      },
    ],
  },
];
