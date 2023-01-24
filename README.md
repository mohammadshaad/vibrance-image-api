# Vibrance Coming Soon API

![License - MIT](https://img.shields.io/badge/license-MIT-blue)

API endpoints for the Vibrance'23 coming soon page.

#### Environment Variables

- **`PORT`** - The listening port for the http server.
- **`BASE_URL`** - The base url of the deployment.

### Gallery

Returns a list of gallery images.

```
[GET] /api/gallery
```

```json
{
  "gallery": [
    "/images/gallery/0Q9A0457.jpg",
    "/images/gallery/0Q9A0633.jpg",
    "/images/gallery/0Q9A0634.jpg",
    "/images/gallery/0Q9A0812.jpg",
    "/images/gallery/2.2.18-2.jpg",
    "/images/gallery/IMG_0022.jpg",
    "/images/gallery/IMG_1529.jpg",
    "/images/gallery/IMG_9059.jpg",
    "/images/gallery/IMG_9272.jpg",
    "/images/gallery/VIB_D0_1.jpg"
  ]
}
```

#### Query Parameters

- **`page`** - An integer denoting the page of the gallery list.
