"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
// encapsulation
class Account {
    constructor(id, name, balance) {
        this._id = id,
            this._name = name,
            this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    deposit(amount) {
        this._balance += amount;
    }
    withdraw(amount) {
        this._balance -= amount;
    }
}
exports.Account = Account;
