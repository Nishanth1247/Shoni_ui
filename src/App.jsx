import { useState } from "react";
import heisenberg from './assets/heisenberg.jpg'
import max from './assets/max.jpg'
import jd from './assets/jd.jpg'
import thor from './assets/thor.jpg'
import jonsnow from './assets/jon_snow.jpg'
import tony from './assets/tony_stark.jpg'
import dhoni from './assets/dhoni.jpg'

const chats = [
  { id: 1, name: "Heisenberg", last: "You're Goddamn Right.", online: true, img: heisenberg },
  { id: 2, name: "Max", last: "Pls. Let go for date tonight 🥰🥰🥰", online: true, img: max },
  { id: 3, name: "JD (John Durairaj)", last: "Good Night 😴😴😴", online: false, img: jd },
  { id: 4, name: "Thor", last: "Give me Powers my god.", online: true, img: thor },
  { id: 5, name: "Jon Snow", last: "Help me to win battle of bastards.", online: false, img: jonsnow },
  { id: 6, name: "Tony Stark", last: "Hey, are you free or jerking ??", online: true, img:tony },
  { id: 7, name: "M S Dhoni", last: "Is this my last year or not ??", online: false, img:dhoni },
];

const navItems = [
  { id: "home", icon: "🏠", label: "Home" },
  { id: "search", icon: "🔍", label: "Search" },
  { id: "chat", icon: "💬", label: "Chats" },
  { id: "notify", icon: "🔔", label: "Alerts" },
  { id: "profile", icon: "👤", label: "Profile" },
];

export default function App() {
  const heisenberg = chats[0];
  const [activeTab, setActiveTab] = useState("chat");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Say my name.", me: false },
    { id: 2, text: "You're Walter White.", me: true },
    { id: 3, text: "Tell my business name.", me: false },
    { id: 4, text: "You're Heisenberg.", me: true },
    { id: 5, text: "You're goddamn right.", me: false },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, me: true }]);
    setInput("");
  };

  return (
    <div className="h-screen bg-gradient-to-br from-black via-neutral-950 to-black text-neutral-200 flex flex-col">
      <header className="h-16 px-6 flex items-center justify-between bg-black/40 backdrop-blur-xl border-b border-yellow-400/10">
        <h1 className="text-xl font-extrabold tracking-tight">
          <span className="text-neutral-100">Sho</span>
          <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">ni</span>
        </h1>
        <span className="text-sm text-yellow-400/70">Messages</span>
      </header>
      <main className="flex-1 p-3 overflow-hidden">
        <div className="h-full rounded-3xl border border-yellow-400/10 bg-neutral-950/60 backdrop-blur-2xl flex overflow-hidden">
          <aside className="hidden md:block md:w-1/3 border-r border-yellow-400/10 overflow-y-auto">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className="px-5 py-4 flex gap-3 items-center hover:bg-yellow-400/5 transition cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-full overflow-hidden ring-2 ${
                  chat.online ? "ring-yellow-400" : "ring-neutral-700"
                }`}>
                  <img src={chat.img} alt={chat.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{chat.name}</span>
                    {chat.online && (
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></span>
                    )}
                  </div>
                  <p className="text-sm text-neutral-400 truncate">{chat.last}</p>
                </div>
              </div>
            ))}
          </aside>
          <section className="flex-1 flex flex-col">
            <div className="h-14 px-5 flex items-center gap-3 border-b border-yellow-400/10 bg-black/30 backdrop-blur-md">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-yellow-400">
                <img src={heisenberg.img} alt={heisenberg.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-medium">{heisenberg.name}</div>
                <div className="text-xs text-yellow-400">Online</div>
              </div>
            </div>
            <div className="flex-1 p-5 space-y-4 overflow-y-auto bg-gradient-to-b from-black/40 to-neutral-950/60">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.me ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-xs px-4 py-2 rounded-2xl text-sm backdrop-blur-xl
                    ${msg.me
                      ? "bg-gradient-to-r from-yellow-300/90 to-amber-400/90 text-black rounded-br-md shadow-[0_0_25px_rgba(234,179,8,0.35)]"
                      : "bg-neutral-800/70 text-neutral-200 rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-yellow-400/10 bg-black/40 backdrop-blur-xl">
              <div className="flex items-center gap-2 rounded-full px-4 py-2 bg-neutral-900/70 backdrop-blur-md focus-within:ring-1 focus-within:ring-yellow-400/60">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Message Heisenberg..."
                  className="flex-1 bg-transparent focus:outline-none text-sm text-neutral-200 placeholder-neutral-500"
                />
                <button
                  onClick={sendMessage}
                  className="px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 text-black font-semibold active:scale-95"
                >
                  Send
                </button>
              </div>
            </div>

          </section>
        </div>
      </main>
      <nav className="h-16 bg-black/50 backdrop-blur-xl border-t border-yellow-400/10 flex justify-around items-center">
        {navItems.map((item) => (
          <div key={item.id} className="relative group">
            <button
              onClick={() => setActiveTab(item.id)}
              className={`text-xl transition-all duration-300 ${
                activeTab === item.id
                  ? "text-yellow-400 scale-110 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]"
                  : "text-neutral-500 hover:text-yellow-400"
              }`}
            >
              {item.icon}
            </button>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-yellow-400 text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 border border-yellow-400/20">
              {item.label}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
