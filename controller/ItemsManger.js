"use strict";
exports.__esModule = true;
exports.ItemsManger = void 0;
var Items_1 = require("../model/Items");
var ItemsManger = /** @class */ (function () {
    function ItemsManger() {
        this.itemsList = [
            new Items_1.Items(1, "sach giao khoa", "ddht", "1000", 10, 5, "sach,dep"),
            new Items_1.Items(2, "sach tieng viet", "ddht", "900", 20, 5, "sach, dep"),
            new Items_1.Items(3, "but", "ddht", "1000", 50, 5, "tot"),
            new Items_1.Items(4, "tay", "ddht", "1000", 30, 5, "trang,dep"),
            new Items_1.Items(5, "mu", "quan ao", "1000", 50, 5, "dep, xinh")
        ];
    }
    ItemsManger.prototype.showItemsList = function () {
        return this.itemsList;
    };
    ItemsManger.prototype.finByName = function (name) {
        var result = [];
        this.itemsList.forEach(function (item, index) {
            if (item.getName().includes(name)) {
                result.push(item);
            }
        });
        return result;
    };
    ItemsManger.prototype.searchById = function (id) {
        for (var i = 0; i < this.itemsList.length; i++) {
            if (this.itemsList[i].getId() == id) {
                return +i;
            }
        }
        return -1;
    };
    ItemsManger.prototype.addItems = function (id, name, type, price, quantity, dateCreated, describe) {
        this.itemsList.push(new Items_1.Items(id, name, type, price, quantity, dateCreated, describe));
    };
    ItemsManger.prototype.updateItems = function (id, newItems) {
        var code = this.searchById(id);
        if (code === -1) {
            return "Khong co hang hoa nay!";
        }
        console.log(code);
        this.itemsList[code] = newItems;
        return "Sua thanh cong!";
    };
    ItemsManger.prototype.deleteLover = function (id) {
        var index = this.searchById(id);
        this.itemsList.splice(index, 1);
        return;
    };
    return ItemsManger;
}());
exports.ItemsManger = ItemsManger;
