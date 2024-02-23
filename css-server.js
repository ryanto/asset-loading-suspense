import { readFile } from "node:fs/promises";
import { createServer } from "node:http";

const httpServer = createServer(async (req, res) => {
  let cssFiles = [
    [/three-body-problem/, "three-body-problem.css"],
    [/foundation/, "foundation.css"],
    [/dune/, "dune.css"],
    [/project-hail-mary/, "project-hail-mary.css"],
    [/recursion/, "recursion.css"],
    [/snow-crash/, "snow-crash.css"],
    [/the-martian/, "the-martian.css"],
  ];

  let imageFiles = [
    [/dune/, "dune.jpeg"],
    [/foundation/, "foundation.jpeg"],
    [/project-hail-mary/, "project-hail-mary.jpg"],
    [/recursion/, "recursion.jpg"],
    [/snow-crash/, "snow-crash.jpg"],
    [/the-martian/, "the-martian.jpg"],
    [/three-body-problem/, "three-body-problem.jpeg"],
  ];

  let url = new URL(req.url, `http://${req.headers.host}`);
  let delay = url.searchParams.get("delay") ?? 0;

  await new Promise((resolve) => setTimeout(resolve, delay));

  let type = req.url.match(/css/) ? "css" : "image";
  let searchFiles = type === "css" ? cssFiles : imageFiles;

  let result = searchFiles.find(([slug]) => req.url.match(slug));
  if (result) {
    let file = result[1];
    let prefix = type === "css" ? "./src/custom-css" : "./src/images";
    let fileUrl = new URL(`${prefix}/${file}`, import.meta.url);
    let contents = await readFile(fileUrl, type === "css" ? "utf-8" : "binary");

    res.writeHead(200, {
      "Content-Type": type === "css" ? "text/css" : "image/jpeg",
    });
    res.write(contents, type === "css" ? "utf-8" : "binary");
    res.end();
  } else {
    res.end();
  }
});

httpServer.listen(3002, "localhost", () => {});
