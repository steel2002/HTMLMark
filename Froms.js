
const daySelect = document.getElementById("day");
for (let i = 1; i <= 31; i++) {
  let option = document.createElement("option");
  option.text = i;
  option.value = i;
  daySelect.add(option);
}


const yearSelect = document.getElementById("year");
for (let y = 1950; y <= 2025; y++) {
  let option = document.createElement("option");
  option.text = y;
  option.value = y;
  yearSelect.add(option);
}
