import multer from 'multer'
import path from 'path'


// set destination
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/jpg']
    cb(null, allowed.includes(file.mimetype))
}

const upload = multer({ storage, fileFilter})

export default upload