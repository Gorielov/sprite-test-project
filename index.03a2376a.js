var menuBtnRef=document.querySelector("[data-menu]"),mobileOpenMenuRef=document.querySelector("[data-open-menu]"),mobileCloseMenuRef=document.querySelector("[data-close-menu]");mobileOpenMenuRef.addEventListener("click",(function(){var e="true"===menuBtnRef.getAttribute("aria-expanded")||!1;menuBtnRef.classList.add("is-open"),menuBtnRef.setAttribute("aria-expanded",!e),document.body.classList.add("mob-menu-open")})),mobileCloseMenuRef.addEventListener("click",(function(){var e="true"===menuBtnRef.getAttribute("aria-expanded")||!1;menuBtnRef.classList.remove("is-open"),menuBtnRef.setAttribute("aria-expanded",!e),document.body.classList.remove("mob-menu-open")}));
//# sourceMappingURL=index.03a2376a.js.map
