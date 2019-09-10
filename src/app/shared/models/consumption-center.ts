import { Img } from './img';
import { Href } from './href';
import { Schedule } from './schedule';

export interface ConsumptionCenter {
  name: string;
  concept?: string;
  img: Img;
  schedules: Schedule[];
  href: Href;
}
