import dan from "./dan.js";
import dotnet from "./dotnet.js";
import josh from "./josh.js";
import jsToday from "./jsToday.js";
import swizec from "./swizec.js";
const getData = async () => {
  const jsTodayData = await jsToday();
  const danData = await dan();
  const dotnetData = await dotnet();
  const joshData = await josh();
  const swizecData = await swizec();
  return [
    ...jsTodayData,
    ...danData,
    ...dotnetData,
    ...joshData,
    ...swizecData,
  ];
};
export default getData;
