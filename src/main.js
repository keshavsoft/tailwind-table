// src/main.js

(async () => {
    window.KSHeaderVersion = "v2";
    window.KSHeaderTemplateVersion = "v1";

    const module = await import(
        `../bin/${window.KSHeaderVersion}/commands/table/template/${window.KSHeaderTemplateVersion}/initHeader.js`
    );

    window.KSTable = module.default;
})();
