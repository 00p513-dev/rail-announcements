import SouthernClass377 from './systems/rolling-stock/SNClass377'
import ThameslinkClass700 from './systems/rolling-stock/TLClass700'
import KeTechPhil from './systems/stations/KeTechPhil'

import TrainAnnouncementSystem from './TrainAnnouncementSystem'
import StationAnnouncementSystem from './StationAnnouncementSystem'

export const AllTrainAnnouncementSystems: { new (): TrainAnnouncementSystem }[] = [ThameslinkClass700, SouthernClass377]

export const AllStationAnnouncementSystems: { new (): StationAnnouncementSystem }[] = [KeTechPhil]

export const AllAnnouncementSystems: { new (): TrainAnnouncementSystem | StationAnnouncementSystem }[] = [
  ...AllStationAnnouncementSystems,
  ...AllTrainAnnouncementSystems,
]
