import { Howl } from "howler";
import playSoundMP3 from "../../assets/chalk.mp3";

export const playSoundX = () => {
  interface SoundConfig {
    src: string[];
  }

  const soundConfig: SoundConfig = {
    src: [playSoundMP3],
  };

  const sound: Howl = new Howl(soundConfig);

  sound.play();
};

export const playSoundO = () => {
  interface SoundConfig {
    src: string[];
  }

  const soundConfig: SoundConfig = {
    src: [playSoundMP3],
  };

  const sound: Howl = new Howl(soundConfig);

  sound.play();
};
