import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = (platform? : Platform) => useData<Platform>('/platforms/lists/parents');
  
export default usePlatforms;