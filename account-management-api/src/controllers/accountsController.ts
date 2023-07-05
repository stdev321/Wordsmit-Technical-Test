import { Request, Response } from "express";

interface Account {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
}

let accounts: Account[] = [];

export function getAccounts(req: Request, res: Response): void {
  res.json(accounts);
}

export function getAccountById(req: Request, res: Response): void {
  const { id } = req.params;
  const account = accounts.find((acc) => acc.id === id);
  if (!account) {
    res.status(404).json({ message: "Account not found" });
  } else {
    res.json(account);
  }
}

export function createAccount(req: Request, res: Response): void {
  const newAccount: Account = req.body;
  accounts.push(newAccount);
  res.status(201).json(newAccount);
}

export function updateAccount(req: Request, res: Response): void {
  const { id } = req.params;
  const updatedAccount: Account = req.body;
  const accountIndex = accounts.findIndex((acc) => acc.id === id);
  if (accountIndex === -1) {
    res.status(404).json({ message: "Account not found" });
  } else {
    accounts[accountIndex] = { ...accounts[accountIndex], ...updatedAccount };
    res.json(accounts[accountIndex]);
  }
}

export function deleteAccount(req: Request, res: Response): void {
  const { id } = req.params;
  const accountIndex = accounts.findIndex((acc) => acc.id === id);
  if (accountIndex === -1) {
    res.status(404).json({ message: "Account not found" });
  } else {
    const deletedAccount = accounts.splice(accountIndex, 1);
    res.json(deletedAccount);
  }
}
