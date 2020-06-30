const fs = require('fs')
const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: 'dmrpkseez',
  api_key: '218954266888641',
  api_secret: 'z_Q9L0gsneYqZCcsTo_ZDVKm7jE'
})
module.exports = async (req, res) => {
  const { file } = req.files
  await cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    if (err) {
      return res.json(err)
    }
    fs.unlinkSync(file.tempFilePath)
    return res.json(result)
  })
}
