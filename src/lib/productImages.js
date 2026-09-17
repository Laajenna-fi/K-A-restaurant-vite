const modules = import.meta.glob("../assets/images/pizzas/*", {
  eager: true,
  import: "default",
});

const imagesByFilename = {};
for (const path in modules) {
  const filename = path.split("/").pop();
  imagesByFilename[filename] = modules[path];
}

export const getProductImage = (filename) => imagesByFilename[filename];
