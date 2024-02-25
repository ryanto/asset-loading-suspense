export default async function middleware(req: Request) {
  let url = new URL(req.url);
  let delayParam = url.searchParams.get("delay");
  if (delayParam) {
    let delay = parseInt(delayParam, 10) ?? 0;
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}
