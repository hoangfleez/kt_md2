"use strict";
exports.__esModule = true;
exports.ItemsMenu = void 0;
var Items_1 = require("../model/Items");
var ItemsManger_1 = require("../controller/ItemsManger");
var readlineSync = require('readline-sync');
var ItemsMenu = /** @class */ (function () {
    function ItemsMenu() {
        this.menu = "\n    1.Danh sach hang hoa.\n    2.Tim kiem thong tin hang hoa.\n    3.Nhap thong tin mat hanng moi.\n    4.Chinh sua thong tin mat hang.\n    5.Xoa hang hoa khoi ung dung.";
        this.ItemsManager = new ItemsManger_1.ItemsManger();
    }
    ItemsMenu.prototype.selection = function () {
        while (true) {
            var choice = void 0;
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
                    var name_1 = readlineSync.question("Nhap ten hang hoa ban muon tim kiem: ");
                    console.table(this.ItemsManager.finByName(name_1));
                    break;
                }
                case 3: {
                    var id = readlineSync.question('Nhap ID:');
                    var notExist = -1;
                    var index = this.ItemsManager.searchById(id);
                    if (index == notExist) {
                        var name_2 = readlineSync.question('Nhap ten hang:');
                        var type = readlineSync.question('Nhap loai hang:');
                        var price = readlineSync.question('Nhap gia:');
                        var quantity = readlineSync.question('Nhap so luong :');
                        var dateCreated = readlineSync.question('Nhap ngay :');
                        var describe = readlineSync.question('Nhap mo ta:');
                        this.ItemsManager.addItems(id, name_2, type, price, quantity, dateCreated, describe);
                        console.log("Da them hang hoa.");
                    }
                    else {
                        console.log("ID nay da ton tai");
                    }
                    break;
                }
                case 4: {
                    var search = +readlineSync.question('Nhap ma hang ban muon sua:');
                    var newItems = this.inputItems(search);
                    this.ItemsManager.updateItems(search, newItems);
                    break;
                }
                case 5:
                    {
                        var id = +readlineSync.question("Nhap id:");
                        var isIdExist = this.ItemsManager.searchById(id);
                        var no = -1;
                        while (true) {
                            if (isIdExist == no) {
                                console.log('Khong co hang nay');
                                break;
                            }
                            else {
                                this.ItemsManager.deleteLover(id);
                                console.log('Xoa hang thanh cong.');
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
    };
    ItemsMenu.prototype.inputItems = function (id) {
        if (id !== null) {
            var index = -1;
            do {
                index = this.ItemsManager.searchById(id);
                if (index === -1) {
                    console.log("Ma nay khong ton tai. Vui long thu lai! ");
                }
                else {
                    var id_1 = +readlineSync.question("Nhap id hang hoa:");
                    var name_3 = readlineSync.question('Nhap ten hang:');
                    var type = readlineSync.question('Nhap loai hang:');
                    var price = readlineSync.question('Nhap gia:');
                    var quantity = readlineSync.question('Nhap so luong :');
                    var dateCreated = readlineSync.question('Nhap ngay :');
                    var describe = readlineSync.question('Nhap mo ta:');
                    return new Items_1.Items(id_1, name_3, type, price, quantity, dateCreated, describe);
                }
            } while (index !== -1);
        }
        else {
            var id_2 = +readlineSync.question("Nhap id hang hoa:");
            var name_4 = readlineSync.question('Nhap ten hang:');
            var type = readlineSync.question('Nhap loai hang:');
            var price = readlineSync.question('Nhap gia:');
            var quantity = readlineSync.question('Nhap so luong :');
            var dateCreated = readlineSync.question('Nhap ngay :');
            var describe = readlineSync.question('Nhap mo ta:');
            return new Items_1.Items(id_2, name_4, type, price, quantity, dateCreated, describe);
        }
    };
    return ItemsMenu;
}());
exports.ItemsMenu = ItemsMenu;
