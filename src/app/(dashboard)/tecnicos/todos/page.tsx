"use client";

import { useState, useMemo } from "react";
import { HiMagnifyingGlass, HiAdjustmentsHorizontal, HiArrowLeft, HiPaperAirplane } from "react-icons/hi2";
import { Card } from "@/components/molecules/Card";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Pagination } from "@/components/molecules/Pagination";

const TOTAL_PAGES = 10;

const MOCK_TECNICOS = [
  { id: 1, nombre: "Carlos", apellido: "García", profesion: "Electricista", correo: "carlos.garcia@mail.com" },
  { id: 2, nombre: "María", apellido: "López", profesion: "Plomera", correo: "maria.lopez@mail.com" },
  { id: 3, nombre: "Juan", apellido: "Martínez", profesion: "Técnico HVAC", correo: "juan.martinez@mail.com" },
  { id: 4, nombre: "Ana", apellido: "Rodríguez", profesion: "Electricista", correo: "ana.rodriguez@mail.com" },
  { id: 5, nombre: "Pedro", apellido: "Sánchez", profesion: "Reparador", correo: "pedro.sanchez@mail.com" },
  { id: 6, nombre: "Laura", apellido: "Fernández", profesion: "Técnico general", correo: "laura.fernandez@mail.com" },
];

const MOCK_CHATS = [
  { id: "1", name: "Chatgram", lastMessage: "Chatgram Web was updated.", time: "19:48", unread: 0 },
  { id: "2", name: "Jessica Drew", lastMessage: "Ok, see you later", time: "18:30", unread: 1 },
  { id: "3", name: "David Moore", lastMessage: "Thanks!", time: "17:15", unread: 2 },
  { id: "4", name: "Soporte ReparameYa", lastMessage: "Tu orden fue asignada.", time: "16:00", unread: 0 },
];

const MOCK_MESSAGES: Record<string, { text: string; isOwn: boolean; time: string }[]> = {
  "1": [
    { text: "Hola, ¿cómo va el servicio?", isOwn: false, time: "19:45" },
    { text: "Todo bien, ya está actualizado.", isOwn: true, time: "19:46" },
    { text: "Chatgram Web was updated.", isOwn: false, time: "19:48" },
  ],
  "2": [
    { text: "¿Quedamos a las 18:00?", isOwn: true, time: "18:25" },
    { text: "Ok, see you later", isOwn: false, time: "18:30" },
  ],
  "3": [
    { text: "Gracias por el trabajo.", isOwn: false, time: "17:10" },
    { text: "Thanks!", isOwn: true, time: "17:15" },
  ],
  "4": [
    { text: "Tu orden #4521 fue asignada a un técnico.", isOwn: false, time: "16:00" },
  ],
};

