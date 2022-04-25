import { Request, Response, NextFunction } from "express";
import { stripHtml } from "string-strip-html"

export default function dataSanitization(req: Request, res: Response, next: NextFunction) {
    let error = false

    Object.keys(req.body).forEach(param => {
        req.body[param] = stripHtml(req.body[param]).result.trim()
        req.body[param] === "" && (error = true)
    })

    if(error) {
      throw {type: 'unprocessable_entity', message: 'Invalid field informed.'}
    }

    next();
}