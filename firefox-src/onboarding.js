const permissionsToRequest = {
  origins: [
    "*://*.youtube.com/*",
    "*://*.youtube-nocookie.com/*",
    "*://*.twitter.com/*",
    "*://*.x.com/*",
    "*://*.medium.com/*",
    "*://*.tiktok.com/*",
    "*://*.quora.com/*",
    "*://*.fandom.com/*",
    "*://*.imdb.com/*",
    "*://*.genius.com/*",
    "*://*.goodreads.com/*",
    "*://*.imgur.com/*",
    "*://*.pixiv.net/*",
    "*://*.urbandictionary.com/*",
    "*://*.ultimate-guitar.com/*",
    "*://*.twitch.tv/*",
    "*://*.instagram.com/*",
    "*://*.wolframalpha.com/*",
    "*://*.bandcamp.com/*",
    "*://*.tumblr.com/*",
    "*://*.soundcloud.com/*",
  ],
};
async function requestPermissions() {
  function onResponse(response) {
    if (response) {
      console.log("Permission was granted");
      request.textContent =
        "Permissions granted";
        request.style.backgroundColor = "var(--green-color)";
    } else {
      console.log("Permission was refused");
      request.textContent =
        "Permissions refused";
        request.style.backgroundColor = "var(--red-color)";
    }
    return browser.permissions.getAll();
  }

  const response = await browser.permissions.request(permissionsToRequest);
  const currentPermissions = await onResponse(response);

  console.log(`Current permissions:`, currentPermissions);
}
document
  .querySelector("#request")
  .addEventListener("click", requestPermissions);
