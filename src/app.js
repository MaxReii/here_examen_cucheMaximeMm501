"use strict";
import User from "./User.js";
const getUserInformations = async () => {
  const res = await fetch(`https://randomuser.me/api/?results=20`);
  const data = await res.json();
  console.log(data);
  const users = data.results.map((user) => ({
    title: user.name.title,
    first_name: user.name.first,
    last_name: user.name.last,
    city: user.location.city,
    country: user.location.country,
    age: user.dob.age,
    email: user.email,
    photo: user.picture.large,
  }));
  users.forEach((user) => {
    user.render();
  });
};
getUserInformations(User);
// // new User().generateElement();
// new User().generateElement()
