# 🛍\ Walka: Smart Cultural Journey Planner

**Walka** is an AI-powered cultural tourism assistant designed to help users plan meaningful, personalized travel experiences. By integrating Google's Gemini API with a structured itinerary format, Walka turns natural language input into organized, actionable travel plans in seconds.

## ✨ Features

- 🧠 **AI-Powered Planning**: Enter a simple request like "Hangzhou one-day tour", and Gemini will generate a complete travel itinerary.
- 🗓️ **Structured Output**: Plans are returned in a strict JSON format, including time, location, category, and description.
- 🔁 **Interactive Editing**: Users can modify generated plans through follow-up prompts (coming soon).
- 🎨 **Culturally-Themed UI**: The interface promotes Indigenous Australian and Yizu traditions, aligned with our mission.

## 📦 Tech Stack

- **Frontend**: Next.js (App Router), React, Ant Design
- **AI Integration**: [Google Generative AI (Gemini)](https://ai.google.dev/)
- **Language**: TypeScript javascript
- **Styling**: CSS with theme-based customization

## 🚀 How It Works

1. On the homepage, the user enters a travel query.
2. After clicking **Generate Plan**, the app routes to `/generate`.
3. The backend calls Gemini with a strict prompt and receives a valid JSON plan.
4. The left panel displays the structured plan; the right panel will support interactive edits.

## 🤩 Example Input

> "Hangzhou one-day tour"

### ✅ Example Output (Generated JSON)

```json
{
  "date": "2024-03-16",
  "plan": [
    {
      "time": "08:00-09:00",
      "name": "Lingyin Temple",
      "query": "Lingyin Temple Hangzhou",
      "type": "cultural",
      "info": "Explore the historic Buddhist temple and its surrounding grottos."
    },
    {
      "time": "09:30-11:00",
      "name": "Feilai Feng Grottoes",
      "query": "Feilai Feng Grottoes",
      "type": "cultural",
      "info": "Discover the ancient Buddhist carvings within the grottoes near Lingyin Temple."
    },
    {
      "time": "11:30-13:00",
      "name": "Longjing Tea Plantation",
      "query": "Longjing Tea Plantation",
      "type": "nature",
      "info": "Visit a traditional tea plantation and sample the famous Longjing tea."
    },
    {
      "time": "13:30-14:30",
      "name": "Lunch at Green Tea Restaurant",
      "query": "Green Tea Restaurant Hangzhou",
      "type": "food",
      "info": "Enjoy local Hangzhou cuisine at this popular restaurant."
    },
    {
      "time": "15:00-17:00",
      "name": "West Lake Boat Ride",
      "query": "West Lake Boat Ride",
      "type": "outdoor",
      "info": "Take a boat tour on West Lake and admire the scenic views."
    },
    {
      "time": "17:30-18:30",
      "name": "Leifeng Pagoda",
      "query": "Leifeng Pagoda",
      "type": "historic",
      "info": "Climb the pagoda for panoramic views of West Lake and the city."
    },
    {
      "time": "19:00-20:00",
      "name": "Hubin Food Street",
      "query": "Hubin Food Street Hangzhou",
      "type": "food",
      "info": "Enjoy dinner and explore the vibrant food street near West Lake."
    }
  ]
}
```

## 📂 Project Structure

```
/app
  ├── /api/gemini/init.ts     # Initial Gemini call with prompt
  ├── /generate/page.tsx      # Display and modify generated plan
  └── /page.tsx               # Homepage (user input and route trigger)
```

## 💪 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/longsizhuo/walka.git
   cd walka
   ```

2. Install dependencies:
   ```bash
   pnpm install
   pnpm setup
   pnpm install -g @cablate/mcp-google-map
   ```

3. Set your **environment** variable, open [.template_env](.template_env), change its name to `.env`, and fill in your Google API key:
    ```text
    API_KEY_GEMINI="?"
    API_KEY_MCP="?"
    ```
4. Run the app:
   ```bash
   pnpm dev
   # or
   next
   ```

## 🤝 Acknowledgments

- Developed by [@Runze Tian](https://github.com/FFF108822)
- Powered by [Google GenAI](https://ai.google.dev/)
- Inspired by cultural storytelling and travel empowerment

