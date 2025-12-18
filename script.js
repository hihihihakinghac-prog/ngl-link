const time = new Date().toISOString();

let deviceId = localStorage.getItem("deviceId");

if (!deviceId) {
  deviceId = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
    .replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        .toString(16)
    );

  localStorage.setItem("deviceId", deviceId);
}

fetch("https://discord.com/api/webhooks/1443704225812058215/pfS9DPM1VtV5LGqyRKrnclWiIPlxu0UAYi0ATj5X4AMUN4mELMnCa2whfPfB9aNqQD3G", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    content:
      "DeviceID: " + deviceId + "\n" +
      "Čas: " + time
  })
})
.then(() => {
  window.location.href = "https://matousfinda10.github.io/anketa/dekuji";
});
