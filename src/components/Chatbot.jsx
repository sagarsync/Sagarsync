

export default function Chatbot({
  chatOpen,
  toggleChatbot,
  chatMessages,
  chatInput,
  setChatInput,
  isTyping,
  sendUserMessage,
  handleChatKeyPress,
  chatMessagesEndRef
}) {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Launcher Button */}
      <button 
        id="chatbot-launcher" 
        onClick={toggleChatbot}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-forest hover:bg-forestDark text-pebble rounded-full flex items-center justify-center shadow-2xl transition-transform active:scale-90 border border-sage/40 cursor-pointer"
        aria-label="Open Chatbot"
      >
        <i className={`fas ${chatOpen ? 'fa-times' : 'fa-comment-dots'} text-lg sm:text-xl`}></i>
      </button>

      {/* Chat Window */}
      {chatOpen && (
        <div 
          id="chatbot-window"
          className="fixed sm:absolute bottom-20 right-4 sm:right-0 w-[calc(100vw-2rem)] sm:w-[380px] h-[450px] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-pebble flex flex-col overflow-hidden max-w-sm transition-all duration-300 text-left"
        >
          {/* Header */}
          <div className="bg-forest text-pebble px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-sage rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/Sagar%20Sync.png" 
                  alt="SB" 
                  className="w-full h-full object-cover scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h4 className="font-extrabold text-xs">SyncBot</h4>
              </div>
            </div>
            <button 
              onClick={toggleChatbot} 
              className="text-mintGrey hover:text-white p-1 rounded-full hover:bg-forestDark cursor-pointer" 
              aria-label="Close chatbot"
            >
              <i className="fas fa-times text-sm"></i>
            </button>
          </div>

          {/* Scrollable Messages Area */}
          <div className="flex-grow p-4 overflow-y-auto space-y-3 custom-scrollbar bg-pebbleLight">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex items-start space-x-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 bg-sage rounded-full flex items-center justify-center overflow-hidden shrink-0 mt-1">
                    <img 
                      src="/Sagar%20Sync.png" 
                      alt="SB" 
                      className="w-full h-full object-cover scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div 
                  className={`${
                    msg.sender === 'user' ? 'bg-forest text-pebble' : 'bg-white text-forest shadow-sm'
                  } text-[11px] sm:text-xs p-3 rounded-xl max-w-[85%] leading-relaxed`}
                >
                  <span 
                    dangerouslySetInnerHTML={{ 
                      __html: msg.text
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n/g, '<br />') 
                    }} 
                  />
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-start space-x-2 justify-start">
                <div className="w-6 h-6 bg-sage rounded-full flex items-center justify-center overflow-hidden shrink-0 mt-1">
                  <img 
                    src="/Sagar%20Sync.png" 
                    alt="SB" 
                    className="w-full h-full object-cover scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="bg-white text-slateTeal text-xs p-3 rounded-xl shadow-sm max-w-[85%] flex items-center space-x-1">
                  <span className="animate-bounce inline-block w-1 h-1 bg-slateTeal rounded-full"></span>
                  <span className="animate-bounce inline-block w-1.5 h-1.5 bg-slateTeal rounded-full" style={{ animationDelay: '0.15s' }}></span>
                  <span className="animate-bounce inline-block w-1 h-1 bg-slateTeal rounded-full" style={{ animationDelay: '0.3s' }}></span>
                </div>
              </div>
            )}
            
            <div ref={chatMessagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-1.5 bg-white flex flex-wrap gap-1 border-t border-pebble">
            <button 
              onClick={() => sendUserMessage('What bundles do you offer?')}
              className="text-[9px] bg-pebble hover:bg-sage/15 text-forest px-2 py-1 rounded-full transition-colors font-semibold cursor-pointer"
            >
              Bundles Info
            </button>
            <button 
              onClick={() => sendUserMessage('Who is in the Sagar Sync team?')}
              className="text-[9px] bg-pebble hover:bg-sage/15 text-forest px-2 py-1 rounded-full transition-colors font-semibold cursor-pointer"
            >
              Team Profiles
            </button>
            <button 
              onClick={() => sendUserMessage('Tell me about pricing')}
              className="text-[9px] bg-pebble hover:bg-sage/15 text-forest px-2 py-1 rounded-full transition-colors font-semibold cursor-pointer"
            >
              Pricing
            </button>
          </div>

          {/* Input Box Area */}
          <div className="p-2 bg-white border-t border-pebble flex items-center space-x-2">
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={handleChatKeyPress}
              className="flex-grow px-3 py-2.5 rounded-xl border border-pebble text-xs focus:ring-1 focus:ring-sage focus:outline-none text-forest bg-white"
              placeholder="Type a message or tap chips above..."
            />
            <button 
              onClick={() => sendUserMessage()}
              className="bg-forest hover:bg-forestDark text-pebble w-9 h-9 rounded-xl flex items-center justify-center shrink-0 active:scale-95 transition-colors cursor-pointer"
            >
              <i className="fas fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
