import { motion } from 'framer-motion';

export function SitePreview() {
    return (
        <div className="w-full h-full bg-slate-100 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200">
                {/* Browser Bar */}
                <div className="h-8 bg-slate-50 border-b flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4 h-5 bg-white border rounded text-[10px] text-slate-400 flex items-center px-2">
                        tamarai.com.br
                    </div>
                </div>

                <div className="p-6 grid grid-cols-4 gap-4 h-[300px]">
                    {/* Sidebar */}
                    <motion.div
                        className="col-span-1 bg-slate-50 rounded-lg p-2 space-y-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="w-full h-8 bg-slate-200 rounded mb-4" />
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-full h-6 bg-white rounded border border-slate-100" />
                        ))}
                    </motion.div>

                    {/* Main Content */}
                    <div className="col-span-3 space-y-4">
                        <motion.div
                            className="w-full h-32 bg-blue-50 rounded-lg flex items-center justify-center"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="w-16 h-16 bg-blue-200 rounded-full" />
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                className="h-24 bg-slate-50 rounded-lg"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            />
                            <motion.div
                                className="h-24 bg-slate-50 rounded-lg"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
