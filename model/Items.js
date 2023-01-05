"use strict";
exports.__esModule = true;
exports.Items = void 0;
var Items = /** @class */ (function () {
    function Items(id, name, type, price, quantity, dateCreated, describe) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._quantity = quantity;
        this._dateCreated = dateCreated;
        this._describe = describe;
    }
    Items.prototype.getId = function () {
        return this._id;
    };
    Items.prototype.setId = function (value) {
        this._id = value;
    };
    Items.prototype.getName = function () {
        return this._name;
    };
    Items.prototype.setName = function (value) {
        this._name = value;
    };
    Items.prototype.getType = function () {
        return this._type;
    };
    Items.prototype.setType = function (value) {
        this._type = value;
    };
    Items.prototype.getPrice = function () {
        return this._price;
    };
    Items.prototype.setPrice = function (value) {
        this._price = value;
    };
    Items.prototype.getQuantity = function () {
        return this._quantity;
    };
    Items.prototype.setQuantity = function (value) {
        this._quantity = value;
    };
    Items.prototype.getDateCreated = function () {
        return this._dateCreated;
    };
    Items.prototype.setDateCreated = function (value) {
        this._dateCreated = value;
    };
    Items.prototype.getDescribe = function () {
        return this._describe;
    };
    Items.prototype.setDescribe = function (value) {
        this._describe = value;
    };
    return Items;
}());
exports.Items = Items;
