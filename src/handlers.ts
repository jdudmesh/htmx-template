import { Request, Response } from "express"

export function rootHandler(req: Request, res: Response) {
  res.render("index", { title: "HTMX Template" })
}

export function testHandler(req: Request, res: Response) {
  res.render("test-list", { items: ["Item 1", "Item 2", "Item 3"] })
}
