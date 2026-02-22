'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Ring } from '@react-three/drei';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Brain, Globe, Zap, Target } from 'lucide-react';

const tools = [
  { id: 'shadowcrowd', name: 'ShadowCrowd Oracle', icon: Eye },
  { id: 'causalforge', name: 'CausalForge Engine', icon: Brain },
  { id: 'omniverse', name: 'Financial Omniverse', icon: Globe },
  { id: 'evoalpha', name: 'EvoAlpha Factory', icon: Zap },
  { id: 'liquidity', name: 'Liquidity Teleporter', icon: Target },
];

export default function Moonshot() {
  const [activeTool, setActiveTool] = useState('causalforge');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAlpha, setGeneratedAlpha] = useState(null);
  const [logs, setLogs] = useState([
    "[14:51:03] CausalForge: New causal edge validated (persistence 0.97)",
    "[14:51:06] ShadowCrowd: 79% crowding detected — anti-crowd active",
    "[14:51:09] EvoAlpha: 5,281 strategies evolved → 134 survivors",
    "[14:51:12] Omniverse: 14M counterfactuals running",
    "[14:51:15] Liquidity Teleporter: Zero-impact path for $312M order"
  ]);

  const addLog = (message) => {
    setLogs(prev => [message, ...prev].slice(0, 8));
  };

  const generateAlpha = () => {
    setIsGenerating(true);
    addLog(`[${new Date().toLocaleTimeString()}] Agent Swarm: Thinking... generating causal hypothesis`);

    setTimeout(() => {
      const hypotheses = [
        { edge: "Dark-pool flow → ETF redemption", persistence: 0.96, nodes: ["Dark Pool", "ETF Flow", "Gamma", "Vol Spike", "SPX Return"] },
        { edge: "Satellite shipping → Commodity momentum", persistence: 0.93, nodes: ["Satellite", "Shipping", "Inventory", "Oil", "Returns"] },
        { edge: "Options skew → Liquidity cascade", persistence: 0.97, nodes: ["Options Skew", "HFT Flow", "Liquidity", "Unwind", "Drawdown"] },
      ];
      const alpha = hypotheses[Math.floor(Math.random() * hypotheses.length)];

      setGeneratedAlpha(alpha);
      addLog(`[${new Date().toLocaleTimeString()}] CausalForge: Hypothesis validated → ${alpha.edge} (persistence ${alpha.persistence})`);
      addLog(`[${new Date().toLocaleTimeString()}] Persistence score: ${alpha.persistence} • Regime-robust version ready`);
      setIsGenerating(false);
    }, 1800);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-black flex flex-col relative">
      {/* Top Bar & Metrics (same beautiful as before) */}
      <div className="h-16 border-b border-cyan-500/40 flex items-center px-8 justify-between glass z-50">
        <div className="flex items-center gap-4">
          <div className="text-4xl font-bold neon-text tracking-[6px]">MOONSHOT</div>
          <Badge className="bg-emerald-500/30 text-emerald-400 border-emerald-500 px-4 py-1">LIVE • FEB 2026</Badge>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" /> 17 EXCHANGES • $1M PAPER</div>
          <div className="glass px-5 py-1.5 rounded-2xl">harrylarkin04</div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 px-8 pt-6 z-40">
        <Card className="glass text-center"><div className="text-5xl font-bold neon-text">94%</div><p className="text-xs text-cyan-400/70">PERSISTENCE</p></Card>
        <Card className="glass text-center"><div className="text-5xl font-bold neon-text text-emerald-400">+4.7%</div><p className="text-xs text-cyan-400/70">TODAY P&L</p></Card>
        <Card className="glass text-center"><div className="text-5xl font-bold neon-text text-amber-400">12%</div><p className="text-xs text-cyan-400/70">CROWD RISK</p></Card>
        <Card className="glass text-center"><div className="text-5xl font-bold neon-text">7</div><p className="text-xs text-cyan-400/70">NEW ALPHAS</p></Card>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-72 border-r border-cyan-500/30 p-6 flex flex-col glass z-40">
          <div className="uppercase tracking-[4px] text-xs text-cyan-400/70 mb-6">WEAPON SYSTEMS</div>
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <button key={tool.id} onClick={() => setActiveTool(tool.id)}
                className={`flex items-center gap-4 px-6 py-5 rounded-2xl mb-3 transition-all hover:bg-white/10 ${activeTool === tool.id ? 'bg-cyan-500/20 border border-cyan-500' : ''}`}>
                <Icon size={28} />
                <div className="font-medium text-lg">{tool.name}</div>
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-auto relative z-30">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-7xl font-bold neon-text mb-4 tracking-[-2px]">THE FUTURE IS CAUSAL</h1>
            <p className="text-2xl text-cyan-400/80 mb-8">Autonomous swarm • Real tick • Zero crowding</p>

            {/* Holographic Core */}
            <Card className="glass h-[520px] relative overflow-hidden mb-10">
              <CardHeader className="absolute top-8 left-8 z-10">
                <CardTitle className="text-3xl">CAUSAL HOLOGRAPHIC CORE <Badge variant="outline" className="text-emerald-400">REAL-TIME</Badge></CardTitle>
              </CardHeader>
              <CardContent className="absolute inset-0">
                <Canvas camera={{ position: [0, 0, 13] }}>
                  <ambientLight intensity={0.7} />
                  <pointLight position={[10, 10, 10]} color="#ff00ff" intensity={4} />
                  <pointLight position={[-10, -10, -10]} color="#00f7ff" intensity={3} />
                  <Stars radius={300} depth={70} count={15000} factor={7} fade />
                  <mesh>
                    <sphereGeometry args={[4, 128, 128]} />
                    <meshStandardMaterial color="#ff00ff" emissive="#00f7ff" emissiveIntensity={1.5} />
                  </mesh>
                  <Ring args={[5.5, 6, 64]} rotation={[1.4, 0, 0]}><meshStandardMaterial color="#00f7ff" emissive="#ff00ff" side={2} /></Ring>
                  <Ring args={[6.5, 7, 64]} rotation={[0.8, 0.6, 0]}><meshStandardMaterial color="#ff00ff" emissive="#00f7ff" side={2} /></Ring>
                  <Ring args={[7.5, 8, 64]} rotation={[2.1, 0.3, 0]}><meshStandardMaterial color="#00f7ff" emissive="#ff00ff" side={2} /></Ring>
                  <OrbitControls enablePan={false} autoRotate autoRotateSpeed={0.25} />
                </Canvas>
              </CardContent>
            </Card>

            <Tabs value={activeTool} onValueChange={setActiveTool}>
              <TabsList className="grid w-full grid-cols-5 mb-8 glass">
                {tools.map(t => <TabsTrigger key={t.id} value={t.id}>{t.name.split(' ')[0]}</TabsTrigger>)}
              </TabsList>

              {tools.map(tool => (
                <TabsContent key={tool.id} value={tool.id}>
                  <Card className="glass">
                    <CardHeader>
                      <CardTitle className="text-3xl neon-text">{tool.name} — LIVE</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {tool.id === 'causalforge' && (
                        <div>
                          <Button onClick={generateAlpha} disabled={isGenerating} size="lg" className="w-full py-8 text-xl neon-text">
                            {isGenerating ? "AGENT SWARM THINKING..." : "GENERATE NEW ALPHA"}
                          </Button>

                          {generatedAlpha && (
                            <div className="mt-8 p-8 glass rounded-3xl">
                              <div className="text-6xl font-bold neon-text mb-2">{(generatedAlpha.persistence * 100).toFixed(0)}%</div>
                              <p className="text-2xl text-cyan-400">PERSISTENCE SCORE</p>
                              <p className="text-lg mt-4">Causal edge: <span className="text-lime-400">{generatedAlpha.edge}</span></p>

                              {/* Causal DAG */}
                              <div className="mt-8 bg-black/70 p-6 rounded-2xl">
                                <p className="text-cyan-400 mb-4">CAUSAL DAG (clickable in full version)</p>
                                <svg viewBox="0 0 800 200" className="w-full h-52">
                                  {generatedAlpha.nodes.map((node, i) => (
                                    <g key={i}>
                                      <circle cx={100 + i * 150} cy="100" r="28" fill="#ff00ff" />
                                      <text x={100 + i * 150} y="105" textAnchor="middle" fill="#fff" fontSize="12">{node}</text>
                                      {i < generatedAlpha.nodes.length - 1 && (
                                        <line x1={128 + i * 150} y1="100" x2={172 + i * 150} y2="100" stroke="#00f7ff" strokeWidth="4" strokeDasharray="8 4" />
                                      )}
                                    </g>
                                  ))}
                                </svg>
                              </div>

                              <div className="flex gap-4 mt-8">
                                <Button className="flex-1">Run Omniverse Simulation</Button>
                                <Button variant="outline" className="flex-1">Evolve in EvoAlpha Factory</Button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      {tool.id !== 'causalforge' && (
                        <div className="text-center py-20 text-cyan-400/70">
                          {tool.name} coming in Phase 3 (full production integration)
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>

      {/* Agent Swarm Terminal */}
      <div className="h-60 border-t border-cyan-500/40 bg-black/95 p-6 font-mono text-sm z-50 overflow-hidden flex flex-col">
        <div className="flex items-center gap-3 mb-4 text-cyan-400/70">
          <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse" />
          AGENT SWARM TERMINAL — LIVE THOUGHTS (CausalForge + EvoAlpha + Omniverse)
        </div>
        <div className="text-lime-400 space-y-1 overflow-y-auto flex-1">
          {logs.map((log, i) => <div key={i}>{log}</div>)}
        </div>
      </div>
    </div>
  );
}
