import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../entities/Platform";
import { HStack, Icon, Spinner } from "@chakra-ui/react";
import { IconType } from "react-icons";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const { data, isLoading, error } = usePlatforms();

  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: FaApple,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <HStack marginY={1}>
      {data?.results.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500">
          {platform.name}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
