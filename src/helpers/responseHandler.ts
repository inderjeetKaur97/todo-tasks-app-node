import { Response } from "express";

class responseHandler {
  static success(res: Response, data: any = null, msg: String = 'Success') {
    return res.status(200).json({ success: true, message: msg, data: data });
  }

  static badRequest(res: Response, data: any = null, msg: String = 'Bad Request') {
    return res.status(400).json({ success: false, message: msg, data: data });
  }

  static notFound(res: Response, data: any = null, msg: String = 'Not Found') {
    return res.status(404).json({ success: false, message: msg, data: data });
  }

  static internalServerError(res: Response, data: any = null, msg: String = 'Internal Server Error') {
    return res.status(500).json({ success: false, message: msg, data: data });
  }

  static unauthorized(res: Response, data: any = null, msg: String = 'Unauthorized') {
    return res.status(401).json({ success: false, message: msg, data: data });
  }
}

export default responseHandler;
