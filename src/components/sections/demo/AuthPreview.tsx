import { motion } from 'framer-motion';
import { Bot, MessageSquare, CheckCircle2 } from 'lucide-react';

export function AuthPreview() {
    return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
            {/* Connection Lines (Simulated SVG or divs) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                    d="M 200 150 L 400 150 L 400 250"
                    fill="none"
                    stroke="#C9A94A"
                    strokeWidth="2"
                    strokeDasharray="10 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </svg>

            <div className="relative z-10 grid grid-cols-3 gap-12 items-center">
                {/* Step 1: Input */}
                <motion.div
                    className="w-24 h-24 bg-slate-800 rounded-xl flex flex-col items-center justify-center border border-slate-700 shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <MessageSquare className="text-blue-400 mb-2" />
                    <span className="text-xs text-slate-400 text-center">Cliente<br />Manda Oi</span>
                </motion.div>

                {/* Step 2: Processing */}
                <motion.div
                    className="w-32 h-32 bg-brand-navy rounded-full flex flex-col items-center justify-center border-2 border-brand-gold shadow-[0_0_30px_rgba(201,169,74,0.3)]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <Bot size={40} className="text-brand-gold" />
                </motion.div>

                {/* Step 3: Action */}
                <motion.div
                    className="w-24 h-24 bg-slate-800 rounded-xl flex flex-col items-center justify-center border border-slate-700 shadow-lg"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                    <CheckCircle2 className="text-green-400 mb-2" />
                    <span className="text-xs text-slate-400 text-center">Agendamento<br />Realizado</span>
                </motion.div>
            </div>

            {/* Floating particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-brand-gold rounded-full"
                    initial={{ x: 100, y: 150, opacity: 0 }}
                    animate={{
                        x: 600,
                        y: Math.random() * 300,
                        opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                />
            ))}
        </div>
    );
}
