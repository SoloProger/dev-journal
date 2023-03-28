const fs = require("fs");
const util = require("util");
const { pipeline } = require("stream");
const pump = util.promisify(pipeline);

class FileService {
  async upload(req, reply) {
    const dir = "src/uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const parts = await req.files();
    for await (const part of parts) {
      await pump(
        part.file,
        fs.createWriteStream(`src/uploads/${part.filename}`)
      );
    }
    reply.send({ message: "files uploaded" });
  }
}

module.exports = FileService;