export default function TecnicosTodosPage() {
  const [chatVisible, setChatVisible] = useState(true);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [messageDraft, setMessageDraft] = useState("");
  const [messagesByChat, setMessagesByChat] = useState<Record<string, { text: string; isOwn: boolean; time: string }[]>>(MOCK_MESSAGES);
  const [search, setSearch] = useState("");

  const selectedChat = selectedChatId ? MOCK_CHATS.find((c) => c.id === selectedChatId) : null;
  const currentMessages = selectedChatId ? (messagesByChat[selectedChatId] ?? []) : [];

  const handleSendMessage = () => {
    if (!selectedChatId || !messageDraft.trim()) return;
    const time = new Date().toLocaleTimeString("es", { hour: "2-digit", minute: "2-digit" });
    setMessagesByChat((prev) => ({
      ...prev,
      [selectedChatId]: [...(prev[selectedChatId] ?? []), { text: messageDraft.trim(), isOwn: true, time }],
    }));
    setMessageDraft("");
  };

  const filteredTecnicos = useMemo(() => {
    if (!search.trim()) return MOCK_TECNICOS;
    const q = search.toLowerCase();
    return MOCK_TECNICOS.filter(
      (t) =>
        t.nombre.toLowerCase().includes(q) ||
        t.apellido.toLowerCase().includes(q) ||
        t.correo.toLowerCase().includes(q) ||
        t.profesion.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="flex lg:flex-row flex-col gap-4 lg:gap-6 h-full min-h-0">
      {/* Contenido principal: stats + búsqueda + tabla */}
      <div
        className="flex flex-col flex-1 gap-4 min-w-0 transition-all duration-300 ease-out"
        style={{ transitionProperty: "flex, min-width" }}
      >
        <h1 className="font-semibold text-gray-900 text-xl sm:text-2xl">Técnicos</h1>

        {/* Tarjetas de resumen */}
        <div className="gap-3 grid grid-cols-1 sm:grid-cols-3">
          <Card className="p-4">
            <p className="font-medium text-gray-500 text-sm">Total de técnicos</p>
            <p className="mt-1 font-bold text-[#0046FD] text-2xl sm:text-3xl">7,265</p>
          </Card>
          <Card className="p-4">
            <p className="font-medium text-gray-500 text-sm">Activos actualmente</p>
            <p className="mt-1 font-bold text-green-600 text-2xl sm:text-3xl">7,255</p>
          </Card>
          <Card className="p-4">
            <p className="font-medium text-gray-500 text-sm">Inactivos</p>
            <p className="mt-1 font-bold text-red-600 text-2xl sm:text-3xl">10</p>
          </Card>
        </div>

        {/* Búsqueda */}
        <div className="relative">
          <HiMagnifyingGlass className="top-1/2 left-3 absolute size-5 text-gray-400 -translate-y-1/2" />
          <Input
            type="search"
            placeholder="Buscar un técnico"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pr-10 pl-10"
          />
          <button
            type="button"
            className="top-1/2 right-3 absolute text-gray-400 hover:text-gray-600 -translate-y-1/2"
            aria-label="Filtros"
          >
            <HiAdjustmentsHorizontal className="size-5" />
          </button>
        </div>

        {/* Tabla */}
        <Card className="flex flex-col flex-1 p-0 min-h-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm text-left">
              <thead>
                <tr className="bg-gray-50/80 border-gray-200 border-b">
                  <th className="px-4 py-3 font-semibold text-gray-700">ID</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Nombre</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Apellido</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Profesión</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Correo</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Acción</th>
                </tr>
              </thead>
              <tbody>
                {filteredTecnicos.map((t, i) => (
                  <tr
                    key={t.id}
                    className={`border-b border-gray-100 transition-colors hover:bg-gray-50/50 ${
                      i % 2 === 1 ? "bg-gray-50/30" : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-gray-600">{t.id}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{t.nombre}</td>
                    <td className="px-4 py-3 text-gray-700">{t.apellido}</td>
                    <td className="px-4 py-3 text-gray-700">{t.profesion}</td>
                    <td className="px-4 py-3 text-gray-600">{t.correo}</td>
                    <td className="px-4 py-3">
                      <Button
                        variant="outline"
                        className="text-xs"
                        onClick={() => setChatVisible(true)}
                      >
                        Ver perfil
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-3 border-gray-200 border-t">
            <Pagination totalPages={TOTAL_PAGES} />
          </div>
        </Card>
      </div>

      {/* Panel de chat: colapsable con animación suave; en móvil colapsa altura, en lg el ancho */}
      <div
        className="flex flex-col bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden transition-[width,opacity,max-height] duration-300 ease-out shrink-0"
        style={{
          width: chatVisible ? "min(100%, 20rem)" : "0",
          minWidth: chatVisible ? undefined : 0,
          opacity: chatVisible ? 1 : 0,
          maxHeight: chatVisible ? "90vh" : "0",
        }}
      >
        <div className="flex flex-col w-full min-w-[280px] lg:min-w-[320px] h-full">
          <div className="flex justify-between items-center gap-2 p-3 border-gray-200 border-b shrink-0">
            {selectedChat ? (
              <>
                <button
                  type="button"
                  onClick={() => {
                      setSelectedChatId(null);
                      setMessageDraft("");
                    }}
                  className="flex items-center gap-1.5 hover:bg-gray-100 p-1.5 rounded-lg text-gray-600 hover:text-gray-900"
                  aria-label="Volver a la lista"
                >
                  <HiArrowLeft className="size-5" />
                </button>
                <span className="flex-1 min-w-0 font-semibold text-gray-900 text-sm truncate">
                  {selectedChat.name}
                </span>
              </>
            ) : (
              <h2 className="flex-1 min-w-0 font-semibold text-gray-900 text-lg truncate">Chat Técnicos</h2>
            )}
            <Button
              variant="ghost"
              onClick={() => setChatVisible(false)}
              className="py-1.5! text-gray-900 text-xs! shrink-0"
            >
              Ocultar &rarr;|
            </Button>
          </div>

          <div className="flex flex-col flex-1 min-h-0">
            {selectedChat ? (
              <>
                <div className="flex-1 p-3 overflow-y-auto">
                  <div className="space-y-3">
                    {currentMessages.map((msg, i) => (
                      <div
                        key={`${msg.time}-${i}`}
                        className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                            msg.isOwn
                              ? "bg-(--color-accent) text-white"
                              : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                          <p className={`mt-0.5 text-xs ${msg.isOwn ? "text-blue-900" : "text-gray-500"}`}>
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-3 border-gray-200 border-t shrink-0">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                    className="flex gap-2"
                  >
                    <Input
                      value={messageDraft}
                      onChange={(e) => setMessageDraft(e.target.value)}
                      placeholder="Escribe un mensaje..."
                      className="flex-1"
                    />
                    <Button type="submit" disabled={!messageDraft.trim()} className="px-3 shrink-0">
                      <HiPaperAirplane className="size-5" aria-hidden />
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <ul className="flex flex-col flex-1 p-2 overflow-y-auto">
                {MOCK_CHATS.map((chat) => (
                  <li key={chat.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedChatId(chat.id);
                        setMessageDraft("");
                      }}
                      className={`flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors hover:bg-gray-100 ${
                        selectedChatId === chat.id ? "bg-blue-50" : ""
                      }`}
                    >
                      <div className="flex justify-center items-center bg-[#0048fdf6] rounded-full size-10 font-medium text-[#ffffff] shrink-0">
                        {chat.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{chat.name}</p>
                        <p className="text-gray-500 text-sm truncate">{chat.lastMessage}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className="text-gray-400 text-xs">{chat.time}</span>
                        {chat.unread > 0 && (
                          <span className="flex justify-center items-center bg-green-500 rounded-full size-5 font-medium text-white text-xs">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Botón "Abrir chat" cuando el panel está oculto */}
      {!chatVisible && (
        <div className="right-6 lg:right-8 bottom-6 lg:bottom-8 z-20 fixed">
          <Button
            type="button"
            variant="primary"
            onClick={() => setChatVisible(true)}
            className="bg-[#0046FD]! hover:bg-[#003dd9]! shadow-lg min-w-[140px] text-[#ffffff]! hover:text-white!"
          >
            Abrir chat
          </Button>
        </div>
      )}
    </div>
  );
}
