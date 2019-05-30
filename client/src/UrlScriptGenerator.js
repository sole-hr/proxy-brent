const documentBody = document.querySelector("body");

// require all components first

// TITLE COMPONENT <- Ken
const titleScriptComponent = document.createElement("script");
titleScriptComponent.src = process.env.TITLE_URL;

// IMAGE GALLER COMPONENT <- Ken
const imageGalleryScriptComponent = document.createElement("script");
imageGalleryScriptComponent.src = process.env.IMAGE_GALLERY_URL;


// DESCRIPTION COMPONENT
const descriptionScriptComponent = document.createElement("script");
descriptionScriptComponent.src = process.env.DESCRIPTION_URL;

// require app
const appScriptComponent = document.createElement("script");
appScriptComponent.src = "./app-bundle.js";

// require renderer
const renderScript = document.createElement("script");
renderScript.src = "./renderer-bundle.js";

documentBody.append(titleScriptComponent);
documentBody.append(imageGalleryScriptComponent);
documentBody.append(descriptionScriptComponent);

documentBody.append(appScriptComponent);
documentBody.append(renderScript);
