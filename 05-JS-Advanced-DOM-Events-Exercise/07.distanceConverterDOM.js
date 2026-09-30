function attachEventsListeners() {
    const unitsToMeeters = {
        km: 1000, m: 1, cm: 0.01, mm: 0.001,
        mi: 1609.34, yrd: 0.92, ft: 0.30, in: 0.03
    }

    const inputDistance = document.getElementById('inputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');

    const outputDistance = document.getElementById('outputDistance');

    document.getElementById('convert').addEventListener('click', () => {
        const distansToMeeters = Number(inputDistance.value) * unitsToMeeters[inputUnits.value];
        outputDistance.value = (distansToMeeters / unitsToMeeters[outputUnits.value]).toFixed(2);
    })
}