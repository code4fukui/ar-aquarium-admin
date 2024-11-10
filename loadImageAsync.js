import { waitImageLoad } from "https://js.sabae.cc/waitImageLoad.js";
import { waitFileRead } from "https://js.sabae.cc/waitFileRead.js";
import { encodeData } from "https://code4fukui.github.io//dataencoder/encodeData.js";

export const loadImageAsync = async (file) => {
  const type = file.type;
  if (!type.startsWith("image/")) return null;
  const bin = await waitFileRead(file);
  const img = new Image();
  img.src = encodeData("image/jpeg", bin);
  await waitImageLoad(img);
  return img;
};
