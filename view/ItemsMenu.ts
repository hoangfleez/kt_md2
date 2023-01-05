import {Items} from "../model/Items";
import {ItemsManger} from "../controller/ItemsManger";

const readlineSync = require('readline-sync');


export class ItemsMenu {
    private menu = `
    1.Danh sach hang hoa.
    2.Tim kiem thong tin hang hoa.
    3.Nhap thong tin mat hanng moi.
    4.Chinh sua thong tin mat hang.
    5.Xoa hang hoa khoi ung dung.`;

    private ItemsManager: ItemsManger = new ItemsManger();
    public selection(): void {
        while (true) {
            let choice;
            do {
                console.log(this.menu);
                choice = +readlineSync.question(" Hay chon so: ");
                if (choice < 1 || choice > 5) {
                    console.log("<---KHONG CO SO NAY. BAN HAY CHON LAI DI!!--->");
                }
            } while (choice < 1 || choice > 5);
            switch (choice) {
                case 1: {
                    console.table(this.ItemsManager.showItemsList());
                    break;
                }
                case 2: {
                    let name = readlineSync.question("Nhap ten hang hoa ban muon tim kiem: ");
                    console.table(this.ItemsManager.finByName(name));
                    break;

                }
                case 3: {
                    let id = readlineSync.question('Nhap ID:');
                    let notExist = -1;
                    let index = this.ItemsManager.searchById(id);
                    if (index == notExist) {
                        let name = readlineSync.question('Nhap ten hang:');
                        let type = readlineSync.question('Nhap loai hang:');
                        let price = readlineSync.question('Nhap gia:');
                        let quantity = readlineSync.question('Nhap so luong :');
                        let dateCreated = readlineSync.question('Nhap ngay :');
                        let describe = readlineSync.question('Nhap mo ta:');
                        this.ItemsManager.addItems(id, name, type, price, quantity, dateCreated, describe);
                        console.log("Da them hang hoa.")
                    } else {
                        console.log("ID nay da ton tai");
                    }
                    break;
                }
                case 4: {
                    let search = +readlineSync.question('Nhap ma hang ban muon sua:');
                    let newItems = this.inputItems(search);
                    this.ItemsManager.updateItems(search, newItems);

                    break;
                }
                case 5: {
                    let id = +readlineSync.question("Nhap id:");
                    let isIdExist = this.ItemsManager.searchById(id);
                    let no = -1;
                    while (true) {
                        if (isIdExist == no) {
                            console.log('Khong co hang nay')
                            break;
                        } else {
                            this.ItemsManager.deleteLover(id);
                            console.log('Xoa hang thanh cong.')
                            break;
                        }
                    }
                    break;
                }
                    break;
                default:
                    break;
            }
        }
    }


    private inputItems(id: number | null): Items {
        if (id !== null) {
            let index = -1;
            do {
                index = this.ItemsManager.searchById(id);
                if (index === -1) {
                    console.log("Ma nay khong ton tai. Vui long thu lai! ");
                } else {
                    let id = +readlineSync.question("Nhap id hang hoa:")
                    let name = readlineSync.question('Nhap ten hang:');
                    let type = readlineSync.question('Nhap loai hang:');
                    let price = readlineSync.question('Nhap gia:');
                    let quantity = readlineSync.question('Nhap so luong :');
                    let dateCreated = readlineSync.question('Nhap ngay :');
                    let describe = readlineSync.question('Nhap mo ta:');
                    return new Items(id, name, type, price, quantity, dateCreated, describe);
                }
            } while (index !== -1);
        } else {
            let id = +readlineSync.question("Nhap id hang hoa:")
            let name = readlineSync.question('Nhap ten hang:');
            let type = readlineSync.question('Nhap loai hang:');
            let price = readlineSync.question('Nhap gia:');
            let quantity = readlineSync.question('Nhap so luong :');
            let dateCreated = readlineSync.question('Nhap ngay :');
            let describe = readlineSync.question('Nhap mo ta:');
            return new Items(id, name, type, price, quantity, dateCreated, describe);
        }
    }
}
