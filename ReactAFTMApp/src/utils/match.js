// Match a rod and a line

export function matchRodAndLine(rod, line) {
    const idealCenter = (rod.idealMin + rod.idealMax) / 2;
    const diff = line.actualHeadWeight - idealCenter;

    let category = "";
    let message = "";

    if (diff < -1.5) {
        category = "too_light";
        message = "Linan ar tydligt för lätt för detta spö.";
    } else if (diff < -0.5) {
        category = "slightly_light";
        message = "Lite latt, fungerar för fin presentation.";
    } else if (diff <= 1.5) {
        category = "within";
        message = "Bra matchning.";
    } else if (diff <= 3.0) {
        category = "slightly_heavy";
        message = "Lite tung, bra för korta kast och större flugor.";
    } else {
        category = "too_heavy";
        message = "Risk for överbelastning av spöt vid längre kast.";
    }

    return {
        rodId: rod.id,
        lineId: line.id,
        diff,
        category,
        message
    };
}
