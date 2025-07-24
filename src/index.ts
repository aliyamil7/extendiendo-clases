import productsData from "./products.json";

class ListaDeCosas {
  name: string;
  cosas: any[] = [];
  constructor(name: string) {
    this.name = name;
  }
  add(nuevaCosa: any) {
    this.cosas.push(nuevaCosa);
  }
  getCosas() {
    return this.cosas;
  }
}

class Product {
  name: string;
  price: number;
  id: number;
  constructor(name: string, price: number, id: number) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

class ListaDeProductos extends ListaDeCosas {
  constructor(name: string) {
    super(name);
    this.cosas = productsData;
  }

  addProduct(newProduct: Product) {
    this.cosas.push(newProduct);
  }

  getProduct(id: number): Product | undefined {
    for (let i = 0; i < this.cosas.length; i++) {
      if (this.cosas[i].id === id) {
        return this.cosas[i];
      }
    }
    return undefined;
  }

  removeProduct(id: number) {
    this.cosas = this.cosas.filter((p) => p.id !== id);
  }

  getSortedByPrice(order: "asc" | "desc" = "asc"): Product[] {
    const copia = [...this.cosas];
    copia.sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    return copia;
  }
}

export { ListaDeProductos, Product };
