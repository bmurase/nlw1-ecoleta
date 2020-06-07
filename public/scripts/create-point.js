function handlePopulateUFs() {
  const ufSelect = document.querySelector("select[name=uf]");

  fetch(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
  )
    .then((response) => response.json())
    .then((data) => {
      for (const item of data) {
        ufSelect.innerHTML += `<option value="${item.id}">${item.nome}</option>`;
      }
    });
}

handlePopulateUFs();

function getCities(event) {
  const citySelect = document.querySelector("select[name=city]");
  const stateInput = document.querySelector("input[name=state]");

  const selectedIndex = event.target.selectedIndex;
  stateInput.value = event.target.options[selectedIndex].text;

  const ufValue = event.target.value;
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios?orderBy=nome`;

  citySelect.innerHTML = "<option value>Selecione uma cidade</option>";
  citySelect.disabled = true;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (const item of data) {
        citySelect.innerHTML += `<option value="${item.nome}">${item.nome}</option>`;
      }

      citySelect.disabled = false;
    });
}

document.querySelector("select[name=uf]").addEventListener("change", getCities);

const itemsToCollect = document.querySelectorAll(".items-grid li");

for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem);
}

const items = document.querySelector("input[name=items]");
let selectedItems = [];

function handleSelectedItem(event) {
  const itemLi = event.target;

  itemLi.classList.toggle("selected");

  const itemId = itemLi.dataset.id;

  const alreadySelected = selectedItems.findIndex((item) => item === itemId);

  if (alreadySelected >= 0) {
    const filtered = selectedItems.filter((item) => item !== itemId);
    selectedItems = filtered;
  } else {
    selectedItems.push(itemId);
  }

  items.value = selectedItems;
}
