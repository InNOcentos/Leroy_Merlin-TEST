const data = {
  displayedName: {
    displayedName: {
      value: ["Профиль маячковый ПВХ 10 мм L3м"],
      description: "Полное наименование товара для клиента",
    },
  },
  stock: {
    stocks: {
      34: {
        2: "35",
        3: "42",
        4: "58",
        5: "57",
        6: "112",
        20: "51",
        22: "78",
        26: "34",
        32: "22",
        35: "358",
        40: "28",
        43: "68",
        45: "58",
        49: "31",
        51: "29",
        56: "42",
        62: "26",
        64: "0",
        65: "57",
        86: "15",
        114: "41",
        117: "46",
        143: "46",
        162: "4",
        171: "0",
        176: "12",
      },
    },
  },
};
const regionNumber = 34;

class Finder {
  constructor(obj) {
    this.data = obj;
  }
  getProductName() {
    return this.data["displayedName"]["displayedName"].value[0];
  }
  getArrayOfStoresWithProducts() {
    const stores = Object.entries(this.data.stock.stocks[regionNumber]);
    const nonEmptyStoresEntries = stores.filter((e) => e[1] > 0);
    const sortedStores = Object.fromEntries(nonEmptyStoresEntries);
    return sortedStores;
  }
  getStoreWithMaxProductCount() {
    const regionStores = this.data.stock.stocks[regionNumber];
    const regionStoresEntries = Object.entries(regionStores);
    let currentMax;
    let storeWithMaxProductsCount = {};
    for (let [key, value] of regionStoresEntries) {
      if (key === regionStoresEntries[0][0]) {
        currentMax = value;
        continue;
      }
      if (+value > currentMax) {
        currentMax = regionStores[key];
        storeWithMaxProductsCount = { [key]: value };
      }
    }
    return storeWithMaxProductsCount;
  }
}

const finder = new Finder(data);

console.log(finder.getProductName());
console.log(finder.getArrayOfStoresWithProducts());
console.log(finder.getStoreWithMaxProductCount());
