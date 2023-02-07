class User {
  constructor(data) {
    this.title = data.name.title;
    this.first = data.name.first;
    this.last = data.name.last;
    this.city = data.location.city;
    this.country = data.location.country;
    this.age = data.dob.age;
    this.email = data.email;
    this.photo = data.picture.large;
    this.present = false;
    this.element = null;
  }

  generateElement() {
    const userElement = document.createElement("div");
    userElement.classList.add("user");
    userElement.setAttribute("data-present", this.present);

    const childHTML = `
        <img src="${this.photo}">
        <div class="user--info">
            <h1>${this.title} ${this.first} ${this.last}</h1>
            <p>${this.age} years old</p>
            <p>${this.city}, ${this.country}</p>
        </div>
		<a href="mailto: ${this.email}">
			<span class="mail">✉️</span>
		</a>
        `;
    userElement.insertAdjacentHTML("afterbegin", childHTML);
    this.element = userElement;
  }
  render() {
    if (!this.element) {
      this.generateElement();
    }
    document.querySelector("main").appendChild(this.element);
  }

  invertPresence() {
    this.present = !this.present;
    this.element.setAttribute("data-present", this.present);
  }
}

export default User;
