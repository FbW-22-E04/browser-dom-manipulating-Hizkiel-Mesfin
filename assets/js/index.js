const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

// Sorting the books array

const booksSorted = books.sort((a, b) => {
  return a.author.split(" ").reverse().join(" ") <
    b.author.split(" ").reverse().join(" ")
    ? -1
    : 1;
});

// Heading

document.querySelector(".text-center").style.fontSize = "50px";

// Selecting the unordered list
const bookList = document.querySelector(".book-list");

// Append four li to the ul
for (let i = 0; i < 4; i++) {
  const li = document.createElement("li");
  bookList.appendChild(li);
}

// List items
const listItems = document.querySelectorAll("li");

listItems.forEach((el) => {
  const img = document.createElement("img");
  el.appendChild(img);

  const h3 = document.createElement("h3");
  el.appendChild(h3);

  const para = document.createElement("p");
  el.appendChild(para);

  const span = document.createElement("span");
  el.appendChild(span);

  el.style.listStyle = "none";
  el.style.width = "300px";
  el.style.height = "700px";
  el.style.border = "1px solid ";
  el.style.position = "relative";
  el.style.marginBottom = "30px";
});

// The images
const images = document.querySelectorAll("img");

images.forEach((el, i) => {
  el.setAttribute("src", `${booksSorted[i].img}`);
  el.style.width = "100%";
  el.style.height = "70%";
  el.style.border = "4px solid ";
});

// Book titles as h3

const titles = document.querySelectorAll("h3");

titles.forEach((el, i) => {
  el.textContent = `${booksSorted[i].title}`;
  el.style.marginTop = "20px";
  el.style.textAlign = "center";
});

// Author name as paragraph
const para = document.querySelectorAll("p");

para.forEach((el, i) => {
  el.textContent = `${booksSorted[i].author.split(" ").reverse().join(", ")}`;
  el.style.fontSize = "20px";
  el.style.textAlign = "center";
});

// Read stats

const span = document.querySelectorAll("span");

span.forEach((el, i) => {
  if (booksSorted[i].alreadyRead === true) {
    el.textContent = "Read";
    el.style.backgroundColor = "red";
  } else {
    el.textContent = "To read";
    el.style.backgroundColor = "violet";
  }

  el.style.color = "#fff";
  el.style.fontSize = "20px";
  el.style.fontWeight = "bold";
  el.style.padding = "5px 10px";
  el.style.color = "#fff";
  el.style.borderRadius = "12px";
  el.style.position = "absolute";
  el.style.right = "5%";
  el.style.bottom = "2%";
});
