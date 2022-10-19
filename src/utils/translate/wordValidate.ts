import axios from "axios";

export const translate = async (
  word: string,
  from_lang = "en",
  to_lang = "th"
): Promise<string | null> => {
  try {
    word = word.replace(/\n/g, "<br>");
    let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from_lang}&tl=${to_lang}&dt=t&ie=UTF-8&oe=UTF-8&q=${encodeURIComponent(
      word
    )}`;
    const resp = await axios.get(url);
    if (!resp.data) return null;
    if (resp.data[0][0][0] === word) return null; //if not foud word will get same word
    return resp.data[0][0][0] as string;
  } catch (err) {
    console.error(err);
    return null;
  }
};
