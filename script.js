const time = new Date().toISOString();

let deviceId = localStorage.getItem("deviceId");

if (!deviceId) {
  deviceId = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
    .replace(/[018]/g, c =>
      (
        c ^
        crypto.getRandomValues(new Uint8Array(1))[0] &
        (15 >> (c / 4))
      ).toString(16)
    );

  localStorage.setItem("deviceId", deviceId);
}

const formData = new FormData();
formData.append("deviceId", deviceId);
formData.append("time", time);

fetch("https://formspree.io/f/xanrglgn", {
  method: "POST",
  headers: {
    "Accept": "application/json"
  },
  body: formData
})
.then(response => {
  window.location.href = "";
})
