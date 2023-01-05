import {Items} from "../model/Items";

export class ItemsManger {
    private itemsList: Items[] = [
        new Items(1, "sach giao khoa", "ddht", "1000", 10, 5, "sach,dep"),
        new Items(2, "sach tieng viet", "ddht", "900", 20, 5, "sach, dep"),
        new Items(3, "but", "ddht", "1000", 50, 5, "tot"),
        new Items(4, "tay", "ddht", "1000", 30, 5, "trang,dep"),
        new Items(5, "mu", "quan ao", "1000", 50, 5, "dep, xinh")
    ]


    public showItemsList() {
        return this.itemsList
    }

    finByName(name: string): Items[] {
        let result: Items[] = [];

        this.itemsList.forEach((item, index) => {
            if (item.getName().includes(name)) {
                result.push(item);
            }
        })
        return result;
    }

    public searchById(id: number) {
        for (let i = 0; i < this.itemsList.length; i++) {
            if (this.itemsList[i].getId() == id) {
                return +i;
            }
        }
        return -1;
    }

    public addItems(id: number, name: string, type: string, price: string, quantity: number, dateCreated: number, describe: string) {
        this.itemsList.push(new Items(id, name, type, price, quantity, dateCreated, describe));
    }

    updateItems(id: number, newItems: Items) {
        let code = this.searchById(id);
        if (code === -1) {
            return "Khong co hang hoa nay!";
        }
        console.log(code)
        this.itemsList[code] = newItems;
        return "Sua thanh cong!";
    }

    public deleteLover(id: number):number {
        let index = this.searchById(id);
        this.itemsList.splice(index, 1);
        return ;
    }
}