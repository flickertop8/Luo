import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  Search,
  Send,
  Smile,
  Mic,
  Gift,
  MoreVertical,
  CheckCheck,
  Users,
  MessageSquare,
  Globe,
  Flame,
  Volume2,
  Share2,
} from 'lucide-react';
import { RealisticAvatar, PlayerId } from '../game/RealisticAvatar';
import { soundManager } from '../../utils/sound';

export type ChatTab = 'room' | 'friends' | 'clan' | 'world';

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  avatarId?: PlayerId;
  avatarUrl?: string;
  text?: string;
  emoji?: string;
  gift?: { name: string; icon: string };
  roomInvite?: { roomId: string; mode: string; fee: string };
  timestamp: string;
  isMe: boolean;
}

export interface FriendContact {
  id: string;
  name: string;
  avatarId: PlayerId;
  status: 'online' | 'in-game' | 'offline';
  lastMessage: string;
  time: string;
  unreadCount?: number;
  level: number;
}

interface ChatScreenProps {
  onBack: () => void;
  roomId?: string;
  initialTab?: ChatTab;
}

const DEFAULT_FRIENDS: FriendContact[] = [
  { id: 'p2', name: 'Rohit Gamer', avatarId: 'p2', status: 'online', lastMessage: 'Bro, rematch in Classic mode?', time: 'Just now', unreadCount: 2, level: 95 },
  { id: 'p3', name: 'Nisha Playz', avatarId: 'p3', status: 'in-game', lastMessage: 'GG! That 6 on the last turn was insane! 🔥', time: '5m ago', level: 91 },
  { id: 'p4', name: 'Queen Riya', avatarId: 'p4', status: 'online', lastMessage: 'Send me a room code when you are free', time: '12m ago', level: 81 },
  { id: 'p5', name: 'Sk Sabir', avatarId: 'p2', status: 'offline', lastMessage: 'Thanks for the gift! 🌹', time: '2h ago', level: 88 },
];

const INITIAL_ROOM_MESSAGES: ChatMessage[] = [
  { id: 'm1', senderId: 'p2', senderName: 'Player 2', avatarId: 'p2', text: 'Hey all! Best of luck! 🎲', timestamp: '12:01', isMe: false },
  { id: 'm2', senderId: 'p3', senderName: 'Player 3', avatarId: 'p3', text: 'May the dice be with us! ✨', timestamp: '12:02', isMe: false },
  { id: 'm3', senderId: 'p1', senderName: 'Player 1 (You)', avatarId: 'p1', text: 'Good luck! Roll fast! 🚀', timestamp: '12:02', isMe: true },
  { id: 'm4', senderId: 'p4', senderName: 'Player 4', avatarId: 'p4', emoji: '😎', timestamp: '12:03', isMe: false },
  { id: 'm5', senderId: 'p2', senderName: 'Player 2', avatarId: 'p2', text: 'Please spare my token at star cell! 🥺', timestamp: '12:04', isMe: false },
];

const QUICK_TAUNTS = [
  'Hurry up! ⏰',
  'Well played! 👏',
  'Nice roll! 🎲',
  'Don’t kill my token! 🥺',
  'Good Game! 👑',
  'Double 6 incoming! 🔥',
  'Haha nice try! 😂',
  'I am coming for you! ⚔️',
];

const EMOJI_LIST = ['😂', '🔥', '👑', '🎲', '❤️', '😭', '😎', '💣', '🚀', '🥳', '😡', '👏', '🏆', '🎯', '✨', '🌹'];

