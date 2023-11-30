import "./style.css";
import header from "./templates/header.html?raw";
import body from "./templates/body.html?raw";
import footer from "./templates/footer.html?raw";

console.log(header);
document.querySelector<HTMLDivElement>("#app")!.innerHTML = [header, body, footer].join(
  "",
);
