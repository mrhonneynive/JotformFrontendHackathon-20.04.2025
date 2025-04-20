# Jotform Frontend Hackathon Project

This is a frontend e-commerce project built for the **Jotform Hackathon – April 20, 2025**.  
It uses **React + React Router + TypeScript**, **Tailwind CSS + DaisyUI**, **Prettier + ESLint**, and is powered by **Vite** for fun and fast dev experience.

---

## User Information

- **Name**: Hasan Hüseyin Balbıçak

---

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

You will need environment variables to fetch data from the Jotform API.

```env
VITE_JOTFORM_API_KEY=your_jotform_api_key_here
VITE_FORMID_1=your_first_form_id
VITE_FORMID_2=your_second_form_id
VITE_FORMID_3=your_third_form_id
```

### 4. Start the app via development server

```bash
npm run dev
```

Then open your browser to [http://localhost:5173](http://localhost:5173)

---

## 🧱 Tech Stack

- React
- React Router
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI

---

---

## ✅ Completed Features

| Feature Category       | Description                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| 🛒 Product List        | Fetched via Jotform API, displayed with name, price, and image                   |
| 🔍 Product Detail      | Detail page shows all metadata, options, and images for the selected item        |
| ➕ Add to Cart         | Products can be added from both list and detail views                            |
| 🧺 Shopping Cart       | Dropdown cart shows live items with quantity and remove button                   |
| ➖ Remove from Cart    | Products can be removed or decreased from cart via dropdown                      |
| 🔢 Quantity Management | Automatically increases quantity when item is re-added                           |
| 💾 LocalStorage Usage  | Selected product data is passed between pages using localStorage                 |
| 🧭 Navigation          | Fully working navigation with React Router (`ProductsPage`, `ProductDetailPage`) |
| 🎨 UI Framework        | Responsive design using Tailwind CSS and DaisyUI                                 |
| 📄 Setup Instructions  | Clear `.env` and usage steps provided in `README.md`                             |

---

## ⭐ Bonus Features Implemented

| Bonus Feature                   | Status     | Notes                                                       |
| ------------------------------- | ---------- | ----------------------------------------------------------- |
| ✅ LocalStorage for persistence | ✅ Done    | Used to pass selected product between views                 |
| 🔜 Checkout page (optional)     | ❌ Not yet | Could be added (payment form, total summary, submit button) |
| 🔜 Filtering by category        | ❌ Not yet | Could be implemented with `connectedCategories`             |
| 🔜 Favorite products            | ❌ Not yet | Could be tracked via another local state or localStorage    |

---

## 📝 Notes

- This is a **development-only app** and is not deployed.
- If needed, you can build it with:

```bash
npm run build
```

## 📄 License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for full details.
