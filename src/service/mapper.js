import service from "./index";

export async function mapper() {
  const cols = await service.get("/cols");
  const data = await service.get("/data");

  const result = data.data.map((item, index) => {
    let obj = {};
    cols.data.forEach((col, index) => {
      obj[col] = item[index];
    });
    return obj;
  });

  return result;
}