export const ChatScreen: React.FC<ChatScreenProps> = ({
  onBack,
  roomId = '786532',
  initialTab = 'room',
}) => {
  const [activeTab, setActiveTab] = useState<ChatTab>(initialTab);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_ROOM_MESSAGES);
  const [inputMsg, setInputMsg] = useState('');
  const [selectedFriend, setSelectedFriend] = useState<FriendContact | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (textToSend?: string, emojiToSend?: string) => {
    const text = textToSend || inputMsg;
    if (!text.trim() && !emojiToSend) return;

    soundManager.playClick();

    const newMsg: ChatMessage = {
      id: `msg_${Date.now()}`,
      senderId: 'p1',
      senderName: 'You',
      avatarId: 'p1',
      text: text.trim() ? text : undefined,
      emoji: emojiToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputMsg('');
    setShowEmojiPicker(false);

    // Simulate smart auto-reply from opponents after 1.5s
    setTimeout(() => {
      const replies = [
        'Haha let’s see! 🎲',
        'Watch this roll! 😎',
        'Nice one!',
        'No mercy on the track! ⚔️',
        'GG bro! 👏',
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      const botMsg: ChatMessage = {
        id: `bot_${Date.now()}`,
        senderId: 'p2',
        senderName: selectedFriend ? selectedFriend.name : 'Player 2',
        avatarId: selectedFriend ? selectedFriend.avatarId : 'p2',
        text: randomReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: false,
      };
      setMessages((prev) => [...prev, botMsg]);
      soundManager.playBadge();
    }, 1200);
  };

  const handleSendRoomInvite = () => {
    soundManager.playCoin();
    const inviteMsg: ChatMessage = {
      id: `inv_${Date.now()}`,
      senderId: 'p1',
      senderName: 'You',
      avatarId: 'p1',
      roomInvite: { roomId, mode: 'Classic 4 Players', fee: '5,000 Coins' },
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
    };
    setMessages((prev) => [...prev, inviteMsg]);
  };

  return (
    <div className="relative flex flex-col w-full h-full bg-[#051438] text-white select-none overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600 blur-3xl rounded-full" />
      </div>

      {/* Top Header Bar */}
      <div className="relative z-20 flex items-center justify-between px-3 py-2.5 bg-gradient-to-r from-[#071d52] via-[#0b2b78] to-[#071d52] border-b border-blue-400/40 shadow-md">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => {
              soundManager.playClick();
              if (selectedFriend) {
                setSelectedFriend(null);
              } else {
                onBack();
              }
            }}
            className="w-9 h-9 rounded-xl bg-gradient-to-b from-[#1d4ed8] to-[#0f172a] border border-blue-400 flex items-center justify-center active:scale-95 transition-transform"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5 text-amber-300 stroke-[2.5]" />
          </button>

          {selectedFriend ? (
            <div className="flex items-center gap-2">
              <div className="relative">
                <RealisticAvatar playerId={selectedFriend.avatarId} size={36} />
                <div
                  className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#071d52] ${
                    selectedFriend.status === 'online'
                      ? 'bg-emerald-400'
                      : selectedFriend.status === 'in-game'
                      ? 'bg-amber-400'
                      : 'bg-slate-500'
                  }`}
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-black text-sm text-white">{selectedFriend.name}</span>
                <span className="text-[10px] text-emerald-400 font-bold capitalize">
                  {selectedFriend.status === 'in-game' ? 'Playing Ludo Match' : selectedFriend.status}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col leading-tight">
              <h2 className="font-black text-base text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500 uppercase tracking-wide">
                LUDO CHAT HUB
              </h2>
              <span className="text-[10px] text-cyan-300 font-bold">
                Room #{roomId} • Match In-Progress
              </span>
            </div>
          )}
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleSendRoomInvite}
            className="px-2.5 py-1 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs flex items-center gap-1 shadow-md hover:brightness-110 active:scale-95"
            title="Share Room Invite"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Invite</span>
          </button>
        </div>
      </div>

      {/* 4 Navigation Tabs (Room, Friends, Clan, World) - only if not in private friend chat */}
      {!selectedFriend && (
        <div className="relative z-10 grid grid-cols-4 gap-1 p-1.5 bg-[#040f2b] border-b border-blue-500/20">
          <button
            onClick={() => {
              soundManager.playClick();
              setActiveTab('room');
            }}
            className={`py-1.5 px-1 rounded-xl font-black text-xs flex items-center justify-center gap-1 transition-all ${
              activeTab === 'room'
                ? 'bg-gradient-to-b from-amber-400 to-amber-600 text-slate-950 shadow-md'
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Room</span>
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              setActiveTab('friends');
            }}
            className={`py-1.5 px-1 rounded-xl font-black text-xs flex items-center justify-center gap-1 transition-all relative ${
              activeTab === 'friends'
                ? 'bg-gradient-to-b from-amber-400 to-amber-600 text-slate-950 shadow-md'
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Friends</span>
            <div className="w-2 h-2 rounded-full bg-rose-500 -mt-2 -mr-1" />
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              setActiveTab('clan');
            }}
            className={`py-1.5 px-1 rounded-xl font-black text-xs flex items-center justify-center gap-1 transition-all ${
              activeTab === 'clan'
                ? 'bg-gradient-to-b from-amber-400 to-amber-600 text-slate-950 shadow-md'
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Clan</span>
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              setActiveTab('world');
            }}
            className={`py-1.5 px-1 rounded-xl font-black text-xs flex items-center justify-center gap-1 transition-all ${
              activeTab === 'world'
                ? 'bg-gradient-to-b from-amber-400 to-amber-600 text-slate-950 shadow-md'
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>World</span>
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
        {/* If viewing Friends list tab and haven't clicked a friend */}
        {activeTab === 'friends' && !selectedFriend ? (
          <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
            {/* Search Box */}
            <div className="relative mb-2">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search friends or player ID..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[#030d24] border border-blue-400/40 text-xs text-white placeholder-slate-400 focus:outline-hidden focus:border-amber-400"
              />
            </div>

            {DEFAULT_FRIENDS.filter((f) => f.name.toLowerCase().includes(searchQuery.toLowerCase())).map((f) => (
              <div
                key={f.id}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedFriend(f);
                }}
                className="cursor-pointer p-2.5 rounded-2xl bg-gradient-to-r from-[#091f54] to-[#040f2b] border border-blue-400/30 hover:border-amber-400 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <RealisticAvatar playerId={f.avatarId} size={44} />
                    <div
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#091f54] ${
                        f.status === 'online'
                          ? 'bg-emerald-400'
                          : f.status === 'in-game'
                          ? 'bg-amber-400'
                          : 'bg-slate-500'
                      }`}
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-sm text-white">{f.name}</span>
                      <span className="px-1.5 py-0.2 rounded-full bg-blue-900 border border-blue-400 text-[9px] font-bold text-amber-200">
                        Lv. {f.level}
                      </span>
                    </div>
                    <span className="text-xs text-slate-300 truncate max-w-[180px]">
                      {f.lastMessage}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] text-slate-400">{f.time}</span>
                  {f.unreadCount && (
                    <span className="px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px]">
                      {f.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Live Chat Messages Feed (Room, Direct Message, Clan, or World) */
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {/* Top Room Banner Notice */}
            <div className="text-center my-1">
              <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-400/30 text-[10px] font-bold text-slate-300">
                🔒 Safe Match Chat • Please follow fair play rules
              </span>
            </div>

            {messages.map((m) => {
              return (
                <div
                  key={m.id}
                  className={`flex items-end gap-2 ${m.isMe ? 'justify-end' : 'justify-start'}`}
                >
                  {/* Left Avatar for other players */}
                  {!m.isMe && (
                    <div className="shrink-0 mb-1">
                      {m.avatarId ? (
                        <RealisticAvatar playerId={m.avatarId} size={32} />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center text-xs font-bold">
                          {m.senderName[0]}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[78%] rounded-2xl px-3 py-2 shadow-md ${
                      m.isMe
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-br-xs border border-blue-300/40'
                        : 'bg-gradient-to-r from-[#0c235a] to-[#08173e] text-slate-100 rounded-bl-xs border border-cyan-400/30'
                    }`}
                  >
                    {!m.isMe && (
                      <span className="block text-[10px] font-black text-amber-300 mb-0.5">
                        {m.senderName}
                      </span>
                    )}

                    {/* Room Invite Card */}
                    {m.roomInvite && (
                      <div className="p-2.5 rounded-xl bg-[#040e29] border border-amber-400/60 my-1">
                        <span className="text-[10px] font-bold text-amber-300 block uppercase">
                          ⚔️ Ludo Match Invitation
                        </span>
                        <h4 className="font-black text-sm text-white mt-0.5">
                          {m.roomInvite.mode}
                        </h4>
                        <div className="flex items-center justify-between text-xs mt-1 text-slate-300">
                          <span>Room: #{m.roomInvite.roomId}</span>
                          <span className="font-bold text-emerald-400">{m.roomInvite.fee}</span>
                        </div>
                        <button
                          onClick={() => {
                            soundManager.playRoll();
                            onBack();
                          }}
                          className="w-full mt-2 py-1 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-slate-950 font-black text-xs hover:brightness-110 active:scale-95"
                        >
                          JOIN MATCH
                        </button>
                      </div>
                    )}

                    {/* Emoji */}
                    {m.emoji && <span className="text-3xl block my-0.5">{m.emoji}</span>}

                    {/* Text */}
                    {m.text && <p className="text-xs sm:text-sm leading-relaxed">{m.text}</p>}

                    {/* Timestamp & Seen checkmark */}
                    <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-300/80">
                      <span>{m.timestamp}</span>
                      {m.isMe && <CheckCheck className="w-3 h-3 text-cyan-300" />}
                    </div>
                  </div>

                  {/* Right Avatar for Me */}
                  {m.isMe && (
                    <div className="shrink-0 mb-1">
                      <RealisticAvatar playerId="p1" size={32} />
                    </div>
                  )}
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Quick Taunts / Phrases Horizontal Reel */}
      <div className="relative z-10 px-2 py-1.5 bg-[#030c24] border-t border-blue-500/20 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {QUICK_TAUNTS.map((taunt) => (
          <button
            key={taunt}
            onClick={() => handleSendMessage(taunt)}
            className="shrink-0 px-2.5 py-1 rounded-full bg-[#0a1b47] hover:bg-blue-600/50 border border-blue-400/40 text-xs font-bold text-slate-200 active:scale-95 transition-all truncate"
          >
            {taunt}
          </button>
        ))}
      </div>

      {/* Floating Emoji Picker Drawer */}
      {showEmojiPicker && (
        <div className="relative z-20 p-2 bg-[#02091c] border-t border-amber-400/40 grid grid-cols-8 gap-2 animate-in slide-in-from-bottom-2 duration-150">
          {EMOJI_LIST.map((emoji) => (
            <button
              key={emoji}
              onClick={() => handleSendMessage(undefined, emoji)}
              className="w-9 h-9 rounded-xl bg-blue-950/70 border border-blue-400/30 text-xl flex items-center justify-center hover:scale-110 active:scale-90 transition-transform"
            >
              {emoji}
            </button>
          ))}
        </div>
      )}

      {/* Input Action Bar */}
      <div className="relative z-20 px-2.5 py-2 bg-[#06163d] border-t border-blue-400/30 flex items-center gap-2">
        {/* Emoji Toggle Button */}
        <button
          onClick={() => {
            soundManager.playClick();
            setShowEmojiPicker(!showEmojiPicker);
          }}
          className={`p-2 rounded-xl border transition-all ${
            showEmojiPicker
              ? 'bg-amber-400 text-slate-950 border-amber-300'
              : 'bg-[#092054] text-slate-300 border-blue-400/40 hover:text-white'
          }`}
          title="Emojis"
        >
          <Smile className="w-5 h-5" />
        </button>

        {/* Text Input */}
        <input
          type="text"
          value={inputMsg}
          onChange={(e) => setInputMsg(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type message in match..."
          className="flex-1 px-3.5 py-2 rounded-xl bg-[#030d24] border border-blue-400/50 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-hidden focus:border-amber-400 transition-colors"
          maxLength={60}
        />

        {/* Send Button */}
        <button
          onClick={() => handleSendMessage()}
          disabled={!inputMsg.trim()}
          className={`p-2.5 rounded-xl font-black text-xs flex items-center justify-center transition-all ${
            inputMsg.trim()
              ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-md hover:brightness-110 active:scale-95'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
          title="Send"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
