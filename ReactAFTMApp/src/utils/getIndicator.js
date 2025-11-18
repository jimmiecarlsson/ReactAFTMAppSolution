export function getIndicator(weight, aftmInfo) {
    if (!aftmInfo || !weight) {
        return { color: "secondary", text: "Ingen data" };
    }

    const { minWeight, maxWeight } = aftmInfo;

    const tolerance = 0.3;

    // Perfect match (green)
    if (weight >= minWeight && weight <= maxWeight) {
        return { color: "success", text: "Perfekt match" };
    }

    // Near boundary (yellow)
    if (
        (weight >= minWeight - tolerance && weight < minWeight) ||
        (weight > maxWeight && weight <= maxWeight + tolerance)
    ) {
        return { color: "warning", text: "Nära gränsen" };
    }

    // Too light or too heavy (red)
    if (weight < minWeight - tolerance) {
        return { color: "danger", text: "För lätt" };
    }

    if (weight > maxWeight + tolerance) {
        return { color: "danger", text: "För tung" };
    }

    return { color: "secondary", text: "Okänt" };
}
