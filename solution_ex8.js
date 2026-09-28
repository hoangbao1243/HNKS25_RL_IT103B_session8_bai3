const portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];
const portStatuses = ['AVAILABLE', 'CHARGING', 'ERROR', 'AVAILABLE', 'CHARGING', 'AVAILABLE'];
const portPowersKw = [250, 150, 60, 250, 60, 150];

portStatuses[portIds.indexOf('S01')] = 'CHARGING';
portStatuses[portIds.indexOf('S03')] = 'AVAILABLE';

let availableCount = 0;
let maxAvailablePower = 0;

for (let i = 0; i < portIds.length; i++) {
  console.log(`Trụ \({portIds[i]}:\){portStatuses[i]} (${portPowersKw[i]} kW)`);
  if (portStatuses[i] === 'AVAILABLE') {
    availableCount++;
    if (portPowersKw[i] > maxAvailablePower) {
      maxAvailablePower = portPowersKw[i];
    }
  }
}

console.log(`Số trụ AVAILABLE: ${availableCount}`);
console.log(`Công suất lớn nhất trụ AVAILABLE: ${maxAvailablePower} kW`);