import { aftmTable } from "../data/aftm";

export function calcGramsPerMeter(aftm) {
    if (!aftm) return 0;

    const entry = aftmTable.find(x => x.aftm === aftm);
    if (!entry) return 0;

    return Number((entry.stdWeight / 9.14).toFixed(2));
}
