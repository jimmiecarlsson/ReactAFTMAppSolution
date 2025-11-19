import { aftmTable } from "../data/aftm";

export function calcHeadWeight(aftm, lengthMeters) {
    if (!aftm) return 0;

    const entry = aftmTable.find((x) => x.aftm === aftm);
    if (!entry) return 0;

    const stdWeight = entry.stdWeight; // grams per 9.14m
    const gramsPerMeter = stdWeight / 9.14;

    return Number((gramsPerMeter * lengthMeters).toFixed(1));
}
