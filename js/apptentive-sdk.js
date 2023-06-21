(() => {
    const button = document.querySelector(".linked-link");

    button.addEventListener("click", () => {
        console.log("Button was clicked");
    })
    button.ApptentiveSDK.engage('linkedin-link');
})();