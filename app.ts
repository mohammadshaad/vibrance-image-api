import express, { Response } from "express";
import fs from "fs";
import { BASE_URL } from "./config";

const app = express();
const router = express.Router();
const LIMIT = 10;

router.use(express.static(__dirname + '/public'));

router.get('/api/gallery', (req, res) => {
  var page = 1;

  if ('page' in req.query) {
    page = parseInt(req.query.page as string);

    if (isNaN(page)) {
      return invalidParameterValue(res, 'page');
    }
  }

  const offset = (page - 1) * LIMIT;
  const images = fs.readdirSync(__dirname + '/public/images/gallery');
  const sliced_images = images.slice(offset, offset + LIMIT).map((i) => {
    return `${BASE_URL ?? ''}/images/gallery/${i}`;
  });
  
  res.status(200).json({
    gallery: sliced_images
  });
});

router.all('/*', (req, res) => {
  res.status(404).json({
    error: 'Invalid API endpoint or request method.'
  });
});

app.use('/', router);
app.use('/.netlify/functions/server', router);

function invalidParameterValue(res: Response, parameter: string) {
  res.status(400).json({
    error: `Invalid value for parameter '${parameter}'`
  });
}

export default app;