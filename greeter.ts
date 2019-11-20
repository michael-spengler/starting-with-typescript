function greeter(person) {
  return `Hello ${person}`;
}

let user = "Student";

document.body.innerHTML = `<h1 style="text-align: center;">${greeter(
  user
)}</h1>`;
