import express, { Application } from "express"
import ejs from "ejs"
import chalk from "chalk"
import figlet from "figlet"
import { rootHandler, testHandler } from "./handlers"

export async function Server({ port }: { port: number }) {
  const staticDir = "./dist/static"
  const viewDir = "./dist/views"

  console.log(chalk.greenBright(figlet.textSync("HTMX Template Node Server")))

  const app: Application = express()
  app.use(express.static(staticDir))
  app.set("view engine", "ejs")
  app.engine("ejs", ejs.renderFile)
  app.set("views", viewDir)

  app.get("/", rootHandler)
  app.get("/api/test", testHandler)

  const server = app.listen(port, function () {
    console.log(chalk.greenBright(`Server listening on http://localhost:${port}`))
  })

  return new Promise<void>((resolve, reject) => {
    server.on("close", () => {
      console.log(chalk.greenBright("Server closed"))
      resolve()
    })
    server.on("error", (err) => {
      console.error(chalk.redBright("Server error"), err)
      reject(err)
    })
  })
}

if (require.main === module) {
  console.log(chalk.green("Starting dev server"))
  Server({ port: 4001 }).then(() => {
    console.log(chalk.green("Dev server terminated"))
  })
}
