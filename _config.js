import lume from "https://deno.land/x/lume@v0.15.2/mod.js";

const site = lume();

site.copy("images");

export default site;
