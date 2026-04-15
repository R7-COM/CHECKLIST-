export interface ChecklistState {
  date: string;
  address: string;
  time: string;
  unit: string;
  sector: string;
  driver: string;
  registration: string;
  plate: string;
  initialKm: string;
  finalKm: string;
  photos: {
    front: string | null;
    rear: string | null;
    rightSide: string | null;
    leftSide: string | null;
  };
  items: {
    headlights: boolean;
    taillights: boolean;
    plateLight: boolean;
    extinguisher: boolean;
    seatbelt: boolean;
    reverseLight: boolean;
    airConditioning: boolean;
    horn: boolean;
    brakes: boolean;
    multimedia: boolean;
    jack: boolean;
    spareTire: boolean;
    battery: boolean;
    turnSignals: boolean;
  };
  fuelLevel: '1/4' | '2/4' | '3/4' | '4/4';
  waterLevel: '1/4' | '2/4' | '3/4' | '4/4';
  declaration: boolean;
  signatures: {
    responsible: string | null;
    driver: string | null;
  };
}
