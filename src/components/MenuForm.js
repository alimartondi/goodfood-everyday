import React from "react";

export default function MenuForm() {
  return (
    <div className="row font-verlag-regular text-eggplant">
      <div className="col-lg-4">
        <h5>Calendar goes here</h5>
      </div>
      <div className="col-lg-1 d-flex justify-content-center">
        <span className="border-end"></span>
      </div>
      <div className="col-lg-7">
        <div className="row mb-5 d-flex align-items-center">
          <div className="col-lg-6">
            <p className="align-middle m-0">
              Pick your cusine for Wed, 16 March 2022
            </p>
          </div>
          <div className="col-lg-6">
            <select
              name="cusineSelectOption"
              id="cusineSelectOption"
              className="form-select rounded-0 text-uppercase font-verlag-bold text-sm tracking-wide"
              aria-label="cusineSelectOption"
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
                        <label className="form-check-label" htmlFor={menu.id}>
                          {menu.foodName}
                        </label>
                      </div>
                      <div className="d-flex">
                        <div className="ps-4 pe-2">
                          <p className="description">{menu.description}</p>
                          <h6>{menu.price}</h6>
                        </div>
                        <div
                          className="d-flex flex-column align-items-center justify-content-center"
                          style={{ backgroundColor: "#E8E7E8" }}
                        >
                          <button className="btn count-button">
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
                          <button className="btn count-button">
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
            inputName: "Drink",
            foodName: "Ice Cream",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "Rp. 30.000",
          },
          {
            id: "Drink2",
            inputName: "Drink",
            foodName: "Es Teh Manis",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "Rp. 10.000",
          },
        ],
      },
    ],
  },
  // {
  //   id: 1,
  //   cuisine: "indonesia",
  //   foodCategory: [
  //     {
  //       mainDish: [
  //         {
  //           foodName: "Seblak",
  //         },
  //         {
  //           foodName: "Cilok",
  //         },
  //       ],
  //       Snack: [
  //         {
  //           foodName: "Sukro",
  //         },
  //         {
  //           foodName: "Borobudur",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   cuisine: "india",
  //   Snack: [
  //     {
  //       id: 23,
  //       name: "Seblak",
  //       description: "Lorem ipsum dolor sit amet.",
  //       price: "12000",
  //     },
  //     {
  //       id: 4,
  //       name: "Seblak",
  //       description: "Lorem ipsum dolor sit amet.",
  //       price: "12000",
  //     },
  //   ],
  // },
];