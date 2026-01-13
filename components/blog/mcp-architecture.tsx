export function MctpArchitecture() {
  return (
    <div className="my-8 p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
        {/* Claude Code */}
        <div className="flex-1 max-w-xs">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-sm font-medium opacity-80 mb-2">Client</div>
            <div className="text-2xl font-bold mb-3">Claude Code</div>
            <div className="text-sm opacity-90 space-y-1">
              <div>→ 发送请求</div>
              <div>← 接收响应</div>
            </div>
          </div>
        </div>

        {/* Arrow 1 */}
        <div className="hidden lg:flex items-center text-2xl text-slate-400">
          ←→
        </div>
        <div className="lg:hidden text-slate-400">↓↑</div>

        {/* MCP Protocol */}
        <div className="flex-1 max-w-xs">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-sm font-medium opacity-80 mb-2">Transport</div>
            <div className="text-2xl font-bold mb-3">MCP Protocol</div>
            <div className="text-sm opacity-90 space-y-1">
              <div>🔌 JSON-RPC</div>
              <div>⚡ stdio / SSE</div>
            </div>
          </div>
        </div>

        {/* Arrow 2 */}
        <div className="hidden lg:flex items-center text-2xl text-slate-400">
          ←→
        </div>
        <div className="lg:hidden text-slate-400">↓↑</div>

        {/* MCP Server */}
        <div className="flex-1 max-w-xs">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-sm font-medium opacity-80 mb-2">Your Tools</div>
            <div className="text-2xl font-bold mb-3">MCP Server</div>
            <div className="text-sm opacity-90 space-y-1">
              <div>🔧 提供工具</div>
              <div>⚙️ 执行逻辑</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
