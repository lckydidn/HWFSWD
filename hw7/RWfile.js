import { readFile, writeFile } from "fs/promises";

export async function readWritefile(pathRead, pathWrite) {
  try {
    const data = await readFile(pathRead, "utf-8");
    await writeFile(pathWrite, data, "utf-8");
    return data;
  } catch (e) {
    console.log(e);
  }
}
