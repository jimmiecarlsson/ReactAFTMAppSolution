import { aftmTable } from "../data/aftm";

export function getAftmData(aftm) {
    return aftmTable.find((x) => x.aftm === aftm) || null;
}
