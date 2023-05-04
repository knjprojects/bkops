import { Text as Tex} from "react-native";
import { styled } from "nativewind";
const Text=styled(Tex)
export default function Home() {
  return <Text className='text-black font-bold text-lg'>Home page</Text>;
}