let slider = document.querySelector("#slider");
let btn = document.querySelector("#btn");
let monthlyPrice = document.querySelector(".monthly_price");
let preview = document.querySelector(".preview_span");
let dolars = "$";
let price = 0;

slider.oninput = change;
window.onload = change;
btn.oninput = change;

function change() {
  if (btn.value === "0") {
    btn.style.setProperty("--webkitBgOn", "hsl(223, 50%, 87%)");
    btn.style.setProperty("--justForMoz", "translateX(5px)"); // for thumb just for Moz
  } else {
    btn.style.setProperty("--webkitBgOn", "hsl(174, 86%, 60%)");
    btn.style.setProperty("--justForMoz", "translateX(-5px)"); // for thumb just for Moz
  }

  const percent =
    ((slider.value - slider.min) / (slider.max - slider.min)) * 100;

  slider.style.setProperty("--webkitProgressPercent", percent + "%");

  switch (slider.value) {
    case "1":
      if (btn.value == 1) {
        price = 8 * 0.75;
      } else {
        price = 8;
      }
      price = price.toFixed(2);
      preview.textContent = "10k";
      monthlyPrice.textContent = dolars + price;

      break;
    case "2":
      if (btn.value == 1) {
        price = 12 * 0.75;
      } else {
        price = 12;
      }
      price = price.toFixed(2);
      preview.textContent = "50k";
      monthlyPrice.textContent = dolars + price;

      break;
    case "3":
      if (btn.value == 1) {
        price = 16 * 0.75;
      } else {
        price = 16;
      }
      price = price.toFixed(2);
      preview.textContent = "100k";
      monthlyPrice.textContent = dolars + price;

      break;
    case "4":
      if (btn.value == 1) {
        price = 36 * 0.75;
      } else {
        price = 24;
      }
      price = price.toFixed(2);
      preview.textContent = "500k";
      monthlyPrice.textContent = dolars + price;

      break;
    case "5":
      if (btn.value == 1) {
        price = 36 * 0.75;
      } else {
        price = 36;
      }
      price = price.toFixed(2);
      preview.textContent = "1m";
      monthlyPrice.textContent = dolars + price;

      break;
  }
}
