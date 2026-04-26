// ══════════════ КАТАЛОГ МАСЕЛ LUBRIGARD ══════════════
// Чтобы добавить масло — добавьте строку в нужный массив.
// Чтобы удалить — удалите строку.

const OILS_CATALOG = {
  // Бензиновые и универсальные (бензин + дизель) моторные масла
  petrol: [
    { value: "Lubrigard Supreme Synthetic Pro 0W-20", label: "Supreme Synthetic Pro 0W-20 (бензин)" },
    { value: "Lubrigard Supreme Synthetic Pro 0W-30", label: "Supreme Synthetic Pro 0W-30 (бензин/дизель)" },
    { value: "Lubrigard Supreme Synthetic Pro 0W-40", label: "Supreme Synthetic Pro 0W-40 (бензин/дизель)" },
    { value: "Lubrigard Supreme Synthetic Pro 5W-20", label: "Supreme Synthetic Pro 5W-20 (бензин)" },
    { value: "Lubrigard Supreme Synthetic Pro 5W-30", label: "Supreme Synthetic Pro 5W-30 (бензин/газ)" },
    { value: "Lubrigard Supreme Synthetic Pro 5W-40", label: "Supreme Synthetic Pro 5W-40 (бензин/дизель)" },
    { value: "Lubrigard Supreme Synthetic Pro C3 0W-30", label: "Supreme Synthetic Pro C3 0W-30 (бензин/дизель)" },
    { value: "Lubrigard Supreme Synthetic Pro C3 5W-30", label: "Supreme Synthetic Pro C3 5W-30 (бензин/дизель)" },
    { value: "Lubrigard Supreme Synthetic Pro C5 0W-20", label: "Supreme Synthetic Pro C5 0W-20 (бензин/дизель)" },
    { value: "Lubrigard Supreme Pro 10W-40", label: "Supreme Pro 10W-40 (полусинтетика, бензин/дизель)" }
    { value: "Lubrigard Supreme Pro 5W-30", label: "Supreme Pro 5W-30 (полусинтетика, бензин/дизель)" }
  ],

  // Дизельные для коммерческого транспорта
  diesel: [
    { value: "Lubrigard Fleetmax Pro 10W-30", label: "Fleetmax Pro 10W-30 (дизель)" },
    { value: "Lubrigard Fleetmax Pro 10W-40", label: "Fleetmax Pro 10W-40 (дизель)" },
    { value: "Lubrigard Fleetmax Pro 15W-40", label: "Fleetmax Pro 15W-40 (дизель)" },
    { value: "Lubrigard Fleetmax Pro 0W-40", label: "Fleetmax Pro 0W-40 (дизель, ПАО)" },
    { value: "Lubrigard Fleetmax Pro 5W-40", label: "Fleetmax Pro 5W-40 (дизель)" },
    { value: "Lubrigard Fleetmax Pro CK 10W-30", label: "Fleetmax Pro CK 10W-30 (дизель)" },
    { value: "Lubrigard Fleetmax Pro CK 15W-40", label: "Fleetmax Pro CK 15W-40 (дизель)" },
    { value: "Lubrigard Fleetmax Pro E4 5W-30", label: "Fleetmax Pro E4 5W-30 (дизель, ПАО)" },
    { value: "Lubrigard Fleetmax Pro E4 10W-40", label: "Fleetmax Pro E4 10W-40 (дизель)" },
    { value: "Lubrigard Fleetmax Pro E6 5W-30", label: "Fleetmax Pro E6 5W-30 (дизель, ПАО)" },
    { value: "Lubrigard Fleetmax Pro E6 10W-40", label: "Fleetmax Pro E6 10W-40 (дизель)" },
    { value: "Lubrigard Fleetmax Pro HD 10W-40", label: "Fleetmax Pro HD 10W-40 (дизель)" },
    { value: "Lubrigard Fleetmax Pro HD 15W-40", label: "Fleetmax Pro HD 15W-40 (дизель)" }
  ]
};

// Заполнение селекта маслами
function fillOilSelect(selectElement, includeCustom = false) {
  selectElement.innerHTML = '<option value="" disabled selected>— Выберите масло —</option>';

  if (OILS_CATALOG.petrol.length > 0) {
    const petrolGroup = document.createElement('optgroup');
    petrolGroup.label = '🔵 Бензиновые / Универсальные';
    OILS_CATALOG.petrol.forEach(oil => {
      petrolGroup.innerHTML += `<option value="${oil.value}">${oil.label}</option>`;
    });
    selectElement.appendChild(petrolGroup);
  }

  if (OILS_CATALOG.diesel.length > 0) {
    const dieselGroup = document.createElement('optgroup');
    dieselGroup.label = '🟤 Дизельные (коммерческий транспорт)';
    OILS_CATALOG.diesel.forEach(oil => {
      dieselGroup.innerHTML += `<option value="${oil.value}">${oil.label}</option>`;
    });
    selectElement.appendChild(dieselGroup);
  }

  if (includeCustom) {
    const customOption = document.createElement('option');
    customOption.value = 'custom';
    customOption.textContent = 'Другое масло (ввести вручную)';
    selectElement.appendChild(customOption);
  }
}
