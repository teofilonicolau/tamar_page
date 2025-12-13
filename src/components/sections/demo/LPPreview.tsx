import { motion } from 'framer-motion';

export function LPPreview() {
    return (
        <div className="w-full h-full bg-slate-50 relative overflow-hidden flex flex-col">
            {/* Fake Header */}
            <div className="h-12 bg-white border-b flex items-center justify-between px-4 shrink-0">
                <div className="w-20 h-4 bg-slate-200 rounded animate-pulse" />
                <div className="flex gap-2">
                    <div className="w-16 h-4 bg-slate-200 rounded" />
                    <div className="w-16 h-4 bg-slate-200 rounded" />
                </div>
            </div>

            {/* Scrollable Content */}
            <motion.div
                className="flex-1 overflow-hidden relative"
                initial={{ y: 0 }}
                animate={{ y: [0, -200, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                {/* Hero Mockup */}
                <div className="h-[300px] bg-brand-navy flex items-center justify-center text-white p-8 space-y-4 flex-col text-center">
                    <div className="w-64 h-8 bg-white/20 rounded mx-auto" />
                    <div className="w-96 h-4 bg-white/10 rounded mx-auto" />
                    <div className="w-32 h-10 bg-brand-gold rounded mx-auto mt-4" />
                </div>
                {/* Features Mockup */}
                <div className="p-8 grid grid-cols-3 gap-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-40 bg-white rounded-lg border p-4 space-y-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full" />
                            <div className="w-full h-4 bg-slate-100 rounded" />
                            <div className="w-2/3 h-4 bg-slate-100 rounded" />
                        </div>
                    ))}
                </div>
                {/* Another Section */}
                <div className="h-[200px] bg-slate-100 p-8 flex items-center gap-8">
                    <div className="w-1/2 h-full bg-slate-200 rounded" />
                    <div className="w-1/2 space-y-4">
                        <div className="w-full h-4 bg-slate-300 rounded" />
                        <div className="w-full h-4 bg-slate-300 rounded" />
                        <div className="w-1/2 h-4 bg-slate-300 rounded" />
                    </div>
                </div>
            </motion.div>

            {/* Floating CTA in mockup */}
            <div className="absolute bottom-4 right-4 bg-green-500 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white">
                <div className="w-6 h-6 bg-white/50 rounded-full" />
            </div>
        </div>
    );
}
