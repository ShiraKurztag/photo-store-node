
# Photo Store Node.js API 🛠

This is the backend of the **Photo Store** application, built with **Node.js** and **Express**. This API handles the backend logic for managing print products, user authentication, and shopping cart functionality.

## 🚀 Features

- User authentication and authorization using JWT
- Admin users can manage products and users
- Customers can browse products, add to cart, and complete purchases
- Shopping cart and product management with the ability to view and update items

---

## 🛠 Technologies Used

- **Backend Framework:** Node.js with Express
- **Database:** MongoDB
- **Authentication:** JWT
- **Request Handling:** Express
- **API Routes:** RESTful endpoints

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ShiraKurztag/photo-store-node.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your database connection in `.env` file.

4. Start the application:
   ```bash
   npm start
   ```

---

## 📂 Project Structure

```
server/
├── controllers/
├── models/
├── routes/
├── services/
└── app.js
```

---

## 🔗 Related Projects

| Component  | Description                        | Link                                                   |
|------------|------------------------------------|--------------------------------------------------------|
| 🎨 Frontend | React client for user interaction  | [photo-store-react](https://github.com/ShiraKurztag/photo-store-react) |

---

## 📄 Notes

- The backend communicates with the frontend via HTTP REST API.
- JWT is used for user authentication.
- Ensure you set up the correct database configuration in `.env`.
